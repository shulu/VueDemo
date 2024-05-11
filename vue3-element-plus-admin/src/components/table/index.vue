<!--
 * @Author: shulu
 * @Date: 2024-02-20 11:20:34
 * @LastEditors: shulu
 * @LastEditTime: 2024-05-11 16:07:01
 * @Description: file content
 * @FilePath: /vue3-element-plus-admin/src/components/table/index.vue
-->
<template>
    <SearchForm :show="config.search" :field="tableSearch" />
    <el-table :data="props.tableData" border style="width: 100%">
        <el-table-column v-if="config.selection" type="selection"></el-table-column>
        <template v-for="header in props.tableHeader" :key="header.prop">
            <el-table-column v-if="header.type === 'switch'" :label="header.label">
                <template #default="scope">
                    <el-switch v-model="scope.row[header.prop]" @change="changeStatus($event, scope.row)" :loading="status_loading"></el-switch>
                </template>
            </el-table-column>
            <el-table-column v-else-if="header.type === 'date'" :prop="header.prop" :label="header.label" :formatter="formatDate"> </el-table-column>
            <el-table-column v-else-if="header.type === 'slot'" :label="header.label">
                <template #default="scope">
                    <slot :name="header.slot_name" :data="scope.row"></slot>
                    <el-button v-if="header.delete_elem" size="small" @click="deleteInfo(scope.row.id)">删除</el-button>
                </template>
            </el-table-column>
            <el-table-column v-else :prop="header.prop" :label="header.label"></el-table-column>
        </template>
    </el-table>
</template>

<script setup>
import SearchForm from '@c/search';
import { formatDateTime } from '@u/common';
import { defineEmits, defineProps, watch } from 'vue';
import { configHook } from './configHook';
const formatDate = (value) => {
    return formatDateTime(value.createDate * 1000);
};
const { config, configInit } = configHook();
const emit = defineEmits(['changeStatus', 'deleteInfo']);
const props = defineProps({
    tableHeader: {
        type: Array,
        default: () => {
            [];
        },
    },
    tableData: {
        type: Array,
        default: () => {
            [];
        },
    },
    pageInfo: {
        type: Object,
        default: () => {
            return {
                current_page: 0,
            };
        },
    },
    config: {
        type: Object,
        default: () => ({}),
    },
    tableSearch: {
        type: Object,
        default: () => ({}),
    },
});
const changeStatus = (val, row) => {
    emit('changeStatus', row);
};
const deleteInfo = (id) => {
    emit('deleteInfo', id);
};
watch(
    () => props.config,
    (conf) => {
        configInit(conf);
    },
    { immediate: true },
);
</script>
