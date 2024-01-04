/*
 * @Author: shulu
 * @Date: 2024-01-04 15:38:39
 * @LastEditors: shulu
 * @LastEditTime: 2024-01-04 17:24:03
 * @Description: file content
 * @FilePath: /vue3-element-plus-admin/src/store/infoStore.js
 */
import { UploadFile } from '@/api';
import { CategoryDel, CategoryEdit, ChildCategoryAdd, GetCategory, firstCategoryAdd } from '@/api/info';
import { ElMessage, ElMessageBox } from 'element-plus';
import { defineStore } from 'pinia';
export const useInfoStore = defineStore('info', {
    state: () => {
        return {
            tree_data: [],
            defaultProps: {
                children: 'children',
                label: 'category_name',
            },
            detail_props: {
                label: 'category_name',
                value: 'id',
            },
            parent_category: '',
            sub_category: '',
            button_loading: false,
            parent_category_data: null,
            sub_category_data: null,
            detail_form: {
                imageUrl: '',
                category: '',
                title: '',
                date: '',
            },
        };
    },
    actions: {
        async GET_CATEGORY() {
            try {
                const res = await GetCategory();
                this.tree_data = res.data;
                ElMessage({
                    message: res.message,
                    type: 'success',
                });
            } catch (error) {
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
        CHECK_IMG(file) {
            console.log(`output->file`, file);
            const isJPG = file.type === 'image/jpeg';
            const isLt2M = file.size / 1024 / 1024 < 2;
            if (!isJPG) {
                ElMessage.error('上传图片格式只能是JPG格式!');
            }
            if (!isLt2M) {
                ElMessage.error('上传图片大小不能超过2MB');
            }
            return isJPG && isLt2M;
        },
        async UPLOAD_IMG(params) {
            console.log(`output->params`, params);
            const file = params.file;
            const form = new FormData();
            form.append('files', file);
            console.log(`output->form`, form);
            const res = await UploadFile(form);
            console.log(`output->res`, res);
        },
    },
});
