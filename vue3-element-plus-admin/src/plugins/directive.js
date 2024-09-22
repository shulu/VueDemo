//导出
export default (app) => {
    app.directive('has-button', {
        // 创建完成：在绑定元素的 attribute 或事件监听器被应用之前调用
        created() {},
        // 挂载之前：在绑定元素的父组件挂载之前调用
        beforeMount(el, binding, vnode, prevVnode) {},
        // 挂载完成：绑定元素的父组件被挂载时调用
        mounted(el, binding, vnode, prevVnode) {},
        // 更新之前：在包含组件的 VNode 更新之前调用
        beforeUpdate() {},
        // 更新完成：在包含组件的 VNode 及其子组件的 VNode 更新之后调用
        updated() {},
        // 销毁之前：在绑定元素的父组件卸载之前调用
        beforeUnmount() {},
        // 销毁完成：卸载绑定元素的父组件时调用
        unmounted() {},
    });
};
