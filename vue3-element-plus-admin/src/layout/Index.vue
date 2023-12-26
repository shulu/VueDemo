<!--
 * @Author: shulu
 * @Date: 2023-12-25 14:04:26
 * @LastEditors: shulu
 * @LastEditTime: 2023-12-25 14:58:33
 * @Description: file content
 * @FilePath: /vue3-element-plus-admin/src/layout/index.vue
-->

<template>
    <el-container id="layout-container">
        <el-aside id="layout-aside" width="250px"><LayoutSide /></el-aside>
        <el-container>
            <el-header id="layout-header" height="75px"><LayoutHeader /></el-header>
            <el-main id="layout-main"><LayoutMain /></el-main>
        </el-container>
    </el-container>
</template>

<script setup>
import LayoutSide from '@/components/Aside';
import LayoutHeader from '@/components/Header';
import LayoutMain from '@/components/Main';
</script>

<style lang="scss" scoped>
#layout-container {
    height: 100vh;
    display: flex;
}

#layout-aside {
    background-color: #344a5f;
}

#layout-header {
    position: relative;
    z-index: 10;
    background-color: $color_white;
    @include webkit(box-shadow, 0 0 10px 0 rgba(0, 0, 0, 0.5));
}

#layout-main {
    background-color: #bc77a1;
    height: 100%;
}
</style>
