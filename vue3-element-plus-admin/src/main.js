/*
 * @Author: shulu
 * @Date: 2023-12-14 10:13:21
 * @LastEditors: shulu
 * @LastEditTime: 2023-12-21 16:14:33
 * @Description: file content
 * @FilePath: /vue3-element-plus-admin/src/main.js
 */
import { createApp } from 'vue';
// elementui
// import ElementUI from './plugins/elementui';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import App from './App.vue';
import router from './router';
import store from './store';
//axios
import * as api from './api';
const app = createApp(App);
//全局应用配置
app.config.globalProperties.$api = api;
app.use(ElementPlus);
app.use(store);
app.use(router);
app.mount('#app');
