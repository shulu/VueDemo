import instance from '@/utils/request';
/**
 * 注册
 */
export const Register = (data) => {
    return instance.request({
        method: 'post',
        url: '/register/',
        data,
    });
};
/**
 * 登录
 */
export const Login = (data) => {
    return instance.request({
        method: 'post',
        url: '/login/',
        data,
    });
};
