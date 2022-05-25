<template>
  <div class="show-qr">
    <top-modal title="二维码" />
    <div class="qr-content">
      <div class="avatar">
        <img src="https://i.pravatar.cc/300?u=fake@pravatar.com" alt="" />
      </div>
      <div class="uid">ufan_O1653011603989</div>
      <div class="username">贪玩游戏-贪玩江西总公司技术部-舒露</div>
      <div class="qrcode">
        <!-- <img src="@/assets/qr_img.png" alt="" /> -->
        <img :src="qrLink" alt="" />
      </div>
      <div class="refresh-qr">
        <img @click="refreshQR()" src="@/assets/refresh-outline.svg" alt="" />
        <p>轻 触 刷 新</p>
      </div>
      <div class="tips-f">二维码是您取餐、消费时的身份凭证</div>
      <div class="tips-s">仅供机器识别，切勿出示于他人。</div>
    </div>
  </div>
</template>

<script>
import TopModal from "@/components/TopModal";

export default {
  name: "ShowQR",
  components: {
    TopModal,
  },
  data() {
    return {
      qrLink: "",
    };
  },
  created() {
    this.initQR();
  },
  methods: {
    initQR() {
      let nowTime = this.getTimeStamp();
      this.qrLink =
        "https://api.qrserver.com/v1/create-qr-code/?size=300x300&color=006400&data=" +
        nowTime;
    },
    refreshQR() {
      let nowTime = this.getTimeStamp();
      this.qrLink =
        "https://api.qrserver.com/v1/create-qr-code/?size=300x300&color=006400&data=" +
        nowTime;
    },
    getTimeStamp() {
      var date = Date.parse(new Date());
      date = date / 1000;
      return date;
    },
  },
  computed: {},
};
</script>

<style scoped lang="scss">
.show-qr {
  height: 100%;
  padding: 0 2em;

  .qr-content {
    z-index: 9;
    margin: auto;
    position: absolute;
    top: -4em;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 0.5em;

    .avatar {
      img {
        width: 6em;
        height: 6em;
        border-radius: 3em;
      }
    }

    .uid {
      font-size: 1.3em;
      font-weight: 800;
      color: #ff7f50;
    }

    .username {
      font-size: 0.85em;
    }

    .qrcode {
      margin: 15px 0;
      img {
        width: 12em;
        height: 12em;
      }
    }

    .refresh-qr {
      height: 2em;
      img {
        display: inline;
        float: left;
        width: 1em;
        height: 1em;
        margin: 0.3em 0.3em;
      }
      p {
        display: inline;
        font-size: 0.9em;
        color: gray;
        font-weight: 900;
        opacity: 0.6;
        line-height: 2em;
      }
    }

    .tips-f,
    .tips-s {
      font-size: 0.1em;
      color: gray;
      font-weight: 500;
      opacity: 0.6;
    }
  }
}
</style>
