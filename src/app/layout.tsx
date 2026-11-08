import type { Metadata } from "next";
import { Syne, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Cursor } from "@/components/ui/cursor";

const syne = Syne({ subsets: ["latin"], variable: "--font-syne" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });

export const metadata: Metadata = {
  title: "Muhammed Fayiz V C | Cloud Monitoring & DevOps Engineer",
  description: "Portfolio of Muhammed Fayiz V C — Cloud Monitoring & DevOps Engineer experienced in AWS infrastructure, Linux administration, CloudWatch observability, and production incident response.",
  keywords: ["Cloud Monitoring", "DevOps", "SRE", "AWS", "Linux", "AlmaLinux", "Docker", "Grafana", "Prometheus", "Muhammed Fayiz"],
  authors: [{ name: "Muhammed Fayiz V C" }],
  openGraph: {
    title: "Muhammed Fayiz V C | Cloud Monitoring & DevOps Engineer",
    description: "Maintaining high-availability cloud infrastructure, triaging live alerts, and automating continuous delivery pipelines.",
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
      <body className={`${syne.variable} ${spaceGrotesk.variable} font-sans antialiased bg-background text-foreground relative selection:bg-emerald-500 selection:text-black`}>
        <Cursor />
        {/* Spatial Grid & Grain Overlay */}
        <div className="fixed inset-0 pointer-events-none opacity-10 z-[9999] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150"></div>
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
