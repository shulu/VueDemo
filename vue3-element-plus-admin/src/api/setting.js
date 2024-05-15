/*
 * @Author: shulu
 * @Date: 2024-05-11 15:54:57
 * @LastEditors: shulu
 * @LastEditTime: 2024-05-15 16:37:01
 * @Description: file content
 * @FilePath: /vue3-element-plus-admin/src/api/setting.js
 */
import instance from '@/utils/request';

/**
 *菜单添加
 */
export const MenuCreate = (data) => {
    return instance.request({
        method: 'post',
        url: '/menu/create',
        data,
    });
};
/**
 *菜单列表
 */
export const MenuList = (data) => {
    return instance.request({
        method: 'post',
        url: '/menu/listsTree',
        data,
    });
};
