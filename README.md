# Cloud Resume — gabrielsmuller.dev
 
> A serverless resume website built on AWS, demonstrating cloud architecture, infrastructure-as-code, and CI/CD automation.
 
**[Live Demo →](https://gabrielsmuller.dev)**
 
---
 
## Architecture
 
```
User Browser
     │
     ▼
CloudFront (CDN + HTTPS)          ← globally distributed, custom domain
     │
     ├──▶ S3 (Static Website)     ← resume HTML/CSS, OAC restricts direct access
     │
     └──▶ API Gateway             ← REST endpoint for visitor counter
               │
               ▼
           Lambda (Python)        ← increments and returns visitor count
               │
               ▼
           DynamoDB               ← stores visitor counter
```
 
---
 
## Tech Stack
 
| Layer | Technology |
|---|---|
| Hosting | AWS S3 + CloudFront |
| Backend | AWS Lambda (Python), API Gateway |
| Database | Amazon DynamoDB |
| Infrastructure | Terraform |
| CI/CD | GitHub Actions |
| DNS & TLS | Route 53, AWS Certificate Manager |
 
---
 
## Design Decisions
 
**Origin Access Control (OAC) instead of OAI** — S3 bucket is fully private. CloudFront is the only authorized origin, preventing direct S3 URL access. OAC is the current AWS-recommended approach over the legacy Origin Access Identity.
 
**DynamoDB over RDS** — The visitor counter is a single increment operation. DynamoDB's `UpdateItem` with `ADD` handles concurrent increments without race conditions, at a fraction of the cost of a relational database for this use case.
 
**Pre-signed infrastructure** — All AWS resources are provisioned through Terraform. No manual console clicks. The entire stack can be destroyed and recreated with `terraform apply`.
 
---
 
## Project Structure
 
```
cloud-resume/
├── frontend/           # Static resume (HTML, CSS, JS)
├── backend/            # Lambda function (Python)
├── terraform/          # Infrastructure as code
└── .github/workflows/  # CI/CD pipeline
```
 
---
 
## CI/CD Pipeline
 
On every push to `main`:
 
```
Push to main
     │
     ▼
Run tests (backend)
     │
     ▼
Terraform plan & apply
     │
     ▼
Sync frontend to S3
     │
     ▼
Invalidate CloudFront cache
```
 
---
 
## Infrastructure
 
Terraform provisions:
 
- S3 bucket (private, static hosting)
- CloudFront distribution with OAC
- API Gateway + Lambda function
- DynamoDB table
- IAM roles and policies
- ACM certificate + Route 53 DNS records
---
 
## Running Locally
 
```bash
# Backend
cd backend
pip install -r requirements.txt
python -m pytest
 
# Infrastructure
cd terraform
terraform init
terraform plan
```
 
---
 
## What I Learned
 
This project is my implementation of the [Cloud Resume Challenge](https://cloudresumechallenge.dev). Beyond following the spec, the most valuable parts were:
 
- Understanding **why** pre-signed URLs and OAC matter from a security perspective
- Thinking through **cost tradeoffs** between DynamoDB and RDS for a simple counter
- Wiring together Terraform state management with a GitHub Actions deployment pipeline
- Debugging CloudFront cache invalidation behavior after deployments
---
