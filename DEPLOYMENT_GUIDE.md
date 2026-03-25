# Deployment Guide for Atlas Creative Studio Website

## Step-by-Step Cloudflare Pages Deployment

1. **Create a Cloudflare Account**
   - Sign up at [Cloudflare](https://www.cloudflare.com/).

2. **Create a New Project**
   - Go to the Cloudflare Pages dashboard and click on "Create a Project".

3. **Connect Your Repository**
   - Select the Git provider (GitHub, GitLab, etc.) and authorize Cloudflare to access your repositories.
   - Choose the repository for the Atlas Creative Studio project.

4. **Configure Build Settings**
   - Set the following build command:
     ```bash
     npm run build
     ```
   - Set the output directory to:
     ```
     out
     ```
   - Add the following environment variable configuration:
     ```json
     {
       "images": {
         "unoptimized": true
       }
     }
     ```

5. **Deploy the Project**
   - Click "Deploy" to start the build process. Wait for the deployment to complete.

## Environment Variable Configuration
No specific environment variables are required for this project.

## Domain Setup Instructions
1. **Add a Custom Domain**
   - In the Cloudflare Pages dashboard, go to your project settings.
   - Click on "Custom Domains" and enter your domain name.
   - Follow the instructions to update your DNS settings.

2. **SSL Configuration**
   - Ensure that SSL is enabled for your custom domain in the Cloudflare dashboard.

## Post-Deploy Checklist
- Verify that the site is live and accessible.
- Check that all images load correctly.
- Test the contact form functionality.
- Ensure that analytics tracking is set up correctly.