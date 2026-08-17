# CLAUDE.md

このファイルは、このリポジトリでClaude Codeが作業する際のガイドラインです。

## プロジェクト概要

task-board プロジェクト。React製のシンプルなタスク管理（ToDo）アプリ。

- テキスト入力でタスクを追加できる
- チェックボックスで完了・未完了を切り替えられる
- タスクを削除できる
- 完了済みのタスクはグレーで表示する
- タスクはlocalStorageに保存され、ページをリロードしても消えない

## デプロイ先

https://izuoffice.github.io/task-board/

- `main` ブランチへのプッシュをトリガーに、GitHub Actions（[.github/workflows/deploy.yml](.github/workflows/deploy.yml)）が自動でビルド・デプロイを行う。
- GitHub Pagesのプロジェクトページとして公開するため、本番ビルド時のbase pathは `/task-board/`（[vite.config.js](vite.config.js)）。

## 技術スタック

- React 18
- Vite 5（ビルドツール・開発サーバー）
- プレーンCSS（CSSフレームワーク・CSS-in-JSは未使用）
- 状態管理: Reactの `useState` / `useEffect` のみ（外部の状態管理ライブラリは未使用）
- データ永続化: ブラウザの `localStorage`（バックエンド・DBは無し）
- CI/CD: GitHub Actions（GitHub Pagesへの自動デプロイ）

## 開発コマンド

- `npm install` — 依存パッケージのインストール
- `npm run dev` — 開発サーバーの起動（デフォルト: http://localhost:5173 ）
- `npm run build` — 本番ビルド（`dist/` に出力）
- `npm run preview` — ビルド済みファイルをローカルでプレビュー

## Git運用ルール

### 基本方針: コード変更ごとにGitHubへプッシュする

- コードに変更を加えたら、そのたびにコミットを作成し、GitHubへプッシュすること。
  作業をローカルに溜め込まず、こまめにコミット・プッシュを行う。
- 1つのコミットは意味のある単位にまとめ、変更内容がわかるコミットメッセージを書くこと。
- プッシュ前に `git status` / `git diff` で変更内容を確認し、意図しないファイル（秘密情報・不要な生成物など）が含まれていないか確認すること。
- force push（`git push --force` 等）や履歴を書き換える操作は、ユーザーの明示的な許可がない限り行わない。
- コミット・プッシュはユーザーから明示的に依頼された場合、またはこのファイルで許可された範囲で行う。

### コミットメッセージの書き方

- 変更の「なぜ」が伝わる簡潔な説明を1〜2文で書く。
- 日本語・英語どちらでも構わないが、リポジトリ内で表記を統一する。

### ブランチ運用

<!-- TODO: mainへ直接コミットするか、feature branch + PR運用にするか等が決まったら記載してください -->

## コーディング規約

### コンポーネントの命名規約

- コンポーネントのファイル名・関数名はPascalCase（例: `App.jsx` の `App`）。
- 1ファイル1コンポーネントを基本とする。
- コンポーネントは関数コンポーネント（`function` 宣言）で記述し、`export default` する。
- コンポーネント用のCSSは同名の `.css` ファイルに分け、対応するコンポーネントと同じ階層に置く（例: `App.jsx` ⇔ `App.css`）。共通のグローバルスタイルは `index.css` に置く。
- props・state・関数・変数はcamelCase（例: `toggleTask`, `deleteTask`）。
- 定数はSCREAMING_SNAKE_CASE（例: `STORAGE_KEY`）。
- イベントハンドラは `on〜`（props経由で渡す場合）または `handle〜` / 動詞（コンポーネント内定義の場合、例: `addTask`, `toggleTask`）で命名する。
