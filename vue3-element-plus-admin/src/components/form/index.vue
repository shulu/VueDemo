<!--
 * @Author: shulu
 * @Date: 2024-02-23 16:22:34
 * @LastEditors: shulu
 * @LastEditTime: 2024-03-05 17:57:38
 * @Description: file content
 * @FilePath: /vue3-element-plus-admin/src/components/form/index.vue
-->
<template>
    <el-form ref="formRef" :model="form_model" :rules="form_rules" :label-width="label_width">
        <template v-for="item in form_item" :key="item.prop">
            <template v-if="!hidden[item.prop]">
                <el-form-item v-if="item.type === 'cascader'" :label="item.label" :prop="item.prop">
                    <basic-cascader v-model:modelValue="field[item.prop]" :options="options" :props="props.props" :disabled="ele_disabled[item.prop]" />
                </el-form-item>
            </template>
            <template v-if="!hidden[item.prop]">
                <el-form-item v-if="item.type === 'input'" :label="item.label" :prop="item.prop">
                    <el-input
                        :maxlength="item.max_length"
                        :minlength="item.min_length || 0"
                        :style="`width:${item.width}`"
                        :placeholder="item.placeholder"
                        v-model="field[item.prop]"
                        :disabled="ele_disabled[item.prop]"
                    ></el-input>
                </el-form-item>
            </template>
            <template v-if="!hidden[item.prop]">
                <el-form-item v-if="item.type === 'upload'" :label="item.label" :prop="item.prop">
                    <basic-upload v-model:imageUrl="field[item.prop]" :disabled="ele_disabled[item.prop]" />
                </el-form-item>
            </template>
            <template v-if="!hidden[item.prop]">
                <el-form-item v-if="item.type === 'date'" :label="item.label" :prop="item.prop" :disabled="ele_disabled[item.prop]">
                    <el-date-picker
                        v-model="field[item.prop]"
                        :type="item.date_type || 'datetime'"
                        :format="item.date_format || 'YYYY-MM-DD HH:mm:ss'"
                        :value-format="item.date_value || 'YYYY-MM-DD HH:mm:ss'"
                        :placeholder="item.placeholder"
                        :start-placeholder="item.start_placeholder || '请选择开始日期'"
                        :end-placeholder="item.end_placeholder || '请选择结束日期'"
                        :range-separator="item.range_placeholder || '-'"
                    ></el-date-picker>
                </el-form-item>
            </template>
            <template v-if="!hidden[item.prop]">
                <el-form-item v-if="item.type === 'radio'" :label="item.label" :prop="item.prop" :disabled="ele_disabled[item.prop]">
                    <el-radio-group v-model.number="field[item.prop]" @change="handlerChange($event, item)">
                        <el-radio v-for="radio in item.options" :key="radio.value" :label="radio.value">{{ radio.label }}</el-radio>
                    </el-radio-group>
                </el-form-item>
            </template>
            <template v-if="!hidden[item.prop]">
                <el-form-item v-if="item.type === 'select'" :label="item.label" :prop="item.prop" :disabled="ele_disabled[item.prop]">
                    <el-select v-model="field[item.prop]">
                        <el-option v-for="select in item.options" :key="select.value" :label="select.label" :value="select.value"></el-option>
                    </el-select>
                </el-form-item>
            </template>
            <template v-if="!hidden[item.prop]">
                <el-form-item v-if="item.type === 'checkbox'" :label="item.label" :prop="item.prop" :disabled="ele_disabled[item.prop]">
                    <el-checkbox-group v-model="field[item.prop]">
                        <el-checkbox v-for="checkbox in item.options" :key="checkbox.value" :label="checkbox.value">{{ checkbox.label }}</el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
            </template>
            <template v-if="!hidden[item.prop]">
                <el-form-item v-if="item.type === 'wangeditor'" :label="item.label" :prop="item.prop" :disabled="ele_disabled[item.prop]">
                    <wang-editor v-model:TextContent="field[item.prop]"></wang-editor>
                </el-form-item>
            </template>
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
    options: {
        type: Array,
        default: () => {},
    },
    props: {
        type: Array,
        default: () => {},
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
    console.log(`output->event`, event);
    console.log(`output->data`, data);
    console.log(`output->ele_disabled`, ele_disabled);
    HiddenItem(event, data.relation_hidden, hidden);
    DisabledItem(event, data.relation_disabled, ele_disabled);
    console.log(`output->ele_disabled`, ele_disabled);
};
</script>
