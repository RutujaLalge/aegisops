# Deployment Guide

Build container → push to ECR → update Kubernetes deployment → wait for rollout → run smoke test.

The deployment pipeline must never bypass health verification.
