<template>
  <div class="top">
    <img
      src="@/assets/arrow-back-outline.svg"
      alt=""
      @click="this.$router.go(-1)"
    />
    <p>{{ title }}</p>
    <div v-if="showSwitch" class="manual-switch">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="48"
        width="48"
        :class="{ off: switchStats == 'off', on: switchStats == 'on' }"
        @click="doSwitch()"
      >
        <path :d="d" />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopModal",
  props: ["title", "showSwitch", "switchStats", "d"],
  methods: {
    doSwitch() {
      this.$emit("emitEvent");
    },
  },
};
</script>

<style lang="scss" scoped>
.top {
  position: absolute;
  height: 3em;
  line-height: 3em;
  text-align: center;
  top: 0;
  right: 2em;
  left: 2em;
  vertical-align: middle;
  z-index: 10;

  img {
    float: left;
    height: 1.5em;
    width: 1.5em;
    margin: 0.5em 0;
  }

  p {
    font-size: 1.2em;
    font-weight: 600;
    display: inline;
  }

  .manual-switch {
    float: right;

    .on {
      width: 3rem;
      height: 2.2rem;
      fill: #f37626;
    }

    .off {
      width: 3rem;
      height: 2.2rem;
      fill: lightgray;
    }
  }
}
</style>
