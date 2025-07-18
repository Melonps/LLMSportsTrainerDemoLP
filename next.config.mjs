/**
 * @file next.config.mjs
 * @description Next.jsの設定ファイル。静的エクスポート（output: 'export'）を有効化。
 * @注意 API RoutesやSSRは利用不可。LP用途の静的サイト向け。
 * @see https://nextjs.org/docs/app/building-your-application/deploying/static-exports
 */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  /**
   * @property {string} output - 静的エクスポートを有効化
   */
  output: 'export',
}

export default nextConfig
