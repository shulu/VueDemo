<!--
 * @Author: shulu
 * @Date: 2024-02-23 16:22:34
 * @LastEditors: shulu
 * @LastEditTime: 2024-03-11 11:43:21
 * @Description: file content
 * @FilePath: /vue3-element-plus-admin/src/components/form/index.vue
-->
<template>
    <el-form ref="formRef" :model="form_model" :rules="form_rules" :label-width="label_width">
        <el-row>
            <template v-for="item in form_item" :key="item.prop">
                <el-col v-if="!hidden[item.prop]" :span="item.col || 24">
                    <el-form-item :label="item.label" :prop="item.prop">
                        <component :is="item.type + 'Component'" :data="item" v-model:modelValue="field[item.prop]" :disabled="ele_disabled[item.prop]" />
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
import { defineEmits, defineProps, reactive, ref } from 'vue';
import { relationHook } from './relationHook';
const { HiddenItem, DisabledItem } = relationHook();
const props = defineProps({
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
});
const emits = defineEmits(['submitForm']);
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
        return false;
    }
};
const hidden = reactive(props.form_hidden);
const ele_disabled = reactive(props.form_disabled);
const handlerChange = (event, data) => {
    HiddenItem(event, data.relation_hidden, hidden);
    DisabledItem(event, data.relation_disabled, ele_disabled);
};
</script>
