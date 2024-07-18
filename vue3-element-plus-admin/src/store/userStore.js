/*
 * @Author: shulu
 * @Date: 2024-01-04 15:38:39
 * @LastEditors: shulu
 * @LastEditTime: 2024-07-18 17:21:22
 * @Description: file content
 * @FilePath: \vue3-element-plus-admin\src\store\userStore.js
 */
import { UpdatePass, UserCreate, UserDelete, UserDetailed, UserList, UserStatus, UserUpdate } from '@/api/user';
import globalData from '@/js/data';
import { validatePass, validateUsername } from '@/utils/validate';
import { ElMessage } from 'element-plus';
import sha1 from 'js-sha1';
import { defineStore } from 'pinia';
export const useUserStore = defineStore('user', {
    state: () => {
        return {
            d_title: '添加用户',
            user_handler_flag: 'add',
            form_loading: false,
            dialog_visible: false,
            form_item: [
                { type: 'input', label: '用户名', prop: 'username', require: true, hidden: false },
                { type: 'input', label: '真实姓名', prop: 'truename', require: true, hidden: false },
                { type: 'input', label: '密码', prop: 'password', value_type: 'password', require: true, hidden: false },
                { type: 'radio', label: '是否启用', prop: 'user_disabled', options: globalData.whether_other, require: true, hidden: false },
                { label: '角色类型', prop: 'role_type', type: 'slot', slot_name: 'role', width: '250', require: true, hidden: false },
            ],
            form_data: {
                username: '',
                truename: '',
                password: '',
                role_type: '',
                user_disabled: '1',
            },
            form_rules: {
                username: [{ required: true, validator: validateUsername, trigger: 'blur' }],
                truename: [{ required: true, message: '真实姓名不能为空', trigger: 'blur' }],
                password: [{ required: true, validator: validatePass, trigger: 'blur' }],
                user_disabled: [{ required: true, message: '是否启用不能为空', trigger: 'change' }],
                role_type: [{ required: true, message: '角色类型不能为空', trigger: 'change' }],
            },
            search_config: {
                label_width: '70px',
                form_button: { reset_button: true },
                form_item: [
                    {
                        type: 'select',
                        label: '帐号状态',
                        prop: 'user_disabled',
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
                            { label: '用户名', value: 'username' },
                            { label: '真实姓名', value: 'truename' },
                            { label: '角色类型', value: 'role_type' },
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
                { label: '用户名', prop: 'username' },
                { label: '真实姓名', prop: 'truename' },
                { label: '角色类型', prop: 'role_type' },
                { label: '帐号状态', prop: 'user_disabled', type: 'switch' },
                { label: '创建时间', prop: 'user_createtime' },
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
                user_disabled: '',
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
        async MOD_PWD(id) {
            this.form_data.id = id;
            this.form_item.map((item) => (item.prop != 'password' ? (item.hidden = true) : item));
            this.dialog_visible = true;
        },
        async STATUS_CHANGE(change_info) {
            try {
                console.log(`output->change_info`, change_info);
                const prop_type = change_info.prop;
                let res = {};
                switch (prop_type) {
                    case 'user_disabled': {
                        const dis_val = change_info.data.user_disabled ? 1 : 2;
                        const req_data = { id: change_info.data.id, user_disabled: dis_val };
                        console.log(`output->req_data`, req_data);
                        res = await UserStatus(req_data);
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
        async DELETE(id) {
            try {
                const req_data = { id: id };
                console.log(`output->req_data`, req_data);
                const res = await UserDelete(req_data);
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
        async DETAIL(id) {
            try {
                const req_data = { id: id };
                const { data, message } = await UserDetailed(req_data);
                this.form_item.map((item) => (item.prop == 'password' ? (item.hidden = true) : item));
                this.form_data = data;
                this.dialog_visible = true;
                ElMessage({
                    message: message,
                    type: 'success',
                });
            } catch (err) {
                console.log(`output->err`, err);
                ElMessage({
                    message: '获取详情失败',
                    type: 'error',
                });
            }
        },
        async CREATE() {
            //开启按钮加载状态
            this.form_loading = true;
            //执行接口
            try {
                let res = { data: '', message: '' };
                console.log(`output->this.role_handler_flag`, this.user_handler_flag);
                if (this.user_handler_flag == 'edit') {
                    const req_data = Object.assign({}, this.form_data);
                    res = await UserUpdate(req_data);
                } else if (this.user_handler_flag == 'edit_pwd') {
                    const req_data = {
                        id: this.form_data.id,
                        password: this.form_data.password,
                    };
                    req_data.password = sha1(req_data.password);
                    res = await UpdatePass(req_data);
                } else {
                    const req_data = Object.assign({}, this.form_data);
                    req_data.password = sha1(req_data.password);
                    console.log(`output->create req_data`, req_data);
                    res = await UserCreate(req_data);
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
                const { data, message } = await UserList(request_data);
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
                // menu_disabled: '0',8
                key: '',
                key_word: '',
                user_disabled: '',
            };
        },
        RESET_FORM_DATA() {
            this.user_handler_flag = 'add';
            this.d_title = '添加用户';
            this.form_item.map((item) => (item.hidden = false));
            console.log(`output->this.form_item`, this.form_item);
            this.form_data = {
                username: '',
                truename: '',
                password: '',
                role_type: '',
                user_disabled: '1',
            };
        },
    },
});
