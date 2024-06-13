/*
 * @Author: shulu
 * @Date: 2024-01-04 15:38:39
 * @LastEditors: shulu
 * @LastEditTime: 2024-06-13 23:45:46
 * @Description: file content
 * @FilePath: \vue3-element-plus-admin\src\store\menuStore.js
 */
import { MenuCreate, MenuDelete, MenuDetailed, MenuDisabled, MenuHidden, MenuList, MenuUpdate } from '@/api/menu';
import globalData from '@/js/data';
import { formatTree } from '@/utils/common';
import { ElMessage } from 'element-plus';
import { defineStore } from 'pinia';
export const useMenuStore = defineStore('menu', {
    state: () => {
        return {
            menu_handler_flag: '',
            form_loading: false,
            dialog_visible: false,
            page_item: [{ value: '', label: '' }],
            form_item: [
                {
                    type: 'input',
                    label: '菜单名称',
                    prop: 'menu_name',
                    width: '300px',
                    disabled: false,
                    required: true,
                },
                {
                    type: 'input',
                    label: '菜单路径',
                    prop: 'menu_path',
                    width: '300px',
                    hidden: false,
                    disabled: false,
                    required: true,
                },
                {
                    type: 'input',
                    label: '路由名称',
                    prop: 'menu_router',
                    width: '300px',
                    required: true,
                },
                {
                    type: 'input',
                    label: '映射组件',
                    prop: 'menu_component',
                    width: '300px',
                    required: true,
                },
                { type: 'upload', label: '图标', prop: 'menu_icon', required: true },
                { type: 'inputnumber', label: '排序', prop: 'menu_sort', required: true },
                {
                    type: 'radio',
                    label: '是否禁用',
                    prop: 'menu_disabled',
                    options: globalData.whether,
                },
                {
                    type: 'radio',
                    label: '是否隐藏',
                    prop: 'menu_hidden',
                    options: globalData.whether,
                },
                {
                    type: 'radio',
                    label: '是否缓存',
                    prop: 'menu_keep',
                    options: globalData.whether,
                },
                {
                    type: 'input',
                    label: '重定向',
                    prop: 'menu_redirect',
                    width: '300px',
                },
                {
                    type: 'slot',
                    label: '页面功能',
                    slot_name: 'menu_function',
                },
            ],
            form_data: {
                menu_id: '',
                menu_name: '',
                menu_func: '',
                menu_path: '',
                menu_router: '',
                menu_component: '',
                menu_sort: 1,
                menu_disabled: '0',
                menu_hidden: '0',
                menu_keep: '0',
                menu_redirect: '',
                menu_icon: '',
                parent_id: 0,
            },
            form_rules: {
                menu_name: [{ required: true, message: '菜单不能为空', trigger: 'change' }],
                menu_path: [{ required: true, message: '菜单路径不能为空', trigger: 'change' }],
                menu_router: [{ required: true, message: '菜单路由不能为空', trigger: 'change' }],
                menu_component: [{ required: true, message: '菜单组件不能为空', trigger: 'change' }],
                menu_icon: [{ required: true, message: '菜单ICON不能为空', trigger: 'change' }],
                menu_sort: [{ required: true, message: '菜单排序不能为空', trigger: 'change' }],
            },
            search_config: {
                label_width: '70px',
                form_button: { reset_button: true },
                form_item: [
                    {
                        type: 'select',
                        label: '是否禁用',
                        prop: 'menu_disabled',
                        width: '100px',
                        col: 6,
                        options: globalData.whether,
                    },
                    {
                        type: 'keyword',
                        label: '关键字',
                        prop: 'key_word',
                        col: 12,
                        options: [
                            { label: '菜单名称', value: 'menu_name' },
                            { label: '菜单路径', value: 'menu_path' },
                            { label: '组件名称', value: 'menu_component' },
                        ],
                    },
                ],
                button_col: 6,
            },
            table_config: {
                search: true,
                selection: false,
                batch_delete: false,
                pagination: false,
                row_key: 'menu_id',
                expand_all: true,
            },
            table_header: [
                { label: '菜单名称', prop: 'menu_name' },
                { label: '菜单路径', prop: 'menu_path' },
                { label: '映射组件', prop: 'menu_component' },
                { label: '重定向', prop: 'menu_redirect' },
                { label: '是否隐藏', prop: 'menu_hidden', type: 'switch' },
                { label: '是否禁用', prop: 'menu_disabled', type: 'switch' },
                { label: '操作', prop: 'menu_name', type: 'slot', slot_name: 'operation', width: '250' },
            ],
            table_info: {
                data: [],
                total: 0,
                keywords_options: [
                    {
                        label: 'ID',
                        value: 'id',
                    },
                    {
                        label: '标题',
                        value: 'title',
                    },
                ],
            },
            page_info: globalData.page_info,
            table_search: {
                // menu_disabled: '0',8
                key: '',
                key_word: '',
                status: '',
            },
            table_batch_del: {
                ids: [],
            },
            detail_info: {
                id: 0,
            },
        };
    },
    getters: {
        getTableSearch: (state) => state.table_search,
    },
    actions: {
        async MENU_STATUS_CHANGE(change_info) {
            try {
                const prop_type = change_info.prop;
                let res = {};
                switch (prop_type) {
                    case 'menu_hidden': {
                        const hid_val = change_info.data.menu_hidden ? 1 : 2;
                        const hidden_req_data = { menu_id: change_info.data.menu_id, menu_hidden: hid_val };
                        res = await MenuHidden(hidden_req_data);
                        break;
                    }
                    case 'menu_disabled': {
                        const dis_val = change_info.data.menu_disabled ? 1 : 2;
                        const dis_req_data = { menu_id: change_info.data.menu_id, menu_disabled: dis_val };
                        res = await MenuDisabled(dis_req_data);
                        break;
                    }
                    default: {
                        return false;
                    }
                }
                ElMessage({
                    message: res.message,
                    type: 'success',
                });
                this.GET_TABLE_LIST();
            } catch (err) {
                console.log(`output->err`, err);
                ElMessage({
                    message: '更新失败',
                    type: 'error',
                });
            }
        },
        async MENU_DEL() {
            try {
                const req_data = { menu_id: this.form_data.menu_id };
                const res = await MenuDelete(req_data);
                ElMessage({
                    message: res.message,
                    type: 'success',
                });
                this.GET_TABLE_LIST();
            } catch (err) {
                console.log(`output->err`, err);
                ElMessage({
                    message: '更新失败',
                    type: 'error',
                });
            }
        },
        async MENU_DETAIL() {
            try {
                const req_data = { menu_id: this.form_data.menu_id };
                const { data, message } = await MenuDetailed(req_data);
                this.form_data = data;
                try {
                    const page_string = JSON.parse(data.menu_fun);
                    page_string && (this.page_item = page_string);
                } catch (error) {
                    console.log(`output->menu_fun-error`);
                }
                this.dialog_visible = true;
                ElMessage({
                    message: message,
                    type: 'success',
                });
            } catch (err) {
                console.log(`output->err`, err);
                ElMessage({
                    message: '更新失败',
                    type: 'error',
                });
            }
        },
        async MENU_CREATE() {
            //开启按钮加载状态
            this.form_loading = true;
            //执行接口
            try {
                let res = { data: '', message: '' };
                console.log(`output->this.menu_handler_flag`, this.menu_handler_flag);
                console.log(`output->this.form_data`, this.form_data);
                const pagItem = this.FORMAT_PAGE_ITEM();
                if (this.menu_handler_flag == 'edit') {
                    const update_data = {
                        ...this.form_data,
                        menu_func: pagItem,
                        menu_id: this.form_data.menu_id,
                    };
                    res = await MenuUpdate(update_data);
                } else if (this.menu_handler_flag == 'add_sub') {
                    const add_sub_data = {
                        ...this.form_data,
                        menu_fun: pagItem,
                    };
                    console.log(`output->add_sub_data`, add_sub_data);
                    res = await MenuCreate(add_sub_data);
                } else {
                    const add_data = Object.assign(this.form_data, { menu_fun: pagItem });
                    res = await MenuCreate(add_data);
                }
                this.dialog_visible = false;
                ElMessage({
                    message: res.message,
                    type: 'success',
                });
                this.RESET_FORM_DATA();
                this.RESET_MENU_FUNC();
                this.GET_TABLE_LIST();
            } catch (err) {
                console.log(`output->err`, err);
                ElMessage({
                    message: '添加失败',
                    type: 'error',
                });
            }
            this.form_loading = false;
        },
        async GET_TABLE_LIST() {
            try {
                const search_data = this.FORTMAT_SEARCH_PARAMS();
                let request_data = {
                    pageNumber: this.page_info.current_page,
                    pageSize: this.page_info.page_size,
                };
                request_data = Object.assign(request_data, search_data);
                const { data, message } = await MenuList(request_data);
                let format_tree = formatTree(data.data, 'menu_id', 'parent_id', 'children', 0);
                this.table_info.data = format_tree;
                this.table_info.total = data.total;
                this.page_info.total = data.total;
                this.page_info.current_page = data.current_page;
                this.page_info.page_num = Math.ceil(data.total / data.per_page);
                ElMessage({
                    message: message,
                    type: 'success',
                });
            } catch (error) {
                console.log(`output->error`, error);
                ElMessage({
                    message: '获取信息失败',
                    type: 'error',
                });
            }
        },
        FORTMAT_SEARCH_PARAMS() {
            const data = Object.assign({}, this.table_search);
            if (data.key && data.key_word) {
                data[data.key] = data.key_word;
            }
            delete data.key;
            delete data.key_word;
            return data;
        },
        FORMAT_PAGE_ITEM() {
            const data = Object.assign([], this.page_item);
            const dataItem = data.filter((item) => item.label && item.value);
            return JSON.stringify(dataItem);
        },
        RESET_TABLE_SEARCH() {
            this.table_search = {
                category_id: 0,
                key: '',
                key_word: '',
                status: '',
            };
        },
        RESET_FORM_DATA() {
            this.form_data = {
                menu_id: '',
                menu_fun: '',
                menu_name: '',
                menu_path: '',
                menu_router: '',
                menu_component: '',
                menu_sort: 1,
                menu_disabled: '0',
                menu_hidden: '0',
                menu_keep: '0',
                menu_redirect: '',
            };
            this.page_item = [{ value: '', label: '' }];
        },
        ADD_MENU_FUNC() {
            this.page_item.push({ value: '', label: '' });
        },
        REMOVE_MENU_FUNC(index) {
            this.page_item.splice(index, 1);
        },
        RESET_MENU_FUNC() {
            this.page_item = [{ value: '', label: '' }];
        },
    },
});
