import vue from '@vitejs/plugin-vue'
import path from 'path'
import { fileURLToPath } from 'url'
import { defineConfig, loadEnv } from 'vite'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '')
  return {
    // 关键新增：适配 GitHub Pages 的 base 路径
    // 格式必须是 /你的仓库名/，前后都要有斜杠
    base: '/liquanshizhu/',
    plugins: [vue()],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // 保留原有 HMR 配置，不影响本地开发
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  }
})
