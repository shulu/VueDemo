<template>
  <div class="pick-office">
    <top-modal title="选择取餐地址" />
    <ul class="addr-list">
      <li
        v-for="(item, index) in addrList"
        :key="index"
        :class="{
          selected: index === addrChoose,
        }"
        @click="changeAddr(index)"
      >
        {{ item }}
        <img src="@/assets/checkmark-circle-sharp.svg" alt="" />
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import TopModal from "@/components/TopModal";

export default {
  name: "PickOffice",
  components: {
    TopModal,
  },
  methods: {
    ...mapActions(["UPDATE_ADDRINDEX"]),
    changeAddr(addrIndex) {
      this.UPDATE_ADDRINDEX(addrIndex);
    },
  },
  computed: {
    ...mapState(["addrList", "addrChoose"]),
  },
};
</script>

<style scoped lang="scss">
.pick-office {
  height: 100%;
  padding: 0 2em;

  .addr-list {
    margin-top: 3em;
    list-style: none;

    li {
      height: 4em;
      line-height: 4em;
      border-bottom: 1px solid lightgray;
    }

    img {
      display: none;
    }

    .selected {
      img {
        height: 1em;
        width: 1em;
        margin: 1.5em 0;
        display: inline;
        float: right;
      }
    }
  }
}
</style>
