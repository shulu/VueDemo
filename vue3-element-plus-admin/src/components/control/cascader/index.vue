<!--
 * @Author: shulu
 * @Date: 2024-02-26 16:06:34
 * @LastEditors: shulu
 * @LastEditTime: 2024-05-10 15:03:38
 * @Description: file content
 * @FilePath: /vue3-element-plus-admin/src/components/control/cascader/index.vue
-->
<template>
    <el-cascader v-model="cas_val" :options="props_info.options" :props="data.props" @onChange="$emit('update:modelValue', cas_val)" clearable />
</template>

<script setup>
import { GetCategory } from '@/api/info';
import { defineProps, onBeforeMount, reactive, ref } from 'vue';

const cas_val = ref(0);
const props_info = reactive({
    options: [],
});
defineProps({
    data: {
        type: Object,
        default: () => {},
    },
});
onBeforeMount(() => {
    info();
});
const info = async () => {
    try {
        const res = await GetCategory();
        props_info.options = res.data;
        // ElMessage({
        //     message: res.message,
        //     type: 'success',
        // });
    } catch (error) {
        console.log(`output->error`, error);
        // ElMessage({
        //     message: '获取分类失败',
        //     type: 'error',
        // });
    }
};
</script>

<style lang="scss" scoped></style>
