<!--
 * @Author: shulu
 * @Date: 2024-03-07 15:37:07
 * @LastEditors: shulu
 * @LastEditTime: 2024-03-07 15:37:31
 * @Description: file content
 * @FilePath: /vue3-element-plus-admin/src/components/control/date/index.vue
-->
<template>
    <el-date-picker
        :style="`width: ${data.width}`"
        v-model="modelValue"
        :disabled="disabled"
        :type="data.date_type || 'datetime'"
        :format="data.date_format || 'YYYY-MM-DD HH:mm:ss'"
        :value-format="data.date_value || 'YYYY-MM-DD'"
        :placeholder="data.placeholder || '选择日期时间'"
        :start-placeholder="data.start_placeholder || '请选择开始日期'"
        :end-placeholder="data.end_placeholder || '请选择结束日期'"
        :range-separator="data.range_placeholder || '-'"
        @change="$emit('update:modelValue', modelValue)"
    >
    </el-date-picker>
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
