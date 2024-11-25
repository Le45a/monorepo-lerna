import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    // 保留符号链接，支持 PnP 的虚拟路径
    preserveSymlinks: true,
  },
})
