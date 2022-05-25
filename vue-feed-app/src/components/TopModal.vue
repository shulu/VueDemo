<template>
  <div class="top">
    <router-link :to="{ name: 'Home' }">
      <img src="@/assets/arrow-back-outline.svg" alt="" />
    </router-link>
    <p>{{ title }}</p>
  </div>
</template>

<script>
export default {
  name: "TopModal",
  props: ["title"],
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
  }
}
</style>