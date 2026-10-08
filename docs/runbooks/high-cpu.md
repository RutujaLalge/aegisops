# High CPU Runbook

## Symptoms
- CPU utilization remains above the alert threshold.
- Request latency increases.
- Pods may be throttled.

## Investigation
1. Identify affected deployment.
2. Check pod CPU usage.
3. Check recent releases.
4. Check request volume.
5. Check application logs.

## Safe remediation
- Scale replicas if the workload is configured for horizontal scaling.
- Roll back a bad deployment only after approval.
- Verify recovery using error rate and latency.
