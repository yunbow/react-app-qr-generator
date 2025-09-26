# QRコード生成ツール (TypeScript + React + Storybook)

React 18とTypeScriptで構築されたQRコード生成アプリケーションです。機能別のモジュラーアーキテクチャを採用しています。

## デモプレイ
https://yunbow.github.io/react-app-qr-generator/demo/

## 主要機能

### QRコード生成
- テキスト・URL入力によるQRコード生成
- サイズ選択（128x128, 256x256, 512x512）
- 前景色・背景色のカスタマイズ
- 誤り訂正レベル設定（L:7%, M:15%, Q:25%, H:30%）

### ダウンロード機能
- **PNG形式**: Canvas要素からのデータURL生成
- **SVG形式**: カスタムSVG生成とダウンロード

### 操作方法
- **Enterキー**: QRコード生成（Shiftキー併用で改行）
- **生成ボタン**: QRコードを生成
- **クリアボタン**: 入力内容とQRコードをクリア
- **ダウンロードボタン**: PNG/SVG形式でファイル保存

## 技術スタック

- **React 18** - UIライブラリ
- **TypeScript** - プログラミング言語
- **Storybook 7** - コンポーネント開発・ドキュメント
- **CSS Modules** - スタイリング
- **Vite** - ビルドツール
- **QRCode.js** - QRコード生成ライブラリ

## プロジェクト構造

```
src/
├── features/                   # 機能別モジュール
│   └── qr-generator/           # QRコード生成機能
│       ├── components/         # 機能専用コンポーネント
│       │   ├── FormField/      # フォーム項目
│       │   ├── QROptions/      # QR設定オプション
│       │   ├── QRDisplay/      # QR表示エリア
│       │   └── DownloadButtons/ # ダウンロードボタン群
│       ├── QRGeneratorApp/     # 機能ルートコンポーネント
│       ├── useQRGenerator.ts   # QR生成管理フック
│       └── types.ts            # 機能固有の型定義
├── components/                 # 共通UIコンポーネント
│   ├── Button/                 # 操作ボタン
│   ├── TextArea/               # テキストエリア
│   ├── Select/                 # セレクトボックス
│   ├── ColorInput/             # カラー入力
│   └── Label/                  # ラベル
├── stories/                    # Storybook用ストーリー
├── Config.ts                   # 設定値
├── App.tsx                     # メインアプリ
└── main.tsx                    # エントリーポイント
```

## スクリプト

```bash
# セットアップ
npm install

# 開発サーバー起動
npm run dev

# ビルド
npm run build

# プレビュー
npm run preview

# Storybook起動
npm run storybook

# Storybook ビルド
npm run build-storybook
```

## ライセンス

MIT License