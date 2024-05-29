/*
 * @Author: shulu
 * @Date: 2024-05-11 15:54:57
 * @LastEditors: shulu
 * @LastEditTime: 2024-05-16 12:25:14
 * @Description: file content
 * @FilePath: /vue3-element-plus-admin/src/api/setting.js
 */
import instance from '@/utils/request';

/**
 *菜单添加
 */
export const MenuUpdate = (data) => {
    return instance.request({
        method: 'post',
        url: '/menu/update',
        data,
    });
};
/**
 *菜单添加
 */
export const MenuDetailed = (data) => {
    return instance.request({
        method: 'post',
        url: '/menu/detailed',
        data,
    });
};
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
