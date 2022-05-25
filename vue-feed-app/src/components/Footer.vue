<template>
  <div class="footer">
    <div class="footer-wrap">
      <router-link :to="{ name: 'Home' }" class="footer-link">
        <div class="footer-inner">
          <img src="@/assets/restaurant-outline.svg" alt="" />
          <p>首页</p>
        </div>
      </router-link>
      <router-link :to="{ name: 'Order' }" class="footer-link">
        <div class="footer-inner">
          <img src="@/assets/reorder-four-outline.svg" alt="" />
          <p>订单</p>
        </div>
      </router-link>
      <router-link :to="{ name: 'User' }" class="footer-link">
        <div class="footer-inner">
          <img src="@/assets/person-outline.svg" alt="" />
          <p>我的</p>
        </div>
      </router-link>
    </div>
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
  margin-top: 70%;

  .footer-wrap {
    font-size: 12px;
    display: flex;
    text-align: center;
    justify-content: center;
    align-content: center;
    opacity: 0.5;

    .footer-link {
      flex: 1;
    }

    p {
      color: #333;
      font-size: 1.2em;
      font-weight: 500;
    }

    img {
      width: 2rem;
      height: 2rem;
    }
  }
}
</style>
