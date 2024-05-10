<!--
 * @Author: shulu
 * @Date: 2024-03-07 14:57:42
 * @LastEditors: shulu
 * @LastEditTime: 2024-05-10 15:19:02
 * @Description: file content
 * @FilePath: /vue3-element-plus-admin/src/components/control/select/index.vue
-->
<template>
    <el-select v-model="value" :disabled="disabled" :style="`width: ${data.width || '100%'}`" @change="$emit('update:modelValue', value)" clearable>
        <el-option v-for="select in data.options" :key="select.value" :label="select.label" :value="select.value"></el-option>
    </el-select>
</template>

<script setup>
import { defineProps, ref } from 'vue';
const value = ref('');
defineProps({
    data: Object,
    default: () => {},
});
</script>

<style lang="scss" scoped></style>
