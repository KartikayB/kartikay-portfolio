import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackgroundEffects from "@/components/BackgroundEffects";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: 'Kartikay Bansal | Data Engineer',
  description: 'Data Engineer specializing in building scalable data pipelines and analytics solutions. Experienced in ETL, real-time processing, and data architecture.',
  keywords: ['Data Engineer', 'ETL', 'Data Pipeline', 'Analytics', 'Software Development', 'Kartikay Bansal'],
  authors: [{ name: 'Kartikay Bansal' }],
  openGraph: {
    title: 'Kartikay Bansal | Data Engineer',
    description: 'Data Engineer specializing in building scalable data pipelines and analytics solutions.',
    url: 'https://kartikayb.github.io/kartikay-portfolio',
    siteName: 'Kartikay Bansal Portfolio',
    images: [
      {
        url: 'https://kartikayb.github.io/kartikay-portfolio/profile.jpg',
        width: 800,
        height: 600,
        alt: 'Kartikay Bansal',
      },
    ],
    locale: 'en_US',
    type: 'website',
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
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="min-h-screen bg-[#0a0a0a] text-white antialiased" suppressHydrationWarning>
        <div className="fixed inset-0 z-0">
          <BackgroundEffects />
        </div>
        
        {/* Content Layer */}
        <div className="relative z-10 flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow relative">
            {/* Decorative elements for main content */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
              <div className="absolute top-0 left-0 w-32 h-32">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" />
                  <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.5" />
                  <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="0.5" />
                </svg>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 transform rotate-90">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" />
                  <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.5" />
                  <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="0.5" />
                </svg>
              </div>
            </div>
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
