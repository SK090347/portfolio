# Sumit Kumar Ta — Portfolio


**Live site:** https://sk090347.github.io/portfolio/
> 3D interactive portfolio — WebGL black-hole hero · Adamas CSE AI/ML · Sumit Kumar Ta

Flagship personal site for **Sumit Kumar Ta**, first-year B.Tech CSE (AI & ML) at Adamas University, Kolkata.

## Features

- **WebGL Schwarzschild black-hole hero** — real path-traced accretion disc (`src/components/ui/blackhole-hero-section.tsx`)
- Next.js App Router · TypeScript · Tailwind CSS · shadcn/ui structure
- Framer Motion scroll reveals (respects `prefers-reduced-motion`)
- Projects grid for all notable public repositories
- Contact cards: GitHub, LinkedIn, Email, Instagram

## Screenshots

<!-- Add local screenshots after first deploy -->
| Hero | Projects |
| --- | --- |
| ![hero](docs/hero.png) | ![projects](docs/projects.png) |

## Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS v4
- shadcn/ui (`src/components/ui/`)
- Framer Motion
- lucide-react
- Custom WebGL (no Three.js required for the hero)

## Setup

```bash
npm install
cp .env.example .env.local   # optional Instagram override
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Dev server (Turbopack) |
| `npm run build` | Production build |
| `npm start` | Serve production build |
| `npm run lint` | ESLint |

## Deploy (Vercel)

1. Import `SK090347/portfolio` on [Vercel](https://vercel.com)
2. Framework preset: **Next.js**
3. Optional env: `NEXT_PUBLIC_INSTAGRAM_URL`
4. Deploy

GitHub Pages hub: [sk090347.github.io](https://sk090347.github.io/)

## Contact

- GitHub: [SK090347](https://github.com/SK090347)
- LinkedIn: [sumit-kumar-ta-998b25309](https://www.linkedin.com/in/sumit-kumar-ta-998b25309)
- Email: [tasumitkumar36@gmail.com](mailto:tasumitkumar36@gmail.com)
- Instagram: [@glitch_realm_007](https://www.instagram.com/glitch_realm_007/)

## License

Dual-licensed under **MIT** (`LICENSE`) and **Apache-2.0** (`LICENSE-APACHE`).

Black-hole hero component adapted from the community Black Hole Hero Section (MIT).
