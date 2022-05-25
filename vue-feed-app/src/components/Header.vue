<template>
  <div class="header">
    <div class="top-office">
      <router-link :to="{ name: 'PickOffice' }">
        <img src="@/assets/location-outline.svg" alt="" />
        <p>{{ nowAddr }}</p>
        <img src="@/assets/chevron-forward-outline.svg" alt="" />
      </router-link>
    </div>
    <div class="top-right">
      <router-link :to="{ name: 'ShowQR' }">
        <img src="@/assets/qr-code-outline.svg" alt="" />
      </router-link>
      <img src="@/assets/scan-outline.svg" alt="" />
      <router-link :to="{ name: 'ShowMessage' }">
        <img src="@/assets/notifications-outline.svg" alt="" />
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Header",
  data() {
    return {
      nowAddr: null,
    };
  },
  created() {
    this.setAddr();
  },
  methods: {
    setAddr() {
      this.nowAddr = this.addrList[this.addrChoose];
    },
  },
  computed: {
    ...mapState(["addrList", "addrChoose"]),
  },
};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 30px;
  line-height: 30px;

  .top-office {
    float: left;
    vertical-align: middle;
    p {
      float: left;
      font-weight: 500;
      text-decoration: none;
      color: #000;
    }

    img:first-child {
      float: left;
    }

    img {
      float: right;
      height: 20px;
      width: 20px;
      margin: 5px 0;
    }
  }

  .top-right {
    float: right;
    height: 100%;
    margin-right: 5px;
    img {
      margin: 0 4px;
      height: 18px;
    }
  }
}
</style>