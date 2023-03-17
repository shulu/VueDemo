<!--
 * @Author: shulu
 * @Date: 2023-03-14 18:18:49
 * @LastEditors: shulu
 * @LastEditTime: 2023-03-17 16:45:53
 * @Description: file content
 * @FilePath: /vue3-music/src/components/layout/menu/index.vue
-->
<script setup lang="ts">
import { ref } from 'vue'
const msg = ref('menu')
</script>

<template>
  <div class="menu">
    {{ msg }}
  </div>
</template>

<style scoped>
</style>