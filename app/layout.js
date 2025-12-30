import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MobileActionBar from "../components/MobileActionBar";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "Master Bin & Exterior Cleaning LLC",
  description: "The premier eco-friendly solution for sanitizing trash bins and exterior surfaces. Licensed & Insured serving Denton and surrounding areas.",
  openGraph: {
    title: 'Master Bin & Exterior Cleaning',
    description: 'Hospital-Grade Sanitization for your bins, driveway, and home.',
    url: 'https://masterbin.com',
    siteName: 'Master Bin',
    images: [
      {
        url: '/assets/residential_bins.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Master Bin - Professional Exterior Cleaning',
    description: 'Banish bacteria and boost curb appeal.',
    images: ['/assets/residential_bins.png'],
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    name: 'Master Bin & Exterior Cleaning LLC',
    image: 'https://masterbin.com/assets/residential_bins.png',
    description: 'Professional trash bin sanitization and pressure washing services in North Texas.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Denton',
      addressRegion: 'TX',
      addressCountry: 'US'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 33.2148,
      longitude: -97.1331
    },
    url: 'https://masterbin.com',
    telephone: '+19404655505',
    areaServed: ['Denton', 'Frisco', 'Plano', 'Little Elm'],
    priceRange: '$-$$'
  }

  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-950 text-slate-200`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <div className="bg-noise" />
        <Toaster position="bottom-right" toastOptions={{ style: { background: '#0f172a', color: '#fff', border: '1px solid rgba(255,255,255,0.1)' } }} />
        {children}
        <Footer />
        <MobileActionBar />
      </body>
    </html>
  );
}
