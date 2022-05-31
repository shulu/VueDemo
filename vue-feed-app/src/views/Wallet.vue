<template>
  <div class="wallet">
    <top-modal title="钱包" />
    <div class="wallet-info">
      <div class="wallet-money">
        <p>0</p>
        <p>余额(元)</p>
      </div>
      <div class="user-record">
        <div>&nbsp;</div>
        <div>消费记录</div>
        <div class="user-record-list">消费记录列表</div>
      </div>
    </div>
  </div>
</template>

<script>
import TopModal from "@/components/TopModal";

export default {
  name: "Wallet",
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
.wallet {
  .wallet-info {
    position: absolute;
    margin: auto;
    top: 3rem;
    left: 0;
    right: 0;
    bottom: 0;
    border: 1px solid red;
    margin: 0 3rem;

    .wallet-money {
      border-top-left-radius: 1rem;
      border-top-right-radius: 1rem;
      height: 5rem;
      background-color: #f37829;
      color: #fff;
      margin: 0 1rem;

      p:first-child {
        padding-top: 1.5rem;
      }

      p {
        font-size: 0.8rem;
        padding-left: 1rem;
      }
    }

    .user-record {
      border: 1px solid blue;
      border-top-left-radius: 0.5rem;
      border-top-right-radius: 0.5rem;
    }
  }
}
</style>
