/*
 * @Author: shulu
 * @Date: 2023-03-28 15:28:51
 * @LastEditors: shulu
 * @LastEditTime: 2023-03-29 16:59:01
 * @Description: file content
 * @FilePath: /vue3-music/src/utils/api.ts
 */
import http from "./http";
import { IBanner } from "@/models/banner";

export async function useBanner() {
  const banners = await http.get<IBanner>("banner", { type: 1 });
  return banners;
}
