# Advanced React Portfolio Setup Guide

## Project Overview

An ultra-advanced, feature-rich portfolio website for **Ranju Hasan Khan** - Full-Stack Developer, International Speaker, and Peace Advocate.

## What's Included

### 🎯 Core Features

1. **Responsive Design**
   - Mobile-first approach
   - Works on all devices (320px to 4K+)
   - Touch-friendly navigation

2. **Modern Animations**
   - Framer Motion animations
   - Scroll-triggered effects
   - Smooth page transitions
   - Interactive hover states

3. **Performance**
   - Code splitting
   - Image optimization
   - Fast loading times
   - SEO optimized

### 📑 Page Sections

1. **Navigation Bar**
   - Sticky header with scroll detection
   - Mobile hamburger menu
   - Smooth scroll navigation
   - Active link indicators

2. **Hero Section**
   - Animated gradient circles
   - Call-to-action buttons
   - Social media links
   - Scroll indicator

3. **About Section**
   - Personal bio
   - Key achievements
   - Statistics cards
   - Feature highlights

4. **Skills Section**
   - 6 skill categories with proficiency bars
   - MERN stack expertise
   - Additional proficiencies
   - Interactive skill badges

5. **Projects Section**
   - 6 featured projects with descriptions
   - Project tags and technologies
   - GitHub and demo links
   - Gradient colored project cards

6. **GitHub Stats**
   - GitHub profile statistics
   - Contribution streak
   - Top languages

7. **Contact Section**
   - Contact form with validation
   - Contact information cards
   - Support section
   - Multiple ways to get in touch

8. **Footer**
   - Quick links
   - Social media links
   - Tech stack info
   - Copyright information

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation Steps

1. Navigate to the project directory:
```bash
cd f:\ranju-portfolio-react
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and go to:
```
http://localhost:3000
```

### Building for Production

```bash
npm run build
npm start
```

## 📦 Project Dependencies

### Core
- **Next.js 14.0.0** - React framework
- **React 18.2.0** - UI library
- **TypeScript** - Type safety

### Styling & Animations
- **Tailwind CSS 3.3.0** - Utility CSS
- **Framer Motion 10.16.4** - Advanced animations
- **PostCSS & Autoprefixer** - CSS processing

### Utilities
- **React Icons 4.12.0** - Icon library
- **React Scroll 1.8.10** - Smooth scrolling
- **Axios 1.6.0** - HTTP client
- **clsx 2.0.0** - Utility for className logic

## 🎨 Customization Guide

### Change Colors
Edit `tailwind.config.ts`:
```typescript
colors: {
  primary: '#667eea',
  secondary: '#764ba2',
  accent: '#f5576c',
}
```

### Update Personal Information
- **Name/Title**: Edit `src/components/Hero.tsx`
- **Bio**: Update `src/components/About.tsx`
- **Skills**: Modify `src/components/Skills.tsx`
- **Projects**: Update `src/components/Projects.tsx`
- **Contact**: Edit `src/components/Contact.tsx`

### Add New Sections
1. Create new component in `src/components/`
2. Import in `src/app/page.tsx`
3. Add to main layout

### Update Social Links
Search for social links in:
- `src/components/Hero.tsx` (line ~80)
- `src/components/Footer.tsx` (line ~30)

## 🔧 Advanced Features

### Framer Motion Animations
- Staggered animations
- Scroll-triggered animations
- Hover effects
- Page transitions

### Responsive Images
- Automatic optimization
- Lazy loading
- Multiple breakpoints

### Form Validation
- Built-in HTML5 validation
- Real-time feedback
- Success messages

### Intersection Observer
- Scroll animations
- Performance optimized
- Smooth fade-in effects

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 🚀 Deployment Options

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
1. Connect your GitHub repo
2. Build command: `npm run build`
3. Publish directory: `.next`

### Docker
Create a `Dockerfile`:
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install && npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 📊 File Structure

```
ranju-portfolio-react/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── GithubStats.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   └── types/
│       └── index.ts
├── public/
│   └── favicon.ico
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.js
├── postcss.config.js
└── README.md
```

## 🐛 Troubleshooting

### Port 3000 already in use
```bash
npm run dev -- -p 3001
```

### Dependencies not installing
```bash
rm -rf node_modules package-lock.json
npm install
```

### Build errors
```bash
npm run lint
npm run build
```

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)

## 💡 Tips for Success

1. **Optimize Images**: Use Next.js Image component
2. **Monitor Performance**: Use Lighthouse
3. **Test Responsiveness**: Use Chrome DevTools
4. **Check Accessibility**: Use axe DevTools
5. **Version Control**: Use Git for changes

## 📞 Contact & Support

- **Email**: ranjuhsankhan@gmail.com
- **LinkedIn**: linkedin.com/in/ranju-hasan-khan-5482952ba
- **GitHub**: github.com/ranjuhasankhan
- **Facebook**: facebook.com/hasanranjukhan

---

**Built with ❤️ for a peaceful world** 🕊️
