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

Infrastructure is defined in Terraform. On push to `main`, the current GitHub Actions workflow syncs `frontend/` to S3 and invalidates the CloudFront cache. It does not run tests or apply Terraform.

## Resume content

The site presents professional experience in data platforms, analytics engineering, systems integration and AWS, followed by skills, personal projects, education and certification.

- `frontend/index.html` includes the complete Portuguese content for readers without JavaScript.
- `frontend/script.js` contains Portuguese and English translations. Update both languages when changing content.
- Language selection follows a saved preference or the browser language. The toggle updates the document language, title and description.
- The visitor counter uses the existing API Gateway endpoint and displays a localized fallback if the service is unavailable.

## Key decisions

**OAC over the legacy OAI** - the S3 bucket is private; CloudFront is the only authorized origin, so the site can't be reached by direct S3 URL.

**DynamoDB over RDS** - the counter is a atomic increment. DynamoDB's `UpdateItem ADD` handles concurrent writes with no race condition, at lower cost and overhead than a relational database.

## Preview locally

```bash
python -m http.server 8000 --directory frontend
```

Open `http://localhost:8000`. No frontend build or package installation is required. Loading the page calls the live visitor-counter endpoint.

Check JavaScript syntax with `node --check frontend/script.js`. Manage Terraform separately when infrastructure changes are needed.

---

My implementation of the [Cloud Resume Challenge](https://cloudresumechallenge.dev).
