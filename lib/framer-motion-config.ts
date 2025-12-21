import { MotionConfig, Variants } from 'framer-motion';

// モバイル用のFramer Motion設定
export const mobileMotionConfig: Partial<typeof MotionConfig> = {
  reducedMotion: 'user',
  features: {
    layout: false,
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

// 共通イージング関数
export const easings = {
  smooth: [0.4, 0, 0.2, 1] as const,
  easeOut: [0, 0, 0.2, 1] as const,
  easeIn: [0.4, 0, 1, 1] as const,
};

// 共通アニメーションバリアント生成関数
export const createContainerVariants = (isLowEndDevice = false): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: isLowEndDevice ? 0.05 : 0.15,
      delayChildren: isLowEndDevice ? 0.1 : 0.2,
    },
  },
});

export const createItemVariants = (isLowEndDevice = false): Variants => ({
  hidden: { opacity: 0, y: isLowEndDevice ? 10 : 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: isLowEndDevice ? 0.4 : 0.8,
      ease: easings.smooth,
    },
  },
});

// フェードイン用バリアント
export const fadeInVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: easings.smooth },
  },
};

// スライドアップ用バリアント
export const slideUpVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easings.smooth },
  },
};