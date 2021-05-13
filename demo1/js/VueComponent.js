Vue.component('todo-item', {
    // todo-item 组件现在接受一个
    // "prop"，类似于一个自定义 attribute。
    // 这个 prop 名为 todo。  
    props:['todo'],
    template:'<li>{{todo.text}}</li>'
  })