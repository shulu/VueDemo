<!--
 * @Author: shulu
 * @Date: 2023-12-25 14:37:43
 * @LastEditors: shulu
 * @LastEditTime: 2024-01-03 18:03:19
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
                    <img src="../assets/images/logo-min.png" :alt="data.username" srcset="" />
                    <span class="name">{{ data.username }}</span>
                </div>
                <span class="logout" @click="handlerLogout()">
                    <svg-icon iconName="logout" className="icon-logout"></svg-icon>
                </span>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useSideStore } from '@/store/sideStore';
import { getCurrentInstance, reactive } from 'vue';
import { useRouter } from 'vue-router';
const { replace } = useRouter();
const { proxy } = getCurrentInstance();
const sideStore = useSideStore();
const data = reactive({
    username: sideStore.username,
});
const changeSide = () => {
    sideStore.CHANGE_SIDE();
};
const handlerLogout = () => {
    proxy
        .$confirm('确定退出管理后台', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning',
        })
        .then(async () => {
            const res = await proxy.$api.LoginOut();
            proxy.$message({
                message: res.message,
                type: 'success',
            });
            replace({ path: '/Login' });
        });
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
.wrap {
    margin-left: 25px;
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
