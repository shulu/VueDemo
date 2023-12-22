<!--
 * @Author: shulu
 * @Date: 2023-12-18 15:18:39
 * @LastEditors: shulu
 * @LastEditTime: 2023-12-22 16:51:32
 * @Description: file content
 * @FilePath: /vue3-element-plus-admin/src/views/account/Login.vue
-->
<template>
    <div id="login">
        <div class="form-wrap">
            <ul class="menu-tab">
                <li :class="{ current: data.current_menu === item.type }" v-for="item in data.tab_menu" :key="item.type" @click="toggleMenu(item.type)">
                    {{ item.label }}
                </li>
            </ul>
            <el-form ref="account_form" :model="data.form" :rules="data.form_rules" label-width="80px" label-position="top">
                <el-form-item prop="username">
                    <label for="" class="form-label">用户名</label>
                    <el-input v-model="data.form.username"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <label for="" class="form-label">密码</label>
                    <el-input type="password" v-model="data.form.password"></el-input>
                </el-form-item>
                <el-form-item v-show="data.current_menu == 'register'" prop="passwords">
                    <label for="" class="form-label">确认密码</label>
                    <el-input type="password" v-model="data.form.passwords"></el-input>
                </el-form-item>
                <el-form-item>
                    <label for="" class="form-label">验证码</label>
                    <el-row :gutter="15">
                        <el-col :span="14" style="width: 100%">
                            <el-input v-model="data.form.code"></el-input>
                        </el-col>
                        <el-col :span="10">
                            <el-button
                                type="success"
                                class="el-button-block"
                                @click="handlerGetCode"
                                :disabled="data.code.disabled"
                                :loading="data.code.loading"
                            >
                                {{ data.code.text }}
                            </el-button>
                        </el-col>
                    </el-row>
                </el-form-item>
                <el-form-item>
                    <el-button type="danger" @click="submitForm" class="el-button-block" :disabled="data.submit.disabled" :loading="data.submit.loading">
                        {{ data.current_menu === 'login' ? '登录' : '注册' }}
                    </el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script setup>
