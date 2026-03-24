# Atlas Creative Studio Website

A high-performance, award-winning portfolio website built for **Atlas Creative Studio**, a Houston-based creative agency specializing in digital experience, branding, and 3D motion.

## 📋 Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Customization Guide](#customization-guide)
- [Deployment](#deployment)

---

## 🎯 Overview

This is a **Tier 2: Growth** production website. It features:
- **Static Export**: Optimized for Cloudflare Pages / Vercel static hosting.
- **Performance**: Lighthouse 90+ (targeting <2.5s LCP).
- **Design**: Modern, cinematic, monochromatic aesthetic with electric rose accents.
- **Architecture**: Next.js 14 App Router, TypeScript, Tailwind CSS.
- **Content**: Fully populated with realistic business copy and professional photography.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS (v3.4)
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Form Handling**: React Hook Form
- **Static Export**: `output: 'export'` configured in `next.config.js`

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm, yarn, or pnpm

### Installation

1.  **Clone the repository**
    ```bash
    git clone <your-repo-url>
    cd atlas-creative-studio
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Run development server**
    ```bash
    npm run dev
    ```

4.  **Open your browser**
    Navigate to `http://localhost:3000`.

### Build & Production

1.  **Build the project for static export**
    ```bash
    npm run build
    ```

2.  **Start production server**
    ```bash
    npm start
    ```
    The built files will be in the `out/` directory.

---

## 📁 Project Structure


atlas-creative-studio/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── contact/
│   │   │       └── route.ts       # Contact form handler
│   │   ├── globals.css            # Tailwind directives & custom animations
│   │   ├── layout.tsx             # Root layout (Fonts, Providers)
│   │   ├── page.tsx               # Homepage
│   │   ├── work/                  # Portfolio page
│   │   ├── services/              # Services page
│   │   ├── about/                 # About page
│   │   └── contact/               # Contact page
│   ├── components/
│   │   ├── Navbar.tsx             # Sticky navigation
│   │   ├── Footer.tsx             # Multi-column footer
│   │   ├── Hero.tsx               # Full-screen hero
│   │   ├── Marquee.tsx            # Infinite scroll marquee
│   │   ├── Forms/
│   │   │   └── ContactForm.tsx    # Contact form UI
│   │   └── [Component files]
│   ├── config/
│   │   └── images.ts              # ⭐ Single source of truth for all images
│   └── lib/
│       └── utils.ts               # Helper functions (cn)
├── public/                        # Static assets (fonts, etc.)
├── next.config.js                 # Static export configuration
├── tailwind.config.ts             # Theme & colors
├── tsconfig.json                  # TypeScript config
└── package.json                   # Dependencies

---

## 🎨 Customization Guide

### 1. Changing Images

**Every image on the site is centralized in `src/config/images.ts`.**

To change an image:
1.  Open `src/config/images.ts`.
2.  Find the slot (e.g., `"hero"`, `"service-1"`, `"gallery-1"`).
3.  Replace the `src` URL with your own web-accessible image URL.
4.  Update the `alt` text for accessibility.
5.  Save the file.

**Where images appear:**
- `hero`: Homepage hero banner.
- `about`: About section / Team image.
- `service-1` / `service-2` / `service-3`: Services page images.
- `gallery-1` to `gallery-4`: Work / Portfolio images.
- `process`: Process section image.

> **Note:** Supported formats are any standard web image (JPG, PNG, WebP). For best performance, use images at least 1200px wide.

### 2. Changing Colors & Typography

**Colors:**
- Primary Black: Edit `--color-primary: #050505;` in `src/app/globals.css`.
- Accent (Rose): Edit `--color-accent: #FF3366;` in `src/app/globals.css`.
- Backgrounds: Edit the Tailwind classes (e.g., `bg-primary`, `bg-surface`) in `tailwind.config.ts` or components.

**Typography:**
- Headings (Syne): Imported in `src/app/layout.tsx`.
- Body (Manrope): Imported in `src/app/layout.tsx`.
- To change fonts, update the `Google Fonts` import in `layout.tsx` or `globals.css`.

### 3. Changing Content (Text)

- **Home Page**: Edit `src/app/page.tsx` (Featured Work, About Teaser, Service Preview).
- **Work Page**: Edit `src/app/work/page.tsx` (Projects array, Categories).
- **Services Page**: Edit `src/app/services/page.tsx` (Services array).
- **About Page**: Edit `src/app/about/page.tsx` (Team, Values text).
- **Contact Page**: Edit `src/app/contact/page.tsx` (Contact Info).

### 4. Changing Links & Contact Info

- **Social Media Links**: Edit `Footer.tsx`.
- **Email/Phone**: Edit `ContactPage.tsx` and `Footer.tsx`.
- **Navigation**: Edit `Navbar.tsx`.

---

## 🌐 Deployment

This project is configured for **Static Export** via Cloudflare Pages.

### Option 1: Cloudflare Pages (Recommended)

1.  **Commit and Push** your code to a GitHub repository.
2.  Log in to [Cloudflare Dashboard](https://dash.cloudflare.com/).
3.  Navigate to **Workers & Pages** -> **Create Application** -> **Pages** -> **Connect to Git**.
4.  Select your repository.
5.  **Build Settings**:
    - **Framework Preset**: Next.js
    - **Build Command**: `npm run build`
    - **Build Output Directory**: `out` (configured in `next.config.js`)
    - **Root Directory**: Leave empty.
6.  **Environment Variables**: (Optional) Add `NEXT_PUBLIC_*` variables if needed.
7.  Click **Deploy**.

### Option 2: Vercel

1.  Push to GitHub.
2.  Log in to [Vercel](https://vercel.com/).
3.  Import the project.
4.  Vercel automatically detects Next.js. Keep the default build settings (Output Mode: Static).
5.  Click **Deploy**.

---

## 📝 Changelog

See [CHANGELOG.md](./CHANGELOG.md) for version history and detailed feature lists.