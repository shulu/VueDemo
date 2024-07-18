/*
 * @Author: shulu
 * @Date: 2024-05-11 15:54:57
 * @LastEditors: shulu
 * @LastEditTime: 2024-07-18 17:16:58
 * @Description: file content
 * @FilePath: \vue3-element-plus-admin\src\api\user.js
 */
import instance from '@/utils/request';

/**
 *角色列表
 */
export const UserList = (data) => {
    return instance.request({
        method: 'post',
        url: '/user/lists',
        data,
    });
};

/**
 *创建角色
 */
export const UserCreate = (data) => {
    return instance.request({
        method: 'post',
        url: '/user/create',
        data,
    });
};

/**
 *编辑角色
 */
export const UserDetailed = (data) => {
    return instance.request({
        method: 'post',
        url: '/user/detailed',
        data,
    });
};

/**
 *更新角色
 */
export const UserUpdate = (data) => {
    return instance.request({
        method: 'post',
        url: '/user/update',
        data,
    });
};

/**
 *更新角色
 */
export const UserStatus = (data) => {
    return instance.request({
        method: 'post',
        url: '/user/status',
        data,
    });
};

/**
 *更新角色
 */
export const UserDelete = (data) => {
    return instance.request({
        method: 'post',
        url: '/user/remove',
        data,
    });
};

/**
 *更新角色
 */
export const UpdatePass = (data) => {
    return instance.request({
        method: 'post',
        url: '/user/password',
        data,
    });
};
