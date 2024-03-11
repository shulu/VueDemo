<!--
 * @Author: shulu
 * @Date: 2024-02-27 13:51:50
 * @LastEditors: shulu
 * @LastEditTime: 2024-03-11 15:39:07
 * @Description: file content
 * @FilePath: /vue3-element-plus-admin/src/components/control/upload/index.vue
-->
<template>
    <el-upload
        class="avatar-uploader"
        action="#"
        :http-request="handlerUpload"
        :before-upload="handlerBeforeOnUpload"
        :on-error="handlerOnError"
        :show-file-list="false"
        :disabled="disabled"
    >
        <img v-if="image.image_url" :src="image.image_url" class="avatar el-upload-list__item-thumbnail" />
        <span v-else>+</span>
    </el-upload>
</template>

<script setup>
import { UploadFile } from '@/api';
import { defineEmits, defineProps, getCurrentInstance, reactive, watch } from 'vue';
const { proxy } = getCurrentInstance();
const emits = defineEmits(['update:modelValue']);
const image = reactive({
    image_url: '',
});
const handlerBeforeOnUpload = (file) => {
    console.log(`output->file`, file);
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
const handlerUpload = async (params) => {
    const file = params.file;
    const form = new FormData();
    form.append('files', file);
    try {
        const res = await UploadFile(form);
        image.image_url = res.data.files_path;
        emits('update:modelValue', image.image_url);
        proxy.$message.success(res.message);
    } catch (error) {
        proxy.$message.error(error.message);
    }
};
const props = defineProps({
    modelValue: String,
    default: () => {
        '';
    },
});
watch(
    () => props.modelValue,
    (val) => {
        image.image_url = val;
    },
    { immediate: true },
);
// const handlePictureCardPreview = () => {
//     image.dialogVisible = true;
//     console.log(`output->1`, 1);
// };
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
