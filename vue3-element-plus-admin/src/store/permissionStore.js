import { GetPermission } from '@/api';
import { formatTree } from '@/utils/common';
import { ElMessage } from 'element-plus';
import { defineStore } from 'pinia';

export const usePermissionStore = defineStore('permission', {
    state: () => {
        return {
            user_router: [],
        };
    },
    getters: {
        returnRouter(state) {
            return state.user_router;
        },
    },
    actions: {
        async GET_ROUTER() {
            try {
                console.log('GET_ROUTER');
                const res = await GetPermission();
                // console.log(`output->res`, res);
                const format_router = this.FORMAT_ROUTER_MENU(res.data.router_menu);
                this.user_router = format_router;
                // console.log(`output->this.user_router`, this.user_router);
                // console.log(`output->format_router`, format_router);
                ElMessage.success(res.message);
            } catch (error) {
                ElMessage.error(error.message);
            }
        },
        FORMAT_ROUTER_MENU(data) {
            //检测数据
            if (data && (!Array.isArray(data) || data.length === 0)) {
                return false;
            }
            //存储数据
            const router = [];
            //遍历菜单
            data.forEach((item) => {
                const router_obj = {};
                //id
                router_obj.menu_id = item.menu_id;
                router_obj.parent_id = item.parent_id;
                //path
                router_obj.path = item.menu_path;
                //name
                router_obj.name = item.menu_router;
                //hidden
                if (item.menu_hidden === '1') {
                    router_obj.menu_hidden = true;
                }
                //redirect
                if (item.menu_redirect) {
                    router_obj.redirect = item.menu_redirect;
                }
                //meta
                router_obj.meta = {
                    title: item.menu_name,
                    icon: item.menu_icon,
                    keepAlive: item.menu_keep === '1' ? true : false,
                };
                //component
                // console.log(`output->component`, item.menu_component);
                router_obj.component = require(`@/${item.menu_component}`).default;
                //添加到router
                router.push(router_obj);
            });
            //格式化树形数据
            const tree_data = formatTree(router, 'menu_id', 'parent_id', 'children', 0);
            //返回数据
            return tree_data;
        },
    },
});
