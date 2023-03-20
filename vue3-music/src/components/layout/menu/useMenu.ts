/*
 * @Author: shulu
 * @Date: 2023-03-20 16:07:27
 * @LastEditors: shulu
 * @LastEditTime: 2023-03-20 17:38:11
 * @Description: file content
 * @FilePath: /vue3-music/src/components/layout/menu/useMenu.ts
 */
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
                    icon: ''
                },
                {
                    name: '音乐馆',
                    key: 'music',
                    icon: ''
                },
                {
                    name: '视频',
                    key: 'video',
                    icon: ''
                },
                {
                    name: '电台',
                    key: 'dj',
                    icon: ''
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