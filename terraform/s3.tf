resource "aws_s3_bucket" "resume_site" {

  bucket = "gabriel-muller-cloud-resume-v3"

}


resource "aws_s3_bucket_website_configuration" "resume_site_config" {

  bucket = aws_s3_bucket.resume_site.id

  index_document {
    suffix = "index.html"
  }

}

resource "aws_s3_bucket_public_access_block" "resume_site" {

  bucket = aws_s3_bucket.resume_site.id

  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}


resource "aws_s3_object" "index" {

  bucket = aws_s3_bucket.resume_site.id

  key = "index.html"

  source = "../frontend/index.html"

  content_type = "text/html"
}

resource "aws_s3_object" "css" {

  bucket = aws_s3_bucket.resume_site.id

  key = "style.css"

  source = "../frontend/style.css"

  content_type = "text/css"
}

resource "aws_s3_object" "js" {

  bucket = aws_s3_bucket.resume_site.id

  key = "script.js"

  source = "../frontend/script.js"

  content_type = "application/javascript"
}

resource "aws_s3_object" "favicon" {
  bucket = aws_s3_bucket.resume_site.id

  key    = "favicon.ico"
  source = "../frontend/favicon.ico"

  content_type = "image/x-icon"
}
