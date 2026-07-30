# Cloud Resume

> A serverless resume site on AWS, provisioned with Terraform and deployed via CI/CD.

**[Live Demo →](https://gabrielsmuller.dev)**

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

## Tech Stack

| Layer | Technology |
|---|---|
| Hosting | S3 + CloudFront |
| Backend | Lambda (Python), API Gateway |
| Database | DynamoDB |
| Infrastructure | Terraform |
| CI/CD | GitHub Actions |
| DNS & TLS | Route 53, ACM |

Everything is provisioned with Terraform. On push to `main`, GitHub Actions runs tests, applies the infrastructure, syncs the frontend to S3, and invalidates the CloudFront cache.

## Key decisions

**OAC over the legacy OAI** - the S3 bucket is private; CloudFront is the only authorized origin, so the site can't be reached by direct S3 URL.

**DynamoDB over RDS** - the counter is a atomic increment. DynamoDB's `UpdateItem ADD` handles concurrent writes with no race condition, at lower cost and overhead than a relational database.

## Run locally

```bash
cd backend && pip install -r requirements.txt && python -m pytest
cd ../terraform && terraform init && terraform plan
```

---

My implementation of the [Cloud Resume Challenge](https://cloudresumechallenge.dev).
