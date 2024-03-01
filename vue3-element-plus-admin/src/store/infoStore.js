/*
 * @Author: shulu
 * @Date: 2024-01-04 15:38:39
 * @LastEditors: shulu
 * @LastEditTime: 2024-02-28 16:52:53
 * @Description: file content
 * @FilePath: /vue3-element-plus-admin/src/store/infoStore.js
 */
import {
    CategoryDel,
    CategoryEdit,
    ChildCategoryAdd,
    Delete,
    GetCategory,
    GetDettailed,
    GetTableList,
    InfoCreate,
    InfoEdit,
    Status,
    firstCategoryAdd,
} from '@/api/info';
import { ElMessage, ElMessageBox } from 'element-plus';
import { defineStore } from 'pinia';
export const useInfoStore = defineStore('info', {
    state: () => {
        return {
            category_info: {
                category_list: [],
                detail_props: {
                    label: 'category_name',
                    value: 'id',
                    checkStrictly: false,
                    multiple: false,
                },
            },
            tree_data: [],
            defaultProps: {
                children: 'children',
                label: 'category_name',
                value: 'id',
            },
            parent_category: '',
            sub_category: '',
            button_loading: false,
            parent_category_data: null,
            sub_category_data: null,
            detail_props: {
                label: 'category_name',
                value: 'id',
                checkStrictly: false,
                multiple: false,
            },
            detail_form: {
                category_id: '',
                image_url: '',
                title: '',
                content: '',
                create_date: '',
                status: 0,
            },
            detail_form_rules: {
                category_id: [{ required: true, message: '分类不能为空', trigger: 'change' }],
                title: [{ required: true, message: '标题不能为空', trigger: 'change' }],
                image_url: [{ required: true, message: '缩略图不能为空', trigger: 'change' }],
                create_date: [{ required: true, message: '请选择发布日期', trigger: 'change' }],
                status: [{ required: true, message: '请选择发布状态', trigger: 'change' }],
                content: [{ required: true, message: '内容不能为空', trigger: 'change' }],
            },
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
                categore_id: 0,
                key: '',
                key_word: '',
            },
            table_batch_del: {
                ids: [],
            },
            detail_info: {
                id: 0,
            },
        };
    },
    actions: {
        async GET_CATEGORY() {
            try {
                const res = await GetCategory();
                this.tree_data = res.data;
                this.category_info.category_list = res.data;
                ElMessage({
                    message: res.message,
                    type: 'success',
                });
            } catch (error) {
                console.log(`output->error`, error);
                ElMessage({
                    message: '获取分类失败',
                    type: 'error',
                });
            }
        },
        async FIRST_CATEGORY_ADD() {
            if (!this.parent_category) {
                ElMessage({
                    message: '父类名称不可为空',
                    type: 'error',
                });
                return false;
            }
            //开启按钮加载状态
            this.button_loading = true;
            //执行接口
            try {
                const res = await firstCategoryAdd({ categoryName: this.parent_category });
                ElMessage({
                    message: res.message,
                    type: 'success',
                });
                this.parent_category = '';
                this.GET_CATEGORY();
            } catch (err) {
                ElMessage({
                    message: '添加失败',
                    type: 'error',
                });
            }
            this.button_loading = false;
        },
        async CHILD_CATEGORY_ADD() {
            if (!this.sub_category) {
                ElMessage({
                    message: '子类名称不可为空',
                    type: 'error',
                });
                return false;
            }
            //开启按钮加载状态
            this.button_loading = true;
            //执行接口
            try {
                const req_data = {
                    categoryName: this.sub_category,
                    parentId: this.parent_category_data.data.id,
                };
                const res = await ChildCategoryAdd(req_data);
                ElMessage({
                    message: res.message,
                    type: 'success',
                });
                this.sub_category = '';
                //追加
                //categoryTree.value.append(res.data, this.parent_category_data);
            } catch (err) {
                ElMessage({
                    message: '子类名称不可为空',
                    type: 'error',
                });
            }
            this.button_loading = false;
        },
        async CATEGORY_EDIT(type) {
            //分类为空提示
            if (!this.sub_category || !this.parent_category) {
                const message = type === 'parent_category_edit' ? '父级' : '子级';
                ElMessage({
                    message: `${message}分类类不能为空`,
                    type: 'error',
                });
                return false;
            }
            this.button_loading = true;
            //预先获取存储节点
            const node_parent = this.parent_category_data.data;
            const node_sub = this.sub_category_data.data;
            const req_data = {
                categoryName: type === 'parent_category_edit' ? this.parent_category : this.sub_category,
                id: type === 'parent_category_edit' ? node_parent.id : node_sub.id,
            };
            try {
                const res = await CategoryEdit(req_data);
                this.button_loading = false;
                ElMessage({
                    message: res.message,
                    type: 'success',
                });
                //同步更新树形菜单节点
                const node_data = type === 'parent_category_edit' ? node_parent : node_sub;
                node_data.categore_name = res.data.categore_name;
            } catch (error) {
                ElMessage({
                    message: `修改失败`,
                    type: 'error',
                });
            }
        },
        CATEGORY_DEL() {
            ElMessageBox.confirm('确认删除该分类吗?删除后无法恢复', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                showClose: false,
                closeOnClickModal: false,
                closeOnPressEscape: false,
                type: 'warning',
                beforeClose: async (action, instance, done) => {
                    if (action === 'confirm') {
                        instance.confirmButtonLoading = true;
                        const req_data = {
                            categoryId: this.parent_category_data.data.id,
                        };
                        try {
                            const res = await CategoryDel(req_data);
                            this.button_loading = false;
                            ElMessage({
                                message: res.message,
                                type: 'success',
                            });
                            //同步更新树形菜单节点
                            //categoryTree.value.remove(this.parent_category_data);
                        } catch (error) {
                            ElMessage({
                                message: error.message,
                                type: 'error',
                            });
                        }
                        instance.confirmButtonLoading = false;
                        done();
                    } else {
                        instance.confirmButtonLoading = false;
                        done();
                    }
                },
            });
        },
        async INFO_CREATE(req_data) {
            try {
                const res = await InfoCreate(req_data);
                ElMessage.success(res.message);
                return true;
            } catch (error) {
                ElMessage.error(error.message);
                return false;
            }
        },
        async GET_TABLE_LIST() {
            try {
                const search_data = this.FORTMAT_PARAMS();
                let request_data = {
                    pageNumber: this.page_info.current_page,
                    pageSize: this.page_info.page_size,
                };
                request_data = Object.assign(request_data, search_data);
                const { data, message } = await GetTableList(request_data);
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
        INFO_DEL(req_data) {
            ElMessageBox.confirm('确认删除当前数据吗?删除后无法恢复', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                showClose: false,
                closeOnClickModal: false,
                closeOnPressEscape: false,
                type: 'warning',
                beforeClose: async (action, instance, done) => {
                    if (action === 'confirm') {
                        instance.confirmButtonLoading = true;
                        try {
                            const res = await Delete(req_data);
                            ElMessage({
                                message: res.message,
                                type: 'success',
                            });
                            this.GET_TABLE_LIST();
                        } catch (error) {
                            ElMessage({
                                message: error.message,
                                type: 'error',
                            });
                        }
                        instance.confirmButtonLoading = false;
                        done();
                    } else if (action === 'cancel') {
                        done();
                    }
                },
            }).catch(() => {});
        },
        FORTMAT_PARAMS() {
            const data = Object.assign({}, this.table_search);
            if (data.categore_id.length) {
                data.categore_id = data.categore_id[data.categore_id.length - 1];
            } else {
                delete data.categore_id;
            }
            if (data.key && data.key_word) {
                data[data.key] = data.key_word;
            }
            delete data.key;
            delete data.key_word;
            return data;
        },
        async GET_DETAIL() {
            try {
                if (!this.detail_info.id) {
                    return false;
                }
                let request_data = {
                    id: this.detail_info.id,
                };
                const { data, message } = await GetDettailed(request_data);
                this.detail_form.category_id = data.category_id;
                this.detail_form.content = data.content;
                this.detail_form.create_date = data.create_date;
                this.detail_form.image_url = data.image_url;
                this.detail_form.status = parseInt(data.status);
                this.detail_form.title = data.title;
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
        async INFO_EDIT(req_data) {
            try {
                const res = await InfoEdit(req_data);
                ElMessage.success(res.message);
                return true;
            } catch (error) {
                ElMessage.error(error.message);
                return false;
            }
        },
    },
});
