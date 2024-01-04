<!--
 * @Author: shulu
 * @Date: 2023-12-25 14:37:49
 * @LastEditors: shulu
 * @LastEditTime: 2023-12-28 14:26:19
 * @Description: file content
 * @FilePath: /vue3-element-plus-admin/src/components/Main.vue
-->
<template>
    <div id="main-content">
        <RouterView />
    </div>
</template>

<script setup></script>

<style lang="scss" scoped>
#main-content {
    background-color: #fff;
    padding: 20px;
    min-height: 100%; //最小高度
    @include webkit(box-sizing, border-box); //忽略padding和border
}
</style>
