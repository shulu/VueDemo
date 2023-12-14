/*
 * @Author: shulu
 * @Date: 2023-03-28 18:01:40
 * @LastEditors: shulu
 * @LastEditTime: 2023-03-30 14:42:49
 * @Description: file content
 * @FilePath: /vue3-music/src/store/banner.ts
 */
import { defineStore } from "pinia";
import { ref } from "vue";
import { IBanner } from "@/models/banner";
import { useBanner } from "@/utils/api";

export const useBannerStore = defineStore("banner", {
  state: (): IBanner => {
    return {
      code: 0,
      banners: [],
    };
  },
  actions: {
    async getBanners() {
      const { code, banners } = await useBanner();
      this.code = code;
      this.banners = banners;
    },
  },
});
