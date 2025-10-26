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
    
    // 既存のtheme-colorメタタグを更新または作成
    let metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (!metaThemeColor) {
      metaThemeColor = document.createElement('meta');
      metaThemeColor.setAttribute('name', 'theme-color');
      document.head.appendChild(metaThemeColor);
    }
    metaThemeColor.setAttribute('content', themeColor);

    // Apple Safari用のmetaタグも更新
    let appleMetaThemeColor = document.querySelector('meta[name="apple-mobile-web-app-status-bar-style"]');
    if (!appleMetaThemeColor) {
      appleMetaThemeColor = document.createElement('meta');
      appleMetaThemeColor.setAttribute('name', 'apple-mobile-web-app-status-bar-style');
      document.head.appendChild(appleMetaThemeColor);
    }
    appleMetaThemeColor.setAttribute('content', isDark ? 'black-translucent' : 'default');

    // Microsoft Edge用のmetaタグ
    let msMetaThemeColor = document.querySelector('meta[name="msapplication-navbutton-color"]');
    if (!msMetaThemeColor) {
      msMetaThemeColor = document.createElement('meta');
      msMetaThemeColor.setAttribute('name', 'msapplication-navbutton-color');
      document.head.appendChild(msMetaThemeColor);
    }
    msMetaThemeColor.setAttribute('content', themeColor);

    // 背景色も更新
    let metaBackgroundColor = document.querySelector('meta[name="msapplication-TileColor"]');
    if (!metaBackgroundColor) {
      metaBackgroundColor = document.createElement('meta');
      metaBackgroundColor.setAttribute('name', 'msapplication-TileColor');
      document.head.appendChild(metaBackgroundColor);
    }
    metaBackgroundColor.setAttribute('content', themeColor);

    // ドキュメントの背景色も設定
    document.documentElement.style.setProperty('--theme-color', themeColor);
  }, [theme, systemTheme]);

  return null;
}