'use client';

import { useTheme } from 'next-themes';
import { useEffect } from 'react';

export default function ThemeColorMeta() {
  const { theme, systemTheme } = useTheme();

  useEffect(() => {
    const currentTheme = theme === 'system' ? systemTheme : theme;
    const isDark = currentTheme === 'dark';
    
    // Define colors for light and dark modes
    const lightThemeColor = '#6366f1';
    const darkThemeColor = '#09090b';
    const themeColor = isDark ? darkThemeColor : lightThemeColor;
    
    // Update existing theme-color meta tag
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', themeColor);
    }

    // Update Apple Safari meta tags
    const appleMetaThemeColor = document.querySelector('meta[name="apple-mobile-web-app-status-bar-style"]');
    if (appleMetaThemeColor) {
      appleMetaThemeColor.setAttribute('content', isDark ? 'black-translucent' : 'default');
    }

    // Add Apple Safari theme-color meta tag
    let appleThemeColorMeta = document.querySelector('meta[name="apple-mobile-web-app-status-bar-color"]');
    if (!appleThemeColorMeta) {
      appleThemeColorMeta = document.createElement('meta');
      appleThemeColorMeta.setAttribute('name', 'apple-mobile-web-app-status-bar-color');
      document.head.appendChild(appleThemeColorMeta);
    }
    appleThemeColorMeta.setAttribute('content', themeColor);

    // Microsoft Edge meta tags
    const msMetaThemeColor = document.querySelector('meta[name="msapplication-navbutton-color"]');
    if (msMetaThemeColor) {
      msMetaThemeColor.setAttribute('content', themeColor);
    }

    // Update background color
    const metaBackgroundColor = document.querySelector('meta[name="msapplication-TileColor"]');
    if (metaBackgroundColor) {
      metaBackgroundColor.setAttribute('content', themeColor);
    }

    // Additional PWA meta tags
    const pwaThemeColor = document.querySelector('meta[name="mobile-web-app-capable"]');
    if (!pwaThemeColor) {
      const meta = document.createElement('meta');
      meta.setAttribute('name', 'mobile-web-app-capable');
      meta.setAttribute('content', 'yes');
      document.head.appendChild(meta);
    }

    // More detailed Apple Safari control
    const appleWebAppCapable = document.querySelector('meta[name="apple-mobile-web-app-capable"]');
    if (!appleWebAppCapable) {
      const meta = document.createElement('meta');
      meta.setAttribute('name', 'apple-mobile-web-app-capable');
      meta.setAttribute('content', 'yes');
      document.head.appendChild(meta);
    }

    // Set document background color
    document.documentElement.style.setProperty('--theme-color', themeColor);
    
    // Dynamically update PWA manifest.json theme_color
    // Note: This does not modify the actual manifest.json file,
    // but dynamically changes the theme_color recognized by the browser
    const manifestLink = document.querySelector('link[rel="manifest"]');
    if (manifestLink) {
      // Invalidate cache and reload
      const href = manifestLink.getAttribute('href');
      if (href) {
        manifestLink.setAttribute('href', `${href}?v=${Date.now()}`);
      }
    }
    
  }, [theme, systemTheme]);

  return null;
}