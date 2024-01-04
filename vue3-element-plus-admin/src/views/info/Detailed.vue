<!--
 * @Author: shulu
 * @Date: 2023-12-25 15:23:13
 * @LastEditors: shulu
 * @LastEditTime: 2024-01-04 17:20:33
 * @Description: file content
 * @FilePath: /vue3-element-plus-admin/src/views/info/Detailed.vue
-->
<template>
    <el-form label-width="150px">
        <el-form label-width="150px">
            <el-form-item label="信息类别：">
                <el-cascader :options="infoStore.tree_data" :props="infoStore.detail_props" v-model="infoStore.detail_form.category"> </el-cascader>
            </el-form-item>
            <el-form-item label="信息标题：">
                <el-input v-model="infoStore.detail_form.title"></el-input>
            </el-form-item>
            <el-form-item label="缩略图：">
                <el-upload
                    class="avatar-upload"
                    action="#"
                    :http-request="infoStore.UPLOAD_IMG"
                    :show-file-list="true"
                    :on-success="handleOnSuccess"
                    :on-error="handleOnError"
                    :before-upload="infoStore.CHECK_IMG"
                >
                    <img v-if="infoStore.detail_form.imageUrl" :src="infoStore.detail_form.imageUrl" alt="avatar" />
                    <span v-else>+</span>
                </el-upload>
            </el-form-item>
            <el-form-item label="发布日期：">
                <el-date-picker v-model="infoStore.detail_form.date" type="datetime" placeholder="选择日期时间"></el-date-picker>
            </el-form-item>
            <el-form-item label="内容：">
                <wang-editor></wang-editor>
            </el-form-item>
            <el-form-item>
                <el-button type="danger">确定</el-button>
            </el-form-item>
        </el-form>
    </el-form>
</template>

<script setup>
import { useInfoStore } from '@/store/infoStore';
import { onBeforeMount } from 'vue';
const infoStore = useInfoStore();
onBeforeMount(() => {
    infoStore.GET_CATEGORY();
});
</script>

<style lang="scss" scoped></style>
