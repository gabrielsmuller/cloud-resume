output "api_endpoint" {

  value = aws_apigatewayv2_api.resume_api.api_endpoint
}

output "cloudfront_url" {

  value = aws_cloudfront_distribution.resume_cdn.domain_name

}
