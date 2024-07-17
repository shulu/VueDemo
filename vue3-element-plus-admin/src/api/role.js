/*
 * @Author: shulu
 * @Date: 2024-05-11 15:54:57
 * @LastEditors: shulu
 * @LastEditTime: 2024-07-16 18:26:23
 * @Description: file content
 * @FilePath: \vue3-element-plus-admin\src\api\role.js
 */
import instance from '@/utils/request';

/**
 *角色列表
 */
export const RoleList = (data) => {
    return instance.request({
        method: 'post',
        url: '/role/lists',
        data,
    });
};

/**
 *创建角色
 */
export const RoleCreate = (data) => {
    return instance.request({
        method: 'post',
        url: '/role/create',
        data,
    });
};

/**
 *编辑角色
 */
export const RoleDetailed = (data) => {
    return instance.request({
        method: 'post',
        url: '/role/detailed',
        data,
    });
};

/**
 *更新角色
 */
export const RoleUpdate = (data) => {
    return instance.request({
        method: 'post',
        url: '/role/update',
        data,
    });
};

/**
 *更新角色
 */
export const RoleStatus = (data) => {
    return instance.request({
        method: 'post',
        url: '/role/status',
        data,
    });
};

/**
 *更新角色
 */
export const RoleDelete = (data) => {
    return instance.request({
        method: 'post',
        url: '/role/delete',
        data,
    });
};
