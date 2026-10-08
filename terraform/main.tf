# Initial Terraform entry point.
# We will add the reusable modules here incrementally during the guided setup.

locals {
  name_prefix = "${var.project_name}-${var.environment}"
}

resource "aws_s3_bucket" "knowledge" {
  bucket = "${local.name_prefix}-knowledge-${data.aws_caller_identity.current.account_id}"
}

resource "aws_s3_bucket_versioning" "knowledge" {
  bucket = aws_s3_bucket.knowledge.id

  versioning_configuration {
    status = "Enabled"
  }
}

data "aws_caller_identity" "current" {}

output "knowledge_bucket_name" {
  value = aws_s3_bucket.knowledge.bucket
}
