# Terraform

This directory will provision the AWS platform.

The project intentionally starts with a modular structure so infrastructure can be created
and verified in small stages.

Before applying:
- configure AWS credentials through AWS CLI/SSO or another approved mechanism
- choose the AWS region
- configure remote state
- review all IAM permissions
- review estimated costs
