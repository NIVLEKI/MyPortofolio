# Kelvin Kariuki — Developer Portfolio

<div align="center">

![Portfolio Banner](public/images/profile.jpg)

**A production-grade personal portfolio built with React + Vite**  
Showcasing full-stack projects, mobile security work, and IT consultancy services.

[![Live Site](https://img.shields.io/badge/Live%20Site-nivleksolutions.co.ke-2dd4bf?style=for-the-badge&logo=netlify&logoColor=white)](https://nivleksolutions.co.ke)
[![React](https://img.shields.io/badge/React-18-61DBFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev)
[![Netlify](https://img.shields.io/badge/Deployed%20on-Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)](https://netlify.com)

</div>

---

## Table of Contents

- [Overview](#overview)
- [Live Demo](#live-demo)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Features](#features)
- [Sections](#sections)
- [Getting Started](#getting-started)
- [Environment & Configuration](#environment--configuration)
- [Netlify Forms Setup](#netlify-forms-setup)
- [Adding Your Images & Documents](#adding-your-images--documents)
- [Customisation Guide](#customisation-guide)
- [Deployment to Netlify](#deployment-to-netlify)
- [Dependencies](#dependencies)
- [Known Issues & Fixes](#known-issues--fixes)
- [Author](#author)

---

## Overview

This is the personal portfolio website of **Kariuki Kelvin Wachira**, a BSc. Information Technology undergraduate at the University of Embu and Power Learn Project (PLP) graduate. The site showcases production-grade full-stack projects, mobile security work, professional experience, and the Nivlek Solutions IT consultancy brand.

The portfolio is built with a **"Elite Security Developer"** design aesthetic — deep navy backgrounds, teal/indigo dual-accent colours, Syne display typography, and glassmorphism card components.

---

## Live Demo

> **[https://nivleksolutions.co.ke](https://nivleksolutions.co.ke)**

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 + Vite 5 |
| Styling | Custom CSS (CSS Variables, no framework) |
| Animations | Framer Motion |
| Typewriter | react-simple-typewriter |
| Card Tilt | react-tilt |
| Icons | Font Awesome 6 |
| Fonts | Syne · Figtree · JetBrains Mono (Google Fonts) |
| Forms | Netlify Forms (with honeypot spam protection) |
| Hosting | Netlify (CDN, auto-deploy from GitHub) |

---

## Project Structure

```
portfolio/
├── public/
│   ├── images/
│   │   ├── profile.jpg          ← Hero section profile photo
│   │   └── about.jpg            ← About section photo
│   ├── Kelvin_Kariuki_CV.pdf    ← Downloadable CV
│   └── plpcertificate.pdf       ← PLP Certificate (viewable in browser)
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx           ← Desktop nav + mobile floating pill widget
│   │   ├── Hero.jsx             ← Landing section with animated image ring
│   │   ├── About.jsx            ← Tabbed about section (Education/Certs/Goals)
│   │   ├── Experience.jsx       ← Work experience timeline cards
│   │   ├── Skills.jsx           ← Category-based skill tag cards
│   │   ├── Projects.jsx         ← Project grid + detail modal + filter tabs
│   │   ├── Contact.jsx          ← Contact form (Netlify) + social links + docs
│   │   └── Footer.jsx           ← Footer with copyright
│   │
│   ├── App.jsx                  ← Root component, theme state management
│   ├── App.css                  ← All component styles + responsive breakpoints
│   ├── index.css                ← Font imports + global CSS reset
│   ├── main.jsx                 ← React DOM entry point
│   └── data.js                  ← All content data (projects, skills, experience)
│
├── index.html                   ← Vite HTML entry (Netlify form must be here too)
├── vite.config.js
├── package.json
└── README.md
```

---

## Features

### Design System
- **Dark/Light theme toggle** — persisted in `localStorage`, defaults to dark mode
- **Syne** display font for headings, **Figtree** for body text, **JetBrains Mono** for code labels
- CSS custom properties (`--accent`, `--bg-card`, `--border`, etc.) drive the entire theme
- Subtle animated dot-grid background and gradient blob effects in the Hero section

### Navigation
- **Desktop** — fixed top navbar with scroll-triggered background blur and active link indicator
- **Mobile (≤ 640px)** — desktop navbar hidden; replaced by a compact floating pill in the top-right corner containing a theme toggle and hamburger button, which opens a smooth animated dropdown card with icon-labelled links

### Hero Section
- Spinning conic-gradient animated ring border around the profile photo
- Animated floating tech badges (Security / Full-Stack / Cloud)
- Typewriter cycling through role descriptions
- Three CTA buttons: View Projects · Download CV · Contact Me
- Quick stats: Production Apps · Google Rating · Years Building

### About Section
- Three-tab panel: **Education**, **Certifications**, **Goals**
- Animated tab transitions (Framer Motion `AnimatePresence`)
- Certificate viewable/downloadable directly from the Certifications tab

### Experience Section
- Card-based timeline for professional experience
- Colour-coded by role type, with bullet-point responsibility list

### Skills Section
- Six skill category cards: Frontend · Backend · Database & ORM · Cloud & DevOps · Security · Mobile & Tools
- Tag/pill layout — no arbitrary progress bar percentages

### Projects Section
- **Filter tabs**: All · Featured · Web · Mobile · Business
- **Project detail modal** — clicking "View Details" opens a full-screen animated modal with:
  - Highlighted key features grid
  - Full tech stack with monospace tags
  - GitHub / Live Site / APK Download / Google Reviews action buttons
- Special **Nivlek Solutions** venture card with gold border treatment

### Contact Section
- **Netlify Forms** with honeypot spam protection
- Document downloads: CV and PLP Certificate
- Social links: GitHub · LinkedIn · WhatsApp · Instagram · Discord
- Inline success/error status messages with Framer Motion animations

---

## Sections

| # | Section | ID | Description |
|---|---|---|---|
| 1 | Hero | `#home` | Name, role, profile image, CTAs, stats |
| 2 | About | `#about` | Background, education, certifications, goals |
| 3 | Experience | `#experience` | Professional work history |
| 4 | Skills | `#skills` | Categorised technical skills |
| 5 | Projects | `#projects` | Portfolio projects with detail modals |
| 6 | Contact | `#contact` | Contact form, socials, document downloads |

---

## Getting Started

### Prerequisites

- Node.js **18+**
- npm or yarn

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/NIVLEKI/portfolio.git
cd portfolio

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

The site will be available at `http://localhost:5173`.

### Build for Production

```bash
npm run build
```

The built output will be in the `dist/` folder, ready for deployment.

### Preview Production Build Locally

```bash
npm run preview
```

---

## Environment & Configuration

All personal content is centralised in **`src/data.js`**. You should update this file before deploying:

```js
// src/data.js

export const personalInfo = {
  name:      "Kelvin",
  surname:   "Kariuki",
  email:     "kelvinkk24816@gmail.com",
  phone:     "+254 769 791 611",
  location:  "Nyeri, Kenya",
  github:    "https://github.com/NIVLEKI",
  linkedin:  "https://linkedin.com/in/...",
  whatsapp:  "https://wa.me/254717328354",
  instagram: "https://instagram.com/Niv.l3k",
  discord:   "https://discord.com/users/...",
};
```

**No `.env` file is required** — all data is static and lives in `data.js`.

---

## Netlify Forms Setup

The contact form uses **Netlify Forms** for zero-configuration serverless form handling. No backend is needed.

### How it works

The `<form>` tag in `Contact.jsx` has:

```jsx
<form
  name="contact"
  data-netlify="true"
  data-netlify-honeypot="bot-field"
  onSubmit={handleSubmit}
>
  <input type="hidden" name="form-name" value="contact" />
  <input type="hidden" name="bot-field" />
  ...
</form>
```

### Required: Add a static form to `index.html`

Because Vite/React renders the form dynamically via JavaScript, Netlify's build-time HTML scraper cannot detect it. You must add a **hidden static copy** of the form in your `public/index.html` (or `index.html` at the project root):

```html
<!-- Netlify form detection — hidden static copy -->
<form name="contact" data-netlify="true" netlify-honeypot="bot-field" hidden>
  <input type="text"  name="name" />
  <input type="email" name="email" />
  <input type="text"  name="subject" />
  <textarea           name="message"></textarea>
  <input type="hidden" name="bot-field" />
</form>
```

> ⚠️ **Without this static form in `index.html`, Netlify will not register the form and submissions will return a 404.**

### Viewing submissions

After deploying to Netlify, go to:  
**Netlify Dashboard → Your Site → Forms → contact**

You can enable email notifications for each new submission in **Site Settings → Forms → Form notifications**.

---

## Adding Your Images & Documents

Place all static assets in the `public/` folder so Vite serves them at the root path `/`:

| File | Path | Used in |
|---|---|---|
| Profile photo | `public/images/profile.jpg` | Hero section |
| About photo | `public/images/about.jpg` | About section |
| CV | `public/Kelvin_Kariuki_CV.pdf` | Hero CTA + Contact panel |
| PLP Certificate | `public/plpcertificate.pdf` | About (Certs tab) + Contact panel |
| NivlockX APK | `public/NivlockX.apk` | Projects modal |

**Recommended image sizes:**

| Image | Size | Notes |
|---|---|---|
| `profile.jpg` | 400×400px minimum | Square crop, `object-position: top center` |
| `about.jpg` | 600×750px (portrait) | 4:5 aspect ratio fits the frame best |

---

## Customisation Guide

### Changing the accent colour

Open `src/App.css` and update the CSS variables in `:root`:

```css
:root {
  --accent:     #2dd4bf;   /* primary teal */
  --accent-rgb: 45, 212, 191; /* must match --accent as RGB for rgba() usage */
  --accent-2:   #818cf8;   /* secondary indigo */
}
```

### Adding a new project

In `src/data.js`, add an entry to the `projects` array:

```js
{
  title:      "My New Project",
  subtitle:   "Short descriptor",
  desc:       "What the project does and why it matters.",
  icon:       "fas fa-rocket",         // Font Awesome icon class
  color:      "#f43f5e",               // Card accent colour (hex)
  tech:       ["React", "Node.js"],
  highlights: ["Key feature 1", "Key feature 2"],
  github:     "https://github.com/NIVLEKI/project",
  demo:       "https://project.netlify.app",
  featured:   true,                    // shows ★ Featured badge
}
```

### Adding a new experience entry

```js
// src/data.js — experience array
{
  role:    "Junior Developer",
  company: "Company Name",
  period:  "Jan 2026 – Present",
  type:    "Full-time",
  icon:    "fas fa-laptop-code",
  color:   "#818cf8",
  points: [
    "Responsibility one",
    "Responsibility two",
  ],
}
```

### Changing fonts

Fonts are imported in `src/index.css`. Replace the Google Fonts URL and update the `font-family` references in `src/App.css`:

```css
/* src/index.css */
@import url('https://fonts.googleapis.com/css2?family=YOUR_FONT:wght@400;700;800&display=swap');
```

---

## Deployment to Netlify

### Option A — Deploy via GitHub (recommended)

1. Push your project to a GitHub repository
2. Log into [netlify.com](https://netlify.com) → **Add new site → Import from Git**
3. Select your repo and set:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
4. Click **Deploy site**

Netlify will auto-deploy on every push to `main`.

### Option B — Deploy manually via Netlify CLI

```bash
# Install Netlify CLI globally
npm install -g netlify-cli

# Build the project
npm run build

# Deploy to Netlify
netlify deploy --prod --dir=dist
```

### Custom domain

After deploying, go to **Site Settings → Domain management → Add custom domain** and follow the DNS setup instructions for your registrar.

---

## Dependencies

### Production

| Package | Version | Purpose |
|---|---|---|
| `react` | ^18 | UI framework |
| `react-dom` | ^18 | DOM rendering |
| `framer-motion` | ^11 | Animations & transitions |
| `react-simple-typewriter` | ^5 | Typewriter effect in Hero |
| `react-tilt` | ^1 | 3D tilt on project cards |

### Development

| Package | Purpose |
|---|---|
| `vite` | Build tool & dev server |
| `@vitejs/plugin-react` | React fast-refresh support |

### CDN (loaded via `index.css`)

| Resource | Purpose |
|---|---|
| Google Fonts (Syne, Figtree, JetBrains Mono) | Typography |
| Font Awesome 6.5 | Icons throughout the site |

---

## Known Issues & Fixes

### Contact form returns 404 on submit

**Cause:** The static form HTML is missing from `index.html`.  
**Fix:** Add the hidden static `<form data-netlify="true">` to `index.html` as described in the [Netlify Forms Setup](#netlify-forms-setup) section above.

### Profile image not showing

**Cause:** Image file is missing or has the wrong name/path.  
**Fix:** Place your photo at `public/images/profile.jpg`. The Hero component falls back to an icon avatar if the file is not found.

### Fonts not loading in production

**Cause:** Ad blockers or strict CSP headers can block Google Fonts.  
**Fix:** Download the fonts and self-host them in `public/fonts/`, then update the `@import` in `index.css` to use local paths.

### Mobile floating pill not visible

**Cause:** Screen width is above 640px — the pill only appears on mobile.  
**Fix:** This is intentional. Resize the browser window below 640px or test on a real mobile device / Chrome DevTools mobile emulator.

### `react-tilt` warning in console

**Cause:** `react-tilt` uses deprecated lifecycle methods internally.  
**Fix:** This is a cosmetic console warning only and does not affect functionality. Consider replacing with `@tippyjs/react` or a CSS-only tilt if it causes issues.

---

## Author

**Kariuki Kelvin Wachira**

- 🌐 Website: [nivleksolutions.co.ke](https://nivleksolutions.co.ke)
- 💻 GitHub: [@NIVLEKI](https://github.com/NIVLEKI)
- 💼 LinkedIn: [kelvin-kariuki](https://linkedin.com/in/kelvin-kariuki-9644a5333)
- 📸 Instagram: [@Niv.l3k](https://instagram.com/Niv.l3k)
- 📱 WhatsApp: [+254 717 328 354](https://wa.me/254717328354)

> BSc. Information Technology · University of Embu  
> Power Learn Project (PLP) Graduate · Google Developer Group Member  
> Founder — [Nivlek Solutions](https://nivleksolutions.co.ke) ⭐⭐⭐⭐⭐

---

<div align="center">
  <sub>Built with React & Vite · Deployed on Netlify · © 2025 Kelvin Kariuki</sub>
</div>