import { validate_email, validate_password } from '@/utils/validate';
import sha1 from 'js-sha1';
import { getCurrentInstance, onBeforeMount, reactive } from 'vue';
const validate_name_rules = (rule, value, callback) => {
    if (value == '') {
        callback(new Error('请输入邮箱'));
    } else if (!validate_email) {
        callback(new Error('邮箱格式不正确'));
    } else {
        callback();
    }
};
const validate_password_rules = (rule, value, callback) => {
    if (value == '') {
        callback(new Error('请输入密码'));
    } else if (!validate_password) {
        callback(new Error('请输入>=6并且<=20位的密码,包含数字,字母'));
    } else {
        callback();
    }
};
const validate_passwords_rules = (rule, value, callback) => {
    if (data.current_menu == 'login') {
        callback();
    }
    //获取密码值
    const passwordValue = data.form.password;
    if (value == '') {
        callback(new Error('请输入密码'));
    } else if (!validate_password) {
        callback(new Error('请输入>=6并且<=20位的密码,包含数字,字母'));
    } else if (passwordValue && passwordValue !== value) {
        callback(new Error('两次密码不一致'));
    } else {
        callback();
    }
};
const data = reactive({
    tab_menu: [
        { type: 'login', label: '登录' },
        { type: 'register', label: '注册' },
    ],
    form: {
        username: '',
        password: '',
        passwords: '',
        code: '',
    },
    form_rules: {
        username: [{ validator: validate_name_rules, trigger: 'change' }],
        password: [{ validator: validate_password_rules, trigger: 'change' }],
        passwords: [{ validator: validate_passwords_rules, trigger: 'change' }],
    },
    current_menu: 'login',
    code: {
        disabled: false,
        loading: false,
        text: '获取验证码',
        timer: null,
    },
    submit: {
        disabled: true,
        loading: false,
    },
});
const toggleMenu = (type) => {
    data.current_menu = type;
};
const { proxy } = getCurrentInstance();
const handlerGetCode = async () => {
    data.code.loading = true;
    data.code.text = '发送中';
    const username = data.form.username;
    const password = data.form.password;
    const passwords = data.form.passwords;
    if (!validate_email(username)) {
        proxy.$message({
            message: '用户名不能为空 或者 格式不正确',
            type: 'error',
        });
        return false;
    }
    if (!validate_password(password)) {
        proxy.$message({
            message: '密码不能为空 或者 格式不正确',
            type: 'error',
        });
        return false;
    }
    if (data.current_menu === 'register' && password !== passwords) {
        proxy.$message({
            message: '两次密码不一致',
            type: 'error',
        });
        return false;
    }
    const req = {
        username: username,
        module: data.current_menu,
    };
    try {
        const res = await proxy.$api.GetCode(req);
        if (res.resCode === 1024) {
            proxy.$message.error(res.message);
            return false;
        }
        //倒计时
        countDown();
        data.submit.disabled = false;
        data.code.loading = false;
        data.form.code = res.data;
    } catch (error) {
        data.code.loading = false;
        data.code.text = '获取验证码';
    }
};
const countDown = (time) => {
    let second = time || 60;
    data.code.loading = false;
    data.code.disabled = true;
    data.code.text = `倒计时${second}秒`;
    //判断是否存在定时器,存在先删除
    if (data.code.timer) {
        clearInterval(data.code.timer);
    }
    data.code.timer = setInterval(() => {
        second--;
        data.code.text = `倒计时${second}秒`;
        if (second <= 0) {
            data.code.text = `重新获取`;
            data.code.disabled = false;
            clearInterval(data.code.timer);
        }
    }, 1000);
};
onBeforeMount(() => {
    clearInterval(data.code.timer);
});
const submitForm = () => {
    proxy.$refs.account_form.validate((valid) => {
        if (valid) {
            data.current_menu === 'login' ? login() : register();
        } else {
            alert('表单验证不通过');
            return false;
        }
    });
};
const register = async () => {
    console.log(`output->register`, 1);
    const req = {
        username: data.form.username,
        password: sha1(data.form.password),
        code: data.form.code,
    };
    data.submit.loading = true;
    try {
        const res = await proxy.$api.Register(req);
        proxy.$message({
            message: res.message,
            type: 'success',
        });
        //重置元素
        reset();
    } catch (error) {
        data.submit.loading = false;
    }
};
const reset = () => {
    //重置表单.resetFields是表单自带的方法
    proxy.$refs.account_form.resetFields();
    //切回登录模式
    data.current_menu = 'login';
    //判断定时器,存在先删除
    data.code.timer && clearInterval(data.code.timer);
    //获取验证码重置文本
    data.code.text = '获取验证码';
    //禁用验证码激活
    data.code.disabled = false;
    //禁用提交
    data.submit.disabled = false;
    //禁用加载
    data.submit.loading = false;
};
const login = async () => {
    const req = {
        username: data.form.username,
        password: sha1(data.form.password),
        code: data.form.code,
    };
    data.submit.loading = true;
    try {
        const res = await proxy.$api.Login(req);
        proxy.$message({
            message: res.message,
            type: 'success',
        });
        //重置元素
        reset();
    } catch (error) {
        data.submit.loading = false;
    }
};
</script>

<style lang="scss" scoped>
#login {
    height: 100vh;
    background-color: #344a5f;
}
.form-wrap {
    width: 320px;
    padding-top: 100px;
    margin: auto;
}
.menu-tab {
    text-align: center;
    li {
        display: inline-block;
        padding: 10px 24px;
        margin: 0 10px;
        color: #fff;
        font-size: 14px;
        border-radius: 5px;
        cursor: pointer;
        &.current {
            background-color: rgba(0, 0, 0, 1);
        }
    }
}
.form-label {
    display: block;
    color: #fff;
    font-size: 14px;
    width: 100%;
    text-align: left;
}
</style>
