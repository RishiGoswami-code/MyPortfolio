# Chandan Giri — portfolio

A Framer-style SaaS landing page where the product is me. Layout, motion and type follow the structure of the Lume Stitches Framer template (stacked rounded panels, hanging tab nav, digit loader, tilting app window, sticky question sequence, flying benefit cards, wide closing banner), rebuilt from scratch in React with my own content.

## Real product visuals (`Frontend/public/products/`)

| File | Source |
| --- | --- |
| `mindfries-site.webp` | Screenshot of mindfries.com |
| `mindfries-poster.webp` | mindfries.com launch video poster |
| `ozymor-site.webp`, `ozymor-dashboard.webp` | Screenshots of ozymorlab.vercel.app |
| `drishti-lab.mp4`, `drishti-lab*.webp` | Recording of `drishti-ugv/prototype/web/drishti_lab.html` running the gauntlet course |
| `viking-app.webp` | `VikingMachineLearningModel/index.html` rendered |
| `quant-*.webp` | Charts from `QuantAnalysis/Models/` |
| `cgc-*.webp` | From the CodeGraphContext repo (MIT licence) |

## Stack

React 19, Vite 6, Motion (`motion/react`) for scroll-linked animation, Lenis for smooth scrolling, self-hosted Inter and Archivo variable fonts. All copy lives in `Frontend/src/data/portfolio.json`. Respects `prefers-reduced-motion`.

```bash
cd Frontend
npm install
npm run dev
```
