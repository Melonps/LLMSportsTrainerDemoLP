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

export const metadata: Metadata = {
  title: "AIスポーツトレーナー | あなただけの専属コーチ",
  description: "AIがあなたのフォームを分析し、リアルタイムでフィードバック。目標達成をサポートする、次世代のスポーツトレーニング体験。",
  keywords: "AI, スポーツ, トレーニング, コーチ, フィットネス, フォーム分析, テニス, ゴルフ, 野球",
  openGraph: {
    title: "AIスポーツトレーナー | あなただけの専属コーチ",
    description: "AIがあなたのフォームを分析し、リアルタイムでフィードバック。目標達成をサポートする、次世代のスポーツトレーニング体験。",
    url: "https://ai-sports-trainer-lp.vercel.app/",
    siteName: "AI Sports Trainer",
    images: [
      {
        url: "/images/ai-analysis.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}
