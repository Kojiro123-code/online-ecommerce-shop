# ⚡ AURA Store — Server-Side Rendered (SSR) E-Commerce Platform

A production-ready, high-performance E-Commerce storefront engineered with **Next.js 14 (App Router)** and **Server-Side Rendering (SSR)**. Features a curated 10-item sample catalog, dynamic product detail pages, interactive cart state, checkout workflow, and automated standalone **`.html` invoice generation & download**.

---

## 🌟 Key Features

### 1. 🖥️ Pure Server-Side Rendering (SSR)
- **Zero Blank Flashes / Instant HTML Delivery:** Product catalogs and detail pages are dynamically rendered on the server on every request.
- **Dynamic SEO Metadata:** Auto-generated metadata tags (`title`, `description`, open-graph) per product for optimal search engine indexing.

### 2. 🛍️ Catalog & Home Page (`/`)
- Dynamic SSR grid displaying all **10 curated sample products**.
- Interactive category filtering (`Audio`, `Wearables`, `Workspace`, `Photography`, `Accessories`).
- Real-time search query matching and sorting (Featured, Price Low-to-High, Price High-to-Low, Highest Rated).
- Quick **Add to Cart** action with visual feedback and stock indicator.

### 3. 🔍 Product Detail Page (`/products/[id]`)
- Server-rendered dynamic route (`/products/[id]`).
- High-resolution product imagery and category badge.
- Key features list and structured **Technical Specifications** table.
- Stock availability indicator and interactive quantity selector.
- Algorithmic **Related Products** recommendation carousel.

### 4. 🛒 Add to Cart & Cart List (`/cart`)
- React Context cart store with hydration-safe local persistence.
- Real-time cart badge counter across the navigation header.
- **Cart List table:** item preview thumbnail, SKU, unit price, quantity increment/decrement controls, line item subtotals, and remove actions.
- **Dynamic Free Shipping Progress Bar:** calculates threshold ($150) and updates the required amount in real time.
- Order summary with subtotal, calculated shipping, and sales tax (8%).

### 5. 💳 Checkout Workflow (`/checkout`)
- Contact & Shipping Address form with validation.
- Multiple payment method selections:
  - Credit / Debit Card (Simulated Online Gateway)
  - Direct Bank Wire / Virtual Account
  - Cash on Delivery (COD)
- Live order review sidebar and one-click submission.

### 6. 📄 Standalone Invoice (`.html`)
- **Interactive On-Screen Invoice View (`/invoice/[id]`):** Official order confirmation document displaying Order ID, timestamps, customer details, payment status, itemized table, and total balance.
- **Direct `.html` File Download:** Generates and downloads a clean, self-contained `invoice-[id].html` file directly to the client's device with zero external dependencies.
- **Direct API Endpoint (`/api/invoice/[id]?download=true`):** Server endpoint that produces downloadable HTML invoices via standard HTTP response headers.
- **Print & PDF Support:** Pre-configured `@media print` CSS stylesheet for 1-click printing or "Save as PDF".

---

## 📦 10 Curated Sample Products

The project includes 10 realistic, fully-specified hardware and workspace products:

| ID | Product Name | Category | Price | Rating | Stock |
|---|---|---|---|---|---|
| `prod-001` | **Apex Pro Wireless ANC Headphones** | Audio | $299.99 | 4.9 ★ | 24 |
| `prod-002` | **Chrono Pulse OLED Smartwatch** | Wearables | $249.00 | 4.8 ★ | 18 |
| `prod-003` | **Lumina Ergo Mechanical Keyboard** | Workspace | $159.50 | 4.9 ★ | 31 |
| `prod-004` | **AeroGlide Precision Ergonomic Mouse** | Workspace | $89.99 | 4.7 ★ | 42 |
| `prod-005` | **Prism Ultra 4K Cinema Webcam** | Photography | $179.00 | 4.8 ★ | 15 |
| `prod-006` | **NovaBeam Studio Dynamic Microphone** | Audio | $139.99 | 4.9 ★ | 20 |
| `prod-007` | **ZenDesk Solid Walnut Desk Organizer** | Workspace | $119.00 | 4.8 ★ | 12 |
| `prod-008` | **AuraGlow Smart Monitor Lightbar** | Accessories | $79.99 | 4.7 ★ | 35 |
| `prod-009` | **TitanShield Magnetic 20000mAh Power Bank** | Accessories | $69.95 | 4.6 ★ | 50 |
| `prod-010` | **SoundSphere 360 Spatial Speaker** | Audio | $199.00 | 4.9 ★ | 19 |

---

## 🚀 Quick Start (Local Development)

### Prerequisites
- Node.js v18.17.0 or higher
- npm or pnpm or yarn

