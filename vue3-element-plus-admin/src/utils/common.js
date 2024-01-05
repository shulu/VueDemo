/*
 * @Author: shulu
 * @Date: 2024-01-05 15:45:41
 * @LastEditors: shulu
 * @LastEditTime: 2024-01-05 15:49:31
 * @Description: file content
 * @FilePath: /vue3-element-plus-admin/src/utils/common.js
 */
import * as dayjs from 'dayjs';
import 'dayjs/locale/zh-cn'; // 导入本地化语言
import * as isLeapYear from 'dayjs/plugin/isLeapYear'; // 导入插件

dayjs.extend(isLeapYear); // 使用插件
dayjs.locale('zh-cn'); // 使用本地化语言

//转换为长日期时间格式
export const formatDateTime = (date_time) => {
    return dayjs(date_time).format('YYYY-MM-DD HH:mm:ss');
};
