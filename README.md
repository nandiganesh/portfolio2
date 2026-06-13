# Portfolio — Next.js + Tailwind + Framer Motion

A dark, bold, minimal developer portfolio template with scroll-triggered
animations, smooth scrolling, SEO + AEO (AI Engine Optimization) baked in.

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## ✏️ How to customize

### 1. Edit your content — `lib/data.ts`
This is the **single source of truth**. Update:
- `SITE` — your name, role, bio, email, location, resume URL
- `SOCIALS` — your social links
- `STATS` — your numbers (years experience, projects, etc.)
- `STACK` — your tech stack (used in the marquee + about page)
- `PROJECTS` — your projects (each gets an auto-generated `/projects/[slug]` page)
- `EXPERIENCE` — your work history
- `POSTS` — optional blog posts (extend `/app/blog` if you want a full blog)

### 2. Add your images to `/public`
- `/public/profile.jpg` — your photo (used on About page)
- `/public/projects/*.jpg` — project screenshots (1200x630 or 16:9 recommended)
- `/public/og-image.jpg` — social share image (1200x630)
- `/public/favicon.ico`, `/public/apple-touch-icon.png`
- `/public/icon-192.png`, `/public/icon-512.png` — PWA icons
- `/public/resume.pdf` — your resume

### 3. Fonts
The template uses Inter + JetBrains Mono via `next/font/google` (already
configured, zero setup). To use **Clash Display** for headings (referenced in
`tailwind.config.ts` as `font-display`), either:
- Download from [Fontshare](https://www.fontshare.com/fonts/clash-display)
  and add via `next/font/local`, or
- Replace `--font-display` in `globals.css` with another Google Font.

### 4. Brand color
Change the `accent` color in `tailwind.config.ts` (currently lime `#c9ff3d`)
to your preferred brand color.

### 5. Contact form
`components/ContactForm.tsx` currently logs to console. Wire it up to:
- [Formspree](https://formspree.io) (easiest — just change the `action` URL)
- A Next.js API route + [Resend](https://resend.com) for email
- Any backend of your choice

### 6. Update SITE.url in `lib/data.ts`
Set this to your production domain — it powers canonical URLs, sitemap,
robots.txt, and Open Graph tags.

## 🔍 SEO & AEO Features Included

- ✅ Per-page metadata (title, description, OG, Twitter cards)
- ✅ JSON-LD structured data (Person + WebSite + CreativeWork schemas) —
  helps AI assistants (ChatGPT, Perplexity, Claude) accurately answer
  questions about you and your work
- ✅ Auto-generated `sitemap.xml` and `robots.txt`
- ✅ AI crawler permissions (GPTBot, ClaudeBot, PerplexityBot, etc.)
- ✅ Semantic HTML structure
- ✅ `next/image` optimization (AVIF/WebP)
- ✅ Web app manifest (PWA-ready)

## 🎬 Animation Features

- Scroll-triggered reveal animations (`Reveal`, `StaggerContainer` in `components/Motion.tsx`)
- Split-text line animations for headings
- Smooth scroll via Lenis
- Magnetic buttons that follow the cursor
- Custom cursor (desktop only)
- Marquee tech stack ticker
- Hover image previews on project list

## 📁 Structure

```
app/
  layout.tsx          # Root layout, fonts, SEO, JSON-LD
  page.tsx            # Homepage
  projects/
    page.tsx          # Projects grid
    [slug]/page.tsx   # Project case study (dynamic)
  experience/page.tsx
  about/page.tsx
  contact/page.tsx
  sitemap.ts
  robots.ts
  manifest.ts
components/
  Hero.tsx, Stats.tsx, FeaturedProjects.tsx, TechStack.tsx,
  ExperiencePreview.tsx, CTASection.tsx, Navbar.tsx, Footer.tsx
  Motion.tsx          # Reveal, Stagger, SplitText helpers
  MagneticButton.tsx
  CustomCursor.tsx
  SmoothScrollProvider.tsx
  ContactForm.tsx
  ProjectsGrid.tsx
lib/
  data.ts             # ⭐ EDIT THIS FILE — all your content
```

## 📈 Performance Tips

- Compress all images before adding to `/public` (use [Squoosh](https://squoosh.app))
- Keep hero images under 200KB
- Run `npm run build` and check the bundle analysis before deploying
- Deploy on Vercel for automatic edge caching + image optimization
