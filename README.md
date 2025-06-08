# 鬼滅の刃キャラクター一覧 👺

このプロジェクトは、鬼滅の刃のキャラクター情報を表示するシンプルなWebアプリケーションです。

https://so-engineer.github.io/js_kimetsu_list/

## 特徴

鬼滅の刃キャラクター一覧は、シンプルで使いやすいインターフェースを提供するWebアプリケーションです。外部APIを使用してキャラクター情報を取得し、カテゴリー別に表示することができます。

主な機能：
- シンプルなUI/UXデザイン
- カテゴリー別表示機能（全キャラクター、鬼殺隊、柱、鬼）
- レスポンシブデザイン
- ローディング表示機能

## 技術スタック

- HTML
- CSS
- JavaScript (Vanilla)

## セットアップ

1. リポジトリのクローン
```bash
git clone https://github.com/so-engineer/js_kimetsu_list.git
```

2. プロジェクトディレクトリに移動
```bash
cd js_kimetsu_list
```

3. Live Serverなどのローカルサーバーでプロジェクトを起動

## プロジェクト構造

```
.
├── index.html         # メインのHTMLファイル
├── style.css          # スタイル定義
├── index.js           # JavaScriptロジック
└── README.md          # プロジェクトドキュメント
```

## 使用API

このプロジェクトは以下のAPIを使用しています：
```
https://ihatov08.github.io/kimetsu_api/
```

利用可能なエンドポイント：
- `/all.json` - 全キャラクター
- `/kisatsutai.json` - 鬼殺隊
- `/hashira.json` - 柱
- `/oni.json` - 鬼

## 開発環境のセットアップ

1. 任意のWebブラウザ
2. コードエディタ（VS Code推奨）
3. Live Server等のローカル開発サーバー

## その他
- このプロジェクトは学習目的で作成されています
- 画像やキャラクター情報の著作権は原作者などの適切な関係者に帰属します