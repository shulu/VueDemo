<!--
 * @Author: shulu
 * @Date: 2024-03-07 14:57:42
 * @LastEditors: shulu
 * @LastEditTime: 2024-05-14 17:10:42
 * @Description: file content
 * @FilePath: /vue3-element-plus-admin/src/components/control/switch/index.vue
-->
<template>
    <el-switch
        v-model="modelValue"
        :loading="init_data.loading"
        :active-value="config.active_value || true"
        :inactive-value="config.inactive_value || false"
        :before-change="handlerSwitch"
    >
    </el-switch>
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
