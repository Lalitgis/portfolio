# Lalit BC - Portfolio Website

A modern, responsive portfolio website built with Next.js, React, and Tailwind CSS.

## Features

- 🌓 Dark/Light mode toggle
- 📱 Fully responsive design
- 🚀 Fast performance with Next.js
- 📧 Email integration (opens Gmail)
- 🎨 Beautiful UI with Tailwind CSS
- 📝 Centralized content management
- ✨ Smooth animations with Framer Motion

## Pages

- **Home** - Profile and introduction
- **Projects** - Portfolio projects
- **Skills** - Technical and domain expertise
- **Talks** - Invited talks and training programs
- **Posters** - Conference poster presentations
- **Publications** - Research papers and articles
- **Open Source** - Open source contributions
- **CV** - Curriculum vitae

## Getting Started

### Prerequisites
- Node.js 16+ installed
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Building for Production

```bash
npm run build
npm start
```

## Deployment to Vercel

### Method 1: Automatic (Recommended)

1. Push your code to GitHub:
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel auto-detects Next.js settings
6. Click "Deploy"
7. Add your custom domain in Settings → Domains

### Method 2: Vercel CLI

```bash
npm i -g vercel
vercel
```

## Updating Content

All content is managed in `lib/portfolio-data.ts`:

- `projects` - Your projects
- `publications` - Papers and articles
- `talks` - Invited talks
- `skills` - Technical skills
- `openSourceContributions` - Open source projects
- `posterPresentations` - Conference posters

Edit this file to update website content without touching component files.

## Customization

### Change Email Links
Update email URLs in:
- `components/navigation.tsx`
- `app/page.tsx`

### Change Social Links
Update social links in:
- `components/navigation.tsx`
- `app/page.tsx`
- All page footers

### Update Interests & Education
Edit directly in `app/page.tsx` (lines 165-195)

## Technologies Used

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **UI Components**: shadcn/ui

## License

MIT License

## Author

Lalit BC - [Website](https://lalitbc.com.np)
