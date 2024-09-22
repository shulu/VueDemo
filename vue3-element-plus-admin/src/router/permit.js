/*
 * @Author: shulu
 * @Date: 2023-12-27 15:59:40
 * @LastEditors: shulu
 * @LastEditTime: 2024-07-30 15:50:46
 * @Description: file content
 * @FilePath: \vue3-element-plus-admin\src\router\permit.js
 */
import { usePermissionStore } from '@/store/permissionStore';
import { getToken } from '@/utils/cookies';
import { toRef } from 'vue';
import router from './index';
//全局前置守卫
router.beforeEach((to, from, next) => {
    const { GET_ROUTER } = usePermissionStore();
    const user_router = toRef(usePermissionStore(), 'user_router');
    if (!getToken()) {
        if (to.name !== 'Login') {
            next('/Login');
        } else {
            next();
        }
    } else {
        // console.log(`output->user_router`, user_router);
        if (user_router.value.length === 0) {
            //获取动态路由
            GET_ROUTER().finally(() => {
                //获取静态路由
                const default_router_data = router.options.routes;
                // console.log(`output->default_router_data`, default_router_data);
                //更新静态路由
                router.options.routes = default_router_data.concat(user_router.value);
                // console.log(`output->router.options.routes`, router.options.routes);
                user_router.value.forEach((item) => {
                    router.addRoute(item);
                });
                console.log(`output->to`, to);
                // const reload = { ...to, replace: true };
                // console.log(`output->reload`, reload);
                // console.log(`output->router`, router);
                if (to.name === 'Admin') {
                    const first_router = user_router.value[0]?.children[0] || user_router.value[0];
                    next({ ...first_router, replace: true });
                } else {
                    //进入下一个路由
                    // next({ ...to, replace: true });
                    next();
                }
            });
        } else {
            next();
        }
    }
});
//全局后置守卫
router.afterEach((to, from) => {});
