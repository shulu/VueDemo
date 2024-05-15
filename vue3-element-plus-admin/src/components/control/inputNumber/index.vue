<!--
 * @Author: shulu
 * @Date: 2024-03-07 14:57:42
 * @LastEditors: shulu
 * @LastEditTime: 2024-05-14 17:04:59
 * @Description: file content
 * @FilePath: /vue3-element-plus-admin/src/components/control/inputNumber/index.vue
-->
<template>
    <el-input-number
        v-model="modelValue"
        v-on:input="$emit('update:modelValue', modelValue)"
        debounce
        :min="data.min"
        :max="data.max || 999999"
        :maxlength="data.maxlength"
        :minlength="data.minlength"
        :placeholder="data.placeholder"
        :disabled="data.disabled"
        @change="handlerChange"
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
