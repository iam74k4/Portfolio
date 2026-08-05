import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// GitHub Pages はリポジトリ名のサブパスに配信されるため、公開先に合わせて base を変える。
// デプロイ用ワークフローが BASE_PATH を渡す。ローカル開発では '/' のまま。
const base = process.env.BASE_PATH ?? '/'

// https://vite.dev/config/
export default defineConfig({
  base,
  plugins: [react()],
})
