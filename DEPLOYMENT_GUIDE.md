# Deployment Guide: Atlas Creative Studio

This guide walks you through deploying the Atlas Creative Studio website to Cloudflare Pages.

## Prerequisites

- Node.js installed locally.
- GitHub account for version control.
- Cloudflare account.

## Step 1: Local Build

1.  Clone the repository.
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Run the build command to generate static files:
    ```bash
    npm run build
    ```
4.  Verify the `out` folder is created. This folder contains the production-ready HTML/CSS/JS.

## Step 2: Prepare on Cloudflare

1.  Log in to your [Cloudflare Dashboard](https://dash.cloudflare.com/).
2.  Navigate to **Workers & Pages**.
3.  Click **Create Application** -> **Pages**.
4.  Select **Connect to Git**.

## Step 3: Connect to GitHub

1.  Authorize Cloudflare to access your GitHub repositories.
2.  Select the repository containing this code.
3.  Click **Continue to Setup**.

## Step 4: Configure Build Settings

Cloudflare needs to know how to build your project.

- **Framework Preset**: Select **Next.js**.
- **Root Directory**: Leave empty (default).
- **Build Command**: `npm run build`
- **Build Output Directory**: `out`
- **Environment Variables**: (Optional) No specific env vars needed for this static build.

## Step 5: Deployment

1.  Click **Save and Deploy**.
2.  Cloudflare will build the site. You can monitor progress in the "Deploys" tab.
3.  Once finished, Cloudflare will assign a preview URL (e.g., `atlas-creative-studio.pages.dev`).

## Step 6: Custom Domain (Optional)

1.  Go to the **Deployments** tab of your project.
2.  Click the "Settings" (gear icon) button.
3.  Under **Domains**, click **Add Custom Domain**.
4.  Type your domain (e.g., `atlascreativestudio.com`).
5.  Follow the DNS instructions Cloudflare provides to verify ownership.

## Step 7: Post-Deployment Checklist

- ✅ **SSL/HTTPS**: Enabled automatically by Cloudflare.
- ✅ **Performance**: Enable "Auto Minify" and "HTTP/3" (Brotli) in the Cloudflare **Speed** tab.
- ✅ **Caching**: Configure caching rules for static assets in the **Caching** tab (set Cache Level to **Standard** for HTML, **Aggressive** for images if possible).
- ✅ **Analytics**: Install Google Analytics 4 (GA4) code in `layout.tsx` under `<head>`.

---

## Troubleshooting

### Build Fails
Ensure `next.config.js` has `output: 'export'` set. Cloudflare Pages won't work without it.

### Images Not Loading
Check `next.config.js` -> `images: { unoptimized: true }`. This is required for static exports.
Check `src/config/images.ts` to ensure URLs are accessible from the public internet.

### CSS Not Applying
Ensure you are building the project. Static files are not compiled during development.