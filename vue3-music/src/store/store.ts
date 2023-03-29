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
