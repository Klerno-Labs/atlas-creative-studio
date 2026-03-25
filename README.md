# Atlas Creative Studio Website

## Project Overview
This project is a bespoke, award-winning digital presence for Atlas Creative Studio, designed to showcase exceptional design work across branding, web design, and strategy. The website features a modern, clean aesthetic with a focus on high-performance and user experience.

## Tech Stack
- Next.js 14+ (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- GSAP for animations
- Lucide React for icons

## Getting Started

### Install
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/atlas-creative-studio.git
   cd atlas-creative-studio
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Development
To start the development server:

npm run dev

Visit `http://localhost:3000` in your browser.

### Build
To build the project for production:

npm run build

### Deploy
To deploy the project, follow the instructions in the DEPLOYMENT_GUIDE.md file.

## Project Structure Overview

/src
  /app
    /about
    /contact
    /home
    /process
    /services
    /work
  /components
    /ui
    /sections
    /forms
  /config
    images.ts
  /lib
    utils.ts

## Image Customization
To change any image on the site, edit the `src/config/images.ts` file. Each image slot has a comment explaining where it appears on the site.

### Image Slots
- `hero`: Homepage hero banner
- `about`: About page image
- `service-1`: First service card image
- `service-2`: Second service card image
- `service-3`: Third service card image
- `gallery-1`: Gallery image 1
- `gallery-2`: Gallery image 2
- `gallery-3`: Gallery image 3
- `cta`: Call-to-action section background
- `testimonial-bg`: Testimonials section background
- `team-1`: Team member photo

## Brand Customization
### Changing Colors
To change colors, modify the `tailwind.config.js` file.

### Changing Fonts
To change fonts, update the `layout.tsx` file to import the desired Google Fonts.

### Changing Logo
If a logo slot exists, update the corresponding entry in `src/config/images.ts`.

## Environment Variables
No specific environment variables are required for this project.

## Deployment Instructions
Follow the instructions in the DEPLOYMENT_GUIDE.md file for deploying the project on Cloudflare Pages.