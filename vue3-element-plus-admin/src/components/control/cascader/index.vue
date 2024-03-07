<!--
 * @Author: shulu
 * @Date: 2024-02-26 16:06:34
 * @LastEditors: shulu
 * @LastEditTime: 2024-03-05 17:53:29
 * @Description: file content
 * @FilePath: /vue3-element-plus-admin/src/components/cascader/index.vue
-->
<template>
    <el-cascader v-model="cas_val" :options="options" :props="props.props" @onChange="$emits('update:modelValue', cas_val)" />
</template>

<script setup>
import { defineProps, ref } from 'vue';

const cas_val = ref(0);
const props = defineProps({
    options: {
        type: Array,
        default: () => {},
    },
    props: {
        type: Array,
        default: () => {},
    },
});
</script>

<style lang="scss" scoped></style>
