export function validate_email(value) {
    let regEmai = /^([a-zA-Z]|[0-9]|(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4}))$/;
    return regEmai.test(value);
}

export function validate_password(value) {
    let regPassword = /^(?!\D+$)(?![^a-zA-Z+$])\S{6,20}$/;
    return regPassword.test(value);
}

export function validate_code(value) {
    let regCode = /^[a-z0-9](6)$/;
    return regCode.test(value);
}

export function validatePass(rule, value, callback) {
    if (value === '') {
        callback(new Error('请输入密码'));
    } else {
        if (!validate_password(value)) {
            callback(new Error('密码>=6并且<=20位的密码且包含字符数字'));
        }
        callback();
    }
}

export function validateUsername(rule, value, callback) {
    if (value === '') {
        callback(new Error('请输入用户名'));
    } else {
        if (!validate_email(value)) {
            callback(new Error('用户邮箱格式不正确'));
        }
        callback();
    }
}
