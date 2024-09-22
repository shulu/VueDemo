/*
 * @Author: shulu
 * @Date: 2023-12-14 10:13:21
 * @LastEditors: shulu
 * @LastEditTime: 2024-07-17 17:38:22
 * @Description: file contenre
 * @FilePath: \vue3-element-plus-admin\src\router\index.js
 */
import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
    {
        path: '/system',
        name: 'System',
        meta: {
            title: '系统配置',
            icon: 'setting',
        },
        component: () => import('../layout/Index.vue'),
        children: [
            {
                path: '/user',
                name: 'User',
                meta: {
                    title: '用户列表',
                },
                component: () => import('@v/system/User.vue'),
            },
            {
                path: '/role',
                name: 'Role',
                meta: {
                    title: '角色列表',
                },
                component: () => import('@v/system/Role.vue'),
            },
            {
                path: '/menu',
                name: 'Menu',
                meta: {
                    title: '菜单列表',
                },
                component: () => import('@v/system/Menu.vue'),
            },
        ],
    },
    {
        path: '/',
        redirect: 'Login',
        hidden: true,
        aaa: '',
        bbb: '',
    },
    // 登录
    {
        path: '/login',
        name: 'Login',
        hidden: true,
        component: () => import('../views/account/Login.vue'),
    },
    // 后台首页
    {
        path: '/console',
        name: 'Console',
        meta: {
            title: '控制台',
            icon: 'home',
        },
        component: () => import('../layout/Index.vue'),
        children: [
            {
                path: '/home',
                name: 'Home',
                meta: {
                    title: '首页',
                    icon: 'home',
                },
                component: () => import('@v/console/Index.vue'),
            },
        ],
    },
    {
        path: '/news',
        name: 'News',
        meta: {
            title: '信息管理',
            icon: 'information',
        },
        component: () => import('../layout/Index.vue'),
        children: [
            {
                path: '/newsIndex',
                name: 'NewsIndex',
                meta: {
                    title: '信息列表',
                },
                component: () => import('@v/info/Index.vue'),
            },
            {
                path: '/newsCategory',
                name: 'NewsCategory',
                meta: {
                    title: '信息分类',
                },
                component: () => import('@v/info/Category.vue'),
            },
            {
                path: '/newsDetailed',
                name: 'NewsDetailed',
                hidden: true,
                meta: {
                    title: '信息详情',
                },
                component: () => import('@v/info/Detailed.vue'),
            },
        ],
    },
    // {
    //     path: '/user',
    //     name: 'User',
    //     meta: {
    //         title: '用户管理',
    //         icon: 'user',
    //     },
    //     component: () => import('../layout/Index.vue'),
    //     children: [
    //         {
    //             path: '/userIndex',
    //             name: 'UserIndex',
    //             meta: {
    //                 title: '用户列表',
    //                 icon: 'user',
    //             },
    //             component: () => import('../views/user/Index.vue'),
    //         },
    //     ],
    // },
    //中转静态路由
    { path: '/admin', name: 'Admin', hidden: true },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
