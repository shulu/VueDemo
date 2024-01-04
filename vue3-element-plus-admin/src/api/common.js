/*
 * @Author: shulu
 * @Date: 2023-12-21 16:09:40
 * @LastEditors: shulu
 * @LastEditTime: 2024-01-04 16:39:32
 * @Description: file content
 * @FilePath: /vue3-element-plus-admin/src/api/common.js
 */
import instance from '@/utils/request';

/**
 * 获取验证码
 */
export const GetCode = (data) => {
    return instance.request({
        method: 'post',
        url: '/getCode/',
        data,
    });
};
/**
 * 上传文件
 */
export const UploadFile = (data) => {
    return instance.request({
        method: 'post',
        url: '/upload',
        data,
    });
};
