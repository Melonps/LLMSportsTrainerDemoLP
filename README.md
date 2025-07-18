# DemoLP

## 概要

このプロジェクトは Next.js（App Router）を用いたランディングページ（LP）です。
Firebase Hosting で静的サイトとして公開できます。

## 主な技術
- Next.js 15（App Router, 静的エクスポート）
- TypeScript
- Tailwind CSS
- Firebase Hosting

## ビルド & デプロイ手順

1. 依存パッケージのインストール
   ```bash
   pnpm install
   ```
2. 静的ビルド（out/ ディレクトリに出力）
   ```bash
   pnpm run build
   ```
3. Firebase Hosting へデプロイ
   ```bash
   pnpm exec firebase deploy --only hosting
   ```

## 注意事項
- `next.config.mjs` に `output: 'export'` を設定しています。
- `package.json` の build スクリプトは `next build` のみでOKです。
- `firebase.json` の `public` は `out` になっている必要があります。
- API Routes や SSR 機能は利用できません（静的サイト専用）。

---

> 詳細なカスタマイズやトラブルシュートは Next.js/Firebase の公式ドキュメントを参照してください。

---

## Firebase Hosting を断念した場合のファイル整理について

Firebase Hosting を利用しない場合、以下の関連ファイル・ディレクトリは削除を推奨します。

- `firebase.json`（Firebase Hosting 設定ファイル）
- `.firebaserc`（Firebase プロジェクト設定ファイル）
- `.firebase/`（Firebase CLI のキャッシュ・一時ファイル）
- `out/`（静的エクスポート出力。別のホスティングを使う場合は残してもOK）

削除例：
```bash
rm -rf firebase.json .firebaserc .firebase out
```

※ 誤って必要なファイルを削除しないようご注意ください。
