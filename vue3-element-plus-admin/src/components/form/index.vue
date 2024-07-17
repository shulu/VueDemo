<!--
 * @Author: shulu
 * @Date: 2024-02-23 16:22:34
 * @LastEditors: shulu
 * @LastEditTime: 2024-07-16 11:32:10
 * @Description: file content
 * @FilePath: \vue3-element-plus-admin\src\components\form\index.vue
-->
<template>
    <el-form ref="formRef" :model="form_model" :rules="form_rules" :label-width="label_width" v-loading="form_loading" element-loading-text="加载中,请稍后">
        <el-row>
            <template v-for="item in form_item" :key="item.prop">
                <el-col v-if="!item.hidden" :span="item.col || 24">
                    <el-form-item v-if="item.type === 'slot'" :label="item.label">
                        <slot :name="item.slot_name"> </slot>
                    </el-form-item>
                    <el-form-item v-else :label="item.label" :prop="item.prop">
                        <component :is="item.type + 'Component'" :data="item" v-model:modelValue="field[item.prop]" />
                    </el-form-item>
                </el-col>
            </template>
            <el-form-item>
                <el-button
                    v-for="item in form_button"
                    :key="item.key"
                    :type="item.type || 'primary'"
                    @click="item.callback ? item.callback() : handlerFormAction(item)"
                    >{{ item.label }}</el-button
                >
            </el-form-item>
        </el-row>
    </el-form>
</template>

<script setup>
import { defineEmits, defineProps, ref } from 'vue';
import { relationHook } from './relationHook';
const { HiddenItem, DisabledItem } = relationHook();
defineProps({
    form_disabled: {
        type: Object,
        default: () => {},
    },
    form_hidden: {
        type: Object,
        default: () => {},
    },
    form_ref: {
        type: String,
        default: 'form',
    },
    form_model: {
        type: Object,
        default: () => {},
    },
    form_rules: {
        type: Object,
        default: () => {},
    },
    form_item: {
        type: Array,
        default: () => {
            [];
        },
    },
    form_button: {
        type: Array,
        default: () => {
            [];
        },
    },
    form_fields: {
        type: Object,
        default: () => {},
    },
    label_width: {
        type: [String, Number],
        default: '100px',
    },
    field: {
        type: Object,
        default: () => ({}),
    },
    form_loading: {
        type: Boolean,
        default: false,
    },
});
const emits = defineEmits(['submitForm', 'resetForm']);
const formRef = ref();
const handlerFormAction = (data) => {
    if (data.key === 'submit') {
        formRef.value.validate((valid) => {
            if (valid) {
                emits('submitForm', {});
                return false;
            } else {
                console.log('error submit!!');
                return false;
            }
        });
    }
    if (data.key === 'reset') {
        formRef.value.resetFields();
        emits('resetForm', {});
        return false;
    }
};
// const hidden = reactive(props.form_hidden);
// const ele_disabled = reactive(props.form_disabled);
const handlerChange = (event, data) => {
    HiddenItem(event, data.relation_hidden, hidden);
    DisabledItem(event, data.relation_disabled, ele_disabled);
};
</script>
