# Online Store

Angular application displaying a catalog of products from [Kaspi.kz](https://kaspi.kz).

## Features

- **Product catalog** — 11+ real products from kaspi.kz with images, descriptions, prices, and ratings
- **Product cards** — Reusable `ProductCardComponent` with image gallery (carousel + thumbnails)
- **Share** — Share to WhatsApp and Telegram with pre-filled product links
- **Responsive layout** — CSS Grid adapts to desktop, tablet, and mobile
- **Routing** — Angular routing enabled

## Prerequisites

- Node.js v18 or later
- npm
- Angular CLI: `npm install -g @angular/cli`

## Setup & Run

```bash
cd lab4/task2/online-store
npm install
ng serve
```

Open [http://localhost:4200](http://localhost:4200).

## Project Structure

```
src/
  app/
    models/
      product.model.ts       # Product interface
    data/
      products.data.ts       # Product catalog from kaspi.kz
    components/
      product-list/          # Main catalog grid
      product-card/          # Individual product card with gallery & share
```

## Tech Stack

- Angular 18+ (standalone components)
- TypeScript 5.6
- CSS (Flexbox & Grid)
