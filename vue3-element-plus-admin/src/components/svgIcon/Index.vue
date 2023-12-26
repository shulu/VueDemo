<!--
 * @Author: shulu
 * @Date: 2023-12-25 16:01:58
 * @LastEditors: shulu
 * @LastEditTime: 2023-12-26 14:15:57
 * @Description: file content
 * @FilePath: /vue3-element-plus-admin/src/components/svgIcon/Index.vue
-->
<template>
    <svg class="svg-class" :class="svgClassName" aria-hidden="true">
        <use :href="svgIconName"></use>
    </svg>
</template>

<script setup>
import { computed, ref } from 'vue';
const props = defineProps(['className', 'iconName']);
const svgClassName = ref(props.className);
const svgIconName = computed(() => `#icon-${props.iconName}`);
</script>

<style lang="scss">
.svg-class {
    width: 1em;
    height: 1em;
    fill: currentColor;
}
</style>
