

resource "aws_s3_bucket_policy" "resume_policy" {

  bucket = aws_s3_bucket.resume_site.id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [{
      Effect = "Allow"
      Principal = {
        Service = "cloudfront.amazonaws.com"
      }
      Action = "s3:GetObject"
      Resource = "${aws_s3_bucket.resume_site.arn}/*"
      Condition = {
        StringEquals = {
          "AWS:SourceArn" = aws_cloudfront_distribution.resume_cdn.arn
        }
      }
    }]
  })
}



resource "aws_cloudfront_origin_access_control" "resume_oac" {

  name = "resume-oac"

  description = "Allow CloudFront access to S3"

  origin_access_control_origin_type = "s3"

  signing_behavior = "always"

  signing_protocol = "sigv4"
}


resource "aws_cloudfront_distribution" "resume_cdn" {

  enabled = true

  default_root_object = "index.html"

  aliases = ["gabrielsmuller.dev"]

  origin {

    domain_name = aws_s3_bucket.resume_site.bucket_regional_domain_name

    origin_id = "resumeS3Origin"

    origin_access_control_id = aws_cloudfront_origin_access_control.resume_oac.id

  }

  default_cache_behavior {

    allowed_methods = ["GET", "HEAD"]

    cached_methods = ["GET", "HEAD"]

    target_origin_id = "resumeS3Origin"

    viewer_protocol_policy = "redirect-to-https"

    forwarded_values {

      query_string = false

      cookies {
        forward = "none"
      }
    }
  }

  restrictions {

    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    acm_certificate_arn      = aws_acm_certificate.resume_cert.arn
    ssl_support_method       = "sni-only"
    minimum_protocol_version = "TLSv1.2_2021"
  }

}