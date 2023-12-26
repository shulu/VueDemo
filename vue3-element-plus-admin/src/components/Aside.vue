<!--
 * @Author: shulu
 * @Date: 2023-12-25 14:37:35
 * @LastEditors: shulu
 * @LastEditTime: 2023-12-26 15:11:45
 * @Description: file content
 * @FilePath: /vue3-element-plus-admin/src/components/Aside.vue
-->
<template>
    <h1 class="logo"><img :src="data.logo" alt="手把手撸前端" srcset="" /></h1>
    <el-menu :default-active="currentPath" background-color="#344a5f" text-color="#fff" active-text-color="#fff" router="true" :collapse="collapse">
        <template v-for="item in routers" :key="item.path">
            <template v-if="hasOnlyChild(item.children)">
                <el-menu-item :index="item.children[0].path">
                    <svg-icon :icon-name="item.children[0].meta && item.children[0].meta.icon" class-name="aside-menu-svg" />
                    <template #title> {{ item.children[0].meta && item.children[0].meta.title }}</template>
                </el-menu-item>
            </template>
            <template v-else>
                <el-sub-menu v-if="item.children && item.children.length" :index="item.path">
                    <template #title>
                        <svg-icon :icon-name="item.meta && item.meta.icon" class-name="aside-menu-svg" />
                        {{ item.meta && item.meta.title }}
                    </template>
                    <template v-for="child in item.children" :key="child.path">
                        <el-menu-item :index="child.path" v-if="!child.hidden">
                            {{ child.meta && child.meta.title }}
                        </el-menu-item>
                    </template>
                </el-sub-menu>
            </template>
        </template>
    </el-menu>
</template>

<script setup>
import { useSideStore } from '@/store/sideStore';
import { computed, reactive } from 'vue';
import { useRoute, useRouter } from 'vue-router';
const { options } = useRouter();
const { path } = useRoute();
const sideStore = useSideStore();
const data = reactive({
    logo: require('@/assets/images/logo.png'),
    collapse: computed(() => sideStore.collapse),
});
//过滤隐藏的一级子菜单
const routers = options.routes.filter((e) => !e.hidden);
const hasOnlyChild = (children) => {
    if (!children) {
        return false;
    }
    //过滤二级隐藏子菜单
    const childRoute = children.filter((e) => !e.hidden);
    if (childRoute.length === 1) {
        return true;
    }
    return false;
};
const currentPath = computed(() => path);
</script>

<style lang="scss" scoped>
.logo {
    padding: 20px 0;
    border-bottom: 1px solid #2d4152;
    img {
        margin: auto;
    }
}
</style>
@/store/sideStore
