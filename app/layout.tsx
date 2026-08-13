// ============================================================
// ROOT LAYOUT
// File ini membungkus SEMUA halaman. Tempat:
// - Mendefinisikan font (Inter via Google Fonts)
// - Memasang metadata SEO (title, description, OG image)
// - Memasang komponen global (LoadingScreen, ScrollProgressBar)
// ============================================================

import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LoadingScreen from "@/components/shared/LoadingScreen";
import ScrollProgressBar from "@/components/shared/ScrollProgressBar";
import { personalInfo } from "@/data/personal";

// Font Inter — dimuat dari Google Fonts, subset latin saja agar cepat
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Viewport dipisah dari metadata (Next.js 14+ requirement)
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

// Metadata SEO — muncul di Google dan saat link dibagikan
export const metadata: Metadata = {
  title: {
    default: `${personalInfo.name} — Software Engineer & AI Engineer`,
    template: `%s | ${personalInfo.name}`,
  },
  description: personalInfo.metaDescription,
  keywords: personalInfo.keywords,
  authors: [{ name: personalInfo.name }],
  creator: personalInfo.name,

  // Open Graph: tampilan saat link dibagikan di WhatsApp, Discord, dll
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: personalInfo.siteUrl,
    siteName: `${personalInfo.name} Portfolio`,
    title: `${personalInfo.name} — Software Engineer & AI Engineer`,
    description: personalInfo.metaDescription,
    images: [
      {
        url: `${personalInfo.siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: `${personalInfo.name} Portfolio`,
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: `${personalInfo.name} — Software Engineer`,
    description: personalInfo.metaDescription,
    images: [`${personalInfo.siteUrl}/og-image.png`],
  },

  // Robots: izinkan semua mesin pencari mengindex
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${inter.variable} dark`} suppressHydrationWarning>
      <body className="bg-background text-foreground antialiased">
        {/* Loading screen muncul pertama kali */}
        <LoadingScreen />
        {/* Bar progress scroll di bagian atas */}
        <ScrollProgressBar />
        {/* Konten halaman */}
        {children}
      </body>
    </html>
  );
}
