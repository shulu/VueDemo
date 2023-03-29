/*
 * @Author: shulu
 * @Date: 2023-03-28 17:57:12
 * @LastEditors: shulu
 * @LastEditTime: 2023-03-29 17:07:05
 * @Description: file content
 * @FilePath: /vue3-music/src/models/banner.ts
 */

interface IBannerArr {
  pic: string;
  targetId: string;
  targetType: number;
  targetTitle: string;
  bannerId: number;
  [proName: string]: any;
}
export interface IBanner {
  code: number;
  banners: Array<IBannerArr>;
}
