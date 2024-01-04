/*
 * @Author: shulu
 * @Date: 2023-12-21 16:03:52
 * @LastEditors: shulu
 * @LastEditTime: 2024-01-04 15:29:40
 * @Description: file content
 * @FilePath: /vue3-element-plus-admin/src/utils/request.js
 */
import router from '@/router';
import { getToken, getUserName, removeToken, removeUsername } from '@/utils/cookies';
import axios from 'axios';
import { ElMessage } from 'element-plus';
//创建实例
const service = axios.create({
    baseURL: process.env.VUE_APP_API,
    timeout: 5000,
});

//添加请求拦截器
service.interceptors.request.use(
    function (config) {
        //在发送之前做些什么
        if (getToken()) {
            config.headers['Token'] = getToken();
        }
        if (getUserName()) {
            config.headers['Username'] = getUserName();
        }
        return config;
    },
    function (error) {
        console.log(`output->error`, error);

        return Promise.reject(error);
    },
);

//添加响应拦截器
service.interceptors.response.use(
    function (response) {
        //对相应数据做些什么
        const data = response.data;
        if (data.resCode === 0) {
            return Promise.resolve(data);
        } else {
            // ElMessage({
            //     message: data.message,
            //     type: 'error',
            // });
            return Promise.reject(data);
        }
    },
    function (error) {
        //对相应错误做什么
        //token失效直接退出
        const errorData = JSON.parse(error.request.response);
        if (errorData.resCode === 1010) {
            router.replace({ name: 'Login' });
            removeToken();
            removeUsername();
        }
        if (errorData.message) {
            ElMessage({
                message: errorData.message,
                type: 'error',
            });
        }
        return Promise.reject(error);
    },
);

//暴露service
export default service;
