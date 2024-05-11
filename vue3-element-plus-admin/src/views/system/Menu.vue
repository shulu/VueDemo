<!--
 * @Author: shulu
 * @Date: 2024-05-10 19:08:27
 * @LastEditors: shulu
 * @LastEditTime: 2024-05-11 18:01:43
 * @Description: file content
 * @FilePath: /vue3-element-plus-admin/src/views/system/menu.vue
-->
<script setup>
import { useSettingStore } from '@/store/settingStore';
import Pagination from '@c/pagination';
import BasicTable from '@c/table';
import { onBeforeMount, provide } from 'vue';
const { search_config, table_config, table_header, table_info, page_info, table_search, GET_TABLE_LIST, RESET_TABLE_SEARCH } = useSettingStore();
console.log(`output->search_config`, search_config);
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
        :config="table_config"
        @changeStatus="changeStatus"
        @deleteInfo="deleteInfo"
    >
        <template #operation="slotData">
            <el-button type="danger" size="small" @click="handleDetailed(slotData.data.id)">编辑</el-button>
        </template>
    </basic-table>
    <el-row class="margin-top-30">
        <el-col :span="2"><el-button :disabled="batch_disabled" v-if="table_config.batch_delete">批量删除</el-button></el-col>
        <el-col :span="22">
            <Pagination :pageInfo="page_info" @handleSizeChange="handleSizeChange" @handleCurrentChange="handleCurrentChange" />
        </el-col>
    </el-row>
</template>
