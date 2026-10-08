# System Architecture Knowledge

AegisOps is an internal DevOps incident assistant. The API runs on EKS.
The incident engine retrieves operational documentation and incident history before
calling a foundation model. Remediation is separated from diagnosis and is protected
by an approval gate.
