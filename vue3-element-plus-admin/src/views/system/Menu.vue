<script setup>
import globalData from '@/js/data';
import Pagination from '@c/pagination';
import BasicTable from '@c/table';
import { provide, reactive } from 'vue';
const table_header = reactive([
    { label: '菜单名称', prop: 'menu_name' },
    { label: '菜单路径', prop: 'menu_path' },
    { label: '映射组件', prop: 'menu_component' },
    { label: '重定向', prop: 'menu_redirect' },
    { label: '是否隐藏', prop: 'menu_hidden', type: 'switch' },
    { label: '是否禁用', prop: 'menu_disabled', type: 'switch' },
    { label: '操作', prop: 'menu_name', type: 'slot', slot_name: 'operetion', width: '250' },
]);
const config = reactive({
    selection: false,
    batch_delete: false,
    pagination: false,
});
const table_info = reactive({
    data: [],
});
const search_config = reactive({
    label_width: '70px',
    form_button: { reset_button: true },
    form_item: [
        {
            type: 'select',
            label: '是否禁用',
            props: 'menu_disabled',
            width: '100px',
            options: globalData.whether,
        },
        {
            type: 'keyword',
            label: '关键字',
            prop: 'keyword',
            options: [
                { label: '菜单名称', value: 'menu_name' },
                { label: '菜单路径', value: 'menu_path' },
                { label: '组件名称', value: 'menu_component' },
            ],
        },
    ],
    form_date: { menu_disabled: '' },
});
provide('search', { search_config });
</script>
<template>
    <basic-table :tableHeader="table_header" :tableData="table_info.data" :config="config" @changeStatus="changeStatus" @deleteInfo="deleteInfo">
        <template #operation="slotData">
            <el-button type="danger" size="small" @click="handleDetailed(slotData.data.id)">编辑</el-button>
        </template>
    </basic-table>
    <el-row class="margin-top-30">
        <el-col :span="2"><el-button :disabled="batch_disabled" v-if="config.batch_delete">批量删除</el-button></el-col>
        <el-col :span="22">
            <Pagination :pageInfo="page_info" @handleSizeChange="handleSizeChange" @handleCurrentChange="handleCurrentChange" />
        </el-col>
    </el-row>
</template>
