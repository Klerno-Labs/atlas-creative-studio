# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2024-01-XX

### Added
- **Homepage**: Full-viewport cinematic hero section with animated gradient and floating text.
- **Portfolio (Work)**: Filterable Bento Grid layout (Web, Branding, Product). Modal view for project details.
- **Services**: Alternating layout cards with pricing and duration details.
- **About**: Team section, company philosophy, and value statement.
- **Contact**: Functional contact form with validation, honeypot spam protection, and simulated API integration.
- **Design System**: Custom color palette (Black/White/Rose), Typography (Syne, Manrope, Space Mono).
- **Components**:
  - Navbar: Sticky, glassmorphic, responsive hamburger menu.
  - Footer: Dark background, multi-column links, social icons.
  - Marquee: Infinite scroll value prop strip.
  - Custom Animations: Scroll-reveal effects using Framer Motion.
- **Content**: 6 realistic portfolio projects, 3 team members, generated business copy for Houston location.

### Changed
- Configured Next.js for **Static Export** (`output: 'export'`).
- Replaced `next/image` with standard `<img>` tags for optimal static compatibility.
- Implemented centralized image configuration in `src/config/images.ts`.

### Fixed
- Accessibility: Added `aria-label` to icon-only buttons.
- Mobile: Improved touch targets for form inputs and navigation.
- Spacing: Enforced strict 4px unit spacing in components.

### Security
- Added honeypot field to contact form (`_gotcha`) to prevent bot spam.
- Form validation enforced on the client and simulated server-side validation.

---

## [Unreleased]

### Planned
- SEO: JSON-LD Structured Data for LocalBusiness.
- Analytics: Google Analytics 4 integration (optional).
- Blog Section (future update).