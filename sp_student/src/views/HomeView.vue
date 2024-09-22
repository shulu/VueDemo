<template>
    <div class="home" style="padding: 50px">
        <div style="text-align: left; padding-right: 10px; margin-bottom: 10px">
            <el-input v-model="search" placeholder="请输入搜索关键字" style="width: 20%; margin-right: 10px" clearable></el-input>
            <el-button type="primary" @click="load">搜索</el-button>
            <el-button type="success" @click="add">添加</el-button>
        </div>

        <el-table :data="tableData" stripe border style="width: 100%; margin-bottom: 10px">
            <el-table-column prop="id" label="编号" width="180" sortable />
            <el-table-column prop="studentname" label="学生姓名" width="180" />
            <el-table-column prop="gender" label="性别" />
            <el-table-column prop="age" label="年龄" />
            <el-table-column prop="address" label="家庭地址" />
            <el-table-column fixed="right" label="操作" width="150">
                <template #default="scope">
                    <el-button type="primary" size="small" @click="handleEdit(scope.row)">编辑</el-button>
                    <el-popconfirm title="你确定要删除吗？" @confirm="handleDelete(scope.row.id)">
                        <template #reference>
                            <el-button type="danger" size="small">删除</el-button>
                        </template>
                    </el-popconfirm>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination
            v-model:currentPage="currentPage"
            v-model:page-size="pageSize"
            :page-sizes="[5, 10, 20]"
            :small="small"
            :disabled="disabled"
            :background="background"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
        />

        <el-dialog v-model="dialogVisible" title="学生信息" width="30%">
            <el-form :model="form" label-width="120px">
                <el-form-item label="学生姓名">
                    <el-input v-model="form.studentname" />
                </el-form-item>
                <el-form-item label="性别">
                    <el-radio v-model="form.gender" label="男" size="large">男</el-radio>
                    <el-radio v-model="form.gender" label="女" size="large">女</el-radio>
                </el-form-item>
                <el-form-item label="年龄">
                    <el-input v-model="form.age" />
                </el-form-item>
                <el-form-item label="家庭住址">
                    <el-input type="textarea" v-model="form.address" />
                </el-form-item>
            </el-form>
            <template #footer>
                <span class="dialog-footer">
                    <el-button @click="dialogVisible = false">取消</el-button>
                    <el-button type="primary" @click="save">确定</el-button>
                </span>
            </template>
        </el-dialog>
    </div>
</template>

<script>
import axios from 'axios';
import { ElMessage } from 'element-plus';
import { onMounted, reactive, toRefs } from 'vue';

export default {
    name: 'HomeView',
    components: {},
    setup() {
        const state = reactive({
            tableData: [],
            currentPage: 1,
            pageSize: 5,
            total: 0,
            search: '',
            form: {},
            dialogVisible: false,
        });

        const load = () => {
            axios
                .get('/api/students', {
                    params: {
                        pageNum: state.currentPage,
                        pageSize: state.pageSize,
                        // total: state.total,
                        search: state.search,
                    },
                })
                .then((res) => {
                    console.log(res);
                    state.tableData = res.data.data.records;
                    state.total = res.data.data.total;
                });
        };

        onMounted(() => {
            load();
        });

        const handleCurrentChange = (pageNum) => {
            state.currentPage = pageNum;
            load();
        };
        const handleSizeChange = (pageSize) => {
            state.pageSize = pageSize;
            load();
        };

        const add = () => {
            state.dialogVisible = true;
            state.form = {};
        };

        const save = () => {
            if (state.form.id) {
                axios.put('/api/students', state.form).then((res) => {
                    if (res.data.code === '0') {
                        ElMessage({
                            message: '修改成功！',
                            type: 'success',
                        });
                    } else {
                        ElMessage.error(res.msg);
                    }
                    load();
                    state.dialogVisible = false;
                });
            } else {
                axios.post('/api/students', state.form).then((res) => {
                    if (res.data.code === '0') {
                        ElMessage({
                            message: '添加成功！',
                            type: 'success',
                        });
                    } else {
                        ElMessage.error(res.msg);
                    }
                    load();
                    state.dialogVisible = false;
                });
            }
        };
        const handleEdit = (row) => {
            state.form = JSON.parse(JSON.stringify(row));
            state.dialogVisible = true;
        };
        const handleDelete = (id) => {
            axios.delete('/api/students/' + id).then((res) => {
                if (res.data.code === '0') {
                    ElMessage({
                        message: '删除成功！',
                        type: 'success',
                    });
                } else {
                    ElMessage.error(res.msg);
                }
                load();
                state.dialogVisible = false;
            });
        };

        return {
            ...toRefs(state),
            handleCurrentChange,
            handleSizeChange,
            add,
            save,
            handleEdit,
            handleDelete,
            load,
        };
    },
};
</script>
