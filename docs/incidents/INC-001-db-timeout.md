# INC-001 — Database Timeout

A service experienced elevated HTTP 5xx responses due to database connection saturation.
The effective response was to inspect connection utilization, identify unhealthy pods,
perform an approved restart, and verify recovery.
