/*
 * @Author: shulu
 * @Date: 2023-12-21 16:09:40
 * @LastEditors: shulu
 * @LastEditTime: 2024-01-11 16:55:39
 * @Description: file content
 * @FilePath: /vue3-element-plus-admin/src/api/info.js
 */
import instance from '@/utils/request';

/**
 *信息编辑
 */
export const InfoEdit = (data) => {
    return instance.request({
        method: 'post',
        url: '/news/editInfo/',
        data,
    });
};

/**
 *获取信息
 */
export const GetDettailed = (data) => {
    return instance.request({
        method: 'post',
        url: '/news/detailed/',
        data,
    });
};

/**
 *删除
 */
export const Delete = (data) => {
    return instance.request({
        method: 'post',
        url: '/news/delete/',
        data,
    });
};

/**
 *发布状态
 */
export const Status = (data) => {
    return instance.request({
        method: 'post',
        url: '/news/status/',
        data,
    });
};

/**
 *信息列表
 */
export const GetTableList = (data) => {
    return instance.request({
        method: 'post',
        url: '/news/getList/',
        data,
    });
};

/**
 * 创建信息
 */
export const InfoCreate = (data) => {
    return instance.request({
        method: 'post',
        url: '/news/add/',
        data,
    });
};

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
