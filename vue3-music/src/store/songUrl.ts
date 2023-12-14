/*
 * @Author: shulu
 * @Date: 2023-03-28 18:01:40
 * @LastEditors: shulu
 * @LastEditTime: 2023-03-30 14:53:45
 * @Description: file content
 * @FilePath: /vue3-music/src/store/songUrl.ts
 */
import { defineStore } from "pinia";
import { ref } from "vue";
import { ISongUrl } from "@/models/songUrl";
import { useSongUrl } from "@/utils/api";

export const usePlayStore = defineStore("player", {
  state: (): ISongUrl => {
    return {
      id: 0,
      url: "",
    };
  },
  actions: {
    async getSongUrl(id: number) {
      const { songId, url } = await useSongUrl(id);
      this.id = songId;
      this.url = url;
    },
  },
});
