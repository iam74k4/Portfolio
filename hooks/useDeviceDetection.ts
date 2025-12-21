'use client';

import { useState, useEffect } from 'react';

export function useDeviceDetection() {
  const [isMobile, setIsMobile] = useState(false);
  const [isLowEndDevice, setIsLowEndDevice] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      // モバイルデバイスの検出
      const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      ) || window.innerWidth <= 768;

      // 低性能デバイスの検出（簡易版）
      const isLowEnd = isMobileDevice || 
        (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 2) ||
        ((navigator as any).deviceMemory && (navigator as any).deviceMemory <= 2);

      setIsMobile(isMobileDevice);
      setIsLowEndDevice(isLowEnd);
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  return { isMobile, isLowEndDevice };
}