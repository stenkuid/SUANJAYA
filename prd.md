# PRD — Website #6: SUANJAYA

**Premium Electronics Store Website**
**Architecture:** Astro + Cloudflare Pages
**Deployment:** Static-first, lightweight, SEO-focused, scalable catalog architecture

---

# 1. Product Overview

### Brand

**SUANJAYA**

### Industry

Electronics Retail

### Website Type

**Electronics Store Catalog + Local Lead Generation**

Website berfungsi sebagai:
* online product catalog
* product discovery platform
* promotional storefront
* local store information
* WhatsApp sales channel
* SEO landing platform

MVP **bukan marketplace/e-commerce penuh**.

---

# 2. Product Positioning

SUANJAYA diposisikan sebagai toko elektronik modern yang menyediakan berbagai kebutuhan elektronik dengan pilihan produk yang jelas, informasi mudah dipahami, dan bantuan pembelian melalui tim toko.

### Brand Promise

> **SMARTER CHOICES. BETTER TECH.**

### Main Message

> Temukan elektronik yang tepat untuk kebutuhan rumah, kerja, hiburan, dan gaya hidup Anda.

### Brand Personality

* modern
* reliable
* practical
* knowledgeable
* accessible
* trustworthy

---

# 3. Target Audience

## Primary — Household Buyers

Mencari:
* TV
* kulkas
* mesin cuci
* AC
* peralatan rumah tangga
* elektronik sehari-hari

## Secondary — Technology Buyers

Mencari:
* smartphone
* laptop
* accessories
* audio
* smart devices

## Tertiary — Business Buyers

Mencari kebutuhan:
* kantor
* toko
* hospitality
* small business

---

# 4. Business Objectives

1. Meningkatkan product discovery.
2. Mengarahkan pelanggan ke toko.
3. Meningkatkan inquiry melalui WhatsApp.
4. Menampilkan promo.
5. Meningkatkan local SEO.
6. Menjadi katalog digital untuk sales team.
7. Membangun kredibilitas SUANJAYA.

---

# 5. Primary Conversion

**Chat / Ask About Product**

Secondary:
* View Product
* Check Price
* Visit Store
* WhatsApp
* Get Directions
* Call

---

# 6. Architecture Decision

Gunakan:

**Astro Static + Cloudflare Pages**

Catalog disimpan sebagai static data.

```text
src/data/
├── products.ts
├── categories.ts
├── brands.ts
├── promotions.ts
└── locations.ts
```

### Tidak menggunakan D1 pada MVP

Karena catalog dapat di-generate menjadi static pages.

D1 baru diperlukan jika:
* ribuan SKU
* inventory real-time
* admin dashboard
* dynamic pricing
* customer accounts
* order database

---

# 7. Sitemap

```text
/
├── /products
├── /products/[slug]
├── /categories
├── /categories/[slug]
├── /brands
├── /promotions
├── /stores
├── /about
├── /contact
└── /privacy
```

### P0

```text
/
├── /products
├── /products/[slug]
└── /contact
```

### P1

```text
/categories
/brands
/promotions
/stores
```

---

# 8. Homepage Funnel

```text
Hero
↓
Search Products
↓
Featured Categories
↓
Best Sellers
↓
Promotions
↓
Featured Products
↓
Why SUANJAYA
↓
Brands
↓
Store Location
↓
CTA
↓
Footer
```

---

# 9. Announcement Bar

Contoh:

> **PROMO BULAN INI — SPECIAL DEALS ON SELECTED PRODUCTS**

CTA:

**See Promotions**

Content dapat diaktifkan/nonaktifkan.

---

# 10. Navbar

Desktop:

```text
SUANJAYA

Products
Categories
Brands
Promotions
Stores
About

                     WhatsApp
```

Mobile:

```text
SUANJAYA          ☰
```

Primary action:

**WhatsApp**

---

# 11. Hero Section

### Headline

> **TECH THAT FITS
> YOUR LIFE.**

### Supporting Copy

> Discover electronics and everyday technology selected for your home, work, and lifestyle.

CTA:

**Explore Products**

Secondary:

**Visit Store**

---

