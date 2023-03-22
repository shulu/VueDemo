<!--
 * @Author: shulu
 * @Date: 2023-03-14 17:31:05
 * @LastEditors: shulu
 * @LastEditTime: 2023-03-22 16:25:22
 * @Description: file content
 * @FilePath: /vue3-music/src/views/discovery/index.vue
-->
<script setup lang="ts">
import { ref } from 'vue'
import banner from './banner.vue';
const msg = ref('discovery')
</script>

<template>
    <h1>discovery</h1>
    <banner />
    <div>
        {{ msg }}
    </div>
</template>

<style scoped>
</style>