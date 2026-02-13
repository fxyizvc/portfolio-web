import type { Metadata } from "next";
import { Syne, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Cursor } from "@/components/ui/cursor";

const syne = Syne({ subsets: ["latin"], variable: "--font-syne" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });

export const metadata: Metadata = {
  title: "Muhammed Fayiz V C | Developer",
  description: "Portfolio of Muhammed Fayiz V C, a Developer building high-impact digital experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${syne.variable} ${spaceGrotesk.variable} font-sans antialiased bg-background text-foreground relative cursor-none selection:bg-primary selection:text-white`}>
        <Cursor />
        {/* Grain Overlay */}
        <div className="fixed inset-0 pointer-events-none opacity-20 z-[9999] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150"></div>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
