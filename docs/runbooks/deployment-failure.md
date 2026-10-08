# Deployment Failure Runbook

1. Check rollout status.
2. Check ReplicaSet and pod events.
3. Inspect image pull errors.
4. Inspect readiness probe failures.
5. Compare with previous known-good image.
6. Roll back only through an approved operation.
