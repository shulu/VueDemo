import Cookies from 'js-cookie';

const tokenKey = 'tokenAdmin';
const userNameKey = 'username';

export const getToken = () => {
    return Cookies.get(tokenKey);
};

export const setToken = (value) => {
    Cookies.set(tokenKey, value);
};

export const removeToken = () => {
    Cookies.remove(tokenKey);
};

export const setUserName = (value) => {
    Cookies.set(userNameKey, value);
};

export const getUserName = () => {
    return Cookies.get(userNameKey);
};

export const removeUsername = () => {
    Cookies.remove(userNameKey);
};
