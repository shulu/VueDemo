/*
 * @Author: shulu
 * @Date: 2024-01-04 15:38:39
 * @LastEditors: shulu
 * @LastEditTime: 2024-05-15 19:16:51
 * @Description: file content
 * @FilePath: /vue3-element-plus-admin/src/store/settingStore.js
 */
import { MenuCreate, MenuList } from '@/api/setting';
import globalData from '@/js/data';
import { ElMessage } from 'element-plus';
import { defineStore } from 'pinia';
export const useSettingStore = defineStore('setting', {
    state: () => {
        return {
            form_loading: false,
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
                menu_name: '',
                menu_path: '',
                menu_router: '',
                menu_component: '',
                menu_sort: 1,
                menu_disabled: '0',
                menu_hidden: '',
                menu_keep: '0',
                menu_redirect: '',
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
                selection: false,
                batch_delete: false,
                pagination: false,
            },
            table_header: [
                { label: '菜单名称', prop: 'menu_name' },
                { label: '菜单路径', prop: 'menu_path' },
                { label: '映射组件', prop: 'menu_component' },
                { label: '重定向', prop: 'menu_redirect' },
                { label: '是否隐藏', prop: 'menu_hidden', type: 'switch' },
                { label: '是否禁用', prop: 'menu_disabled', type: 'switch' },
                { label: '操作', prop: 'menu_name', type: 'slot', slot_name: 'operetion', width: '250' },
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
                menu_disabled: '0',
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
        async MENU_CREATE() {
            //开启按钮加载状态
            this.form_loading = true;
            //执行接口
            try {
                const res = await MenuCreate(this.form_data);
                ElMessage({
                    message: res.message,
                    type: 'success',
                });
                this.GET_TABLE_LIST();
            } catch (err) {
                ElMessage({
                    message: '添加失败',
                    type: 'error',
                });
            }
            this.form_loading = false;
        },
        async GET_TABLE_LIST() {
            try {
                const search_data = this.FORTMAT_PARAMS();
                let request_data = {
                    pageNumber: this.page_info.current_page,
                    pageSize: this.page_info.page_size,
                };
                request_data = Object.assign(request_data, search_data);
                const { data, message } = await MenuList(request_data);
                this.table_info.data = data.data;
                this.table_info.total = data.total;
                this.page_info.total = data.total;
                this.page_info.current_page = data.current_page;
                this.page_info.page_num = Math.ceil(data.total / data.per_page);
                ElMessage({
                    message: message,
                    type: 'success',
                });
            } catch (error) {
                ElMessage({
                    message: '获取信息失败',
                    type: 'error',
                });
            }
        },
        async CHANGE_STATUS(request_data) {
            try {
                const { data, message } = await Status(request_data);
                ElMessage({
                    message: message,
                    type: 'success',
                });
                return data;
            } catch (error) {
                ElMessage({
                    message: '获取信息失败',
                    type: 'error',
                });
                return false;
            }
        },
        FORTMAT_PARAMS() {
            const data = Object.assign({}, this.table_search);
            if (data.key && data.key_word) {
                data[data.key] = data.key_word;
            }
            delete data.key;
            delete data.key_word;
            return data;
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
                menu_name: '',
                menu_path: '',
                menu_router: '',
                menu_component: '',
                menu_sort: 1,
                menu_disabled: '0',
                menu_hidden: '',
                menu_keep: '0',
                menu_redirect: '',
            };
        },
    },
});
