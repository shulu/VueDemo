<template>
  <div class="user-info-setting">
    <top-modal title="用户设置" />
    <div class="user-info-content">
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
      <div class="qrcode">qrcode</div>
      <div>退出登录</div>
    </div>
  </div>
</template>

<script>
import TopModal from "@/components/TopModal";

export default {
  name: "UserInfo",
  components: {
    TopModal,
  },
  data() {
    return {};
  },
  created() {},
  methods: {},
  computed: {},
};
</script>

<style scoped lang="scss">
.user-info-setting {
  height: 100%;
  .user-info-content {
    margin: auto;
    position: absolute;
    text-align: center;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
}
</style>
