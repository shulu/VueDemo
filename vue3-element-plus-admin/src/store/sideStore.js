/*
 * @Author: shulu
 * @Date: 2023-12-14 10:13:21
 * @LastEditors: shulu
 * @LastEditTime: 2023-12-27 16:08:09
 * @Description: file content
 * @FilePath: /vue3-element-plus-admin/src/store/sideStore.js
 */

import { getToken, getUserName, removeToken, removeUsername, setToken, setUserName } from '@/utils/cookies';
import { defineStore } from 'pinia';
export const useSideStore = defineStore('side', {
    state: () => {
        return {
            collapse: JSON.parse(sessionStorage.getItem('collapse')) ?? false,
            token: '' || getToken(),
            username: '' || getUserName(),
        };
    },
    actions: {
        CHANGE_SIDE() {
            this.collapse = !this.collapse;
            sessionStorage.setItem('collapse', JSON.stringify(this.collapse));
        },
        SET_TOKEN(value) {
            this.token = value;
            value && setToken(value);
        },
        SET_USERNAME(value) {
            this.username = value;
            value && setUserName(value);
        },
        DELETE_USER_INFO() {
            this.token = '';
            removeToken();
            removeUsername();
        },
    },
});