# 12. Hero Visual

Visual:
* modern electronics
* TV
* smartphone
* laptop
* home appliances
* clean retail environment

Tidak menampilkan terlalu banyak produk sekaligus.

Hero harus mempunyai satu focal point.

---

# 13. Product Search

Search menjadi feature penting.

```text
Search products...

[Search]
```

Contoh query:
* Samsung TV
* laptop
* refrigerator
* speaker
* washing machine

MVP search dilakukan terhadap static product dataset.

---

# 14. Category Section

Headline:

> **SHOP BY CATEGORY**

Categories:

```text
TV & Entertainment
Mobile & Accessories
Laptop & Computing
Home Appliances
Audio
Smart Home
Kitchen Electronics
Accessories
```

Category card:

```text
[IMAGE]

TV & Entertainment

Explore category →
```

---

# 15. Product Listing

Headline:

> **FEATURED PRODUCTS**

Grid 4 columns desktop.

Card:

```text
[IMAGE]

BRAND

Smart TV 55"

4K UHD
Smart TV

Rp X.XXX.XXX

[View Product]
```

---

# 16. Product Card Requirements

Card harus menampilkan:
* product image
* brand
* product name
* short specification
* price jika tersedia
* badge
* CTA

Badge:

```text
NEW
BEST SELLER
PROMO
LIMITED
```

---

# 17. Product Detail Page

URL:

```text
/products/[slug]
```

Layout:

```text
Product Images
       ↓
Product Name
       ↓
Brand
       ↓
Price
       ↓
Key Specifications
       ↓
Description
       ↓
Features
       ↓
Availability
       ↓
Contact CTA
```

---

# 18. Product Gallery

Desktop:

```text
┌──────────┬───────────────────────────────┐
│ thumb    │                               │
│ thumb    │        MAIN PRODUCT IMAGE     │
│ thumb    │                               │
└──────────┴───────────────────────────────┘
```

Mobile:

Main image + thumbnails.

Implement lightweight gallery.

Tidak menggunakan heavy gallery framework.

---

# 19. Product Information

Contoh:

> **Samsung 55" Smart TV**

```text
Brand:
Samsung

Category:
TV & Entertainment

Price:
Rp X.XXX.XXX

Availability:
Available
```

CTA:

**Ask About This Product**

---

# 20. Key Specifications

Format:

```text
Screen Size       55"
Resolution        4K UHD
Display           LED
Connectivity      Wi-Fi / HDMI
Smart Platform    ...
Warranty          ...
```

Specifications harus menggunakan data resmi produk.

Jangan mengarang technical specifications.

---

# 21. Product Inquiry

CTA:

> **Interested in this product?**

Buttons:

**WhatsApp**

**Call Store**

WhatsApp message otomatis:

> Halo SUANJAYA, saya tertarik dengan produk [Product Name]. Apakah produk ini tersedia?

---

# 22. Price Strategy

Harga harus jelas jika memang harga publik.

Jika harga sering berubah:

> **Price updated regularly. Contact us for current availability and pricing.**

Jangan menampilkan harga stale tanpa penanda.

---

# 23. Promotions

Headline:

> **DEALS WORTH CHECKING**

Promo types:
* discount
* bundle
* cashback jika benar-benar tersedia
* seasonal promotion
* clearance
* store event

Promo card:

```text
[IMAGE]

SPECIAL DEAL

Save on selected TVs

[View Deal]
```

---

# 24. Promotions Page

URL:

```text
/promotions
```

Menampilkan:
* promo title
* product/category
* valid period
* terms
* CTA

Promo expired tidak boleh tetap terlihat sebagai active promotion.

---

# 25. Brand Section

Headline:

> **SHOP BRANDS YOU TRUST**

Brand logos:

```text
Brand A
Brand B
Brand C
Brand D
Brand E
```

Gunakan logo resmi dengan izin penggunaan.

Brand list bersifat configurable.

---

# 26. Why SUANJAYA

Headline:

> **WHY SHOP WITH SUANJAYA?**

Benefits:

### Trusted Selection

Produk dipilih dari brand dan kategori yang relevan.

