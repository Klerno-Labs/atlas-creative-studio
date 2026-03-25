# Client Handoff for Atlas Creative Studio Website

## Overview
Congratulations on your new website! This document provides a guide on how to manage and customize your site.

### What Was Built
- **Home Page:** Features a kinetic typography hero, a marquee for featured work, and an introduction to services.
- **Work Page:** Showcases your portfolio in an asymmetrical Bento grid layout.
- **Services Page:** Describes your expertise in Branding, Digital Products, and Strategy.
- **About Page:** Includes team bios and your studio's philosophy.
- **Process Page:** Visualizes your methodology from Discovery to Launch.
- **Contact Page:** Contains a functional lead generation form.

### Changing Images
All images are controlled from ONE file: `src/config/images.ts`. Each image slot has a comment explaining where it appears on the site.

To swap an image:
1. Open `src/config/images.ts`.
2. Replace the `src` URL with your desired image URL.
3. Update the `alt` text to describe the new image.
4. Save the file — the change will appear on every page that uses that image.

**Supported Formats:** Any web-accessible image URL (Cloudinary, S3, etc.). For best results, use images at least 1200px wide, landscape orientation for heroes.

### Changing Logo
If a logo slot exists, update the corresponding entry in `src/config/images.ts` following the same steps as above.

### Changing Colors
To modify colors, edit the `tailwind.config.js` file. This file controls the color palette used throughout the site.

### Changing Fonts
To change fonts, update the `layout.tsx` file to import the desired Google Fonts.

### Updating Text Content
To update text content, edit the corresponding page files in the `src/app` directory. Each page has its own content structure.

### Requesting Changes
For any changes or updates, please contact Pegrio support.

### Hosting and Maintenance Info
Your site is hosted on Cloudflare Pages. Regularly check for updates and monitor performance.

### Contact
For support, reach out to Pegrio at support@pegrio.com.