<!--
 * @Author: shulu
 * @Date: 2024-04-30 12:03:32
 * @LastEditors: shulu
 * @LastEditTime: 2024-05-09 18:38:10
 * @Description: file content
 * @FilePath: /vue3-element-plus-admin/src/components/control/keyword/index.vue
-->
<template>
    <el-select v-model="key" placeholder="请选择" class="key-word-select" @change="handlerChange" clearable>
        <el-option v-for="item in data.options" :key="item.value" :value="item.value" :label="item.label"></el-option>
    </el-select>
    <el-input v-model="value" class="width-200" :placeholder="placeholder" v-on:input="callback" :disabled="keyword_disable"></el-input>
</template>

<script setup>
import { defineEmits, defineProps, getCurrentInstance, ref } from 'vue';
const { proxy } = getCurrentInstance();
const props = defineProps({
    data: {
        type: Object,
        default: () => ({}),
    },
});
const emits = defineEmits(['update:modelValue', 'callback']);
const key = ref('');
const value = ref('');
const keyword_disable = ref(true);
const placeholder = ref('请选择关键字类型');
const handlerChange = (val) => {
    value.value = '';
    if (val) {
        keyword_disable.value = false;
        updatePlaceHolder(val);
    } else {
        keyword_disable.value = true;
        placeholder.value = '请选择关键字类型';
    }
    // emits('update:key', val);
};
const callback = () => {
    if (!key.value) {
        proxy.$message({
            message: '请选择关键词类型',
            type: 'warning',
        });
    }
    emits('callback', {
        type: 'key_word',
        value: { key: key, key_word: value },
    });
};
const updatePlaceHolder = (val) => {
    const cont = props.data.options.filter((item) => item.value === val)[0].label;
    placeholder.value = `请输入${cont}`;
};
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
