# Security Design

- No static AWS credentials inside containers.
- Use IAM roles / EKS Pod Identity for AWS API access.
- Store secrets in Secrets Manager.
- Encrypt data at rest where appropriate with KMS.
- Keep databases and internal services private where applicable.
- Use Kubernetes ServiceAccounts with minimum permissions.
- Use explicit remediation allow-lists.
- Require approval before destructive or availability-impacting actions.
- Never allow arbitrary shell execution from the LLM.
- Add model guardrails and prompt-injection tests.
- Do not place credentials or tokens in logs.
