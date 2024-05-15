<!--
 * @Author: shulu
 * @Date: 2024-03-07 14:57:42
 * @LastEditors: shulu
 * @LastEditTime: 2024-03-07 15:58:23
 * @Description: file content
 * @FilePath: /vue3-element-plus-admin/src/components/control/textarea/index.vue
-->
<template>
        <el-input
            v-model="modelValue"
            type="textarea"
            debounce
            :rows="data.rows || 5"
            :disabled="form_disabled[data.prop]"
            :style="`width: ${data.width || '100%'}`"
            :placeholder="data.placeholder"
            @change="$emit('update:modelValue', modelValue)"
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
