Vue.component('cat-list', {
    props: ['cats'],
    template:`
        <ul>
        <li v-for="cat in cats">{{cat.name}}</li>
        </ul>
    `
})

app = new Vue({
    el:"#root",
    component: [
        'cat-list'
    ],
    data:{
        greeting:'Hello Vue',
        count:2,
        show:0,
        email:'cats@cats.com',
        cats : [
            {name :'kitkat'},
            {name : 'fish' },
            {name : 'henry' },
            {name : 'bosco'},
            {name : 'melanthios'}
        ],
        newCat: ''
    },
    methods: {
        addKitty: function () {
            this.cats.push({name: this.newCat})
            this.newCat = ''
        }
    },
    filters:{
        capitalize: function(value){
            return value.toUpperCase()
        },
        kitty: function(value){
            return value + 'K'
        }
    },
    computed: {
        kittifyName: function(){
            if (this.newCat.length > 1) {
                return this.newCat + 'y'
                
            }
        }
    }, 
    
})