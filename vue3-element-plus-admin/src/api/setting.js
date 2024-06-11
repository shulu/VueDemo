/*
 * @Author: shulu
 * @Date: 2024-05-11 15:54:57
 * @LastEditors: shulu
 * @LastEditTime: 2024-06-11 23:57:57
 * @Description: file content
 * @FilePath: \vue3-element-plus-admin\src\api\setting.js
 */
import instance from '@/utils/request';

/**
 *菜单添加
 */
export const MenuDisabled = (data) => {
    return instance.request({
        method: 'post',
        url: '/menu/statusDisabled',
        data,
    });
};
/**
 *菜单添加
 */
export const MenuHidden = (data) => {
    return instance.request({
        method: 'post',
        url: '/menu/statusHidden',
        data,
    });
};
/**
 *菜单添加
 */
export const MenuDelete = (data) => {
    return instance.request({
        method: 'post',
        url: '/menu/remove',
        data,
    });
};
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
