import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Providers from '@/components/Providers';
import BackgroundElements from '@/components/BackgroundElements';
import ScrollProgress from '@/components/ScrollProgress';
import SplashScreen from '@/components/SplashScreen';
import { siteConfig } from '@/config/site.config';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-inter',
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
    locale: 'ja_JP',
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
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    other: [
      {
        rel: 'icon',
        url: '/favicon.ico',
      },
    ],
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
    <html lang="ja" suppressHydrationWarning className={inter.variable}>
      <body className="antialiased font-sans">
        <Providers>
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

