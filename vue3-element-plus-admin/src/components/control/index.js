/*
 * @Author: shulu
 * @Date: 2024-02-26 15:53:55
 * @LastEditors: shulu
 * @LastEditTime: 2024-04-24 18:10:23
 * @Description: file content
 * @FilePath: /vue3-element-plus-admin/src/components/control/index.js
 */

// 使用 import.meta.glob 获取所有组件
const components = require.context('@c/control', true, /\index.vue$/);
export default {
    install(app) {
        // 遍历查询结果，将查询到的文件加载后插入数组
        components.keys().forEach((fileName) => {
            //获取组件名称
            const name_info = fileName.split('/');
            const component = name_info[1].toLowerCase();
            const componentName = component + 'Component';
            // 获取组件配置
            const componentConfig = components(fileName);
            // 全局注册组件
            app.component(componentName, componentConfig.default);
        });
    },
};
