<!--
 * @Author: shulu
 * @Date: 2024-03-07 14:57:42
 * @LastEditors: shulu
 * @LastEditTime: 2024-05-14 17:10:36
 * @Description: file content
 * @FilePath: /vue3-element-plus-admin/src/components/control/radio/index.vue
-->
<template>
    <el-radio-group v-model="modelValue" :disabled="disabled" @change="$emit('update:modelValue', modelValue)">
        <el-radio v-for="radio in data.options" :key="radio.value" :label="radio.value">{{ radio.label }}</el-radio>
    </el-radio-group>
</template>

<script setup>
import { defineProps, ref } from 'vue';
const modelValue = ref(0);
defineProps({
    data: Object,
    default: () => {},
});
</script>

<style lang="scss" scoped></style>
