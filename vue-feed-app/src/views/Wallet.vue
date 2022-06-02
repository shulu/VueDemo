<template>
  <div class="wallet">
    <top-modal title="钱包" />
    <div class="wallet-info">
      <div class="wallet-money">
        <p>0</p>
        <p>余额(元)</p>
      </div>
      <record-list-modal :recordList="recordList" />
    </div>
  </div>
</template>

<script>
import TopModal from "@/components/TopModal";
import RecordListModal from "@/components/RecordListModal";

export default {
  name: "Wallet",
  components: {
    TopModal,
    RecordListModal,
  },
  data() {
    return {
      recordList: [],
    };
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
    margin: 0 2rem;

    .wallet-money {
      border-top-left-radius: 1rem;
      border-top-right-radius: 1rem;
      height: 6rem;
      background-color: #f37829;
      color: #fff;
      margin: 0 1rem;

      p:first-child {
        padding-top: 1.5rem;
        font-weight: 600;
        font-size: 1.5rem;
      }

      p:last-child {
        font-size: 0.9rem;
        opacity: 0.8;
      }

      p {
        padding-left: 1rem;
      }
    }
  }
}
</style>
