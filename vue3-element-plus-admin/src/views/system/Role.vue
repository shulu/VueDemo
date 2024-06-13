<!--
 * @Author: shulu
 * @Date: 2024-05-10 19:08:27
 * @LastEditors: shulu
 * @LastEditTime: 2024-06-13 23:37:52
 * @Description: file content
 * @FilePath: \vue3-element-plus-admin\src\views\system\Role.vue
-->
<script setup>
import { useRoleStore } from '@/store/roleStore';
import BasicForm from '@c/form';
import Pagination from '@c/pagination';
import BasicTable from '@c/table';
import { onBeforeMount, provide, reactive, ref, toRef } from 'vue';
const {
    search_config,
    table_config,
    table_header,
    table_info,
    page_info,
    form_item,
    form_rules,
    table_search,
    GET_TABLE_LIST,
    RESET_TABLE_SEARCH,
    MENU_CREATE,
    MENU_DETAIL,
    MENU_DEL,
    RESET_FORM_DATA,
    ADD_MENU_FUNC,
    REMOVE_MENU_FUNC,
    RESET_MENU_FUNC,
    MENU_STATUS_CHANGE,
} = useRoleStore();
const f_load = toRef(useRoleStore(), 'form_loading');
const d_load = toRef(useRoleStore(), 'dialog_visible');
const form_data = toRef(useRoleStore(), 'form_data');
const page_item = toRef(useRoleStore(), 'page_item');
const menu_handler_flag = toRef(useRoleStore(), 'menu_handler_flag');
const d_title = ref('添加一级菜单');
const form_button_group = reactive([
    { label: '确认添加', type: 'danger', key: 'submit' },
    {
        label: '重置',
        key: 'reset',
    },
]);
const table_button_group = reactive([
    {
        label: '新增一级菜单',
        type: 'danger',
        prop: 'new',
        callback: () => {
            d_load.value = true;
        },
    },
    {
        label: '其他按钮',
        type: 'danger',
        prop: 'other',
        callback: () => {},
    },
]);
provide('search', { search_config, GET_TABLE_LIST, RESET_TABLE_SEARCH });
const handlerSubmitForm = () => {
    // 打印结果
    // console.log(request_data);
    MENU_CREATE();
};
const handlerResetForm = () => {
    RESET_FORM_DATA();
    RESET_MENU_FUNC();
};
const handlerMenu = (key, data) => {
    menu_handler_flag.value = key;
    console.log(`output->key`, key);
    const d_title_group = {
        add: '添加一级菜单',
        add_sub: '添加子级菜单',
        edit: '编辑菜单',
    };
    d_title.value = d_title_group[key];
    switch (key) {
        case 'edit':
            form_data.value = data;
            MENU_DETAIL();
            break;
        case 'add_sub':
            form_data.value.parent_id = data;
            d_load.value = true;
            break;
        case 'del':
            form_data.value = data;
            MENU_DEL();
            break;
        default:
            alert('错误操作');
            break;
    }
};
const dialog_close = () => {
    console.log('here is close dialog');
    RESET_FORM_DATA();
};
onBeforeMount(() => {
    GET_TABLE_LIST();
});
</script>
<template>
    <basic-table
        :tableHeader="table_header"
        :tableData="table_info.data"
        :tableSearch="table_search"
        :tableButtonGroup="table_button_group"
        :config="table_config"
        @changeStatus="MENU_STATUS_CHANGE"
        @deleteInfo="deleteInfo"
    >
        <template #operation="slotData">
            <el-button type="danger" size="small" @click="handlerMenu('edit', slotData.data)">编辑</el-button>
            <el-button size="small" @click="handlerMenu('del', slotData.data)">删除</el-button>
        </template>
    </basic-table>
    <el-row class="margin-top-30">
        <el-col :span="2"><el-button :disabled="batch_disabled" v-if="table_config.batch_delete">批量删除</el-button></el-col>
        <el-col :span="22">
            <Pagination :pageInfo="page_info" @handleSizeChange="handleSizeChange" @handleCurrentChange="handleCurrentChange" />
        </el-col>
    </el-row>
    <el-dialog :title="d_title" v-model="d_load" width="50%" @closed="dialog_close">
        <basic-form
            label-width="100px"
            :form_model="form_data"
            :form_item="form_item"
            :field="form_data"
            :form_button="form_button_group"
            :form_rules="form_rules"
            :form_loading="f_load"
            @submitForm="handlerSubmitForm"
            @resetForm="handlerResetForm"
        >
            <template #menu_function>
                <el-row :gutter="10" justify="space-around" style="width: 100%">
                    <el-col :span="4">页面功能</el-col>
                    <el-col :span="8">
                        <div>页面元素</div>
                    </el-col>
                    <el-col :span="8">
                        <div>标识符</div>
                    </el-col>
                    <el-col :span="4">操作</el-col>
                </el-row>
                <el-row :gutter="10" justify="space-around" style="width: 100%" v-for="(item, index) in page_item" :key="item.id">
                    <el-col :span="4"></el-col>
                    <el-col :span="8">
                        <el-input size="small" v-model.trim="item.label"></el-input>
                    </el-col>
                    <el-col :span="8">
                        <el-input size="small" v-model.trim="item.value"></el-input>
                    </el-col>
                    <el-col :span="4"><el-button @click="REMOVE_MENU_FUNC(index)">删除</el-button></el-col>
                </el-row>
                <el-button type="primary" class="margin-top-10" @click="ADD_MENU_FUNC">添加功能</el-button>
            </template>
        </basic-form>
    </el-dialog>
</template>
