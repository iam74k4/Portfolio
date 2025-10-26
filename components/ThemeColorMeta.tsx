'use client';

import { useTheme } from 'next-themes';
import { useEffect } from 'react';

export default function ThemeColorMeta() {
  const { theme, systemTheme } = useTheme();

  useEffect(() => {
    const currentTheme = theme === 'system' ? systemTheme : theme;
    const isDark = currentTheme === 'dark';
    
    // ライトモードとダークモードの色を定義
    const lightThemeColor = '#3b82f6';
    const darkThemeColor = '#1a1a1a';
    const themeColor = isDark ? darkThemeColor : lightThemeColor;
    
    // 既存のtheme-colorメタタグを更新
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', themeColor);
    }

    // Apple Safari用のmetaタグも更新
    const appleMetaThemeColor = document.querySelector('meta[name="apple-mobile-web-app-status-bar-style"]');
    if (appleMetaThemeColor) {
      appleMetaThemeColor.setAttribute('content', isDark ? 'black-translucent' : 'default');
    }

    // Apple Safari用のtheme-colorメタタグも追加
    let appleThemeColorMeta = document.querySelector('meta[name="apple-mobile-web-app-status-bar-color"]');
    if (!appleThemeColorMeta) {
      appleThemeColorMeta = document.createElement('meta');
      appleThemeColorMeta.setAttribute('name', 'apple-mobile-web-app-status-bar-color');
      document.head.appendChild(appleThemeColorMeta);
    }
    appleThemeColorMeta.setAttribute('content', themeColor);

    // Microsoft Edge用のmetaタグ
    const msMetaThemeColor = document.querySelector('meta[name="msapplication-navbutton-color"]');
    if (msMetaThemeColor) {
      msMetaThemeColor.setAttribute('content', themeColor);
    }

    // 背景色も更新
    const metaBackgroundColor = document.querySelector('meta[name="msapplication-TileColor"]');
    if (metaBackgroundColor) {
      metaBackgroundColor.setAttribute('content', themeColor);
    }

    // 追加のPWA用メタタグ
    const pwaThemeColor = document.querySelector('meta[name="mobile-web-app-capable"]');
    if (!pwaThemeColor) {
      const meta = document.createElement('meta');
      meta.setAttribute('name', 'mobile-web-app-capable');
      meta.setAttribute('content', 'yes');
      document.head.appendChild(meta);
    }

    // より詳細なApple Safari制御
    const appleWebAppCapable = document.querySelector('meta[name="apple-mobile-web-app-capable"]');
    if (!appleWebAppCapable) {
      const meta = document.createElement('meta');
      meta.setAttribute('name', 'apple-mobile-web-app-capable');
      meta.setAttribute('content', 'yes');
      document.head.appendChild(meta);
    }

    // ドキュメントの背景色も設定
    document.documentElement.style.setProperty('--theme-color', themeColor);
    
    // PWAのmanifest.jsonのtheme_colorも動的に更新
    // 注意: これは実際のmanifest.jsonファイルを変更しませんが、
    // ブラウザが認識するtheme_colorを動的に変更します
    const manifestLink = document.querySelector('link[rel="manifest"]');
    if (manifestLink) {
      // キャッシュを無効化して再読み込み
      const href = manifestLink.getAttribute('href');
      if (href) {
        manifestLink.setAttribute('href', `${href}?v=${Date.now()}`);
      }
    }
    
    // デバッグ用ログ（本番環境では削除可能）
    console.log(`Theme changed to: ${currentTheme}, Status bar color: ${themeColor}`);
  }, [theme, systemTheme]);

  return null;
}