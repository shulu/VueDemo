<!--
 * @Author: shulu
 * @Date: 2023-03-22 16:24:25
 * @LastEditors: shulu
 * @LastEditTime: 2023-03-29 17:10:40
 * @Description: file content
 * @FilePath: /vue3-music/src/views/discovery/banner.vue
-->
<script setup lang="ts">
import { useBannerStore } from '@/store/store';
import { register } from 'swiper/element/bundle';
import { ref, onMounted } from 'vue';
register();
const banner_store = useBannerStore();
onMounted(async () => {
  await banner_store.getBanners()
})
</script>
<template>
    <swiper-container slides-pre-view="3" grabCursor="true" autoPlay="true" loop="true">
        <swiper-slide v-for="item in banner_store.banners" :key="item.targetId">
          <img :src="item.pic" class="banner-image"/>
        </swiper-slide>
  </swiper-container>
</template>
<style scoped lang="scss">
</style>
