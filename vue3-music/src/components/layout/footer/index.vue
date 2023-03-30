<!--
 * @Author: shulu
 * @Date: 2023-03-14 18:18:54
 * @LastEditors: shulu
 * @LastEditTime: 2023-03-30 14:16:16
 * @Description: file content
 * @FilePath: /vue3-music/src/components/layout/footer/index.vue
-->
<script setup lang="ts">
import { ref } from 'vue'
import playerSong from './playerSong.vue';
import playerController from './playerController.vue';
const msg = ref('footer')
</script>

<template>
  <div class="module-player">
    <div class="flex-1"><playerSong /></div>
    <div class="flex-1"><playerController /></div>
    <div class="flex-1"></div>
  </div>
</template>

<style scoped>
</style>