<!--
 * @Author: shulu
 * @Date: 2023-12-25 15:23:13
 * @LastEditors: shulu
 * @LastEditTime: 2024-01-05 16:06:08
 * @Description: file content
 * @FilePath: /vue3-element-plus-admin/src/views/info/Detailed.vue
-->
<template>
    <el-form label-width="150px" ref="infoForm" :model="field" :rules="infoStore.detail_form_rules">
        <el-form label-width="150px">
            <el-form-item label="信息类别：" prop="category_id">
                <el-cascader :options="infoStore.tree_data" :props="infoStore.detail_props" v-model="infoStore.detail_form.category_id"> </el-cascader>
            </el-form-item>
            <el-form-item label="信息标题：" prop="title">
                <el-input v-model.trim="infoStore.detail_form.title"></el-input>
            </el-form-item>
            <el-form-item label="缩略图：" prop="image_url">
                <el-upload
                    class="avatar-upload"
                    action="#"
                    :http-request="infoStore.UPLOAD_IMG"
                    :show-file-list="true"
                    :on-success="handleOnSuccess"
                    :on-error="handleOnError"
                    :before-upload="infoStore.CHECK_IMG"
                >
                    <img v-if="infoStore.detail_form.image_url" :src="infoStore.detail_form.image_url" alt="avatar" />
                    <span v-else>+</span>
                </el-upload>
            </el-form-item>
            <el-form-item label="发布日期：" prop="create_date">
                <el-date-picker v-model="infoStore.detail_form.create_date" type="datetime" placeholder="选择日期时间"></el-date-picker>
            </el-form-item>
            <el-form-item label="内容：" prop="content">
                <wang-editor v-model.trim="infoStore.detail_form.content"></wang-editor>
            </el-form-item>
            <el-form-item label="是否发布：" prop="status">
                <el-radio-group v-model="infoStore.detail_form.status">
                    <el-radio label="1">是</el-radio>
                    <el-radio label="0">否</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item>
                <el-button type="danger" @click="handleSubmitForm">确定</el-button>
            </el-form-item>
        </el-form>
    </el-form>
</template>

<script setup>
import { useInfoStore } from '@/store/infoStore';
import { onBeforeMount, ref } from 'vue';
const infoStore = useInfoStore();
onBeforeMount(() => {
    infoStore.GET_CATEGORY();
});
const infoForm = ref();
const handleSubmitForm = () => {
    infoForm.value.validate((valid) => {
        if (valid) {
            console.log(`output->form_data.field`, form_data.field);
        } else {
            console.log('output->error submit');
            return false;
        }
    });
};
</script>

<style lang="scss" scoped></style>
