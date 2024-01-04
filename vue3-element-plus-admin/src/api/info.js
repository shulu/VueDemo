/*
 * @Author: shulu
 * @Date: 2023-12-21 16:09:40
 * @LastEditors: shulu
 * @LastEditTime: 2024-01-04 15:01:28
 * @Description: file content
 * @FilePath: /vue3-element-plus-admin/src/api/info.js
 */
import instance from '@/utils/request';

/**
 * 添加父级分类
 */
export const firstCategoryAdd = (data) => {
    return instance.request({
        method: 'post',
        url: '/news/addFirstCategory/',
        data,
    });
};
/**
 * 获取分类
 */
export const GetCategory = (data) => {
    return instance.request({
        method: 'post',
        url: '/news/getCategoryAll/',
        data,
    });
};
/**
 * 添加子级分类
 */
export const ChildCategoryAdd = (data) => {
    return instance.request({
        method: 'post',
        url: '/news/addChildrenCategory/',
        data,
    });
};
/**
 * 添加子级分类
 */
export const CategoryEdit = (data) => {
    return instance.request({
        method: 'post',
        url: '/news/editCategory/',
        data,
    });
};
/**
 * 分类删除
 */
export const CategoryDel = (data) => {
    return instance.request({
        method: 'post',
        url: '/news/deleteCategory/',
        data,
    });
};
