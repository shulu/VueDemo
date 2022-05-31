<template>
  <div class="wallet">
    <top-modal title="钱包" />
    <div class="wallet-info">钱包</div>
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
    text-align: center;
    border: 1px solid red;
    margin: 0 4rem;
  }
}
</style>