### Helpful Advice

Tim membantu pelanggan memilih produk sesuai kebutuhan.

### Local Support

Pelanggan dapat berkomunikasi langsung dengan toko.

### After-Sales Assistance

Informasi garansi dan dukungan dijelaskan secara transparan.

---

# 27. Buying Guide

Section:

> **NOT SURE WHAT TO BUY?**

Content cards:

### How to Choose a TV

Pertimbangkan:
* size
* resolution
* room distance
* usage

### How to Choose a Refrigerator

Pertimbangkan:
* capacity
* household size
* energy efficiency

### How to Choose a Laptop

Pertimbangkan:
* processor
* RAM
* storage
* usage

CTA:

**Explore Buying Guides**

---

# 28. Store Section

Headline:

> **VISIT SUANJAYA**

Store card:

```text
SUANJAYA

Jl. Example No. 123
Pekanbaru, Riau

Open Today
09:00 – 21:00

[Get Directions]
[Call Store]
```

---

# 29. Store Locator

Jika multi-location:

```text
Pekanbaru
Dumai
Padang
Medan
```

Filter sederhana.

Map SDK tidak wajib.

Prioritas:

**Get Directions**

---

# 30. Trust / Service Section

Headline:

> **SHOP WITH CONFIDENCE**

Trust indicators:

```text
Original Products
Official Warranty
Helpful Support
Secure Purchase
```

Hanya klaim yang benar-benar berlaku.

---

# 31. Testimonials

Headline:

> **WHAT OUR CUSTOMERS SAY**

3 cards.

Contoh:

```text
★★★★★

"Pelayanannya membantu dan
produknya lengkap."

— Customer
```

Production menggunakan customer testimonials yang benar.

---

# 32. Final CTA

Headline:

> **LOOKING FOR SOMETHING SPECIFIC?**

Copy:

> Tell us what you need and our team can help you find the right product.

CTA:

**Ask SUANJAYA**

Secondary:

**Browse Products**

---

# 33. Footer

```text
SUANJAYA

Better Tech. Better Choices.

PRODUCTS
All Products
Categories
Brands
Promotions

GUIDES
Buying Guides
FAQ

COMPANY
About
Stores
Contact

FOLLOW
Instagram
Facebook
TikTok

CONTACT
WhatsApp
Phone
Email

© 2026 SUANJAYA

Privacy Policy
Terms
```

---

# 34. Visual Design Direction

SUANJAYA harus terasa seperti **modern electronics retailer**, bukan marketplace clone.

### Style

* clean
* technical
* modern
* trustworthy
* premium
* practical

Visual:
* product photography
* clean backgrounds
* structured grids
* bold price typography
* crisp specifications

Hindari:
* excessive gradients
* marketplace clutter
* excessive badges
* flashing promotions
* overly rounded cards
* glassmorphism

---

# 35. Color System

Recommended:

```text
Electric Blue
#155EEF

Deep Navy
#0B1F3A

Light Blue
#EAF2FF

Cool Gray
#F3F5F7

Charcoal
#16181D

White
#FFFFFF

Accent Orange
#FF8A00
```

Primary:

**Electric Blue**

Background:

**Cool Gray / White**

Accent:

**Orange**

---

# 36. Typography

### Display

**Manrope / Plus Jakarta Sans**

Bold and contemporary.

### Body

**Inter**

Hero:

```text
64–84px desktop
40–50px mobile
```

Product title:

```text
24–32px
```

Body:

```text
16–18px
```

---

# 37. UI Components

```text
AnnouncementBar
Navbar
MobileMenu
SearchBar
Button
Hero
CategoryCard
ProductCard
ProductGrid
ProductFilter
ProductGallery
ProductSpecs
BrandLogoGrid
PromoCard
BuyingGuideCard
StoreCard
TestimonialCard
CTASection
Footer
```

---

# 38. Product Data Model

```typescript
{
  id: string,
  slug: string,
  name: string,
  brand: string,
  category: string,
  description: string,
  price?: number,
  oldPrice?: number,
  currency: "IDR",
  images: string[],
  specifications: Record<string, string>,
  features: string[],
  badge?: "new" | "promo" | "bestseller" | "limited",
  availability: "available" | "limited" | "out-of-stock",
  warranty?: string,
  featured: boolean,
  published: boolean
}
```

