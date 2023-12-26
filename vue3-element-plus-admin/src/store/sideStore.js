/*
 * @Author: shulu
 * @Date: 2023-12-14 10:13:21
 * @LastEditors: shulu
 * @LastEditTime: 2023-12-26 15:11:23
 * @Description: file content
 * @FilePath: /vue3-element-plus-admin/src/store/sideStore.js
 */

import { defineStore } from 'pinia';

export const useSideStore = defineStore('side', {
    state: () => {
        return {
            collapse: false,
        };
    },
    actions: {
        CHANGE_SIDE() {
            this.collapse = !this.collapse;
        },
    },
});
