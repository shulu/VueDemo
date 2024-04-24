/*
 * @Author: shulu
 * @Date: 2024-02-20 15:00:19
 * @LastEditors: shulu
 * @LastEditTime: 2024-04-24 18:13:22
 * @Description: file content
 * @FilePath: /vue3-element-plus-admin/src/components/table/configHook.js
 */
import { reactive } from 'vue';

export function configHook() {
    const config = reactive({
        selection: true,
        batch_delete: true,
        pagination: true,
        search: true,
    });
    const configInit = (data = {}) => {
        if (JSON.stringify(data) === '{}') {
            return false;
        }
        const keys = Object.keys(config);
        for (let key in data) {
            if (!data.hasOwnProperty(key)) {
                continue;
            }
            if (keys.includes(key)) {
                config[key] = data[key];
            }
        }
    };
    return { config, configInit };
}
