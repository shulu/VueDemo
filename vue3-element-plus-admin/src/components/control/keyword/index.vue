<template>
    <el-select v-model="key" placeholder="请选择" class="key-word-select">
        <el-option v-for="item in data.options" :key="item.value" :value="item.value" :label="item.label"></el-option>
    </el-select>
    <el-input v-model="value" class="width-200" :placeholder="placeholder"></el-input>
</template>

<script setup>
import { defineProps, ref } from 'vue';
defineProps({
    data: {
        type: Object,
        default: () => ({}),
    },
});
const key = ref('');
const value = ref('');
const placeholder = ref('请输入搜索的关键字');
// const options = reactive([
//     { label: 'ID', value: 'id' },
//     { label: '标题', value: 'title' },
//     { label: '姓名', value: 'name' },
//     { label: '手机后', value: 'phone' },
//     { label: '邮箱', value: 'email' },
// ]);
</script>

<style lang="scss" scoped>
.key-word-select {
    width: 100px;
    margin-right: 10px;
}
.width-200 {
    width: 200px;
}
</style>
