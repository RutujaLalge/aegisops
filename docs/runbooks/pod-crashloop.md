# CrashLoopBackOff Runbook

## Investigation
1. Get pod status.
2. Inspect previous container logs.
3. Check deployment configuration.
4. Check recent image changes.
5. Check configuration and secret references.

## Remediation
- If caused by a known bad release, use the approved rollback process.
- If an isolated pod is unhealthy, restart it after approval.
- Verify readiness and application health.
