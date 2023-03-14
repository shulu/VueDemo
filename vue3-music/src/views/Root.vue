<!--
 * @Author: shulu
 * @Date: 2023-03-14 17:27:40
 * @LastEditors: shulu
 * @LastEditTime: 2023-03-14 18:19:24
 * @Description: file content
 * @FilePath: /vue3-music/src/views/Root.vue
-->
<script setup lang="ts">
import Menu from "@/components/layout/menu/index.vue";
import Footer from "@/components/layout/footer/index.vue";
import { ref } from 'vue'
const msg = ref('home')
</script>

<template>
    <div class="module">
        <div class="module-left">
            <Menu />
        </div>
        <div class="module-main ">
            <router-view></router-view>
            <div>
                <Footer />
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
</style>