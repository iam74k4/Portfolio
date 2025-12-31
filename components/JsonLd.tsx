'use client';

import { siteConfig } from '@/config/site.config';

/**
 * JSON-LD 構造化データコンポーネント
 *
 * Google検索でのリッチスニペット表示を最適化
 * - Person: 開発者情報
 * - WebSite: サイト情報
 * - BreadcrumbList: ナビゲーション情報
 */
export default function JsonLd() {
  // Person Schema - 開発者情報
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteConfig.name,
    url: siteConfig.url,
    email: siteConfig.email,
    jobTitle: siteConfig.title,
    address: {
      '@type': 'PostalAddress',
      addressLocality: siteConfig.location,
    },
    sameAs: [
      siteConfig.social.github,
      siteConfig.social.linkedin,
      siteConfig.social.twitter,
    ].filter(Boolean),
    knowsAbout: siteConfig.seo.keywords,
  };

  // WebSite Schema - サイト情報
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.pwa.name,
    url: siteConfig.url,
    description: siteConfig.description,
    author: {
      '@type': 'Person',
      name: siteConfig.name,
    },
    inLanguage: 'ja-JP',
  };

  // BreadcrumbList Schema - ナビゲーション情報
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: siteConfig.url,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'About',
        item: `${siteConfig.url}#about`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Skills',
        item: `${siteConfig.url}#skills`,
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'Projects',
        item: `${siteConfig.url}#projects`,
      },
      {
        '@type': 'ListItem',
        position: 5,
        name: 'Contact',
        item: `${siteConfig.url}#contact`,
      },
    ],
  };

  // ProfilePage Schema - プロフィールページ
  const profilePageSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    mainEntity: {
      '@type': 'Person',
      name: siteConfig.name,
      description: siteConfig.description,
      url: siteConfig.url,
    },
    dateCreated: '2024-01-01',
    dateModified: new Date().toISOString().split('T')[0],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(profilePageSchema),
        }}
      />
    </>
  );
}




