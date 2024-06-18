<!--
 * @Author: shulu
 * @Date: 2024-06-16 21:46:18
 * @LastEditors: shulu
 * @LastEditTime: 2024-06-18 23:55:13
 * @Description: file content
 * @FilePath: \vue3-element-plus-admin\src\components\dialogRole.vue
-->
<script setup>
import globalData from '@/js/data';
import BasicForm from '@c/form';

import { defineEmits, defineProps, reactive, ref, watch } from 'vue';

const props = defineProps({
    flag: { type: Boolean, default: false },
    width: {
        type: String,
        default: '30%',
    },
    title: {
        type: String,
        default: '消息',
    },
});
const emits = defineEmits(['update:flag']);
const dialog_visible = ref(props.flag);
const dialogClose = () => {
    emits('update:flag', false);
};
const form_config = reactive({
    form_item: [
        { type: 'input', label: '角色名称', prop: 'role_name', require: true },
        { type: 'input', label: '角色标识', prop: 'role_value', require: true },
        { type: 'radio', label: '是否启用', prop: 'role_disabled', options: globalData.whether },
    ],
    form_button: [{ label: '确认提交', type: 'danger', key: 'submit' }],
    form_data: {
        role_name: '',
        role_value: '',
        role_disabled: '1',
    },
    form_loading: false,
});
watch(
    () => props.flag,
    (nval) => {
        dialog_visible.value = nval;
    },
    { immediate: true },
);
</script>
<template>
    <el-dialog v-model="dialog_visible" :title="title" :width="width" :close-on-click-modal="fasle" :close-on-press-escape="fasle" @close="dialogClose">
        <basic-form
            ref="basisFormRef"
            label-width="100px"
            :form_item="form_config.form_item"
            :form_button="form_config.form_button"
            :field="form_config.form_data"
            :form_loading="form_config.loading"
        >
        </basic-form>
    </el-dialog>
</template>
