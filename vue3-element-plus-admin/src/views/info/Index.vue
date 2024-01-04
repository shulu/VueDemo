<!--
 * @Author: shulu
 * @Date: 2023-12-25 15:22:50
 * @LastEditors: shulu
 * @LastEditTime: 2023-12-28 16:32:30
 * @Description: file content
 * @FilePath: /vue3-element-plus-admin/src/views/Info/Index.vue
-->
<template>
    <el-row>
        <el-col :span="18">
            <el-form :inline="true" label-width="80px" style="display: flex">
                <el-form-item label="类别">
                    <el-select placeholder="请选择" class="width-160" v-model="data.category">
                        <el-option v-for="item in data.category_options" :key="item.value" :value="item.value" :label="item.label"> </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="关键字">
                    <el-select class="width-100" placeholder="请选择"></el-select>
                </el-form-item>
                <el-form-item>
                    <el-input class="width-180" placeholder="请输入关键字"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="danger">搜索</el-button>
                </el-form-item>
            </el-form>
        </el-col>
        <el-col :span="6">
            <router-link to="/newsDetailed" class="pull-right">
                <el-button type="danger" class="pull-right">新增</el-button>
            </router-link>
        </el-col>
    </el-row>
    <el-table ref="table" border :data="data.tableData" style="width: 100%" @selection-change="handlerSelectionChange()">
        <el-table-column type="selection" width="40"></el-table-column>
        <el-table-column prop="name" label="标题" width="500"></el-table-column>
        <el-table-column prop="address" label="类别"></el-table-column>
        <el-table-column prop="date" label="日期"></el-table-column>
        <el-table-column prop="handle" label="操作" width="200">
            <template #default="scope">
                <el-button type="danger" size="small" @click="handleDetailed">编辑</el-button>
                <el-button size="small">删除</el-button>
            </template>
        </el-table-column>
    </el-table>
    <el-row class="margin-top-30">
        <el-col :span="2"><el-button>批量删除</el-button></el-col>
        <el-col :span="22">
            <el-pagination
                class="pull-right"
                size="small"
                background
                @size-change="handleSizeChange()"
                @current-change="handleCurrentChange()"
                :current-page="data.current_page"
                :page-size="10"
                :page-sizes="[10, 20, 50, 100]"
                layout="total,sizes,prev,pager,next,jumper"
                :total="100"
            >
            </el-pagination>
        </el-col>
    </el-row>
</template>

<script setup>
import { reactive } from 'vue';
import { useRouter } from 'vue-router';

const data = reactive({
    category: 0,
    category_options: [
        { label: 'AI', value: 0 },
        { label: 'TECH', value: 1 },
    ],
    tableData: [
        { name: '王小虎', address: '上海市普陀区金沙江路 1518 弄', date: '2020-06-05 12:00:00' },
        { name: '王小虎', address: '上海市普陀区金沙江路 1518 弄', date: '2020-06-05 12:00:00' },
    ],
    // 分页
    current_page: 1,
});
const { push } = useRouter();
const handlerSelectionChange = () => {};
// 分页
const handleSizeChange = (val) => {};
const handleCurrentChange = (val) => {};
const handleDetailed = () => {
    push({
        path: '/newsDetailed',
    });
};
</script>

<style lang="scss" scoped>
.width-100 {
    width: 100px;
}
.width-160 {
    width: 160px;
}
.width-180 {
    width: 180px;
}
</style>
