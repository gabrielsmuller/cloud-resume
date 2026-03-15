resource "aws_lambda_function" "visitor_counter" {

  function_name = "resume-visitor-counter"

  filename      = "../backend/lambda_function.zip"

  source_code_hash = filebase64sha256("../backend/lambda_function.zip")

  handler       = "lambda_function.lambda_handler"

  runtime       = "python3.11"

  role          = aws_iam_role.lambda_role.arn

  environment {
    variables = {
      TABLE_NAME = aws_dynamodb_table.visitor_counter.name
    }
  }
}
