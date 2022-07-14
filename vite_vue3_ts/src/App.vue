<script setup lang="ts">
import { NButton } from 'naive-ui'
import { useMainStore } from '@/store/main'

const mainStore = useMainStore()
const updateName = () => {
  // $patch 修改 store 中的数据
  mainStore.$patch({
    name: '名称被修改了,nameLength也随之改变了',
  })
}
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <n-config-provider :locale="zhCN"
                     :theme="theme">
    <!-- 容器 -->
  </n-config-provider>

  <n-button>naive-ui</n-button>
  <div>用户名:{{ mainStore.name }}<br />长度:{{ mainStore.nameLength }}</div>
  <hr />
  <button @click="updateName">修改store中的name</button>
  <div>
    <a href="https://vitejs.dev"
       target="_blank">
      <img src="/vite.svg"
           class="logo"
           alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/"
       target="_blank">
      <img src="./assets/vue.svg"
           class="logo vue"
           alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
