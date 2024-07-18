<!--
 * @Author: shulu
 * @Date: 2024-06-16 21:46:18
 * @LastEditors: shulu
 * @LastEditTime: 2024-07-18 17:19:20
 * @Description: file content
 * @FilePath: \vue3-element-plus-admin\src\views\system\components\dialogUser.vue
-->
<script setup>
import { RoleListAll } from '@/api';
import { useUserStore } from '@/store/userStore';
import BasicForm from '@c/form';

import { defineEmits, defineProps, reactive, ref, toRef, watch } from 'vue';
const { form_rules, CREATE, RESET_FORM_DATA } = useUserStore();
const f_load = toRef(useUserStore(), 'form_loading');
const form_data = toRef(useUserStore(), 'form_data');
const form_item = toRef(useUserStore(), 'form_item');
const form_button_group = reactive([
    { label: '确认提交', type: 'danger', key: 'submit' },
    {
        label: '重置',
        key: 'reset',
    },
]);
const datas = reactive({
    role_data: [],
    check_list: [],
});
const getRoleList = async () => {
    if (datas.role_data.length != 0) {
        return false;
    }
    const res = await RoleListAll();
    datas.role_data = res.data;
};
const props = defineProps({
    flag: { type: Boolean, default: false },
    width: {
        type: String,
        default: '60%',
    },
    title: {
        type: String,
        default: '消息',
    },
});
const emits = defineEmits(['update:flag']);
const dialog_visible = ref(props.flag);
const dialogClose = () => {
    console.log(`output->dialogClose`);
    RESET_FORM_DATA();
    emits('update:flag', false);
};
const dialogOpen = async () => {
    getRoleList();
};
watch(
    () => props.flag,
    (nval) => {
        dialog_visible.value = nval;
    },
    { immediate: true },
);
</script>
<template>
    <el-dialog
        v-model="dialog_visible"
        :title="title"
        :width="width"
        :close-on-click-modal="fasle"
        :close-on-press-escape="fasle"
        @close="dialogClose"
        @open="dialogOpen"
    >
        <basic-form
            ref="basisFormRef"
            label-width="100px"
            :form_model="form_data"
            :form_item="form_item"
            :form_rules="form_rules"
            :form_button="form_button_group"
            :field="form_data"
            :form_loading="f_load"
            @submitForm="CREATE"
            @resetForm="handlerResetForm"
        >
            <template v-slot:role>
                <el-radio-group v-model="form_data.role_type" size="small">
                    <el-radio-button :label="item.role_name + '-' + item.role_id" :value="item.role_id" v-for="item in datas.role_data" :key="item.role_id" />
                </el-radio-group>
            </template>
        </basic-form>
    </el-dialog>
</template>
