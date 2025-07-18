import type { Metadata } from 'next'
import './globals.css'

/**
 * @file app/layout.tsx
 * @description アプリ全体のレイアウトとメタデータ設定。
 * @注意 メタデータはSEOやSNSシェア時に利用されます。
 */
export const metadata: Metadata = {
  title: 'AI-Kommon | 部活動指導の未来を創るAIランディングページ',
  description: 'AI-Kommonは、AIによる個別最適化指導を実現する部活動向けランディングページです。最新の3D姿勢推定技術とコーチングサポートで、すべての学生に最高の指導体験を提供します。',
  generator: 'Next.js 15, Tailwind CSS',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
