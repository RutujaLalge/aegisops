# AegisOps — AI-Powered DevOps Incident & Remediation Platform

A portfolio-grade AWS DevOps + GenAI project demonstrating Terraform, Docker, Kubernetes/EKS,
GitHub Actions, Amazon Bedrock RAG, observability, security, and controlled AI-assisted remediation.

## Architecture

Developer -> GitHub Actions → ECR → EKS
                         ↓
                 AegisOps API (Node.js/TypeScript)
                         ↓
        ┌────────────────┼─────────────────┐
        ↓                ↓                 ↓
   CloudWatch       Bedrock RAG       Remediation
   Logs/Metrics     Knowledge Base      Service
                         ↓
                  S3 / S3 Vectors

## Repository structure

- `terraform/` — AWS infrastructure as code
- `services/` — TypeScript microservices
- `kubernetes/` — Kubernetes manifests
- `docs/` — runbooks, architecture and incident knowledge
- `scripts/` — local/bootstrap helpers
- `evaluation/` — GenAI evaluation dataset and runner
- `.github/workflows/` — CI/CD
- `tests/` — unit/API test scaffolding

## Important

This repository is intentionally configured with safe placeholders. Do NOT commit AWS
credentials, real secrets, Terraform state, or production endpoints.

The implementation is staged so infrastructure can be created and verified step-by-step.
Do not run `terraform apply` until AWS account/region/backend variables are configured.

## Planned deployment

1. Configure AWS CLI and Terraform.
2. Create Terraform remote state.
3. Provision VPC/ECR/EKS/IAM.
4. Build and push containers.
5. Deploy Kubernetes workloads.
6. Configure CloudWatch observability.
7. Upload knowledge documents.
8. Configure Bedrock Knowledge Base/RAG.
9. Enable incident analysis.
10. Add controlled remediation and approval workflow.
11. Enable CI/CD.
12. Run failure simulations and GenAI evaluation.

See `docs/implementation-plan.md`.
