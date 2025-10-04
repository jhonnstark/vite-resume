# Deployment Setup Guide

This project includes automated CI/CD pipelines using GitHub Actions that will test, build, and deploy your Vue.js application to AWS S3.

## GitHub Actions Workflows

Two workflow files have been created:

1. **`.github/workflows/ci.yml`** - Simplified workflow (recommended)
2. **`.github/workflows/deploy.yml`** - Full workflow with E2E tests

## Required GitHub Secrets

To enable deployment, you need to set up the following secrets in your GitHub repository:

### AWS Configuration Secrets

1. Go to your GitHub repository
2. Navigate to **Settings** → **Secrets and variables** → **Actions**
3. Add the following secrets:

| Secret Name                  | Description                           | Example                                    |
| ---------------------------- | ------------------------------------- | ------------------------------------------ |
| `AWS_ACCESS_KEY_ID`          | AWS Access Key ID                     | `AKIAIOSFODNN7EXAMPLE`                     |
| `AWS_SECRET_ACCESS_KEY`      | AWS Secret Access Key                 | `wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY` |
| `AWS_REGION`                 | AWS Region for your S3 bucket         | `us-east-1`                                |
| `S3_BUCKET`                  | Name of your S3 bucket                | `my-vue-app-bucket`                        |
| `CLOUDFRONT_DISTRIBUTION_ID` | CloudFront Distribution ID (optional) | `E1PA6795UKMFR9`                           |

### How to Get AWS Credentials

1. **Create an IAM User:**

   - Go to AWS IAM Console
   - Create a new user with programmatic access
   - Attach the following policies:
     - `AmazonS3FullAccess` (or create a custom policy with specific bucket permissions)
     - `CloudFrontFullAccess` (if using CloudFront)

2. **S3 Bucket Setup:**
   - Create an S3 bucket for hosting
   - Enable static website hosting
   - Set bucket policy for public read access (if needed)

Example bucket policy for public read access:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::your-bucket-name/*"
    }
  ]
}
```

## Local Development

### Running Tests

```bash
# Run unit tests
npm run test:unit

# Run tests with coverage
npm run test:coverage

# Run E2E tests
npm run test:e2e

# Run linter
npm run lint

# Type checking
npm run type-check
```

### Building the Project

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment Process

The deployment process is triggered automatically when code is pushed to the `develop` branch:

1. **Test Phase**: Runs linting, type checking, and unit tests
2. **Build Phase**: Creates production build artifacts
3. **Deploy Phase**: Syncs build files to S3 bucket and optionally invalidates CloudFront

## Workflow Features

- **Automatic testing** on pull requests and pushes
- **Build artifacts** are saved for 7 days
- **Cache optimization** for static assets
- **CloudFront invalidation** (optional)
- **Deployment notifications** with commit and bucket information

## Troubleshooting

### Common Issues

1. **AWS Credentials Error**: Verify all AWS secrets are correctly set in GitHub
2. **S3 Sync Fails**: Check bucket permissions and region settings
3. **Build Fails**: Ensure all dependencies are correctly specified in package.json
4. **Tests Fail**: Run tests locally first to debug issues

### Debugging

To debug workflow issues:

1. Check the Actions tab in your GitHub repository
2. Review the workflow logs for specific error messages
3. Verify all required secrets are set
4. Test the build process locally

## Security Best Practices

1. Use least-privilege IAM policies for AWS access
2. Regularly rotate AWS access keys
3. Don't commit sensitive information to the repository
4. Use environment-specific secrets for different deployment targets

## Additional Resources

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [AWS S3 Static Website Hosting](https://docs.aws.amazon.com/AmazonS3/latest/userguide/WebsiteHosting.html)
- [AWS CloudFront Documentation](https://docs.aws.amazon.com/cloudfront/)
- [Vue.js Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
