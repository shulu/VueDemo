<!--
 * @Author: shulu
 * @Date: 2023-12-25 15:22:50
 * @LastEditors: shulu
 * @LastEditTime: 2024-01-12 17:35:04
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
            <router-link to="/newsDetailed" class="pull-right">
                <el-button type="danger" class="pull-right">新增</el-button>
            </router-link>
        </el-col>
    </el-row>
    <el-table ref="table" border :data="table_info.data" style="width: 100%" @selection-change="handlerSelectionChange">
        <el-table-column type="selection" width="40"></el-table-column>
        <el-table-column prop="title" label="标题" width="500"></el-table-column>
        <el-table-column prop="category_name" label="类别"></el-table-column>
        <el-table-column prop="createDate" label="日期" :formatter="formatDate"> </el-table-column>
        <el-table-column prop="status" label="发布状态">
            <template #default="scope">
                <el-switch v-model="scope.row.status" @change="changeStatus($event, scope.row)" :loading="status_loading"></el-switch>
            </template>
        </el-table-column>
        <el-table-column prop="handle" label="操作" width="200">
            <template #default="scope">
                <el-button type="danger" size="small" @click="handleDetailed">编辑</el-button>
                <el-button size="small" @click="delteInfo(scope.row)">删除</el-button>
            </template>
        </el-table-column>
    </el-table>
    <el-row class="margin-top-30">
        <el-col :span="2"><el-button :disabled="batch_disabled">批量删除</el-button></el-col>
        <el-col :span="22">
            <el-pagination
                class="pull-right"
                size="small"
                background
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="page_info.current_page"
                :page-size="page_info.page_size"
                :page-sizes="[10, 20, 50, 100]"
                layout="total,sizes,prev,pager,next,jumper"
                :total="page_info.total"
                :hide-on-single-page="false"
            >
            </el-pagination>
        </el-col>
    </el-row>
</template>

<script setup>
import { useInfoStore } from '@/store/infoStore';
import { formatDateTime } from '@u/common';
import { onBeforeMount, ref } from 'vue';
import { useRouter } from 'vue-router';
const { table_info, category_info, page_info, GET_TABLE_LIST, CHANGE_STATUS, table_search, GET_CATEGORY, INFO_DEL, table_batch_del } = useInfoStore();
const status_loading = ref(false);
const batch_disabled = ref(true);
const formatDate = (value) => {
    return formatDateTime(value.createDate * 1000);
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
const handleDetailed = () => {
    push({
        path: '/newsDetailed',
    });
};
const changeStatus = (value, row) => {
    status_loading.value = true;
    const request_data = {
        id: row.id,
        status: value,
    };
    CHANGE_STATUS(request_data).then((res) => {
        console.log(`output->res`, res);
    });
    status_loading.value = false;
};
const delteInfo = (row) => {
    const request_data = {
        id: row.id,
    };
    INFO_DEL(request_data);
};
const handleSearch = () => {
    GET_TABLE_LIST();
};
onBeforeMount(() => {
    GET_CATEGORY();
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
