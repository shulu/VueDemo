<!--
 * @Author: shulu
 * @Date: 2023-03-20 16:07:15
 * @LastEditors: shulu
 * @LastEditTime: 2023-03-20 17:28:51
 * @Description: file content
 * @FilePath: /vue3-music/src/components/layout/menu/menuList.vue
-->
<script setup lang="ts">
import { ref } from 'vue';
import { useMenu } from "./useMenu";
const { menus } = useMenu();
</script>
<template>
    <div class="module-menu" v-for="(item, i) in menus" :key="i">
        <div class="title">{{ item.name }}</div>
        <div class="menus" v-for="menu in item.menus" :key="menu.key">
            <router-link :to="{name:menu.key}">{{ menu.name }}</router-link>
        </div>
    </div>
</template>
<style scoped lang="scss">
</style>