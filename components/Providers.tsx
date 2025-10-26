'use client';

import { ThemeProvider } from 'next-themes';
import { MotionConfig } from 'framer-motion';
import { ReactNode } from 'react';
import { useDeviceDetection } from '@/hooks/useDeviceDetection';
import { mobileMotionConfig, desktopMotionConfig } from '@/lib/framer-motion-config';

export default function Providers({ children }: { children: ReactNode }) {
  const { isLowEndDevice } = useDeviceDetection();
  
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <MotionConfig {...(isLowEndDevice ? mobileMotionConfig : desktopMotionConfig)}>
        {children}
      </MotionConfig>
    </ThemeProvider>
  );
}

