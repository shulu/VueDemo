<!--
 * @Author: shulu
 * @Date: 2024-03-07 14:57:42
 * @LastEditors: shulu
 * @LastEditTime: 2024-04-30 11:15:22
 * @Description: file content
 * @FilePath: /vue3-element-plus-admin/src/components/control/select/index.vue
-->
<template>
    <div>
        <el-select v-model="modelValue" :disabled="disabled" :style="`width: ${data.width || '100%'}`" @change="$emit('update:modelValue', modelValue)">
            <el-option v-for="select in data.options" :key="select.value" :label="select.label" :value="select.value"></el-option>
        </el-select>
    </div>
</template>

<script setup>
import { defineProps, ref } from 'vue';
const modelValue = ref('');
defineProps({
    data: Object,
    default: () => {},
});
</script>

<style lang="scss" scoped></style>
