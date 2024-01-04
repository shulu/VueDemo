/*
 * @Author: shulu
 * @Date: 2023-12-14 10:13:21
 * @LastEditors: shulu
 * @LastEditTime: 2024-01-02 17:00:59
 * @Description: file content
 * @FilePath: /vue3-element-plus-admin/src/main.js
 */
import { createApp } from 'vue';

import '@/router/permit';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
// elementui
// import ElementUI from './plugins/elementui';
import ElementPlus from 'element-plus';
// 如果您正在使用CDN引入，请删除下面一行。
import '@/components/svgIcon/svg';
import 'element-plus/dist/index.css';
// svgicon
import SvgIcon from '@/components/svgIcon/Index.vue';
//Editor
import WangEditor from '@/components/WangEditor/Index.vue'
//axios
import * as api from './api';
const app = createApp(App);
app.component('svg-icon', SvgIcon);
app.component('wang-editor', WangEditor);
//全局应用配置
app.config.globalProperties.$api = api;
app.use(ElementPlus);
app.use(createPinia());
app.use(router);
app.mount('#app');
