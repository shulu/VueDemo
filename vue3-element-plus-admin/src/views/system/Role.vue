<!--
 * @Author: shulu
 * @Date: 2024-05-10 19:08:27
 * @LastEditors: shulu
 * @LastEditTime: 2024-06-18 23:53:49
 * @Description: file content
 * @FilePath: \vue3-element-plus-admin\src\views\system\Role.vue
-->
<script setup>
import { useRoleStore } from '@/store/roleStore';
import DialogRole from '@c/dialogRole';
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
const menu_handler_flag = toRef(useRoleStore(), 'menu_handler_flag');
const d_title = ref('添加角色');
const form_button_group = reactive([
    { label: '添加角色', type: 'danger', callback: () => handlerRole() },
    {
        label: '重置',
        key: 'reset',
    },
]);
const table_button_group = reactive([
    {
        label: '新增角色',
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
    <dialog-role v-model:flag="d_load" />
</template>
