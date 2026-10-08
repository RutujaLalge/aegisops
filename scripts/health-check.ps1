param(
  [string]$BaseUrl = "http://localhost:3000"
)

Write-Host "Checking $BaseUrl/health"
Invoke-RestMethod "$BaseUrl/health"
