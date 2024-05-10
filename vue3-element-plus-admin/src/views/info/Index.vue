<!--
 * @Author: shulu
 * @Date: 2023-12-25 15:22:50
 * @LastEditors: shulu
 * @LastEditTime: 2024-05-10 18:19:32
 * @Description: file content
 * @FilePath: /vue3-element-plus-admin/src/views/info/Index.vue
-->
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

<script setup>
import globalData from '@/js/data';
import { useInfoStore } from '@/store/infoStore';
import Pagination from '@c/pagination';
import BasicTable from '@c/table';
import { onBeforeMount, provide, reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
const { table_info, page_info, GET_TABLE_LIST, CHANGE_STATUS, table_search, INFO_DEL, table_batch_del, RESET_TABLE_SEARCH } = useInfoStore();
const status_loading = ref(false);
const batch_disabled = ref(true);
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
const table_header = ref([
    { label: '标题', prop: 'title' },
    { label: '类别', prop: 'category_name' },
    { type: 'date', label: '日期', prop: 'createDate' },
    { type: 'switch', label: '发布状态', prop: 'status' },
    { type: 'slot', label: '操作', slot_name: 'operation', delete_elem: true },
]);
const config = {
    selection: false,
    pagination: false,
    batch_delete: true,
    search: true,
};
const search_config = reactive({
    //label_width: '80px',
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
            col: 6,
        },
        {
            type: 'select',
            label: '发布状态',
            prop: 'status',
            width: '100px',
            options: globalData.whether,
            col: 6,
            label_width: '120px',
        },
        {
            type: 'keyword',
            label: '关键字',
            prop: 'key_word',
            options: [
                { value: 'id', label: 'ID' },
                { value: 'title', label: '标题' },
            ],
            col: 10,
        },
    ],
    form_data: table_search,
    form_button: {
        reset_button: true,
    },
    button_group: [
        {
            label: '新增',
            type: 'danger',
            prop: 'new',
            callback: () => {
                handleDetailed('');
            },
        },
        {
            label: '其他按钮',
            type: 'danger',
            prop: 'other',
            callback: () => {},
        },
    ],
    button_col: 6,
});
provide('search', { search_config, GET_TABLE_LIST, RESET_TABLE_SEARCH });
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
