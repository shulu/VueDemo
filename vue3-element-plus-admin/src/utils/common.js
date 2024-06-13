/*
 * @Author: shulu
 * @Date: 2024-01-05 15:45:41
 * @LastEditors: shulu
 * @LastEditTime: 2024-06-13 23:31:56
 * @Description: file content
 * @FilePath: \vue3-element-plus-admin\src\utils\common.js
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

/**
 * @param { value } String 时间的值
 * @param { type } String data日期、time日期
 * @param { br } Boolean true换行、false默认
 * @param { conn } String 任意字符
 * @returns 日期格式化
 */
export const getDate = (params) => {
    const new_date = params.value ? new Date(params.value) : new Date();
    let year = new_date.getFullYear(); //年
    let month = new_date.getMonth() + 1; //月
    let day = new_date.getDate(); //日
    let hh = new_date.getHours(); //时
    let mm = new_date.getMinutes(); //分
    let ss = new_date.getSeconds(); //分
    if (month < 10) {
        month = `0${month}`;
    }
    if (day < 10) {
        day = `0${day}`;
    }
    if (hh < 10) {
        hh = `0${hh}`;
    }
    if (mm < 10) {
        mm = `0${mm}`;
    }
    if (ss < 10) {
        ss = `0${ss}`;
    }
    // 连接符
    const conn = params.connDate || '-';
    // 格式化
    const br = params.br ? '<br />' : ' ';
    const date = `${year}${conn}${month}${conn}${day}`;
    const time = `${hh}:${mm}:${ss}`;
    // 仅日期
    if (params.type === 'date') {
        return date;
    }
    // 仅时间
    if (params.type === 'time') {
        return time;
    }
    // 整体
    return `${date}${br}${time}`;
};

export const formatTree = (data, id = 'id', pid = 'parent_id', child = 'children', root) => {
    const tree = [];
    if (data && data.length > 0) {
        data.forEach((item) => {
            //获取顶层菜单 parent_id === 0
            if (item[pid] === root) {
                const children = formatTree(data, id, pid, child, item[id]);
                if (children) {
                    item[child] = children;
                }
                tree.push(item);
            }
        });
    }
    return tree;
};
