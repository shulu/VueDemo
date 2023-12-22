<!--
 * @Author: shulu
 * @Date: 2023-12-14 10:13:21
 * @LastEditors: shulu
 * @LastEditTime: 2023-12-15 16:57:22
 * @Description: file content
 * @FilePath: /vue3-element-plus-admin/src/views/HomeView.vue
-->
<template>
    <div class="home">
        <h1>这实测文字</h1>
        <ul>
            <li>wuxu1</li>
            <li>wuxu2</li>
        </ul>
        <img alt="Vue logo" src="../assets/logo.png" />
        <HelloWorld msg="Welcome to Your Vue.js App" />
    </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
    name: 'HomeView',
    components: {
        HelloWorld,
    },
};
</script>
