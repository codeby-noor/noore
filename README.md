# NOORÉ — Haute Modest Fashion & Luxury Abaya Atelier

> *"Modesty, Redefined. Timeless silhouettes. Effortless elegance."*

**NOORÉ** is an editorial luxury e-commerce frontend inspired by the clean, sophisticated visual language of international high fashion houses (ZARA meets haute couture boutique). Designed specifically for discerning women seeking bespoke abayas, fluid modest coordinates, Medina silk hijabs, and curated essentials.

---

## Brand Identity & Aesthetic Direction

- **Editorial Palette**: Muted neutrals — deep noir (`#111111`), pure white (`#FFFFFF`), raw ivory (`#FAF8F5`), warm sand (`#F2ECE4`), and soft oat taupe (`#D9CFC1`).
- **Typography**: Dual serif headlines (**Bodoni Moda** & **Cormorant Garamond**) paired with architectural sans-serif body typography (**Montserrat** & **Plus Jakarta Sans**).
- **Visual Presentation**: Generous whitespace, razor-thin borders, full-bleed photography, dual-image hover swaps, and subtle micro-interactions.

---

## Features & Architecture

### 1. Curated Product Catalog
- **24 Realistic Luxury Products** across 5 specialized categories:
  - **Abayas**: Classic Noir Nida, Pearl Raw Silk, Desert Sand Linen, Hand-Embroidered Velvet Kimono, etc.
  - **Hijabs**: Pure Medina Silk, Bamboo Jersey, Pleated Georgette, and Airy Modal.
  - **Two-Piece Sets**: Tailored Linen Coordinate, Ribbed Knit Tunic Set, Pleated Palazzo Set.
  - **Modest Essentials**: Bamboo Slip Dress, Non-Slip Magnetic Pins, Satin Under-Cap.
  - **Prayer Wear**: Batwing One-Piece Prayer Abayas with integrated headscarves.
- **Dynamic Asset Layer**: Curated authentic Unsplash fashion photography with automatic fallback to responsive branded SVG monogram generators.

### 2. Complete Customer Journeys
- **Editorial Homepage**: Slim shipping banner, sticky navigation header, full-bleed campaign hero, category showcase, new arrivals, brand philosophy narrative, and newsletter subscription.
- **Shop & Product Listing (PLP)**: Multi-attribute filtering (category, price range, fabric, color), instant sorting (price, popularity, newest), and responsive 2-to-4 column grid layouts.
- **Product Detail Page (PDP)**: Multi-angle high-resolution gallery, interactive color swatches, height-based Abaya size selector (52–60), fabric care accordions, and a mobile-exclusive sticky purchase bar.
- **Shopping Bag & Slide-Over Drawer**: Real-time subtotal computation, complimentary express shipping threshold progress bar ($100), item quantity steppers, promo code engine (`NOORE10`, `WELCOME15`), luxury gift wrapping toggle (+$10), and `localStorage` persistence.
- **Client Curation (Wishlist)**: Persistent saved items with badge counters and instant move-to-bag capability.
- **Predictive Search**: Real-time debounced query filtering across titles, fabrics, colors, and categories.
- **Editorial Pages**:
  - `/lookbook`: Curated seasonal campaigns with interactive "Shop the Look" tags.
  - `/about`: Atelier craftsmanship story, ethical production, and fabric philosophy.
  - `/size-guide`: Height-to-length Abaya measurement table and international apparel conversion chart.
  - `/contact`: Private concierge, bespoke styling inquiry form, and VIP client care details.
  - `/checkout`: Luxury one-page streamlined client checkout flow with mock order fulfillment.

---

## Technology Stack

- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom editorial color schemes, fluid clamp typography, and custom utilities
- **Icons**: Lucide React
- **Routing**: React Router DOM v6 with code-split route chunking
- **Build Tool**: Vite 5
- **Quality Assurance**: Automated Playwright test suite for cross-viewport visual and responsive auditing

---

## Responsive Breakpoints & Viewport Certification

NOORÉ has been tested and certified across all standard device viewports with **zero horizontal overflow**:

| Device Category | Viewport | Grid Layout |
| :--- | :--- | :--- |
| **Small Phone (iPhone SE)** | 320px | 2 Columns |
| **Standard Phone (iPhone 8 / SE2)** | 375px | 2 Columns |
| **Modern Smartphone (iPhone 14/15/16)** | 390px | 2 Columns |
| **Large Smartphone (Pro Max / Plus)** | 430px | 2 Columns |
| **Tablet Portrait (iPad)** | 768px | 3 Columns |
| **Tablet Landscape / Small Laptop** | 1024px | 3–4 Columns |
| **Desktop / MacBook** | 1440px | 4 Columns |
| **Ultra-Wide / 4K Displays** | 1920px+ | 4 Columns (Centered) |

---

## Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/codeby-noor/noore.git

# Navigate to project directory
cd noore

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:3000` to explore the experience.

### Production Build

```bash
# Type check and generate production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## License

Private and Proprietary — Created for NOORÉ Haute Modesty Atelier.
