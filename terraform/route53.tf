resource "aws_route53_zone" "resume_zone" {
  name = "gabrielsmuller.dev"
}


resource "aws_route53_record" "resume_dns" {
  zone_id = aws_route53_zone.resume_zone.zone_id
  name    = "gabrielsmuller.dev"
  type    = "A"

  alias {
    name                   = aws_cloudfront_distribution.resume_cdn.domain_name
    zone_id                = aws_cloudfront_distribution.resume_cdn.hosted_zone_id
    evaluate_target_health = false
  }
}

resource "aws_acm_certificate" "resume_cert" {
  domain_name               = "gabrielsmuller.dev"
  subject_alternative_names = ["www.gabrielsmuller.dev"]
  validation_method = "DNS"
}

resource "aws_route53_record" "cert_validation" {
  for_each = {
    for dvo in aws_acm_certificate.resume_cert.domain_validation_options :
    dvo.domain_name => {
      name   = dvo.resource_record_name
      record = dvo.resource_record_value
      type   = dvo.resource_record_type
    }
  }

  zone_id = aws_route53_zone.resume_zone.zone_id
  name    = each.value.name
  type    = each.value.type
  records = [each.value.record]
  ttl     = 60
}

resource "aws_acm_certificate_validation" "resume_cert_validation" {
  certificate_arn         = aws_acm_certificate.resume_cert.arn
  validation_record_fqdns = [for record in aws_route53_record.cert_validation : record.fqdn]
}