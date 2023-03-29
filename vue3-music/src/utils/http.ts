/*
 * @Author: shulu
 * @Date: 2023-03-28 15:28:45
 * @LastEditors: shulu
 * @LastEditTime: 2023-03-29 16:00:24
 * @Description: file content
 * @FilePath: /vue3-music/src/utils/http.ts
 */
import axios, { type AxiosRequestConfig } from "axios";

axios.defaults.baseURL = "http://localhost:8081/";

//请求拦截器
axios.interceptors.request.use((config: AxiosRequestConfig | any) => config);

//响应拦截器
axios.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    return Promise.reject(err);
  }
);

//类型定义
interface IHttp {
  get<T>(url: string, params: unknown): Promise<T>;
}

const http: IHttp = {
  get(url, params) {
    return new Promise((resolve, reject) => {
      axios
        .get(url, { params })
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
};

export default http;
