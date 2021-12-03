const app = Vue.createApp({
  data () {
    return {
      "first_name": "tim",
      "last_name": "will",
      "email": "1@qq.com",
      "gender": "male",
      "avatar": "https://randomuser.me/api/portraits/men/10.jpg"
    }
  },
  methods: {
    async getUser () {
      const res = await fetch('https://randomuser.me/api')
      const { results } = await res.json()
      this.first_name = results[0].name.first
      this.last_name = results[0].name.last
      this.email = results[0].email
      this.gender = results[0].gender
      this.avatar = results[0].picture.large
    }
  }
}).mount("#app");