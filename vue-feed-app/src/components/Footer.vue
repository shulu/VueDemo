<template>
  <div class="footer flex flex-column">
    <router-link :to="{ name: 'Home' }" class="footer-link">
      <div class="footer-inner">
        <img src="@/assets/restaurant-outline.svg" alt="" />
        <p>首页</p>
      </div>
    </router-link>
    <router-link :to="{ name: 'Home' }" class="footer-link">
      <div class="footer-inner">
        <img src="@/assets/reorder-four-outline.svg" alt="" />
        <p>订单</p>
      </div>
    </router-link>
    <router-link :to="{ name: 'Home' }" class="footer-link">
      <div class="footer-inner">
        <img src="@/assets/person-outline.svg" alt="" />
        <p>我的</p>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.footer {
  font-size: 12px;
  display: flex;
  text-align: center;
  justify-content: center;
  align-content: center;

  .footer-link {
    padding: 0px 45px;
  }

  .footer-inner {
    text-decoration: none;
    cursor: pointer;
  }

  img {
    width: 32px;
    height: 32px;
  }
}
</style>
