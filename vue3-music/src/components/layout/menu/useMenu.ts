/*
 * @Author: shulu
 * @Date: 2023-03-20 16:07:27
 * @LastEditors: shulu
 * @LastEditTime: 2023-03-22 16:08:11
 * @Description: file content
 * @FilePath: /vue3-music/src/components/layout/menu/useMenu.ts
 */
import {Camera, Music, VideoOne, Fm} from "@icon-park/vue-next";

interface IMenu {
    name: string;
    key: string;
    icon?: any
}

interface IMenus {
    name: string;
    menus: IMenu[];
}

export function useMenu() {
    const menus:IMenus[] = [
        {
            name: '在线音乐',
            menus: [
                {
                    name: '推荐',
                    key: 'discovery',
                    icon: Camera
                },
                {
                    name: '音乐馆',
                    key: 'music',
                    icon: Music
                },
                {
                    name: '视频',
                    key: 'video',
                    icon: VideoOne
                },
                {
                    name: '电台',
                    key: 'dj',
                    icon: Fm
                }
            ]
        },
        {
            name: '我的音乐',
            menus: []
        }
    ];
    return { menus }
}