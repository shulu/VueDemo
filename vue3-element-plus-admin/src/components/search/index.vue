<!--
 * @Author: shulu
 * @Date: 2024-04-24 18:05:17
 * @LastEditors: shulu
 * @LastEditTime: 2024-05-10 18:17:20
 * @Description: file content
 * @FilePath: /vue3-element-plus-admin/src/components/search/index.vue
-->
<template>
    <div v-if="button_group && button_group.length > 0" class="form-search-button-group">
        <el-button v-for="item in button_group" :key="item.prop" :type="item.type" @click="item.callback ? item.callback() : handlerFormActive(item)">
            {{ item.label }}
        </el-button>
    </div>
    <el-form ref="searchForm" inline :label-width="label_width" v-if="show" style="display: flex" :model="field">
        <el-row v-if="form_item && form_item.length > 0">
            <el-col v-for="item in form_item" :key="item.prop" :span="item.col || 24">
                <el-form-item :label="item.label" :width="item.width" :prop="item.prop" :label-width="item.label_width || label_width">
                    <component
                        v-model="field[item.prop]"
                        :is="item.type + 'Component'"
                        :data="item"
                        @callback="componentCallback"
                        :ref="componentDom"
                        :key="item.type"
                    />
                </el-form-item>
            </el-col>
            <el-col :span="button_col">
                <el-form-item>
                    <el-button type="danger" @click="GET_TABLE_LIST">搜索</el-button>
                    <el-button type="primary" v-if="form_button.reset_button" @click="resetForm">重置</el-button>
                </el-form-item>
            </el-col>
        </el-row>
    </el-form>
</template>
<script setup>
import { defineProps, inject, reactive, ref } from 'vue';
const searchForm = ref(null);
const keyword = ref(null);
const props = defineProps({
    show: {
        type: Boolean,
        default: () => {
            false;
        },
    },
    item: { type: Array, default: () => [] },
    labelWidth: {
        type: [String, Number],
        default: '',
    },
    field: {
        type: Object,
        default: () => ({}),
    },
    form_button: { type: Array, default: () => [] },
    button_group: { type: Array, default: () => [] },
    button_col: {
        type: Number,
        default: 6,
    },
});
const { search_config, GET_TABLE_LIST, RESET_TABLE_SEARCH } = inject('search');
const label_width = ref(search_config?.label_width || props.labelWidth);
const form_item = reactive(search_config?.form_item || props.item);
const field = reactive(search_config?.form_data || props.field);
const form_button = reactive(search_config?.form_button || props.form_button);
const button_group = reactive(search_config?.button_group || props.button_group);
const button_col = reactive(search_config?.button_col || props.button_col);
// 组件回调
const componentCallback = (params) => {
    if (params.type == 'key_word') {
        field['key'] = params.value.key;
        field['key_word'] = params.value.key_word;
    }
};
const componentDom = (el) => {
    if (el && el.dom_info && el.dom_info.type === 'keyword') {
        keyword.value = el;
    }
};
const resetForm = () => {
    searchForm.value.resetFields();
    keyword.value.clearVal();
    RESET_TABLE_SEARCH();
};
</script>
<style lang="scss" scoped>
.form-search-button-group {
    margin-bottom: 20px;
}
</style>
