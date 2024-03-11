<!--
 * @Author: shulu
 * @Date: 2024-03-07 14:57:42
 * @LastEditors: shulu
 * @LastEditTime: 2024-03-11 11:36:32
 * @Description: file content
 * @FilePath: /vue3-element-plus-admin/src/components/control/radio/index.vue
-->
<template>
    <div>
        <el-radio-group v-model="modelValue" :disabled="disabled" @change="$emit('update:modelValue', modelValue)">
            <el-radio v-for="radio in data.options" :key="radio.value" :label="radio.value">{{ radio.label }}</el-radio>
        </el-radio-group>
    </div>
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
