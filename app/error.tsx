'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // エラーをログに記録
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-background">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl"
      >
        {/* Error Icon */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8 flex justify-center"
        >
          <div className="w-24 h-24 rounded-full bg-red-500/10 flex items-center justify-center">
            <AlertTriangle className="w-12 h-12 text-red-500" strokeWidth={1.5} />
          </div>
        </motion.div>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="space-y-4 mb-12"
        >
          <h1 className="text-[32px] md:text-[40px] font-bold text-foreground">
            問題が発生しました
          </h1>
          <p className="text-[16px] text-secondary leading-relaxed">
            申し訳ございません。予期しないエラーが発生しました。
            <br />
            ページを再読み込みするか、ホームに戻ってください。
          </p>
          {process.env.NODE_ENV === 'development' && (
            <details className="mt-4 p-4 bg-surface rounded-lg text-left">
              <summary className="cursor-pointer text-[14px] font-medium text-foreground mb-2">
                エラー詳細（開発環境のみ）
              </summary>
              <pre className="text-[12px] text-red-600 dark:text-red-400 overflow-auto">
                {error.message}
              </pre>
            </details>
          )}
        </motion.div>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={reset}
            className="modern-button inline-flex items-center gap-2 justify-center"
          >
            <RefreshCw size={18} strokeWidth={1} />
            <span>再試行</span>
          </button>
          <Link
            href="/"
            className="modern-button-secondary inline-flex items-center gap-2 justify-center"
          >
            <Home size={18} strokeWidth={1} />
            <span>ホームに戻る</span>
          </Link>
        </motion.div>

        {/* Help Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16"
        >
          <p className="text-[13px] text-secondary">
            問題が解決しない場合は、ページを再読み込みするか、しばらく時間をおいてから再度お試しください。
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}