---

# 39. Category Data Model

```typescript
{
  id: string,
  slug: string,
  name: string,
  description: string,
  image: string,
  featured: boolean
}
```

---

# 40. Brand Data Model

```typescript
{
  id: string,
  name: string,
  logo: string,
  website?: string,
  featured: boolean
}
```

---

# 41. Search Strategy

MVP:

```text
Search Input
↓
Static Product Dataset
↓
Client-side filtering
↓
Product Results
```

Search fields:
* name
* brand
* category
* specification keywords

Tidak menggunakan Elasticsearch atau search backend.

---

# 42. Filter Strategy

Filters:

```text
Category
Brand
Price
Availability
```

Mobile menggunakan filter drawer.

Desktop sidebar/filter bar.

---

# 43. Local SEO

Keyword cluster:

```text
toko elektronik [city]
toko elektronik terdekat
electronics store [city]
TV [city]
laptop [city]
kulkas [city]
mesin cuci [city]
AC [city]
aksesoris elektronik [city]
```

Brand/category landing pages dapat menghasilkan organic traffic.

---

# 44. Product SEO

Contoh title:

> Samsung 55 Inch Smart TV — Harga & Spesifikasi | SUANJAYA

Description:

> Lihat spesifikasi, harga, ketersediaan, dan informasi Samsung 55 Inch Smart TV di SUANJAYA.

URL:

```text
/products/samsung-55-inch-smart-tv
```

---

# 45. Category SEO

Contoh:

```text
/categories/smart-tv
/categories/laptop
/categories/kulkas
/categories/mesin-cuci
```

Title:

> Smart TV — Pilihan & Harga | SUANJAYA

---

# 46. Structured Data

Implement:

```text
Organization
LocalBusiness
Product
BreadcrumbList
```

Product schema hanya digunakan jika:
* product benar-benar tersedia
* price valid
* availability valid
* product information akurat

---

# 47. Technical SEO

Wajib:
* sitemap
* robots
* canonical
* Open Graph
* metadata
* breadcrumbs
* structured data
* semantic HTML
* image alt text

---

# 48. Image Strategy

Electronics catalog berpotensi memiliki banyak gambar.

Rules:
* AVIF/WebP
* responsive image
* thumbnail generation
* lazy loading
* explicit dimensions
* hero image priority
* avoid unnecessary high-resolution images

Product cards menggunakan thumbnail, bukan original image.

---

# 49. Performance

Target:

```text
Performance      90+
Accessibility    95+
Best Practices   95+
SEO              95+
```

Core Web Vitals:

```text
LCP < 2.5s
INP < 200ms
CLS < 0.1
```

---

# 50. JavaScript Policy

JS hanya untuk:
* search
* filtering
* mobile navigation
* product gallery

Tidak menggunakan:
* React untuk seluruh site
* Redux
* heavy search engine
* heavy carousel
* animation framework

---

# 51. Contact / Sales Flow

```text
Product Page
      ↓
Ask About Product
      ↓
WhatsApp
      ↓
Sales Team
```

Pre-filled:

> Halo SUANJAYA, saya ingin menanyakan produk [Product Name]. Apakah tersedia dan berapa harga terbaru?

---

# 52. Analytics

Cloudflare Web Analytics.

Events:

```text
Product View
Search
Category View
Product Inquiry
WhatsApp Click
Store Visit
Get Directions
Promotion Click
```

Primary funnel:

```text
Product Discovery
↓
Product Detail
↓
Inquiry
```

---

# 53. Accessibility

Wajib:
* semantic HTML
* keyboard navigation
* accessible search
* accessible filters
* proper labels
* focus states
* contrast
* alt text
* mobile-friendly touch targets

---

# 54. Security

MVP tidak memproses payment.

Rules:
* no exposed secrets
* HTTPS
* external link validation
* dependency audit
* no unnecessary third-party scripts

---

# 55. Cloudflare Architecture

