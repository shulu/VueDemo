<!--
 * @Author: shulu
 * @Date: 2023-12-25 14:04:26
 * @LastEditors: shulu
 * @LastEditTime: 2024-05-10 19:06:30
 * @Description: file content
 * @FilePath: /vue3-element-plus-admin/src/layout/Index.vue
-->

<template>
    <el-container id="layout-container">
        <el-aside id="layout-aside" :width="data.collapse ? '60px' : '250px'"><LayoutSide /></el-aside>
        <el-container>
            <el-header id="layout-header" height="75px">
                <LayoutHeader />
            </el-header>
            <el-main id="layout-main"><LayoutMain /></el-main>
        </el-container>
    </el-container>
</template>

<script setup>
import LayoutSide from '@/components/Aside';
import LayoutHeader from '@/components/Header';
import LayoutMain from '@/components/Main';
import { useSideStore } from '@/store/sideStore';
import { computed, reactive } from 'vue';
const sideStore = useSideStore();
const data = reactive({
    collapse: computed(() => sideStore.collapse),
});
</script>

<style lang="scss" scoped>
#layout-container {
    height: 100vh;
    display: flex;
}

#layout-aside {
    height: 100%;
    min-height: 100%;
    background-color: #344a5f;
    @include webkit(transition, all 0.3s ease 0s);
}

#layout-header {
    position: relative;
    z-index: 10;
    background-color: $color_white;
    @include webkit(box-shadow, 0 0 10px 0 rgba(0, 0, 0, 0.5));
}

#layout-main {
    background-color: #f7f7f7;
    height: 100%;
}
</style>
