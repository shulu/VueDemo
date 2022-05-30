<template>
  <div class="show-qr">
    <top-modal title="用户设置" />
    <div class="user-info">
      <div class="user-info-set">
        <div>set avatar</div>
        <div>nickname</div>
        <div>company</div>
      </div>
      <div class="user-info-account">
        <div>username</div>
        <div>password</div>
        <div>email</div>
        <div>phone</div>
      </div>
    </div>
    <div class="qrcode">qrcode</div>
    <div>退出登录</div>
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
