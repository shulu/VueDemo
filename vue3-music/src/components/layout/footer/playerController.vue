<!--
 * @Author: shulu
 * @Date: 2023-03-30 14:12:40
 * @LastEditors: shulu
 * @LastEditTime: 2023-03-30 14:14:50
 * @Description: file content
 * @FilePath: /vue3-music/src/components/layout/footer/playerController.vue
-->
<script setup lang="ts">
import { ref } from 'vue';
import { Play, PauseOne, GoEnd, GoStart } from '@icon-park/vue-next';
import iconPark from '@/components/common/iconPark.vue';
</script>
<template>
   <div class="player-controller">
    <iconPark :icon="GoStart"/>
    <iconPark :icon="Play" size="45" theme="filled" class="player-btn"/>
    <iconPark :icon="GoEnd" />
   </div>
</template>
<style scoped lang="scss">
</style>
