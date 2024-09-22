/*
 * @Author: shulu
 * @Date: 2023-12-22 16:16:16
 * @LastEditors: shulu
 * @LastEditTime: 2024-07-29 16:21:24
 * @Description: file content
 * @FilePath: \vue3-element-plus-admin\src\api\account.js
 */
import instance from '@/utils/request';
/**
 * 注册
 */
export const Register = (data) => {
    return instance.request({
        method: 'post',
        url: '/register/',
        data,
    });
};
/**
 * 登录
 */
export const Login = (data) => {
    return instance.request({
        method: 'post',
        url: '/login/',
        data,
    });
};
/**
 * 登出
 */
export const LoginOut = (data) => {
    return instance.request({
        method: 'post',
        url: '/logout/',
        data,
    });
};

/**
 * 登出
 */
export const GetPermission = (data = {}) => {
    return instance.request({
        method: 'post',
        url: '/permission',
        data,
    });
};
