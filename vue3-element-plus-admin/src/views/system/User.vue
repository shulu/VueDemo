<!--
 * @Author: shulu
 * @Date: 2024-05-10 19:08:27
 * @LastEditors: shulu
 * @LastEditTime: 2024-07-18 17:20:21
 * @Description: file content
 * @FilePath: \vue3-element-plus-admin\src\views\system\User.vue
-->
<script setup>
import { useUserStore } from '@/store/userStore';
import BasicTable from '@c/table';
import { onBeforeMount, provide, reactive, toRef } from 'vue';
import dialogUser from './components/dialogUser.vue';
const { search_config, table_config, table_header, table_info, table_search, STATUS_CHANGE, DELETE, RESET_TABLE_SEARCH, GET_TABLE_LIST, DETAIL, MOD_PWD } =
    useUserStore();
const handler_flag = toRef(useUserStore(), 'user_handler_flag');
const d_load = toRef(useUserStore(), 'dialog_visible');
const d_title = toRef(useUserStore(), 'd_title');
const handler = (type, data) => {
    console.log(`output->data id`, data);
    if (type == 'edit') {
        d_title.value = '编辑用户';
        handler_flag.value = type;
        DETAIL(data);
    } else if (type == 'edit_pwd') {
        d_title.value = '修改密码';
        handler_flag.value = type;
        MOD_PWD(data);
    } else {
        DELETE(data);
    }
};
const table_button_group = reactive([
    {
        label: '添加用户',
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
        @changeStatus="STATUS_CHANGE"
        @deleteInfo="deleteInfo"
    >
        <template #operation="slotData">
            <el-button type="danger" size="small" @click="handler('edit', slotData.data.id)">编辑</el-button>
            <el-button type="warning" size="small" @click="handler('edit_pwd', slotData.data.id)">修改密码</el-button>
            <el-button size="small" @click="handler('del', slotData.data.id)">删除</el-button>
        </template>
    </basic-table>
    <dialog-user v-model:flag="d_load" :title="d_title" />
</template>
