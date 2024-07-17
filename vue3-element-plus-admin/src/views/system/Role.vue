<!--
 * @Author: shulu
 * @Date: 2024-05-10 19:08:27
 * @LastEditors: shulu
 * @LastEditTime: 2024-07-17 15:27:30
 * @Description: file content
 * @FilePath: \vue3-element-plus-admin\src\views\system\Role.vue
-->
<script setup>
import { useRoleStore } from '@/store/roleStore';
import DialogRole from '@c/dialogRole';
import BasicTable from '@c/table';
import { onBeforeMount, provide, reactive, ref, toRef } from 'vue';
const { search_config, table_config, table_header, table_info, table_search, ROLE_STATUS_CHANGE, ROLE_DEL, RESET_TABLE_SEARCH, GET_TABLE_LIST, ROLE_DETAIL } =
    useRoleStore();
const role_handler_flag = toRef(useRoleStore(), 'role_handler_flag');
const d_load = toRef(useRoleStore(), 'dialog_visible');
const d_title = ref('添加角色');
const handlerRole = (type, data) => {
    console.log(`output->data id`, data);
    if (type == 'edit') {
        d_title.value = '编辑角色';
        role_handler_flag.value = type;
        ROLE_DETAIL(data);
    } else {
        ROLE_DEL(data);
    }
};
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
        @changeStatus="ROLE_STATUS_CHANGE"
        @deleteInfo="deleteInfo"
    >
        <template #operation="slotData">
            <el-button type="danger" size="small" @click="handlerRole('edit', slotData.data.role_id)">编辑</el-button>
            <el-button size="small" @click="handlerRole('del', slotData.data.role_id)">删除</el-button>
        </template>
    </basic-table>
    <dialog-role v-model:flag="d_load" :title="d_title" />
</template>
