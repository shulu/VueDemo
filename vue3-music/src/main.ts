/*
 * @Author: shulu
 * @Date: 2023-03-14 16:54:05
 * @LastEditors: shulu
 * @LastEditTime: 2023-03-22 17:53:23
 * @Description: file content
 * @FilePath: /vue3-music/src/main.ts
 */
import { createApp } from 'vue'
import '@/assets/base.scss'
import App from './App.vue'
import router from './router'
import { register } from 'swiper/element/bundle';
register();

createApp(App).use(router).mount('#app')
