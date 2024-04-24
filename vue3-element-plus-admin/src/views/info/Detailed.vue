<!--
 * @Author: shulu
 * @Date: 2023-12-25 15:23:13
 * @LastEditors: shulu
 * @LastEditTime: 2024-04-24 17:52:55
 * @Description: file content
 * @FilePath: /vue3-element-plus-admin/src/views/info/Detailed.vue
-->
<template>
    <basic-form
        :form_item="form_config.form_item"
        :form_button="form_config.form_button"
        :field="detail_form"
        :form_ref="infoForm"
        :form_model="detail_form"
        :form_rules="detail_form_rules"
        :form_hidden="form_config.form_hidden"
        :form_disabled="form_config.form_disabled"
        @submitForm="handleSubmitForm"
    />
</template>

<script setup>
import { useInfoStore } from '@/store/infoStore';
import BasicForm from '@c/form';
import { formatDateTime } from '@u/common';
import { storeToRefs } from 'pinia';
import { onBeforeMount, reactive } from 'vue';
import { useRoute, useRouter } from 'vue-router';
const store = useInfoStore();
const { INFO_CREATE, GET_DETAIL, INFO_EDIT } = store;
const { detail_form, detail_form_rules, detail_info, category_info } = storeToRefs(store);
onBeforeMount(() => {
    detail_info.id = query.id;
    GET_DETAIL();
});
const { go } = useRouter();
const { query } = useRoute();
const form_config = reactive({
    form_item: [
        {
            type: 'cascader',
            label: '信息分类',
            prop: 'category_id',
            col: 24,
            props: category_info.value.detail_props,
        },
        { type: 'input', label: '信息标题', prop: 'title', width: '300px', maxlength: 50, minlength: 1, placeholder: '请输入标题', col: 24 },
        { type: 'upload', label: '缩略图', prop: 'image_url', col: 24 },
        {
            type: 'date',
            label: '发布日期',
            prop: 'create_date',
            date_type: 'date',
            date_format: 'YYYY/MM/DD',
            date_value: 'YYYY-MM-DD',
            placeholder: '请选择时间',
            col: 24,
        },
        {
            type: 'radio',
            label: '是否发布',
            prop: 'status',
            options: [
                { value: 1, label: '是' },
                { value: 0, label: '否' },
            ],
            col: 24,
            relation_hidden: [
                // ['title', { 1: false, 0: true }],
                ['image_url', { 1: false, 0: true }],
            ],
            relation_disabled: [['title', { 0: true }]],
        },
        { type: 'wangeditor', label: '内容描述', prop: 'content', col: 24 },
    ],
    form_button: [
        { label: '提交', type: 'danger', key: 'submit' },
        // { label: '重置', type: 'primary', key: 'reset' },
        // { label: '关闭', type: 'primary', key: 'close', callback: () => handlerClose() },
    ],
    form_data: {
        category_id: '',
        image_url: '',
        title: '',
        content: '',
        create_date: '',
        start_date: '',
        end_date: '',
        status: '0',
        citys: [],
    },
    form_hidden: {
        category_id: false,
    },
    form_disabled: {},
});

const handleSubmitForm = () => {
    // 深度拷贝
    const request_data = JSON.parse(JSON.stringify(detail_form.value));
    // 日期处理
    request_data.create_date = formatDateTime(request_data.create_date);
    // category_idd 重新赋值
    request_data.category_id = request_data.category_id[request_data.category_id.length - 1];
    // 打印结果
    // console.log(request_data);
    //
    if (detail_info.id) {
        request_data.id = detail_info.id;
        INFO_EDIT(request_data);
    } else {
        INFO_CREATE(request_data);
    }
    go(-1);
};
</script>

<style lang="scss" scoped></style>
