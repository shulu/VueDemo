import instance from '@/utils/request';

/**
 *菜单列表
 */
export const MenuList = (data) => {
    return instance.request({
        method: 'post',
        url: '/menu/listsTree/',
        data,
    });
};
