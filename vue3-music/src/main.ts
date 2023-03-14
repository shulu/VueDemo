/*
 * @Author: shulu
 * @Date: 2023-03-14 16:54:05
 * @LastEditors: shulu
 * @LastEditTime: 2023-03-14 18:28:47
 * @Description: file content
 * @FilePath: /vue3-music/src/main.ts
 */
import { createApp } from 'vue'
import '@/assets/base.scss'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')
