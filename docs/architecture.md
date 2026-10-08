# AegisOps Architecture

## Runtime

The platform consists of three logical services:

1. `api` — HTTP API and incident orchestration.
2. `incident-engine` — GenAI/RAG analysis.
3. `remediation-service` — controlled operational actions.

The first version keeps the service boundaries simple so they are easy to understand and
deploy. They can be split further later.

## Request flow

User
→ API
→ incident-engine
→ retrieve operational context
→ Bedrock model
→ structured incident analysis
→ API response

## Remediation flow

User
→ proposed remediation
→ policy/allow-list check
→ explicit approval
→ remediation service
→ Kubernetes/AWS operation
→ health verification

## AWS boundaries

Terraform owns infrastructure.
Kubernetes owns application workload configuration.
GitHub Actions owns delivery automation.
Bedrock owns model inference/RAG capabilities.
CloudWatch owns operational telemetry.
