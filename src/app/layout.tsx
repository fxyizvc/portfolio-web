import type { Metadata } from "next";
import { Syne, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Cursor } from "@/components/ui/cursor";

const syne = Syne({ subsets: ["latin"], variable: "--font-syne" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });

export const metadata: Metadata = {
  title: "Muhammed Fayiz V C | Spatial AI & Edge Systems Engineer",
  description: "Portfolio of Muhammed Fayiz V C — Computer Science & Engineering researcher bridging Augmented Reality, Edge AI, and next-generation Human-Machine systems.",
  keywords: ["Spatial Computing", "Augmented Reality", "Edge AI", "Muhammed Fayiz", "Software Engineer", "Next.js", "Three.js"],
  authors: [{ name: "Muhammed Fayiz V C" }],
  openGraph: {
    title: "Muhammed Fayiz V C | Spatial AI & Systems Engineer",
    description: "Designing high-performance software systems bridging physical dimensions and digital consciousness.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${syne.variable} ${spaceGrotesk.variable} font-sans antialiased bg-background text-foreground relative selection:bg-primary selection:text-white`}>
        <Cursor />
        {/* Subtle Spatial Grain Overlay */}
        <div className="fixed inset-0 pointer-events-none opacity-15 z-[9999] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150"></div>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
