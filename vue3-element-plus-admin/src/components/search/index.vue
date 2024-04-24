<!--
 * @Author: shulu
 * @Date: 2024-04-24 18:05:17
 * @LastEditors: shulu
 * @LastEditTime: 2024-04-24 18:16:29
 * @Description: file content
 * @FilePath: /vue3-element-plus-admin/src/components/search/index.vue
-->
<template>
    <el-form :inline="true" v-if="show">
        <el-form-item>表单组件类型</el-form-item>
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
});
</script>
