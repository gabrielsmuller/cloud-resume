resource "aws_dynamodb_table" "visitor_counter" {

  name         = "resume-visitor-counter"
  billing_mode = "PAY_PER_REQUEST"
  hash_key     = "id"

  attribute {
    name = "id"
    type = "S"
  }
}

resource "aws_dynamodb_table_item" "init_visitor_count" {
  table_name = aws_dynamodb_table.visitor_counter.name
  hash_key   = aws_dynamodb_table.visitor_counter.hash_key
  item       = jsonencode({
    id            = { S = "visitors" }
    visitor_count = { N = "0" }
  })

  lifecycle {
    ignore_changes = [item] 
  }
}