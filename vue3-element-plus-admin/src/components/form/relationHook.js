/*
 * @Author: shulu
 * @Date: 2024-03-05 17:28:29
 * @LastEditors: shulu
 * @LastEditTime: 2024-03-05 17:49:20
 * @Description: file content
 * @FilePath: /vue3-element-plus-admin/src/components/form/relationHook.js
 */
export function relationHook() {
    const HiddenItem = (value, data, props) => {
        if (data && Array.isArray(data) && data.length > 0) {
            data.forEach((item) => {
                const field = item[0];
                const objVal = item[1];
                props[field] = objVal[value];
            });
        }
    };
    const DisabledItem = (value, data, props) => {
        if (data && Array.isArray(data) && data.length > 0) {
            data.forEach((item) => {
                const field = item[0];
                const objVal = item[1];
                props[field] = objVal[value];
            });
        }
    };
    return { HiddenItem, DisabledItem };
}
