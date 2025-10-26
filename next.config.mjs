/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // GitHub Pagesでサブディレクトリにデプロイする場合の設定
  basePath: '/Portfolio',
  assetPrefix: '/Portfolio',

  images: {
    unoptimized: true, // GitHub Pagesでは画像最適化が使えないため
  },

  // コンパイラ最適化
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production', // 本番環境でconsole.logを削除
  },

  // パフォーマンス最適化
  swcMinify: true, // SWCミニファイを使用

  // 圧縮設定
  compress: true,

  // 本番環境でのソースマップを無効化（セキュリティとサイズ削減）
  productionBrowserSourceMaps: false,

  // Reactの厳格モード
  reactStrictMode: true,

  // トレース設定
  logging: {
    fetches: {
      fullUrl: false,
    },
  },
};

export default nextConfig;

