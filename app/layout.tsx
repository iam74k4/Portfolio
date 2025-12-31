import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Providers from '@/components/Providers';
import BackgroundElements from '@/components/BackgroundElements';
import ScrollProgress from '@/components/ScrollProgress';
import SplashScreen from '@/components/SplashScreen';
import ThemeColorMeta from '@/components/ThemeColorMeta';
import JsonLd from '@/components/JsonLd';
import { siteConfig } from '@/config/site.config';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-inter',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  display: 'swap',
  variable: '--font-heading',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.pwa.name}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.seo.keywords,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: `${siteConfig.name} - ${siteConfig.title}`,
    description: siteConfig.description,
    siteName: siteConfig.pwa.name,
    images: [
      {
        url: `${siteConfig.url}${siteConfig.seo.ogImage}`,
        width: 1200,
        height: 630,
        alt: siteConfig.pwa.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} - ${siteConfig.title}`,
    description: siteConfig.description,
    images: [`${siteConfig.url}${siteConfig.seo.ogImage}`],
    creator: siteConfig.social.twitterHandle,
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
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/favicon-16x16.svg', sizes: '16x16', type: 'image/svg+xml' },
      { url: '/favicon-32x32.svg', sizes: '32x32', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: [{ url: '/apple-touch-icon.svg', sizes: '180x180', type: 'image/svg+xml' }],
  },
  verification: {
    google: siteConfig.seo.googleVerification,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        {/* Default meta tags for initial load - dynamically updated by ThemeColorMeta */}
        <meta name="theme-color" content="#6366f1" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-status-bar-color" content="#6366f1" />
        <meta name="msapplication-navbutton-color" content="#6366f1" />
        <meta name="msapplication-TileColor" content="#6366f1" />
      </head>
      <body className="antialiased font-sans">
        <Providers>
          <JsonLd />
          <ThemeColorMeta />
          <SplashScreen />
          <ScrollProgress />
          <BackgroundElements />
          <Header />
          <main id="main-content" className="pt-16" role="main">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

