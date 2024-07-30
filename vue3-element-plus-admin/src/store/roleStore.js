/*
 * @Author: shulu
 * @Date: 2024-01-04 15:38:39
 * @LastEditors: shulu
 * @LastEditTime: 2024-07-29 15:46:38
 * @Description: file content
 * @FilePath: \vue3-element-plus-admin\src\store\roleStore.js
 */
import { RoleCreate, RoleDelete, RoleDetailed, RoleList, RoleStatus, RoleUpdate } from '@/api/role';
import globalData from '@/js/data';
import { ElMessage } from 'element-plus';
import { defineStore } from 'pinia';
export const useRoleStore = defineStore('role', {
    state: () => {
        return {
            role_handler_flag: 'add',
            form_loading: false,
            dialog_visible: false,
            form_item: [
                { type: 'input', label: '角色名称', prop: 'role_name', require: true, hidden: false },
                { type: 'input', label: '角色标识', prop: 'role_value', require: true, hidden: false },
                {
                    type: 'slot',
                    label: '是否超管',
                    prop: 'has_admin',
                    slot_name: 'admin',
                    hidden: false,
                },
                { type: 'radio', label: '是否启用', prop: 'role_disabled', options: globalData.whether, hidden: false },
                { type: 'slot', label: '角色权限', prop: 'role_permit', slot_name: 'permit', hidden: false },
            ],
            form_data: {
                role_name: '',
                role_value: '',
                role_disabled: '1',
                has_admin: '0',
            },
            form_rules: {
                role_name: [{ required: true, message: '角色名称不能为空', trigger: 'change' }],
                role_value: [{ required: true, message: '角色标识不能为空', trigger: 'change' }],
                role_disabled: [{ required: true, message: '菜单路由不能为空', trigger: 'change' }],
                role_permit: [{ required: true, message: '菜单组件不能为空', trigger: 'change' }],
            },
            search_config: {
                label_width: '70px',
                form_button: { reset_button: true },
                form_item: [
                    {
                        type: 'input',
                        label: '角色名称',
                        prop: 'role_name',
                        col: 6,
                    },
                    {
                        type: 'select',
                        label: '禁用状态',
                        prop: 'role_disabled',
                        width: '100px',
                        col: 6,
                        options: globalData.whether,
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
                { label: '角色名称', prop: 'role_name' },
                { label: '是否禁用', prop: 'role_disabled', type: 'switch' },
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
            radio_options: globalData.whether,
        };
    },
    getters: {
        getTableSearch: (state) => state.table_search,
    },
    actions: {
        async ROLE_STATUS_CHANGE(change_info) {
            try {
                console.log(`output->change_info`, change_info);
                const prop_type = change_info.prop;
                let res = {};
                switch (prop_type) {
                    case 'role_disabled': {
                        const dis_val = change_info.data.role_disabled ? 1 : 2;
                        const req_data = { role_id: change_info.data.role_id, role_disabled: dis_val };
                        console.log(`output->req_data`, req_data);
                        res = await RoleStatus(req_data);
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
        async ROLE_DEL(id) {
            try {
                const req_data = { role_id: id };
                console.log(`output->req_data`, req_data);
                const res = await RoleDelete(req_data);
                ElMessage({
                    message: res.message,
                    type: 'success',
                });
                this.GET_TABLE_LIST();
            } catch (err) {
                console.log(`output->err`, err);
                ElMessage({
                    message: '删除失败',
                    type: 'error',
                });
            }
        },
        async ROLE_DETAIL(id) {
            try {
                const req_data = { role_id: id };
                console.log(`output->req_data`, req_data);
                const { data, message } = await RoleDetailed(req_data);
                console.log(`output->detail data`, data);
                this.form_data = data;
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
        async ROLE_CREATE() {
            //开启按钮加载状态
            this.form_loading = true;
            //执行接口
            try {
                let res = { data: '', message: '' };
                console.log(`output->this.role_handler_flag`, this.role_handler_flag);
                if (this.role_handler_flag == 'edit') {
                    const update_data = {
                        ...this.form_data,
                    };
                    res = await RoleUpdate(update_data);
                } else {
                    res = await RoleCreate(this.form_data);
                }
                this.dialog_visible = false;
                ElMessage({
                    message: res.message,
                    type: 'success',
                });
                this.RESET_FORM_DATA();
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
                const { data, message } = await RoleList(request_data);
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
                key: '',
                key_word: '',
                status: '',
            };
        },
        RESET_FORM_DATA() {
            this.form_data = {
                role_name: '',
                role_value: '',
                role_disabled: '1',
                menu_id: [],
            };
        },
    },
});
