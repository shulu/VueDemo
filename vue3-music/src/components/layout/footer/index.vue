<!--
 * @Author: shulu
 * @Date: 2023-03-14 18:18:54
 * @LastEditors: shulu
 * @LastEditTime: 2023-03-14 18:31:05
 * @Description: file content
 * @FilePath: /vue3-music/src/components/layout/footer/index.vue
-->
<script setup lang="ts">
import { ref } from 'vue'
const msg = ref('footer')
</script>

<template>
  <div class="footer">
    {{ msg }}
  </div>
</template>

<style scoped>
</style>