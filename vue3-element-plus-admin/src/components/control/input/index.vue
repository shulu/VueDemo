<!--
 * @Author: shulu
 * @Date: 2024-03-07 14:57:42
 * @LastEditors: shulu
 * @LastEditTime: 2024-07-18 11:43:19
 * @Description: file content
 * @FilePath: \vue3-element-plus-admin\src\components\control\input\index.vue
-->
<template>
    <el-input
        v-model="modelValue"
        v-on:input="$emit('update:modelValue', modelValue)"
        :type="data.value_type || 'text'"
        :show-password="data.value_type == 'password'"
        debounce
        :maxlength="data.maxlength"
        :minlength="data.minlength"
        :placeholder="data.placeholder"
        :disabled="data.disabled"
    />
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
