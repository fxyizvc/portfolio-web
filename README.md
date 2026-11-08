# Portfolio Website | Muhammed Fayiz V C

![Portfolio Preview](/public/open-graph.jpg)

A modern, high-performance portfolio website built with **Next.js 16**, **Tailwind CSS v4**, and **Framer Motion**. Designed to be immersive, responsive, and accessible, featuring a dual-theme system ("Zen Forest" & "Zen Cloud") and cinematic interactions.

## ✨ Features

-   **Dual-Theme Engine**:
    -   🌑 **Zen Forest (Dark)**: Deep Jungle Green & Sage for a calm, immersive night mode.
    -   ☀️ **Zen Cloud (Light)**: Pale Mist & Dark Fern for optimal daylight readability.
-   **Cinematic Interactions**:
    -   **Spotlight Cards** (Mobile) & **Hover Reveals** (Desktop) for case studies.
    -   **Magnetic Cursor** that adapts to interactive elements.
    -   **Parallax Scroll** effects in the Hero section.
-   **Modern Layouts**:
    -   **Bento Grid**: Glassmorphic "About Me" section showcasing skills and experience.
    -   **Responsive Design**: Mobile-first optimization ensuring perfect scaling from phones to 4K monitors.
-   **Backend Integration**:
    -   **Contact Form**: Powered by [Formspree](https://formspree.io) for real-time email delivery with Zod validation.

## 🛠️ Tech Stack

-   **Framework**: [Next.js 16 (App Router)](https://nextjs.org/)
-   **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) + CSS Variables
-   **Animation**: [Framer Motion](https://www.framer.com/motion/)
-   **Language**: [TypeScript](https://www.typescriptlang.org/)
-   **Forms**: React Hook Form + Zod + Formspree
-   **Icons**: Lucide React
-   **Fonts**: Syne (Headings) + Space Grotesk (Body) via `next/font`

## 🚀 Getting Started

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/fxyizvc/portfolio-web.git
    cd portfolio-web
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Run the development server**:
    ```bash
    npm run dev
    ```

4.  **Open locally**:
    Visit [http://localhost:3000](http://localhost:3000) to see the site in action.

## 📂 Project Structure

```
src/
├── app/              # Next.js App Router pages
│   ├── globals.css   # Global styles & Theme variables
│   └── layout.tsx    # Root layout & providers
├── components/
│   ├── layout/       # Navbar, Footer
│   ├── sections/     # Hero, About, CaseStudies, Contact
│   └── ui/           # Reusable UI components (Buttons, Cursor, etc.)
└── lib/              # Utilities (clsx, twMerge)
```

## 🎨 Customizing the Theme

The theme is controlled via CSS variables in `src/app/globals.css`. You can adjust the "Zen Forest" (Root/Dark) and "Zen Cloud" (Light) palettes by modifying the HSL values in the `:root` and `.dark` blocks.

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

Designed & Built by **Muhammed Fayiz V C**.
