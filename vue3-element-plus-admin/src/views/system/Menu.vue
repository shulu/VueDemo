<!--
 * @Author: shulu
 * @Date: 2024-05-10 19:08:27
 * @LastEditors: shulu
 * @LastEditTime: 2024-05-15 19:18:57
 * @Description: file content
 * @FilePath: /vue3-element-plus-admin/src/views/system/menu.vue
-->
<script setup>
import { useSettingStore } from '@/store/settingStore';
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
    form_data,
    form_rules,
    table_search,
    GET_TABLE_LIST,
    RESET_TABLE_SEARCH,
    MENU_CREATE,
    RESET_FORM_DATA,
} = useSettingStore();
const f_load = toRef(useSettingStore(), 'form_loading');
const form_button_group = reactive([
    { label: '确认添加', type: 'danger', key: 'submit' },
    {
        label: '重置',
        key: 'reset',
    },
]);
const dialog_visible = ref(false);
const table_button_group = reactive([
    {
        label: '新增一级菜单',
        type: 'danger',
        prop: 'new',
        callback: () => {
            dialog_visible.value = true;
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
    <el-dialog title="菜单编辑" v-model="dialog_visible" width="50%">
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
                    <el-col :span="9">
                        <div>功能</div>
                    </el-col>
                    <el-col :span="9">
                        <div>标识符</div>
                    </el-col>
                    <el-col :span="6">操作</el-col>
                </el-row>
                <el-row :gutter="10" justify="space-around" style="width: 100%">
                    <el-col :span="9">
                        <el-input size="small"></el-input>
                    </el-col>
                    <el-col :span="9">
                        <el-input size="small"></el-input>
                    </el-col>
                    <el-col :span="6"><el-button>删除</el-button></el-col>
                </el-row>
                <el-button type="primary" class="margin-top-10">添加功能</el-button>
            </template>
        </basic-form>
    </el-dialog>
</template>
