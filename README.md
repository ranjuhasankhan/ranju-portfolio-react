# Ranju Hasan Khan - Advanced React Portfolio

An ultra-modern, responsive, and feature-rich portfolio website built with React, Next.js, TypeScript, and Tailwind CSS.

## ✨ Features

- **Modern Design**: Sleek dark theme with gradient accents and glass morphism effects
- **Smooth Animations**: Framer Motion powered animations and transitions
- **Responsive Layout**: Mobile-first design that works on all devices
- **Interactive Components**: Hover effects, scroll animations, and smooth interactions
- **Multiple Sections**:
  - Hero section with animated background
  - About me with statistics
  - Technical skills with proficiency bars
  - Featured projects showcase
  - GitHub statistics integration
  - Contact form with validation
  - Footer with social links
- **Performance Optimized**: Lazy loading, code splitting, and optimized images
- **SEO Friendly**: Proper meta tags and semantic HTML

## 🚀 Tech Stack

- **Frontend Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Intersection Observer**: React Intersection Observer for scroll animations

## 📦 Installation

1. Clone or navigate to the project directory:
```bash
cd ranju-portfolio-react
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── Navbar.tsx          # Navigation bar
│   ├── Hero.tsx            # Hero section
│   ├── About.tsx           # About section
│   ├── Skills.tsx          # Skills section
│   ├── Projects.tsx        # Projects showcase
│   ├── GithubStats.tsx     # GitHub stats
│   ├── Contact.tsx         # Contact form
│   └── Footer.tsx          # Footer
├── types/
│   └── index.ts            # TypeScript types
└── assets/                 # Static assets
```

## 🎨 Customization

### Colors
Edit the color scheme in `tailwind.config.ts`:
```typescript
colors: {
  primary: '#667eea',
  secondary: '#764ba2',
  accent: '#f5576c',
  // Add more colors as needed
}
```

### Content
- Update personal information in component files
- Modify project data in `src/components/Projects.tsx`
- Update skills in `src/components/Skills.tsx`

### Social Links
Update social media links in:
- `src/components/Hero.tsx`
- `src/components/Footer.tsx`

## 📱 Responsive Breakpoints

- Mobile: 320px - 640px
- Tablet: 641px - 1024px
- Desktop: 1025px+

## 🔗 Important Links

- **GitHub**: https://github.com/ranjuhasankhan
- **LinkedIn**: https://www.linkedin.com/in/ranju-hasan-khan-5482952ba
- **Email**: ranjuhsankhan@gmail.com
- **Buy Me a Coffee**: https://www.buymeacoffee.com/

## 📝 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Framer Motion for amazing animations
- Tailwind CSS for utility-first styling
- Next.js for the modern React framework
- All the amazing open-source libraries used

## 💡 Future Enhancements

- [ ] Blog section with MDX support
- [ ] Dark/Light mode toggle
- [ ] Multi-language support
- [ ] Email backend integration
- [ ] Advanced filtering for projects
- [ ] Testimonials section
- [ ] Resume download functionality

---

**Built with ❤️ for a peaceful world** 
