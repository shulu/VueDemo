<!--
 * @Author: shulu
 * @Date: 2024-01-02 16:57:43
 * @LastEditors: shulu
 * @LastEditTime: 2024-03-01 16:44:51
 * @Description: file content
 * @FilePath: /vue3-element-plus-admin/src/components/WangEditor/index.vue
-->
<template>
    <Toolbar style="border-bottom: 1px solid #ccc" :editor="editorRef" :defaultConfig="toolbarConfig" :mode="mode" />
    <Editor
        v-model="valueHtml"
        :defaultConfig="editorConfig"
        :mode="mode"
        @onCreated="handleCreated"
        class="wang-editor"
        style="height: 200px"
        @onChange="$emit('update:TextContent', valueHtml)"
    />
</template>
<script setup>
import { getToken } from '@/utils/cookies';
import { Editor, Toolbar } from '@wangeditor/editor-for-vue';
import '@wangeditor/editor/dist/css/style.css'; // 引入 css
import { defineProps, onBeforeUnmount, onMounted, ref, shallowRef, watch } from 'vue';
// 模拟 ajax 异步获取内容
onMounted(() => {});
// 编辑器实例，必须用 shallowRef
const editorRef = shallowRef();
// 内容 HTML
const valueHtml = ref('请输入内容...');
const editorConfig = {
    // JS 语法
    MENU_CONF: {},
    // 其他属性...
};
editorConfig.MENU_CONF['uploadImage'] = {
    server: process.env.VUE_APP_DEV_TARGET + '/upload',
    fieldName: 'files',
    headers: {
        Token: getToken(),
    },
    // 自定义插入图片
    customInsert(res, insertFn) {
        // 从 res 中找到 url alt href ，然后插入图片
        insertFn(res.data.files_path);
    },
};
const toolbarConfig = {};
const handleCreated = (editor) => {
    editorRef.value = editor; // 记录 editor 实例，重要！
};
const props = defineProps({
    TextContent: String,
    default: () => {
        return '请输入内容...';
    },
});
watch(
    () => props.TextContent,
    (val) => {
        valueHtml.value = val;
    },
    { immediate: true },
);
// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
    const editor = editorRef.value;
    if (editor == null) return;
    editor.destroy();
});
</script>

<style lang="scss" scoped>
.wang-editor {
    width: 100%;
    border: 1px dashed red;
}
</style>
