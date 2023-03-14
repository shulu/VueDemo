/*
 * @Author: shulu
 * @Date: 2023-03-14 16:54:05
 * @LastEditors: shulu
 * @LastEditTime: 2023-03-14 18:22:02
 * @Description: file content
 * @FilePath: /vue3-music/vite.config.ts
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@":path.resolve(__dirname, 'src')
    }
  },
  plugins: [vue()],
})
