var app = new Vue({
    el:'#app',
    data: {
        message: 'Hello Vue!'
    }
})
var app2 = new Vue({
    el: '#app-2',
    data: {
        message: '页面加载于'+ new Date().toLocaleString()
    }
})
var app3 = new Vue({
    el: "#app-3",
    data: {
        seen: true
    }
})
var app4 = new Vue({
    el: '#app-4',
    data: {
        todos: [
            { text: '学习 JavaScript' },
            { text: '学习 Vue' },
            { text: '整个牛项目' }
        ]
    }
})
var app5 = new Vue({
    el:'#app-5',
    data:{
        message:'Hellow Vue.js!'
    },
    methods:{
        reverseMessage: function(){
            this.message = this.message.split('').reverse().join('')
        }
    }
})
var app6 = new Vue({
    el: '#app-6',
    data: {
      message: 'Hello Vue!'
    }
})
var app7 = new Vue({
    el:"#app-7",
    data: {
        groceryList: [
            {id:0, text:'蔬菜'},
            {id:1, text:'奶酪'},
            {id:2, text:'随便其它什么人吃的东西'},
        ]
    }
})
var vm = new Vue({
    el: '#example',
    data: {
      message: 'Hello'
    },
    computed: {
      // 计算属性的 getter
      reversedMessage: function () {
        // `this` 指向 vm 实例
        return this.message.split('').reverse().join('')
      }
    }
  })