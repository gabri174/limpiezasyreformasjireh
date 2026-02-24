import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Limpiezas y Reformas Jireh | Expertos en Reformas y Limpieza Profesional",
    template: "%s | Limpiezas y Reformas Jireh"
  },
  description: "Empresa con 5 años de experiencia en reformas de lujo y limpieza profesional en Valencia. Caracterizados por la responsabilidad y acabados finos.",
  keywords: ["Reformas en Valencia", "Limpiezas fin de obra Comunidad Valenciana", "Reformas de lujo Jireh", "Empresa de limpiezas profesional Valencia"],
  authors: [{ name: "Limpiezas y Reformas Jireh" }],
  creator: "Limpiezas y Reformas Jireh",
  publisher: "Limpiezas y Reformas Jireh",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://limpiezasyreformasjireh.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://limpiezasyreformasjireh.vercel.app',
    title: 'Limpiezas y Reformas Jireh | Expertos en Reformas y Limpieza Profesional',
    description: 'Empresa con 5 años de experiencia en reformas de lujo y limpieza profesional en Valencia.',
    siteName: 'Limpiezas y Reformas Jireh',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Limpiezas y Reformas Jireh | Expertos en Reformas y Limpieza Profesional',
    description: 'Empresa con 5 años de experiencia en reformas de lujo y limpieza profesional en Valencia.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
