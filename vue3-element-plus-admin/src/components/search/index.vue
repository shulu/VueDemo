<!--
 * @Author: shulu
 * @Date: 2024-04-24 18:05:17
 * @LastEditors: shulu
 * @LastEditTime: 2024-04-30 12:32:03
 * @Description: file content
 * @FilePath: /vue3-element-plus-admin/src/components/search/index.vue
-->
<template>
    <el-form ref="formDom" inline :label-width="label_width" v-if="show">
        <el-form-item v-for="item in form_item" :key="item.prop" :label="item.label" :width="item.width">
            <component v-model:value="field[item.prop]" :is="item.type + 'Component'" :data="item" />
        </el-form-item>
        <el-form-item v-if="form_button && form_button.length > 0">
            <el-button v-for="item in form_button" :key="item.key" :type="item.type" @click="item.callback ? item.callback() : handlerFormActive(item)">
                {{ item.label }}
            </el-button>
        </el-form-item>
    </el-form>
</template>
<script setup>
import { defineProps, inject, reactive, ref } from 'vue';
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
});
const search_config = inject('search_config');
const label_width = ref(search_config?.label_width || props.labelWidth);
const form_item = reactive(search_config?.form_item || props.item);
const field = reactive(search_config?.form_data || props.field);
</script>
