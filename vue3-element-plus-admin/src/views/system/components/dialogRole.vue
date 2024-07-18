<!--
 * @Author: shulu
 * @Date: 2024-06-16 21:46:18
 * @LastEditors: shulu
 * @LastEditTime: 2024-07-17 15:35:51
 * @Description: file content
 * @FilePath: \vue3-element-plus-admin\src\components\dialogRole.vue
-->
<script setup>
import { MenuListTree } from '@/api';
import { useRoleStore } from '@/store/roleStore';
import BasicForm from '@c/form';

import { defineEmits, defineProps, nextTick, reactive, ref, toRef, watch } from 'vue';
const { form_item, form_rules, ROLE_CREATE, RESET_FORM_DATA } = useRoleStore();
const treeRef = ref(null);
const f_load = toRef(useRoleStore(), 'form_loading');
const form_data = toRef(useRoleStore(), 'form_data');
const role_handler_flag = toRef(useRoleStore(), 'role_handler_flag');
const handlerSubmitForm = () => {
    const halfKeys = treeRef.value.getHalfCheckedKeys();
    const id = treeRef.value.getCheckedKeys().concat(halfKeys);
    form_data.value.menu_id = id;
    ROLE_CREATE();
};
const form_button_group = reactive([
    { label: '确认提交', type: 'danger', key: 'submit' },
    {
        label: '重置',
        key: 'reset',
    },
]);
const datas = reactive({
    tree_data: [],
    check_list: [],
});
const getMenuList = async () => {
    if (datas.tree_data.length != 0) {
        return false;
    }
    const res = await MenuListTree();
    datas.tree_data = res.data.data;
};
const props = defineProps({
    flag: { type: Boolean, default: false },
    width: {
        type: String,
        default: '60%',
    },
    title: {
        type: String,
        default: '消息',
    },
});
const emits = defineEmits(['update:flag']);
const dialog_visible = ref(props.flag);
const dialogClose = () => {
    RESET_FORM_DATA();
    treeRef.value.setCheckedKeys([]);
    emits('update:flag', false);
};
const dialogOpen = async () => {
    try {
        await getMenuList();
        console.log(`output->role_handler_flag`, role_handler_flag.value);
        if (role_handler_flag.value == 'edit') {
            nextTick(() => {
                console.log(`output->treeRef.value`, treeRef.value.getCheckedKeys());
                treeRef.value.setCheckedKeys([]);
                const menu_id = form_data.value.menu_id;
                console.log(`output->menu_id`, menu_id);
                menu_id.length > 0 &&
                    menu_id.forEach((item) => {
                        // console.log(`output->item`, item);
                        //获取node节点
                        const node = treeRef.value.getNode(item);
                        // console.log(`output->node`, node);
                        //判断是否是子节点 半选中状态
                        node && node.isLeaf && treeRef.value.setChecked(node, true);
                    });
            });
            //复制复选框
            treeRef.value.setCheckedKeys(form_data.value.menu_id || []);
        }
    } catch (error) {
        console.log('权限数据请求失败');
    }
};
watch(
    () => props.flag,
    (nval) => {
        dialog_visible.value = nval;
    },
    { immediate: true },
);
const customNodeClass = (data, node) => {
    return `tree-level-${node.level}`;
};
</script>
<template>
    <el-dialog
        v-model="dialog_visible"
        :title="title"
        :width="width"
        :close-on-click-modal="fasle"
        :close-on-press-escape="fasle"
        @close="dialogClose"
        @open="dialogOpen"
    >
        <basic-form
            ref="basisFormRef"
            label-width="100px"
            :form_model="form_data"
            :form_item="form_item"
            :form_rules="form_rules"
            :form_button="form_button_group"
            :field="form_data"
            :form_loading="f_load"
            @submitForm="handlerSubmitForm"
            @resetForm="handlerResetForm"
        >
            <template v-slot:permit>
                <el-tree
                    :data="datas.tree_data"
                    show-checkbox
                    node-key="menu_id"
                    default-expand-all
                    :expand-onclick-node="false"
                    :props="{ label: 'menu_name', class: customNodeClass }"
                    ref="treeRef"
                >
                    <template #default="{ node, data }">
                        <div>
                            <div>
                                <strong>{{ data.menu_name }}-{{ data.menu_id }}</strong>
                            </div>
                            <el-checkbox-group v-model="datas.check_list">
                                <el-checkbox v-for="item in data.menu_func" :key="item.value" label="item.value">{{ item.label }}</el-checkbox>
                            </el-checkbox-group>
                        </div>
                    </template>
                </el-tree>
            </template>
        </basic-form>
    </el-dialog>
</template>

<style lang="scss" scoped>
:deep(.tree-level-2 > .el-tree-node__children) {
    display: flex;
    flex-wrap: wrap;
}
</style>
