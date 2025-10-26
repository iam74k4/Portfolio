import { MotionConfig } from 'framer-motion';

// モバイル用のFramer Motion設定
export const mobileMotionConfig: Partial<typeof MotionConfig> = {
  // モバイルではアニメーションを軽量化
  reducedMotion: 'user',
  // パフォーマンスを優先
  features: {
    // 不要な機能を無効化
    layout: false,
    // アニメーションの最適化
    layoutId: false,
  },
};

// デスクトップ用の設定
export const desktopMotionConfig: Partial<typeof MotionConfig> = {
  reducedMotion: 'user',
  features: {
    layout: true,
    layoutId: true,
  },
};