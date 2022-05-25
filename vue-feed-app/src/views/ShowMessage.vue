<template>
  <div class="show-message">
    <top-modal title="消息通知" />
    <div class="message-list" v-if="messageList.length > 0"></div>
    <div v-else class="no-message">
      <img src="@/assets/message.png" alt="" />
      <p>您暂时还没有消息哦~</p>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

import TopModal from "@/components/TopModal";

export default {
  name: "ShowMessage",
  components: {
    TopModal,
  },
  computed: {
    ...mapState(["messageList"]),
  },
};
</script>

<style scoped lang="scss">
.show-message {
}
.no-message {
  z-index: 9;
  margin: auto;
  position: absolute;
  top: -13em;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 0.5em;

  img {
    height: 10em;
    width: 10em;
  }

  p {
    font-size: 1em;
    color: gray;
    opacity: 0.8;
  }
}
</style>
