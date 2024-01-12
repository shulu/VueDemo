<!--
 * @Author: shulu
 * @Date: 2023-12-25 15:23:13
 * @LastEditors: shulu
 * @LastEditTime: 2024-01-11 17:22:36
 * @Description: file content
 * @FilePath: /vue3-element-plus-admin/src/views/info/Detailed.vue
-->
<template>
    <el-form label-width="150px" ref="infoForm" :model="detail_form" :rules="detail_form_rules">
        <el-form-item label="信息类别：" prop="category_id">
            <el-cascader :options="tree_data" :props="detail_props" v-model="detail_form.category_id"> </el-cascader>
        </el-form-item>
        <el-form-item label="信息标题：" prop="title">
            <el-input v-model.trim="detail_form.title"></el-input>
        </el-form-item>
        <el-form-item label="缩略图：" prop="image_url">
            <el-upload
                class="avatar-upload"
                action="#"
                :http-request="UPLOAD_IMG"
                :show-file-list="true"
                :on-success="handleOnSuccess"
                :on-error="handleOnError"
                :before-upload="CHECK_IMG"
            >
                <img w-full v-if="detail_form.image_url" :src="detail_form.image_url" alt="avatar" />
                <span v-else>+</span>
            </el-upload>
        </el-form-item>
        <el-form-item label="发布日期：" prop="create_date">
            <el-date-picker v-model="detail_form.create_date" type="datetime" placeholder="选择日期时间"></el-date-picker>
        </el-form-item>
        <el-form-item label="内容：" prop="content">
            <wang-editor v-model.trim="detail_form.content"></wang-editor>
        </el-form-item>
        <el-form-item label="是否发布：" prop="status">
            <el-radio-group v-model="detail_form.status">
                <el-radio label="1">是</el-radio>
                <el-radio label="0">否</el-radio>
            </el-radio-group>
        </el-form-item>
        <el-form-item>
            <el-button type="danger" @click="handleSubmitForm('infoForm')">确定</el-button>
        </el-form-item>
    </el-form>
</template>

<script setup>
import { useInfoStore } from '@/store/infoStore';
import { formatDateTime } from '@/utils/common';
import { onBeforeMount, ref } from 'vue';
import { useRouter } from 'vue-router';
const { GET_CATEGORY, detail_form, detail_form_rules, tree_data, detail_props, SUBMIT_INFO_FORM, CHECK_IMG, UPLOAD_IMG } = useInfoStore();
const { go } = useRouter();
onBeforeMount(() => {
    GET_CATEGORY();
});
const infoForm = ref();
const handleSubmitForm = () => {
    infoForm.value.validate((valid) => {
        if (valid) {
            // 深度拷贝
            const request_data = JSON.parse(JSON.stringify(detail_form));
            // 日期处理
            request_data.create_date = formatDateTime(request_data.create_date);
            // category_idd 重新赋值
            request_data.category_id = request_data.category_id[request_data.category_id.length - 1];
            // 打印结果
            console.log(request_data);
            //
            const res = SUBMIT_INFO_FORM(request_data);
            console.log(`output->res`, res);
            go(-1);
        } else {
            console.log('error submit!!');
            return false;
        }
    });
};
</script>

<style lang="scss" scoped></style>
