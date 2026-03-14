\# Cloud Resume – AWS Serverless Project



This project is my implementation of the \*\*Cloud Resume Challenge\*\*, a hands-on project designed to demonstrate practical cloud engineering skills using AWS.



The goal of the project is to build and deploy a cloud-based resume website using a fully serverless architecture.



\---



\# Project Overview



The resume is a static website hosted on AWS and globally distributed using a CDN.

It also includes a serverless backend that counts and stores website visits.



Architecture overview:



```

User Browser

&#x20;    │

&#x20;    ▼

CloudFront (CDN + HTTPS)

&#x20;    │

&#x20;    ▼

S3 (Static Website Hosting)

&#x20;    │

&#x20;    ▼

API Gateway

&#x20;    │

&#x20;    ▼

Lambda (Python)

&#x20;    │

&#x20;    ▼

DynamoDB (Visitor Counter)

```



\---



\# Technologies Used



\### Cloud



\* AWS S3

\* AWS CloudFront

\* AWS Lambda

\* Amazon API Gateway

\* Amazon DynamoDB

\* AWS Certificate Manager



\### DevOps \& Infrastructure



\* Terraform (planned for infrastructure provisioning)

\* GitHub Actions (planned for CI/CD)



\### Programming



\* Python (Lambda function)

\* JavaScript (visitor counter)

\* HTML \& CSS (resume website)



\---



\# Features



\### Static Resume Website



The resume is built as a static HTML/CSS website and hosted on Amazon S3.



\### Global Content Delivery



Amazon CloudFront distributes the website globally and provides HTTPS support.



\### Serverless Visitor Counter



A visitor counter was implemented using:



\* AWS Lambda (Python)

\* Amazon DynamoDB

\* Amazon API Gateway



Each time the page loads:



1\. The frontend sends a request to an API endpoint.

2\. API Gateway triggers a Lambda function.

3\. Lambda increments the visitor counter stored in DynamoDB.

4\. The updated number is returned and displayed on the page.



\---



\# Current Status



Completed:



\* Static resume website

\* S3 static hosting

\* CloudFront distribution with HTTPS

\* Custom domain configuration

\* Lambda visitor counter

\* DynamoDB integration

\* API Gateway endpoint

\* Frontend integration with JavaScript



Planned improvements:



\* Infrastructure provisioning with Terraform

\* CI/CD pipeline using GitHub Actions

\* Automated deployments

\* Project documentation and architecture diagram



\---



\# Author



Gabriel Siqueira Müller

Computer Engineering Student

AWS Certified Solutions Architect – Associate

