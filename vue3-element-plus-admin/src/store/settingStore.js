/*
 * @Author: shulu
 * @Date: 2024-01-04 15:38:39
 * @LastEditors: shulu
 * @LastEditTime: 2024-05-11 18:18:10
 * @Description: file content
 * @FilePath: /vue3-element-plus-admin/src/store/settingStore.js
 */
import { MenuList } from '@/api/setting';
import globalData from '@/js/data';
import { ElMessage } from 'element-plus';
import { defineStore } from 'pinia';
export const useSettingStore = defineStore('setting', {
    state: () => {
        return {
            search_config: {
                label_width: '70px',
                form_button: { reset_button: true },
                form_item: [
                    {
                        type: 'select',
                        label: '是否禁用',
                        props: 'menu_disabled',
                        width: '100px',
                        col: 6,
                        options: globalData.whether,
                    },
                    {
                        type: 'keyword',
                        label: '关键字',
                        prop: 'keyword',
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
            page_info: {
                page_num: 1,
                current_page: 1,
                page_size: 20,
                total: 0,
            },
            table_search: {
                category_id: 0,
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
            if (data.category_id.length) {
                data.category_id = data.category_id[data.category_id.length - 1];
            } else {
                delete data.category_id;
            }
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
    },
});
