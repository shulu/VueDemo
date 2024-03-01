<!--
 * @Author: shulu
 * @Date: 2024-02-21 14:52:56
 * @LastEditors: shulu
 * @LastEditTime: 2024-02-21 14:56:19
 * @Description: file content
 * @FilePath: /vue3-element-plus-admin/src/components/pagination/index.vue
-->
<template>
    <el-pagination
        class="pull-right"
        size="small"
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="props.pageInfo.current_page"
        :page-size="props.pageInfo.page_size"
        :page-sizes="[10, 20, 50, 100]"
        layout="total,sizes,prev,pager,next,jumper"
        :total="props.pageInfo.total"
        :hide-on-single-page="false"
    >
    </el-pagination>
</template>

<script setup>
import { defineEmits, defineProps } from 'vue';
const props = defineProps({
    pageInfo: {
        type: Object,
        default: () => {
            return {
                current_page: 0,
            };
        },
    },
});
const emit = defineEmits(['handleSizeChange', 'handleCurrentChange']);
const handleSizeChange = (val) => {
    emit('handleSizeChange', val);
};
const handleCurrentChange = (val) => {
    emit('handleCurrentChange', val);
};
</script>

<style lang="scss" scoped></style>
