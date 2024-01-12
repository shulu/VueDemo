<!--
 * @Author: shulu
 * @Date: 2024-01-02 16:57:43
 * @LastEditors: shulu
 * @LastEditTime: 2024-01-08 15:50:14
 * @Description: file content
 * @FilePath: /vue3-element-plus-admin/src/components/WangEditor/Index.vue
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
        @onChange="$emit('update:modelValue', valueHtml)"
    />
</template>
1
<script>
import { Editor, Toolbar } from '@wangeditor/editor-for-vue';
import '@wangeditor/editor/dist/css/style.css'; // 引入 css
import { defineProps, onBeforeUnmount, onMounted, ref, shallowRef } from 'vue';

export default {
    components: { Editor, Toolbar },
    setup() {
        // 编辑器实例，必须用 shallowRef
        const editorRef = shallowRef();
        // 内容 HTML
        const valueHtml = ref('请输入内容...');
        // 模拟 ajax 异步获取内容
        onMounted(() => {});
        const toolbarConfig = {};
        const editorConfig = { placeholder: '请输入内容...' };
        // 组件销毁时，也及时销毁编辑器
        onBeforeUnmount(() => {
            const editor = editorRef.value;
            if (editor == null) return;
            editor.destroy();
        });
        const handleCreated = (editor) => {
            editorRef.value = editor; // 记录 editor 实例，重要！
        };
        defineProps({
            modelValue: {
                type: String,
                default: '',
            },
        });
        return {
            editorRef,
            valueHtml,
            mode: 'simple', // 或 'simple'
            toolbarConfig,
            editorConfig,
            handleCreated,
        };
    },
};
</script>

<style lang="scss" scoped>
.wang-editor {
    width: 100%;
    border: 1px dashed red;
}
</style>
