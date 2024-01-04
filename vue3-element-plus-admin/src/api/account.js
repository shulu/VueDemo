/*
 * @Author: shulu
 * @Date: 2023-12-22 16:16:16
 * @LastEditors: shulu
 * @LastEditTime: 2023-12-27 16:10:37
 * @Description: file content
 * @FilePath: /vue3-element-plus-admin/src/api/account.js
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
