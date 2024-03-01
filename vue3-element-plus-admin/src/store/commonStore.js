import { UploadFile } from '@/api';
import { ElMessage } from 'element-plus';
import { defineStore } from 'pinia';
export const useCommonStore = defineStore('common', {
    state: () => {},
    actions: {
        CHECK_IMG(file) {
            const isJPG = file.type === 'image/jpeg';
            const isLt2M = file.size / 1024 / 1024 < 2;
            if (!isJPG) {
                ElMessage.error('上传图片格式只能是JPG格式!');
            }
            if (!isLt2M) {
                ElMessage.error('上传图片大小不能超过2MB');
            }
            return isJPG && isLt2M;
        },
        async UPLOAD_IMG(params) {
            console.log(`output->params`, params);
            const file = params.file;
            const form = new FormData();
            form.append('files', file);
            try {
                const res = await UploadFile(form);
                this.detail_form.image_url = res.data.files_path;
                ElMessage.success(res.message);
            } catch (error) {
                ElMessage.error(error.message);
            }
        },
    },
});
