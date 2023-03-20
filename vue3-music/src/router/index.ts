/*
 * @Author: shulu
 * @Date: 2023-03-14 17:21:57
 * @LastEditors: shulu
 * @LastEditTime: 2023-03-20 17:20:56
 * @Description: file content
 * @FilePath: /vue3-music/src/router/index.ts
 */
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('../views/Root.vue'),
        children: [
            {
                path: 'discovery',
                name: 'discovery',
                component:()=>import('../views/discovery/index.vue')
            },
            {
                path: 'dj',
                name: 'dj',
                component:()=>import('../views/dj/index.vue')
            },
            {
                path: 'music',
                name: 'music',
                component:()=>import('../views/music/index.vue')
            },
            {
                path: 'video',
                name: 'video',
                component:()=>import('../views/video/index.vue')
            }
        ]
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    linkActiveClass:'active',
    routes
})

export default router