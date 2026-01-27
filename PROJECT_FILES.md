# Project Structure & Overview

## Portfolio Project - File Directory

```
f:\ranju-portfolio-react\
│
├── 📄 package.json                 # Project dependencies & scripts
├── 📄 tsconfig.json               # TypeScript configuration
├── 📄 tailwind.config.ts          # Tailwind CSS configuration
├── 📄 next.config.js              # Next.js configuration
├── 📄 postcss.config.js           # PostCSS configuration
├── 📄 .eslintrc.json              # ESLint rules
├── 📄 .gitignore                  # Git ignore rules
│
├── 📁 src/
│   ├── 📁 app/
│   │   ├── 📄 layout.tsx          # Root layout component
│   │   ├── 📄 page.tsx            # Home page (main content)
│   │   └── 📄 globals.css         # Global styles & animations
│   │
│   └── 📁 components/
│       ├── 📄 Navbar.tsx          # Navigation bar with mobile menu
│       ├── 📄 Hero.tsx            # Landing section with intro
│       ├── 📄 About.tsx           # Profile & achievements section
│       ├── 📄 Skills.tsx          # Technical skills showcase
│       ├── 📄 Projects.tsx        # Project portfolio grid
│       ├── 📄 GithubStats.tsx     # GitHub profile stats
│       ├── 📄 Contact.tsx         # Contact form
│       └── 📄 Footer.tsx          # Footer with links
│
├── 📁 public/                     # Static assets (images, icons, etc.)
│
├── 📁 node_modules/               # Dependencies (auto-generated)
│
├── 📁 .next/                      # Build output (auto-generated)
│
└── Documentation files (root):
    ├── README.md                  # Project overview
    ├── START_HERE.md              # Quick start guide
    └── Project setup instructions
```

## Component Purpose

| Component | Purpose |
|-----------|---------|
| **Navbar** | Sticky navigation with smooth scrolling & mobile menu |
| **Hero** | Eye-catching landing section with CTA button |
| **About** | Personal profile with statistics & achievements |
| **Skills** | Technical skills with proficiency bars |
| **Projects** | Featured portfolio of 6 projects with links |
| **GithubStats** | GitHub contribution stats integration |
| **Contact** | Email contact form with validation |
| **Footer** | Quick navigation & social links |

## Key Technologies

- **Framework**: Next.js 14 (React 18)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 3.3 + PostCSS
- **Animations**: Framer Motion 10.16
- **Icons**: React Icons 4.12
- **Scroll Detection**: react-intersection-observer 10.0
- **HTTP Client**: Axios 1.6

## Running the Project

```bash
# Navigate to project
cd f:\ranju-portfolio-react

# Install dependencies (if needed)
npm install

# Start development server
npm run dev

# Access at http://localhost:3000
```

## Customization Guide

### 1. Personal Information
- Edit `About.tsx` - Add your bio
- Edit `Skills.tsx` - List your skills
- Edit `Projects.tsx` - Showcase your work
- Edit `Contact.tsx` - Add contact info

### 2. Styling
- Colors: `tailwind.config.ts`
- Fonts: `src/app/globals.css`
- Component styles: Individual `.tsx` files

### 3. Add New Sections
1. Create `src/components/YourSection.tsx`
2. Import in `src/app/page.tsx`
3. Add to page layout

## Build & Deploy

```bash
# Production build
npm run build

# Start production server
npm start

# Deploy to Vercel (recommended)
vercel
```

---

**Project Status**: ✅ Running & Ready for Customization
**Last Updated**: January 27, 2026
