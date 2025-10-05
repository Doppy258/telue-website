# Telue - Precision Medium-Speed Wire-Cut EDM Machines

A modern, clean, and high-converting website for Shanghai Telue Precision CNC Machine Tool Co., Ltd. - a leading manufacturer of micron-level medium-speed wire-cutting EDM machines.

## Features

- 🎨 **Clean & Minimalistic Design** - Purple and white brand colors with modern aesthetics
- 🌍 **Bilingual Support** - Easy switching between English and Chinese
- 📱 **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- ⚡ **High Performance** - Built with Next.js 14 and optimized for speed
- 🎯 **Conversion-Focused** - Strategic CTAs and user journey optimization
- ♿ **Accessible** - WCAG compliant with semantic HTML

## Tech Stack

- **Framework:** Next.js 14 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Animations:** Framer Motion

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or pnpm package manager

### Installation

1. Install dependencies:

```bash
npm install
# or
pnpm install
```

2. Run the development server:

```bash
npm run dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
telue-website/
├── app/
│   ├── about/          # About Us page
│   ├── contact/        # Contact page
│   ├── innovation/     # Innovation & Research page
│   ├── news/           # News & Events page
│   ├── products/       # Products page
│   ├── solutions/      # Industry Solutions page
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout with header/footer
│   └── page.tsx        # Home page
├── components/
│   ├── footer.tsx      # Footer component
│   ├── header.tsx      # Navigation header
│   └── language-provider.tsx  # Bilingual context
├── lib/
│   └── utils.ts        # Utility functions
└── public/             # Static assets
```

## Key Pages

- **Home** - Hero section, features, technology highlights, trusted clients
- **About** - Company history, founder's message, timeline, core values
- **Products** - TLW/TLK/TLM series with specifications and features
- **Solutions** - Industry-specific applications (Aerospace, Automotive, Medical, Mold)
- **Innovation** - R&D achievements, patented technologies, milestones
- **News** - Latest updates, events, and company announcements
- **Contact** - Contact form, office information, experience center details

## Brand Colors

- **Primary Purple:** `hsl(270, 60%, 50%)`
- **White Background:** `hsl(0, 0%, 100%)`
- **Purple Accents:** Various shades of purple for hierarchy

## Customization

### Changing Content

Edit the page files in the `app/` directory. Each page uses the `useLanguage()` hook for bilingual content:

```tsx
const { t } = useLanguage();

// Usage
<h1>{t("English Text", "中文文本")}</h1>
```

### Styling

Modify `app/globals.css` for global styles or use Tailwind utility classes directly in components.

### Adding Pages

Create a new folder in `app/` with a `page.tsx` file:

```tsx
export default function NewPage() {
  return <div>Your content</div>;
}
```

## Performance Optimization

- Images should be placed in `public/images/` and loaded using Next.js `<Image>` component
- Use dynamic imports for heavy components
- Implement proper caching strategies in production

## Deployment

This site can be deployed to:

- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- Any Node.js hosting platform

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2024 Shanghai Telue Precision CNC Machine Tool Co., Ltd. All rights reserved.

## Contact

For questions or support:
- Email: info@telue.com
- Phone: +86 21 5958 8888
- Address: 203 Juyuan Road, Jiading District, Shanghai, China




