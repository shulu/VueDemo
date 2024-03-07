<!--
 * @Author: shulu
 * @Date: 2024-03-07 14:57:42
 * @LastEditors: shulu
 * @LastEditTime: 2024-03-07 15:34:50
 * @Description: file content
 * @FilePath: /vue3-element-plus-admin/src/components/control/checkbox/index.vue
-->
<template>
    <div>
        <el-checkbox-group v-model="modelValue" :disabled="form_disabled[data.prop]" @change="$emit('update:modelValue', modelValue)">
            <el-checkbox v-for="checkbox in data.options" :label="checkbox.value" :key="checkbox.value">{{ checkbox.label }}</el-checkbox>
        </el-checkbox-group>
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
