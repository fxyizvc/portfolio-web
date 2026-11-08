# Muhammed Fayiz V C — Spatial Computing & Systems Portfolio

A high-performance portfolio crafted with **Next.js 16**, **Tailwind CSS**, and **Framer Motion**, engineered for edge deployment with zero telemetry leaks and modern 2027 design aesthetics.

---

## ⚡ Tech Stack & Architecture

- **Framework**: [Next.js 16 (App Router)](https://nextjs.org) with React 19 & Turbopack
- **Styling**: Tailwind CSS & Glassmorphic Spatial UI
- **Animations**: Framer Motion
- **Privacy & Security**:
  - Zero raw exposure of telephone/WhatsApp numbers to web crawlers.
  - Serverless API route (`/api/contact`) with honeypot spam protection.
  - Secure environment variables for email dispatch (`FORMSPREE_KEY`).
  - Protected resume serving.

---

## 🚀 Local Development

1. Clone or navigate into the directory:
   ```bash
   npm install
   ```

2. Copy the example environment file:
   ```bash
   cp .env.example .env.local
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🌐 Deploy Free on Vercel (Recommended)

1. Push this repository to your GitHub account:
   ```bash
   git remote add origin https://github.com/<your-username>/portfolio.git
   git push -u origin main
   ```

2. Head over to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Add the environment variable:
   - `FORMSPREE_KEY`: `mpqjdanl`
5. Click **Deploy**. Your site is now live with automatic global SSL, edge CDN caching, and CI/CD on every push!
