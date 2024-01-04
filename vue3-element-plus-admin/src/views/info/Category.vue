<!--
 * @Author: shulu
 * @Date: 2023-12-25 15:22:59
 * @LastEditors: shulu
 * @LastEditTime: 2024-01-04 15:50:19
 * @Description: file contentl
 * @FilePath: /vue3-element-plus-admin/src/views/info/Category.vue
-->
<template>
    <el-button type="danger" @click="handleCategory('first_category_add')">添加一级分类</el-button>
    <hr class="spacing-hr" />
    <el-row :gutter="20">
        <el-col :span="10">
            <div class="category-list">
                <el-tree
                    :data="infoStore.tree_data"
                    :props="infoStore.defaultProps"
                    @node-click="handleNodeClick"
                    default-expand-all
                    :expand-on-click-node="false"
                    ref="categoryTree"
                    node-key="id"
                >
                    <template #default="{ node, data }">
                        <div class="custom-tree-node">
                            <span>{{ node.label }}</span>
                            <span>
                                <el-button type="danger" round size="small" @click="handleCategory('child_category_add', node)">添加子级</el-button>
                                <el-button
                                    type="success"
                                    round
                                    size="small"
                                    @click="handleCategory(node.level === 1 ? 'parent_category_edit' : 'child_category_edit', node)"
                                    >编辑</el-button
                                >
                                <el-button round size="small" @click="handleCategory('delete_category', node)">删除</el-button>
                            </span>
                        </div>
                    </template>
                </el-tree>
            </div>
        </el-col>
        <el-col :span="14">
            <h4 class="column">{{ config[config.type].title }}</h4>
            <el-form label-with="100px">
                <el-form-item label="父级分类">
                    <el-input v-model.trim="infoStore.parent_category" :disabled="config[config.type].parent_disabled"></el-input>
                </el-form-item>
                <el-form-item label="子级分类" v-if="config[config.type].sub_show">
                    <el-input v-model.trim="infoStore.sub_category" :disabled="config[config.type].sub_disabled"></el-input>
                </el-form-item>
                <el-form-item label="">
                    <el-button type="danger" :loading="infoStore.button_loading" @click="handleSubmit">确定</el-button>
                </el-form-item>
            </el-form>
        </el-col>
    </el-row>
</template>

<script setup>
import { useInfoStore } from '@/store/infoStore';
import { onBeforeMount, reactive, ref } from 'vue';
const infoStore = useInfoStore();
const config = reactive({
    type: 'default',
    default: {
        title: '分类标题',
        parent_disabled: true,
        sub_disabled: true,
        sub_show: true,
        clear: ['parent_category', 'sub_category'],
    },
    first_category_add: {
        title: '添加父级分类',
        parent_disabled: false,
        sub_disabled: true,
        sub_show: false,
        clear: ['parent_category', 'sub_category'],
    },
    child_category_add: {
        title: '添加子级分类',
        parent_disabled: true,
        sub_disabled: false,
        sub_show: true,
        clear: ['sub_category'],
        create: ['parent_category'],
    },
    parent_category_edit: {
        title: '编辑父级分类',
        parent_disabled: false,
        sub_disabled: true,
        sub_show: false,
        create: ['parent_category'],
    },
    child_category_edit: {
        title: '编辑子级分类',
        parent_disabled: true,
        sub_disabled: false,
        sub_show: true,
        create: ['parent_category', 'sub_category'],
    },
});
const categoryTree = ref(null);
const handleNodeClick = (data) => {};
const handleCategory = (type, node_data) => {
    config.type = type === 'delete_category' ? 'default' : type;
    if (type === 'child_category_edit') {
        infoStore.sub_category_data = node_data || null;
        infoStore.parent_category_data = node_data.parent || null;
    } else {
        infoStore.parent_category_data = node_data || null;
    }
    handleInputValue();
    if (type === 'delete_category') {
        handleSubmit();
    }
};
const handleInputValue = () => {
    //获取删除对象
    const clearObject = config[config.type].clear;
    //执行删除动作
    if (clearObject && clearObject.length > 0) {
        clearObject.forEach((item) => {
            infoStore[item] = '';
        });
    }
    //获取创建对象
    const createObject = config[config.type].create;
    //执行还原动作
    if (createObject && createObject.length > 0) {
        createObject.forEach((item) => {
            infoStore[item] = infoStore[`${item}_data`].data.category_name;
        });
    }
};
const handleSubmit = () => {
    switch (config.type) {
        case 'first_category_add':
            infoStore.FIRST_CATEGORY_ADD();
            break;
        case 'child_category_add':
            infoStore.CHILD_CATEGORY_ADD();
            break;
        case 'parent_category_edit':
        case 'child_category_edit':
            infoStore.CATEGORY_EDIT();
            break;
        default:
            infoStore.CATEGORY_DEL(config.type);
            //proxy.$message.error('未知操作');
            break;
    }
};
onBeforeMount(() => {
    infoStore.GET_CATEGORY();
});
</script>

<style lang="scss" scoped>
.spcing-hr {
    border: none;
    border-top: 1px solid #e9e9e9;
    margin: 30px 0;
}
.custom-tree-node {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    padding-left: 8px;
}
:deep(.el-tree-node__content) {
    height: auto;
    button {
        padding: 6px 12px;
        margin: 8px 3px;
        font-size: 12px;
        height: auto;
    }
}

.column {
    height: 44px;
    padding: 0 20px;
    margin-bottom: 30px;
    line-height: 44px;
    border-radius: 6px;
    background-color: #f3f3f3;
}
</style>
