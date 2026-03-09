<div align="center">
<img alt="Portfolio Template" src="/portfolio.png" width="90%">
</div>

# Portfolio Template

A high-performance, ultra-premium developer portfolio template built with **Next.js 16**, **Tailwind CSS 4**, and **Motion**. Designed to showcase your professional journey with a focus on immersive aesthetics and fluid interactions.

## 🚀 Key Features

- **Theme-Synced Scheduling**: Native Cal.com integration with a custom programmatic solution that synchronizes the calendar's appearance with your website's light/dark mode in real-time.
- **Dynamic Content**: Manage your entire portfolio (experience, ventures, testimonials, bio) from a [single configuration file](./src/data/resume.tsx).
- **Modern Tech Stack**: Leveraging the latest React 19, Next.js 16 (App Router), and Tailwind CSS 4 features.
- **Premium Animations**: Powered by Motion (formerly Framer Motion) using optimized `BlurFade` and `AnimatePresence` effects.
- **Immersive Design**: Curated design system featuring glassmorphic navigation, mesh gradients, and elegant typography.
- **SEO Optimized**: Pre-configured metadata, OpenGraph tags, and semantic HTML for maximum reach.

## 🛠️ Tech Stack

- **Framework**: Next.js 16.1 (App Router)
- **Styling**: Tailwind CSS 4.0 (using the latest `@theme` block and `oklch` colors)
- **Runtime**: React 19.0 (React Server Components)
- **Animations**: Motion 12+
- **Scheduling**: Cal.com Embed React
- **Theming**: Next Themes (Dynamic Light/Dark Mode)
- **Typography**: Inter (Sans) & Playfair Display (Serif Accent)

## 📦 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/muzammil-15/portfolio-template
cd portfolio-template
```

### 2. Install dependencies
```bash
pnpm install
```

### 3. Environment Setup
Create a `.env` file in the root directory (or use `.env.local`):
```bash
NEXT_PUBLIC_CAL_LINK="your-cal-link/username"
NEXT_PUBLIC_CAL_NAMESPACE="portfolio"
```

### 4. Personalize your content
Open [src/data/resume.tsx](./src/data/resume.tsx) and update the `DATA` object with your details, projects, and social links. This is the only file you need to edit to get started!

### 5. Run locally
```bash
pnpm dev
```

## 🎨 Customization

- **Global Styles**: Modify the palette in [src/app/globals.css](./src/app/globals.css).
- **Section Layouts**: Each section is a modular component located in `src/components/section/`.
- **Icons**: Extended icon set available in `src/components/icons.tsx`.

## 📄 License

Licensed under the MIT License - feel free to build upon this template for your personal use.