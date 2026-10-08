# Optional helper commands for environments that provide make.
.PHONY: fmt validate test

fmt:
	terraform -chdir=terraform fmt -recursive

validate:
	terraform -chdir=terraform init -backend=false
	terraform -chdir=terraform validate

test:
	cd services/api && npm install && npm test
