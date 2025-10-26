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

    // ドキュメントの背景色も設定
    document.documentElement.style.setProperty('--theme-color', themeColor);
    
    // デバッグ用ログ（本番環境では削除可能）
    console.log(`Theme changed to: ${currentTheme}, Status bar color: ${themeColor}`);
  }, [theme, systemTheme]);

  return null;
}