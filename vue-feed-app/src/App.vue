<template>
  <div class="container">
    <router-view />
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "App",
  components: {},
  created() {
    this.INIT_ADDRLIST();
    this.randomAddrIndex();
  },
  methods: {
    ...mapActions(["INIT_ADDRLIST", "UPDATE_ADDRINDEX"]),
    randomAddrIndex() {
      let addrLen = this.addrList.length;
      let randIndex = this.randomNum(0, addrLen - 1);
      this.UPDATE_ADDRINDEX(randIndex);
    },
    //生成从minNum到maxNum的随机数
    randomNum(minNum, maxNum) {
      switch (arguments.length) {
        case 1:
          return parseInt(Math.random() * minNum + 1, 10);
        case 2:
          return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
        default:
          return 0;
      }
    },
  },
  computed: {
    ...mapState(["addrList", "addrChoose", "showDeStat"]),
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

.container {
  // max-width: 400px;
  height: 100%;
  background-color: #fff;
  .toper {
    margin: 0 auto;
    padding: 0;
    font-size: 18px;
    text-align: center;
  }
  cursor: pointer;
}

a {
  text-decoration: none;
  text-decoration-color: none;
}
</style>
