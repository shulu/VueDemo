<!--
 * @Author: shulu
 * @Date: 2024-02-27 13:51:50
 * @LastEditors: shulu
 * @LastEditTime: 2024-03-01 16:41:12
 * @Description: file content
 * @FilePath: /vue3-element-plus-admin/src/components/upload/index.vue
-->
<template>
    <el-upload
        class="avatar-upload"
        action="#"
        :limit="1"
        :http-request="upload_img"
        :show-file-list="false"
        :on-success="handleOnSuccess"
        :on-error="handleOnError"
        :before-upload="check_img"
        list-type="picture-card"
        :auto-upload="false"
        v-model:file-list="image_list"
        :disabled="image.up_disabled"
    >
        <div v-if="image.url">
            <img class="el-upload-list__item-thumbnail" :src="image.url" alt="" w-full />
            <span class="el-upload-list__item-actions">
                <!-- <span class="el-upload-list__item-preview" @click="handlePictureCardPreview">
                    <svg-icon iconName="zoomOut"></svg-icon>
                </span> -->
                <span class="el-upload-list__item-delete" @click="handleRemove">
                    <svg-icon iconName="trash"></svg-icon>
                </span>
            </span>
        </div>
        <span v-else>+</span>
    </el-upload>
    <el-dialog v-model="dialogVisible">
        <img w-full :src="image.url" alt="Preview Image" />
    </el-dialog>
</template>

<script setup>
import { UploadFile } from '@/api';
import { defineEmits, defineProps, getCurrentInstance, reactive, watch } from 'vue';
const { proxy } = getCurrentInstance();
const emits = defineEmits(['update:imageUrl']);
const image = reactive({
    up_disabled: false,
    url: '',
    dialogVisible: false,
    dialogImageUrl: '',
});
const check_img = (file) => {
    const isJPG = file.type === 'image/jpeg';
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isJPG) {
        proxy.$message.error('上传图片格式只能是JPG格式!');
    }
    if (!isLt2M) {
        proxy.$message.error('上传图片大小不能超过2MB');
    }
    return isJPG && isLt2M;
};
const upload_img = async (params) => {
    const file = params.file;
    const form = new FormData();
    form.append('files', file);
    try {
        const res = await UploadFile(form);
        image.url = res.data.files_path;
        image.up_disabled = true;
        emits('update:imageUrl', image.url);
        proxy.$message.success(res.message);
    } catch (error) {
        proxy.$message.error(error.message);
    }
};
const props = defineProps({
    imageUrl: String,
    default: () => {
        '';
    },
});
watch(
    () => props.imageUrl,
    (val) => {
        image.url = val;
        image.up_disabled = true;
    },
    { immediate: true },
);
// const handlePictureCardPreview = () => {
//     image.dialogVisible = true;
//     console.log(`output->1`, 1);
// };
const handleRemove = () => {
    image.url = '';
};
</script>

<style scoped lang="scss">
.el-upload-list__item-thumbnail {
    width: 100%;
    height: 100%;
    object-fit: contain;
}

.el-upload-list__item-actions {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    cursor: default;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    opacity: 0;
    font-size: 20px;
    background-color: var(--el-overlay-color-lighter);
    transition: opacity var(--el-transition-duration);
}

.el-upload-list__item-actions:hover {
    opacity: 1;
}
.el-upload-list__item-actions span {
    display: none;
    cursor: pointer;
}

.el-upload-list__item-actions:hover span {
    display: inline-flex;
}

.el-upload-list__item-actions span + span {
    margin-left: 1rem;
}

.el-upload-list__item-delete {
    position: static;
    font-size: inherit;
    color: inherit;
}
</style>
