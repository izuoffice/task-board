import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages ( https://izuoffice.github.io/task-board/ ) にプロジェクトページとして
// 公開するため、本番ビルド時のみ base をリポジトリ名に合わせる。
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/task-board/' : '/',
  plugins: [react()],
}))
