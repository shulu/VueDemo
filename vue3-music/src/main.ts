/*
 * @Author: shulu
 * @Date: 2023-03-14 16:54:05
 * @LastEditors: shulu
 * @LastEditTime: 2023-03-28 18:03:29
 * @Description: file content
 * @FilePath: /vue3-music/src/main.ts
 */
import { createApp } from "vue";
import "@/assets/base.scss";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(router);
app.mount("#app");
