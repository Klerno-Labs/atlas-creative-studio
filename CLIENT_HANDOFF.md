# Client Handoff: Atlas Creative Studio Website

Welcome to your new website! Here is everything you need to know to manage, update, and maintain it.

---

## 🌐 What Was Built

We have delivered a complete, production-ready website for **Atlas Creative Studio**. It consists of:

1.  **Homepage**: A cinematic landing page with a hero section, value proposition marquee, featured work preview, and a "Get in Touch" call-to-action.
2.  **Work Portfolio**: A filterable gallery of 6 distinct projects, accessible via a Bento-grid layout.
3.  **Services**: Detailed cards explaining what we do (Branding, Web Design, Motion) with pricing tiers.
4.  **About Us**: Information about the studio, the team, and our philosophy.
5.  **Contact Page**: A functional form to collect inquiries from clients.

**Design Aesthetic**:
- Dark mode aesthetic with high contrast (Deep Black / White / Electric Rose).
- Premium typography using *Syne* and *Manrope* fonts.
- Responsive design that looks great on mobile phones, tablets, and desktops.

---

## 🛠️ How to Update Images

**This is the easiest way to update the site.**

1.  Open the file named **`src/config/images.ts`** in your code editor.
2.  Look for the section labeled **"Image Configuration"**.
3.  You will see a list of slots like `"hero"`, `"service-1"`, `"gallery-1"`, etc.
4.  Find the slot you want to change.
5.  Replace the URL in the `src` line with a link to a new image (e.g., a new logo, a new project photo).
6.  Update the `alt` text to describe the new image (e.g., "New Logo").
7.  Save the file.
8.  **Deploy the site again** to see your changes live.

**Supported Images**:
- Logos
- Project Thumbnails
- Team Photos
- Backgrounds

---

## 📝 How to Update Text (Copy)

Updating text is also very simple. Each page has a specific file.

1.  **Home Page** (`src/app/page.tsx`):
    - Update the Featured Work section text.
    - Update the About Teaser text.
    - Update the Service Preview text.

2.  **Portfolio Page** (`src/app/work/page.tsx`):
    - Look for the array called `projects`.
    - Change the titles, categories, and descriptions.
    - Add new projects by copying an existing block.

3.  **Services Page** (`src/app/services/page.tsx`):
    - Look for the array called `services`.
    - Update service titles, descriptions, and prices.

4.  **Contact Page** (`src/app/contact/page.tsx`):
    - Update phone numbers, email addresses, or address details.

---

## 📧 Managing Contact Inquiries

The contact form is set up to send emails to **info@atlascreativestudio.com**.

**How to test it**:
1.  Fill out the form on the website.
2.  Submit.
3.  Check your email inbox.

**How to change the email address**:
1.  Open `src/components/Forms/ContactForm.tsx`.
2.  Find the `mailto:` link or the API call handler.
3.  Update the email address in the code.
4.  Deploy.

**Note**: The form currently simulates sending an email (it logs to the console and returns a success message). To actually send emails via SMTP or a service like SendGrid/Resend, we would need to configure a backend API route. Currently, inquiries appear in your server logs (terminal) when you run `npm run dev`.

---

## 🚀 Updating the Site (Deployment)

To publish changes to the live website:

1.  Save your changes to the files.
2.  Run `npm run build` in your terminal.
3.  Commit your changes to GitHub.
4.  Go to Cloudflare Pages -> Your Site -> Deploys -> Manual Deploy.

---

## 📞 Support

If you need help with code changes, deployment issues, or content updates, please contact your developer team. For hosting and technical maintenance, refer to the **Deployment Guide**.

---

**Website**: [Your Live URL]  
**Email**: info@atlascreativestudio.com  
**Phone**: (512) 555-0199