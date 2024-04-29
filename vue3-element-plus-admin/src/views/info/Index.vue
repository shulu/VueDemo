<!--
 * @Author: shulu
 * @Date: 2023-12-25 15:22:50
 * @LastEditors: shulu
 * @LastEditTime: 2024-04-29 15:28:46
 * @Description: file content
 * @FilePath: /vue3-element-plus-admin/src/views/info/Index.vue
-->
<template>
    <el-row>
        <el-col :span="18">
            <el-form :inline="true" label-width="80px" style="display: flex">
                <el-form-item label="类别" width="150px">
                    <el-cascader :options="category_info.category_list" :props="category_info.detail_props" v-model="table_search.category_id"> </el-cascader>
                </el-form-item>
                <el-form-item label="关键字">
                    <el-select class="width-100" placeholder="请选择" v-model="table_search.key">
                        <el-option v-for="item in table_info.keywords_options" :key="item.value" :label="item.label" :value="item.value"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-input class="width-180" placeholder="请输入关键字" v-model="table_search.key_word"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="danger" @click="handleSearch">搜索</el-button>
                </el-form-item>
            </el-form>
        </el-col>
        <el-col :span="6">
            <!-- <router-link to="/newsDetailed" class="pull-right"> -->
            <el-button type="danger" class="pull-right" @click="handleDetailed()">新增</el-button>
            <!-- </router-link> -->
        </el-col>
    </el-row>
    <basic-table :tableHeader="table_header" :tableData="table_info.data" :config="search_config" @changeStatus="changeStatus" @deleteInfo="deleteInfo">
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

<script setup>
import { useInfoStore } from '@/store/infoStore';
import Pagination from '@c/pagination';
import BasicTable from '@c/table';

import { onBeforeMount, ref } from 'vue';
import { useRouter } from 'vue-router';
const { table_info, category_info, page_info, GET_TABLE_LIST, CHANGE_STATUS, table_search, INFO_DEL, table_batch_del } = useInfoStore();
const status_loading = ref(false);
const batch_disabled = ref(true);

const table_header = ref([
    { label: '标题', prop: 'title' },
    { label: '类别', prop: 'category_name' },
    { type: 'date', label: '日期', prop: 'createDate' },
    { type: 'switch', label: '发布状态', prop: 'status' },
    { type: 'slot', label: '操作', slot_name: 'operation', delete_elem: true },
]);
const search_config = {
    selection: false,
    pagination: false,
    batch_delete: true,
    search: true,
    label_width: '80px',
    form_item: [
        {
            type: 'cascader',
            label: '类别',
            prop: 'category_id',
            props: {
                label: 'category_name',
                value: 'id',
            },
            url: 'category',
        },
        {
            type: 'selection',
            label: '发布状态',
            prop: 'status',
            width: '100px',
            options: [{ value: '1', label: '是' }],
        },
    ],
};
const { push } = useRouter();
const handlerSelectionChange = (val) => {
    table_batch_del.ids = [];
    if (val && val.length > 0) {
        const ids = val.map((item) => item.id);
        table_batch_del.ids = ids;
        batch_disabled.value = false;
    }
};
// 分页
const handleSizeChange = (val) => {
    page_info.page_size = val;
    GET_TABLE_LIST();
};
const handleCurrentChange = (val) => {
    page_info.current_page = val;
    GET_TABLE_LIST();
};
const handleDetailed = (id) => {
    push({
        path: '/newsDetailed',
        query: { id },
    });
};
const changeStatus = (value) => {
    status_loading.value = true;
    const request_data = {
        id: value.id,
        status: value.status,
    };
    CHANGE_STATUS(request_data).then((res) => {
        console.log(`output->res`, res);
    });
    status_loading.value = false;
};
const deleteInfo = (id) => {
    const request_data = {
        id: id,
    };
    INFO_DEL(request_data);
};
const handleSearch = () => {
    GET_TABLE_LIST();
};
onBeforeMount(() => {
    GET_TABLE_LIST();
});
</script>

<style lang="scss" scoped>
.width-100 {
    width: 100px;
}
.width-160 {
    width: 160px;
}
.width-180 {
    width: 180px;
}
</style>
