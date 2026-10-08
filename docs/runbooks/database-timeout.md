# Database Connection Timeout Runbook

## Symptoms
- HTTP 5xx increases.
- API latency increases.
- Connection timeout messages appear in application logs.
- Connection utilization approaches the configured limit.

## Investigation
1. Check application error rate.
2. Check database connection utilization.
3. Inspect recent deployments.
4. Inspect connection pool settings.
5. Check whether a downstream dependency is slow.

## Safe remediation
- Confirm the affected workload.
- Restart only unhealthy application pods if approved.
- Re-check error rate and latency.
- Escalate if database saturation remains.

## Avoid
- Do not delete production resources.
- Do not increase database capacity without approval.
