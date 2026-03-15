resource "aws_apigatewayv2_api" "resume_api" {

  name          = "resume-api"
  protocol_type = "HTTP"

  cors_configuration {

    allow_origins = ["*"]

    allow_methods = ["GET"]

    allow_headers = ["*"]

  }
}



resource "aws_apigatewayv2_integration" "lambda_integration" {

  api_id = aws_apigatewayv2_api.resume_api.id

  integration_type = "AWS_PROXY"

  integration_uri = aws_lambda_function.visitor_counter.invoke_arn

  payload_format_version = "2.0"
}


resource "aws_apigatewayv2_route" "counter_route" {

  api_id = aws_apigatewayv2_api.resume_api.id

  route_key = "GET /counter"

  target = "integrations/${aws_apigatewayv2_integration.lambda_integration.id}"
}


resource "aws_apigatewayv2_stage" "default" {

  api_id = aws_apigatewayv2_api.resume_api.id

  name = "$default"

  auto_deploy = true
}


resource "aws_lambda_permission" "api_permission" {

  statement_id  = "AllowExecutionFromAPIGateway"

  action        = "lambda:InvokeFunction"

  function_name = aws_lambda_function.visitor_counter.function_name

  principal     = "apigateway.amazonaws.com"

  source_arn = "${aws_apigatewayv2_api.resume_api.execution_arn}/*/*"
}
