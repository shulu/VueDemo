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
            ElMessage({
                message: data.message,
                type: 'error',
            });
            return Promise.reject(data);
        }
    },
    function (error) {
        //对相应错误做什么
        const errorData = JSON.parse(error.request.response);
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
