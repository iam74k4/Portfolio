'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl"
      >
        {/* 404 Number */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8"
        >
          <h1 className="text-[120px] md:text-[160px] font-bold gradient-text leading-none">404</h1>
        </motion.div>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="space-y-4 mb-12"
        >
          <h2 className="text-[32px] md:text-[40px] font-bold text-foreground">
            ページが見つかりません
          </h2>
          <p className="text-[16px] text-secondary leading-relaxed">
            お探しのページは存在しないか、移動した可能性があります。
            <br />
            URLをご確認いただくか、ホームページに戻ってください。
          </p>
        </motion.div>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link href="/" className="modern-button inline-flex items-center gap-2 justify-center">
            <Home size={18} strokeWidth={1} />
            <span>ホームに戻る</span>
          </Link>
          <button
            onClick={() => window.history.back()}
            className="modern-button-secondary inline-flex items-center gap-2 justify-center"
          >
            <ArrowLeft size={18} strokeWidth={1} />
            <span>前のページに戻る</span>
          </button>
        </motion.div>

        {/* Decorative Element */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16"
        >
          <div className="inline-block px-6 py-3 rounded-full bg-accent/5 text-accent text-[14px] font-medium">
            エラーコード: 404 - Not Found
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

