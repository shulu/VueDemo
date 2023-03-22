<!--
 * @Author: shulu
 * @Date: 2023-03-22 16:11:38
 * @LastEditors: shulu
 * @LastEditTime: 2023-03-22 16:18:15
 * @Description: file content
 * @FilePath: /vue3-music/src/components/common/iconPark.vue
-->
<script setup lang="ts">
const { icon, size, fill } = defineProps<{
    icon: any,
    size?: number | string,
    fill?: string | string[]
}>()
</script>
<template>
    <component :is="icon" :size="size" :fill="fill"/>
</template>
<style scoped lang="scss">
</style>
