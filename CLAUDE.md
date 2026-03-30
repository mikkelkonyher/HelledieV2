# CLAUDE.md - HelledieV2 Project Guide

## What is this project?
A personal/professional website for **DJ Ole Helledie**, a Danish DJ specializing in weddings, corporate parties, and private events. The site showcases his services, gallery, and family artistic connections.

## Tech Stack
- **Framework**: React 18 (Create React App via `react-scripts`)
- **Styling**: Tailwind CSS 3 + `tailwindcss-animate`
- **UI Components**: shadcn/ui (Radix UI primitives in `src/components/ui/`)
- **Routing**: React Router DOM v7
- **Icons**: Lucide React
- **Build tooling**: CRACO (for webpack alias `@` → `src/`)
- **Forms**: React Hook Form + Zod validation (installed but not yet used in pages)
- **HTTP**: Axios (installed but not yet used — no backend yet)

## How to Run
```bash
cd frontend
npm start        # Development server (react-scripts start)
npm run build    # Production build
npm test         # Run tests
```
There is no `npm run dev` — use `npm start`.

## Project Structure
```
HelledieV2/
├── frontend/                   # All code lives here (no backend yet)
│   ├── public/
│   │   ├── index.html          # Entry HTML
│   │   ├── .htaccess           # Apache rewrite rules for SPA
│   │   └── assets/             # Static images (DJ photos, logo, gallery)
│   │       └── Gallery/        # Gallery-specific photos
│   ├── src/
│   │   ├── App.js              # Root component — routes & layout
│   │   ├── index.js            # React DOM entry point
│   │   ├── index.css           # Tailwind base + CSS variables (shadcn theme)
│   │   ├── App.css             # Custom animations (fade-in, slide-up, etc.)
│   │   ├── mock.js             # Placeholder data (bio, gallery URLs, contacts, family links)
│   │   ├── contexts/
│   │   │   └── LanguageContext.js  # i18n: Danish (da) / English (en) toggle with all translations
│   │   ├── components/
│   │   │   ├── Navbar.js       # Sticky nav with logo, links, language toggle, mobile hamburger
│   │   │   ├── Footer.js       # Contact info, social links, copyright
│   │   │   ├── ScrollToTop.js  # Scrolls to top on route change
│   │   │   └── ui/             # ~44 shadcn/ui components (button, card, dialog, etc.)
│   │   ├── pages/
│   │   │   ├── Home.js         # Hero image, services cards, split image CTA
│   │   │   ├── About.js        # Bio, expertise cards, philosophy quote, event types
│   │   │   ├── Gallery.js      # Photo grid with lightbox
│   │   │   └── Links.js        # Family artistic connections (Lene Helledie, daughter)
│   │   └── lib/
│   │       └── utils.js        # cn() helper (clsx + tailwind-merge)
│   ├── craco.config.js         # Webpack alias + hot reload config
│   ├── tailwind.config.js      # shadcn/ui theme tokens (CSS variables)
│   ├── postcss.config.js       # PostCSS: tailwindcss + autoprefixer
│   └── components.json         # shadcn/ui CLI config
```

## Key Architecture Decisions

### Internationalization (i18n)
- All UI text is in `LanguageContext.js` — **not** in the page components
- Two languages: Danish (`da`, default) and English (`en`)
- Access via `useLanguage()` hook → `t('translationKey')`
- Language toggle button in Navbar

### Data Layer
- Currently **frontend-only** — no backend/API
- `mock.js` holds placeholder data (bio, gallery images, contact, family links, social media)
- Gallery images: mix of local files (`/assets/Gallery/`) and Unsplash URLs in mock.js
- Axios is installed for future backend integration

### Styling
- Tailwind CSS with shadcn/ui CSS variable theming
- Design aesthetic: clean, minimal, elegant — lots of `font-light`, `tracking-wide`, gradients
- Color palette: indigo/purple primary, rose accents, gray neutrals
- Responsive: mobile hamburger menu, grid layouts collapse to single column

## Routes
| Path       | Component  | Description                        |
|------------|------------|------------------------------------|
| `/`        | Home       | Hero, services, split image CTA    |
| `/about`   | About      | Bio, expertise, philosophy, events |
| `/gallery` | Gallery    | Photo grid with captions           |
| `/links`   | Links      | Family artistic connections         |

## Contact & Social
- Email: DJ@helledie.dk
- Facebook: facebook.com/dj.helledie
- Instagram: instagram.com/ole_helledie
- LinkedIn: linkedin.com/in/helledie

## Deployment
- `.htaccess` in `public/` suggests Apache hosting with SPA fallback rewrites
- `build/` directory exists (pre-built production bundle)