```text
Visitor
   ↓
Cloudflare CDN
   ↓
Cloudflare Pages
   ↓
Astro Static
```

Tidak perlu:
* D1
* R2
* Durable Objects
* Workers API

pada MVP.

---

# 56. Bundle Constraint

Target:

> **Compressed Worker bundle jauh di bawah 3 MiB.**

Rules:
* static generation
* minimal dependencies
* minimal JS
* no heavy server libraries
* static catalog
* optimized assets
* build analysis

Production build harus menggunakan webpack dan diverifikasi.

---

# 57. Multilingual

Support:

**Bahasa Indonesia + English**

Recommended:

```text
/id/
/en/
```

Default:

**Indonesia**

Translation:

```text
src/data/i18n/
├── id.ts
└── en.ts
```

---

# 58. Out of Scope

MVP tidak mencakup:
* shopping cart
* checkout
* online payment
* customer accounts
* inventory management
* real-time stock
* admin dashboard
* ERP integration
* POS integration
* D1 database
* order tracking
* customer loyalty
* complex product comparison engine

---

# 59. Future Expansion

Jika toko membutuhkan e-commerce:

```text
cart
checkout
payment gateway
inventory
order status
customer accounts
loyalty
admin dashboard
```

MVP tidak membangun fitur tersebut.

---

# 60. Definition of Done

### Catalog

* [ ] Product listing
* [ ] Product search
* [ ] Category filtering
* [ ] Brand filtering
* [ ] Product detail
* [ ] Specifications
* [ ] Availability
* [ ] Product inquiry

### Marketing

* [ ] Hero
* [ ] Featured categories
* [ ] Promotions
* [ ] Brands
* [ ] Buying guides
* [ ] Trust section
* [ ] Store section

### Conversion

* [ ] WhatsApp CTA
* [ ] Ask About Product
* [ ] Store CTA
* [ ] Directions
* [ ] Phone

### SEO

* [ ] Product metadata
* [ ] Category metadata
* [ ] Product schema
* [ ] LocalBusiness schema
* [ ] Sitemap
* [ ] Robots
* [ ] Canonical
* [ ] Open Graph
* [ ] Breadcrumbs

### Performance

* [ ] Astro static
* [ ] Optimized product images
* [ ] Minimal JS
* [ ] Minimal dependencies
* [ ] Lighthouse 90+
* [ ] Core Web Vitals optimized

### Cloudflare

* [ ] Cloudflare Pages
* [ ] Astro Cloudflare configuration
* [ ] Webpack production build
* [ ] Bundle analysis
* [ ] Under 3 MiB compressed target
* [ ] Environment variables documented
* [ ] Deployment QA

---

# 61. Implementation Priority

## Phase 1 — Foundation

```text
Astro
Cloudflare
Global CSS
Typography
Colors
SEO
Base Layout
```

## Phase 2 — Catalog

```text
Products
Categories
Brands
Product Cards
Product Detail
Specifications
```

## Phase 3 — Discovery

```text
Search
Filter
Category Pages
Brand Pages
```

## Phase 4 — Conversion

```text
WhatsApp
Product Inquiry
Store
Directions
Phone
```

## Phase 5 — Marketing

```text
Promotions
Buying Guides
Trust
Testimonials
```

## Phase 6 — SEO & Optimization

```text
Structured Data
Local SEO
Image Optimization
Accessibility
Performance
Bundle Analysis
Cloudflare QA
```

---

# 62. Final Product Direction

SUANJAYA harus terasa seperti **electronics retailer modern yang membantu pelanggan mengambil keputusan**, bukan sekadar katalog produk.

Customer journey:

```text
SEARCH
  ↓
DISCOVER
  ↓
COMPARE INFORMATION
  ↓
TRUST
  ↓
ASK
  ↓
VISIT / BUY
```

Visual principle:

> **Clean product photography + structured product information + strong blue identity + clear pricing + minimal retail clutter.**

Technical principle:

> **Astro static-first + Cloudflare Pages + static product catalog + lightweight client-side search/filter + WhatsApp sales flow + product/local SEO.**

**PRD Website #6 — SUANJAYA selesai.**
