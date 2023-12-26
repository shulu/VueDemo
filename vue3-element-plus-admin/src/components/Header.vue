<!--
 * @Author: shulu
 * @Date: 2023-12-25 14:37:43
 * @LastEditors: shulu
 * @LastEditTime: 2023-12-26 15:15:29
 * @Description: file content
 * @FilePath: /vue3-element-plus-admin/src/components/Header.vue
-->
<template>
    <div class="header-wrap">
        <div class="wrap">
            <span class="menu-btn" @click="changeSide">
                <svg-icon iconName="menuBtn" className="icon-menu-svg" />
            </span>
        </div>
        <div class="wrap">
            <div class="user-info">
                <div class="face-info">
                    <img src="../assets/images/logo-min.png" alt="409019683@qq.com" srcset="" />
                    <span class="name">409019683@qq.com</span>
                </div>
                <span class="logout">
                    <svg-icon iconName="logout" className="icon-logout"></svg-icon>
                </span>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useSideStore } from '@/store/sideStore';
const sideStore = useSideStore();
const changeSide = () => {
    sideStore.CHANGE_SIDE();
};
</script>

<style lang="scss" scoped>
.header-wrap {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.menu-btn {
    cursor: pointer;
}
.icon-menu-svg {
    font-size: 24px;
}
.user-info {
    display: flex;
    align-items: center;
}
.face-info {
    span,
    img {
        display: inline-block;
        vertical-align: middle;
    }
    span {
        margin-left: 15px;
    }
}
.logout {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 75px;
    height: 75px;
    cursor: pointer;
}
.icon-logout {
    font-size: 24px;
}
</style>