### 1. Install Dependencies
\`\`\`bash
npm install
\`\`\`

### 2. Run the Development Server
\`\`\`bash
npm run dev
\`\`\`
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build & Test Production SSR
\`\`\`bash
npm run build
npm run start
\`\`\`

---

## 🌐 Hosting & Deployment

Because this project utilizes **Next.js Server-Side Rendering (SSR)**, it can be deployed seamlessly to any Node.js hosting platform or edge network:

### Option A: Vercel (Recommended — 1-Click Zero Config)
Vercel is the creator and optimal deployment platform for Next.js SSR apps:
1. Push your repository to GitHub (see instructions below).
2. Go to [https://vercel.com/new](https://vercel.com/new).
3. Import your GitHub repository (`ssr-ecommerce`).
4. Keep all default build settings (`npm run build`, output `.next`).
5. Click **Deploy**. Your SSR site and API routes will be live instantly with global CDN and edge SSR caching!

### Option B: Render / Railway / Heroku
1. Create a **New Web Service** connected to your GitHub repository.
2. Set Build Command: `npm install && npm run build`
3. Set Start Command: `npm run start`
4. Set Environment Variable: `PORT=3000`

### Option C: Docker (Self-Hosted)
Create a `Dockerfile` with Node 20 alpine, copy files, run `npm run build`, and expose port 3000:
\`\`\`dockerfile
FROM node:20-alpine AS runner
WORKDIR /app
COPY . .
RUN npm install && npm run build
EXPOSE 3000
CMD ["npm", "run", "start"]
\`\`\`

---

## 🐙 Push to GitHub (Public Repository)

To publish this source code to your public GitHub account:

### 1. Create a new public repository on GitHub
- Go to [https://github.com/new](https://github.com/new).
- Name your repository (e.g., `ssr-ecommerce` or `aura-store-ssr`).
- Choose **Public**.
- Leave "Add a README file" unchecked (this repository already has one).
- Click **Create repository**.

### 2. Push from your local terminal
Inside this directory (`ssr-ecommerce`), run:

\`\`\`bash
# Configure your git identity (if not already set)
git config user.name "Your Name"
git config user.email "your.email@example.com"

# Set branch to main and stage files
git branch -M main
git add .
git commit -m "feat: complete SSR e-commerce storefront with 10 sample products and HTML invoice"

# Link to your remote GitHub repository
git remote set-url origin https://github.com/Kojiro123-code/E-Com.git
git push -u origin main
\`\`\`

---

## 📁 Project Structure

\`\`\`
ssr-ecommerce/
├── src/
│   ├── app/
│   │   ├── layout.tsx             # Root layout with CartProvider, Navbar, Footer
│   │   ├── globals.css            # Global Tailwind styling & print rules
│   │   ├── page.tsx               # Catalog / Home page (SSR dynamic)
│   │   ├── products/
│   │   │   └── [id]/
│   │   │       └── page.tsx       # Product Detail page (SSR dynamic + metadata)
│   │   ├── cart/
│   │   │   └── page.tsx           # Cart review page
│   │   ├── checkout/
│   │   │   └── page.tsx           # Checkout form & order placement
│   │   ├── invoice/
│   │   │   └── [id]/
│   │   │       ├── page.tsx       # Invoice page (SSR dynamic)
│   │   │       └── InvoicePageClient.tsx
│   │   └── api/
│   │       └── invoice/
│   │           └── [id]/
│   │               └── route.ts   # Standalone .html invoice download API
│   ├── components/
│   │   ├── Navbar.tsx             # Top navigation with live cart badge
│   │   ├── Footer.tsx             # Footer with SSR badges & architecture info
│   │   ├── CatalogSection.tsx     # Filterable product grid (client controls)
│   │   ├── ProductCard.tsx        # Individual product card
│   │   ├── AddToCartButton.tsx    # Interactive add-to-cart button
│   │   ├── CartList.tsx           # Complete cart table & cost calculator
│   │   ├── CheckoutForm.tsx       # Multi-field checkout with simulated payment
│   │   └── InvoiceView.tsx        # Printable & downloadable HTML invoice view
│   ├── context/
│   │   └── CartContext.tsx        # Cart state & order history
│   ├── data/
│   │   └── products.ts            # 10 rich sample products with specs & images
│   ├── types/
│   │   └── index.ts               # TypeScript interfaces
│   └── utils/
│       └── invoiceHtml.ts         # Generates clean standalone HTML invoice
├── package.json
├── tailwind.config.js
├── tsconfig.json
├── next.config.mjs
└── README.md
\`\`\`

---

## 📄 License
MIT License. Open source and free to use for portfolios, client demonstrations, and commercial projects.

