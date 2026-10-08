# AegisOps Implementation Plan

## Phase 1 — Local foundation
- Install/verify AWS CLI, Terraform, kubectl, Docker, Node.js.
- Create Git repository.
- Install dependencies.
- Run unit tests.
- Run the API locally.

## Phase 2 — Terraform
- Remote state bucket and state locking strategy.
- VPC with public/private subnets.
- ECR repositories.
- EKS cluster and managed node group.
- IAM roles and pod identity.
- CloudWatch/logging.
- S3 knowledge bucket.
- KMS and Secrets Manager where required.

## Phase 3 — Containers and EKS
- Build API, incident-engine and remediation images.
- Push images to ECR.
- Configure kubeconfig.
- Deploy namespace, service accounts, deployments and services.
- Add readiness/liveness probes, resources and HPA.

## Phase 4 — GenAI
- Upload runbooks and incident history to S3.
- Create Bedrock Knowledge Base using an AWS-supported vector store.
- Implement retrieval + grounded incident analysis.
- Add model configuration and guardrails.
- Add evaluation dataset.

## Phase 5 — Agentic operations
- Add safe operational tools for logs, metrics and Kubernetes status.
- Generate remediation plans.
- Require explicit approval for impactful actions.
- Execute only allow-listed operations.
- Verify post-remediation health.

## Phase 6 — CI/CD and production hardening
- GitHub Actions.
- Image and dependency scanning.
- Terraform fmt/validate/plan.
- Deployment smoke tests.
- CloudWatch alarms.
- Security review.
- Failure simulations.
- Documentation and resume/interview case study.

## Safety rule

No AI-generated command is executed directly. Remediation requests pass through an allow-list,
authorization check and approval gate.
