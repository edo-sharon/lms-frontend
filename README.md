# 📦 LMS Frontend - DevOps Deployment Project

## 🎯 Project Goal
This project focuses on demonstrating a **complete DevOps pipeline** around a static frontend application, deployed automatically to AWS — not on building a full-featured React site.

## 🛠 Tech Stack
- **Frontend Framework:** React (with TailwindCSS)
- **Infrastructure as Code:** Terraform
- **Deployment Target:** AWS S3 (static hosting) + CloudFront (CDN)
- **CI/CD:** GitHub Actions

## ⚙️ DevOps Pipeline Features
- ✅ Static React app with Tailwind styling
- ✅ Infrastructure created via Terraform (S3 + CloudFront)
- ✅ GitHub Actions workflow automates:
  - Installing dependencies
  - Running basic tests
  - Building the app
  - Uploading build artifacts to S3
- ✅ CloudFront configured for global content delivery
- ✅ Public access control on S3 managed securely via Terraform

## 🌍 Deployment
The project includes a live site deployment through AWS services.

> 🔒 **Note:** The site is deployed and technically accessible, but the main focus of the project is on demonstrating the pipeline — not on publishing active content to the public.

## 📁 Repository Structure
```
├── src/                  # React source code
├── public/               # Static assets
├── infra/                # Terraform configuration
│   └── main.tf           # Infrastructure definitions
├── .github/workflows/    # GitHub Actions CI/CD
│   └── deploy.yml        # Deployment pipeline definition
├── package.json          # Project metadata
├── README.md             # Project overview
```

## 🧠 Why This Matters
This project demonstrates key DevOps skills:
- Automating deployment workflows from source to production
- Managing cloud infrastructure as code (IaC)
- Creating robust CI/CD pipelines
- Handling secure secret management

## 🔐 Secrets Used in GitHub Actions
Defined under `Settings > Secrets and variables > Actions`:
- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`
- `AWS_S3_BUCKET`

## ✅ Future Enhancements
- Add CloudFront cache invalidation after deployment
- Integrate ESLint and unit tests into CI pipeline
- Set up deployment to a custom domain with HTTPS

---

🚀 **This project represents a complete DevOps process for static site deployment — ideal for demonstrating infrastructure, automation, and cloud skills in a professional portfolio.**




This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
