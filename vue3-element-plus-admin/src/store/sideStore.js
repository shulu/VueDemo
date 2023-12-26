/*
 * @Author: shulu
 * @Date: 2023-12-14 10:13:21
 * @LastEditors: shulu
 * @LastEditTime: 2023-12-26 17:23:58
 * @Description: file content
 * @FilePath: /vue3-element-plus-admin/src/store/sideStore.js
 */

import { defineStore } from 'pinia';

export const useSideStore = defineStore('side', {
    state: () => {
        return {
            collapse: JSON.parse(sessionStorage.getItem('collapse')) ?? false,
        };
    },
    actions: {
        CHANGE_SIDE() {
            this.collapse = !this.collapse;
            sessionStorage.setItem('collapse', JSON.stringify(this.collapse));
        },
    },
});
