# Cloud Resume – AWS Serverless Project

This project is my implementation of the **Cloud Resume Challenge**, designed to demonstrate real-world cloud engineering and DevOps skills using AWS.

It showcases a **fully serverless, production-style architecture** with Infrastructure as Code and CI/CD automation.

---

# Live Demo

https://gabrielsmuller.dev

---

# Architecture

```
                GitHub
                   │
                   ▼
        GitHub Actions (CI/CD)
                   │
                   ▼
User Browser → CloudFront (HTTPS + CDN)
                   │
                   ▼
                 S3 (Private Bucket)
                   │
                   ▼
            API Gateway (HTTP API)
                   │
                   ▼
              Lambda (Python)
                   │
                   ▼
            DynamoDB (Visitor Counter)
```

### Key Design Decisions

* **S3 bucket is private** (secured with Origin Access Control)
* Only **CloudFront can access S3**
* HTTPS handled via **ACM certificate**
* Fully serverless backend (no servers)

---

# Technologies Used

## Cloud (AWS)

* Amazon S3 (static website hosting)
* Amazon CloudFront (CDN + HTTPS)
* AWS Lambda (serverless compute)
* Amazon API Gateway (HTTP API)
* Amazon DynamoDB (NoSQL database)
* AWS Certificate Manager (SSL/TLS)

## DevOps & Infrastructure

* Terraform (Infrastructure as Code)
* GitHub Actions (CI/CD pipeline)

## Programming

* Python (Lambda function)
* JavaScript (visitor counter)
* HTML & CSS (frontend)

---

# Features

## Static Resume Website

* Built with HTML/CSS
* Hosted on S3
* Delivered globally via CloudFront

## Secure Architecture

* S3 bucket is **not publicly accessible**
* Uses **Origin Access Control (OAC)**
* Enforces HTTPS via CloudFront

## Serverless Visitor Counter

Each page load triggers:

1. Frontend sends request to API
2. API Gateway invokes Lambda
3. Lambda updates counter in DynamoDB
4. Updated count is returned to frontend

---

# CI/CD Pipeline

This project includes a full CI/CD pipeline using GitHub Actions.

### Workflow:

On every push to `main`:

1. Deploy static files to S3
2. Invalidate CloudFront cache
3. Website updates automatically

This enables **continuous deployment with zero manual steps**.

---

# Infrastructure as Code

All infrastructure is provisioned using Terraform:

* S3 bucket
* CloudFront distribution
* Origin Access Control (OAC)
* Lambda function
* API Gateway
* DynamoDB table
* IAM roles and policies
* DNS and SSL (ACM + Route53)

---

# Repository Structure

```
cloud-resume/
│
├── frontend/          # Static website files
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── backend/           # Lambda function
│
├── terraform/         # Infrastructure as Code
│
└── .github/workflows/ # CI/CD pipeline
```

---

# What I Learned

* Designing serverless architectures on AWS
* Securing S3 with CloudFront (OAC)
* Managing infrastructure with Terraform
* Implementing CI/CD with GitHub Actions
* Debugging real-world issues (CORS, IAM, DNS, SSL)
* Working with distributed systems and CDN caching

---

# Author

Gabriel Siqueira Müller

Computer Engineer | Cloud Engineer
