<!--
 * @Author: shulu
 * @Date: 2024-04-24 18:05:17
 * @LastEditors: shulu
 * @LastEditTime: 2024-04-29 15:22:20
 * @Description: file content
 * @FilePath: /vue3-element-plus-admin/src/components/search/index.vue
-->
<template>
    <el-form :inline="true" v-if="show">
        <el-form-item>表单组件类型</el-form-item>
    </el-form>
    <el-form ref="formDom" inline :label-width="label_width" v-if="show">
        <el-form-item v-for="item in form_item" :key="item.prop">
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
import { defineProps } from 'vue';
defineProps({
    show: {
        type: Boolean,
        default: () => {
            false;
        },
    },
    form_item: {
        type: Array,
        default: () => {
            [];
        },
    },
    form_button: {
        type: Array,
        default: () => {
            [];
        },
    },
    field: {
        type: Object,
        default: () => ({}),
    },
});
</script>
