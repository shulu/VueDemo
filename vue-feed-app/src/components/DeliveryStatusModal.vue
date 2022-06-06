<template>
  <div class="delivery-container">
    <div class="delivery">
      <div class="head">配送进度</div>
      <div class="prepare flex">
        <div class="delivery-left">
          <img class="delivery-stat" src="@/assets/delivery-ing.png" alt="" />
          <div>备餐中</div>
        </div>
        <div class="delivery-datetime">2022-05-26 22:00</div>
      </div>
      <div class="delivery-stat-load load-active">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 140">
          <path
            fill-rule="evenodd"
            d="M20 100a20 20 0 1 1 0 40 20 20 0 0 1 0-40zm0-50a20 20 0 1 1 0 40 20 20 0 0 1 0-40zm0-50a20 20 0 1 1 0 40 20 20 0 0 1 0-40z"
          />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 140">
          <path
            fill-rule="evenodd"
            d="M20 100a20 20 0 1 1 0 40 20 20 0 0 1 0-40zm0-50a20 20 0 1 1 0 40 20 20 0 0 1 0-40zm0-50a20 20 0 1 1 0 40 20 20 0 0 1 0-40z"
          />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 140">
          <path
            fill-rule="evenodd"
            d="M20 100a20 20 0 1 1 0 40 20 20 0 0 1 0-40zm0-50a20 20 0 1 1 0 40 20 20 0 0 1 0-40zm0-50a20 20 0 1 1 0 40 20 20 0 0 1 0-40z"
          />
        </svg>
      </div>
      <div class="start flex">
        <div class="delivery-left">
          <img class="delivery-stat" src="@/assets/delivery-none.png" alt="" />
          <div>商家已出发</div>
        </div>
        <div class="delivery-datetime">2022-05-26 22:00</div>
      </div>
      <div class="delivery-stat-load load-no-active">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 140">
          <path
            fill-rule="evenodd"
            d="M20 100a20 20 0 1 1 0 40 20 20 0 0 1 0-40zm0-50a20 20 0 1 1 0 40 20 20 0 0 1 0-40zm0-50a20 20 0 1 1 0 40 20 20 0 0 1 0-40z"
          />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 140">
          <path
            fill-rule="evenodd"
            d="M20 100a20 20 0 1 1 0 40 20 20 0 0 1 0-40zm0-50a20 20 0 1 1 0 40 20 20 0 0 1 0-40zm0-50a20 20 0 1 1 0 40 20 20 0 0 1 0-40z"
          />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 140">
          <path
            fill-rule="evenodd"
            d="M20 100a20 20 0 1 1 0 40 20 20 0 0 1 0-40zm0-50a20 20 0 1 1 0 40 20 20 0 0 1 0-40zm0-50a20 20 0 1 1 0 40 20 20 0 0 1 0-40z"
          />
        </svg>
      </div>
      <div class="pre-supply flex">
        <div class="delivery-left">
          <img class="delivery-stat" src="@/assets/delivery-none.png" alt="" />
          <div>准备补货</div>
        </div>
        <div class="delivery-datetime">2022-05-26 22:00</div>
      </div>
      <div class="delivery-stat-load load-no-active">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 140">
          <path
            fill-rule="evenodd"
            d="M20 100a20 20 0 1 1 0 40 20 20 0 0 1 0-40zm0-50a20 20 0 1 1 0 40 20 20 0 0 1 0-40zm0-50a20 20 0 1 1 0 40 20 20 0 0 1 0-40z"
          />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 140">
          <path
            fill-rule="evenodd"
            d="M20 100a20 20 0 1 1 0 40 20 20 0 0 1 0-40zm0-50a20 20 0 1 1 0 40 20 20 0 0 1 0-40zm0-50a20 20 0 1 1 0 40 20 20 0 0 1 0-40z"
          />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 140">
          <path
            fill-rule="evenodd"
            d="M20 100a20 20 0 1 1 0 40 20 20 0 0 1 0-40zm0-50a20 20 0 1 1 0 40 20 20 0 0 1 0-40zm0-50a20 20 0 1 1 0 40 20 20 0 0 1 0-40z"
          />
        </svg>
      </div>
      <div class="supplying flex">
        <div class="delivery-left">
          <img class="delivery-stat" src="@/assets/delivery-none.png" alt="" />
          <div>补货中</div>
        </div>
        <div class="delivery-datetime">2022-05-26 22:00</div>
      </div>
      <div class="delivery-stat-load load-no-active">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 140">
          <path
            fill-rule="evenodd"
            d="M20 100a20 20 0 1 1 0 40 20 20 0 0 1 0-40zm0-50a20 20 0 1 1 0 40 20 20 0 0 1 0-40zm0-50a20 20 0 1 1 0 40 20 20 0 0 1 0-40z"
          />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 140">
          <path
            fill-rule="evenodd"
            d="M20 100a20 20 0 1 1 0 40 20 20 0 0 1 0-40zm0-50a20 20 0 1 1 0 40 20 20 0 0 1 0-40zm0-50a20 20 0 1 1 0 40 20 20 0 0 1 0-40z"
          />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 140">
          <path
            fill-rule="evenodd"
            d="M20 100a20 20 0 1 1 0 40 20 20 0 0 1 0-40zm0-50a20 20 0 1 1 0 40 20 20 0 0 1 0-40zm0-50a20 20 0 1 1 0 40 20 20 0 0 1 0-40z"
          />
        </svg>
      </div>
      <div class="done-supply flex">
        <div class="delivery-left">
          <img class="delivery-stat" src="@/assets/delivery-none.png" alt="" />
          <div>补货完成</div>
        </div>
        <div class="delivery-datetime">2022-05-26 22:00</div>
      </div>
      <div class="foot" @click="isShow">我知道了</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "DeliveryStatusModal",
  methods: {
    isShow() {
      this.$emit("emitEvent");
    },
  },
  components: {},
};
</script>
<style lang="scss" scoped>
.delivery-container {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 12;
  background-color: rgba($color: #000000, $alpha: 0.5);
  color: #fff;

  .delivery {
    width: 30rem;
    height: 40rem;
    position: absolute;
    margin: auto;
    top: -15rem;
    left: 0;
    right: 0;
    bottom: 0;
    text-align: center;
    background-color: #fff;
    color: #000;
    border: 1px solid #fff;
    border-radius: 1rem;
    z-index: 12;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-content: center;

    .head {
      height: 5rem;
      line-height: 5rem;
      font-size: 1.7rem;
      font-weight: 500;
    }

    .flex {
      display: flex;
      justify-content: space-between;
      margin: 0 1.5rem;
      height: 1rem;
    }

    .delivery-left {
      height: 0.8rem;
      img {
        float: left;
      }
      div {
        font-size: 1.4rem;
        margin-left: 1rem;
        line-height: 1rem;
        float: right;
      }
    }

    .delivery-stat {
      width: 1rem;
    }

    .delivery-stat-load {
      width: 0.2rem;
      margin-left: 1.8rem;
    }

    .load-active {
      fill: #f37626;
    }

    .load-no-active {
      fill: gray;
    }

    .delivery-datetime {
      color: gray;
      font-size: 0.6rem;
      line-height: 1rem;
    }

    .foot {
      height: 4rem;
      line-height: 4rem;
      font-size: 1.5rem;
      color: #fff;
      font-weight: 500;
      margin: 1rem 1rem;
      background-color: #f37626;
      bottom: 0;
      border-radius: 0.6rem;
    }
  }
}
</style>
