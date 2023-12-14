/*
 * @Author: shulu
 * @Date: 2023-03-28 15:28:51
 * @LastEditors: shulu
 * @LastEditTime: 2023-03-30 14:40:01
 * @Description: file content
 * @FilePath: /vue3-music/src/utils/api.ts
 */
import http from "./http";
import { IBanner } from "@/models/banner";
import { ISongUrl } from "@/models/songUrl";
export async function useBanner() {
  const banners = await http.get<IBanner>("banner", { type: 1 });
  return banners;
}

export async function useSongUrl(id: number) {
  const song = await http.get<ISongUrl>("/song/url", { id: id });
  return song;
}
