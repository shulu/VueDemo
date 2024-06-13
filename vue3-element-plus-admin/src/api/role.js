/*
 * @Author: shulu
 * @Date: 2024-05-11 15:54:57
 * @LastEditors: shulu
 * @LastEditTime: 2024-06-13 23:23:21
 * @Description: file content
 * @FilePath: \vue3-element-plus-admin\src\api\setting.js
 */
import instance from '@/utils/request';

/**
 *菜单列表
 */
export const RoleList = (data) => {
    return instance.request({
        method: 'post',
        url: '/role/lists',
        data,
    });
};
