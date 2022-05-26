<template>
  <div class="order-header">
      <div class="choose-order today-order" @click="pickList('today-order')">
        <div class="today-order-content">
          <p :class="{ active: listPick === 'today-order' }">今日订单</p>
          <div v-if="listPick === 'today-order'" class="active-underline">
            &nbsp;
          </div>
        </div>
      </div>
      <div class="choose-order pre-order" @click="pickList('pre-order')">
        <div class="today-order-content">
          <p :class="{ active: listPick === 'pre-order' }">预定订单</p>
          <div v-if="listPick === 'pre-order'" class="active-underline">
            &nbsp;
          </div>
        </div>
      </div>
      <div
        class="choose-order history-order"
        @click="pickList('history-order')"
      >
        <div class="today-order-content">
          <p :class="{ active: listPick === 'history-order' }">历史订单</p>
          <div v-if="listPick === 'history-order'" class="active-underline">
            &nbsp;
          </div>
        </div>
      </div>
      <div
        class="choose-order comment-order"
        @click="pickList('comment-order')"
      >
        <div class="today-order-content">
          <p :class="{ active: listPick === 'comment-order' }">待评价</p>
          <div v-if="listPick === 'comment-order'" class="active-underline">
            &nbsp;
          </div>
        </div>
      </div>
  </div>
  <order-list-modal />
  <Footer />
</template>

<script>
import OrderListModal from "@/components/OrderListModal";
import Footer from "@/components/Footer.vue";

export default {
  name: "orderList",
  components: {
    OrderListModal,
    Footer,
  },
  data() {
    return {
      listPick: "today-order",
    };
  },
  methods: {
    pickList(pick) {
      this.listPick = pick;
    },
  },
};
</script>

<style lang="scss" scoped>
  .order-header {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: #fff;
    z-index: 11;

    .choose-order {
      margin: 10px 10px;
      font-size: 15px;
      color: gray;

      &:first-child {
        flex: 1;
        flex-basis: 20%;
      }

      &:nth-child(2) {
        flex: 2;
        flex-basis: 20%;
      }

      &:nth-child(3) {
        flex: 3;
        flex-basis: 20%;
      }

      &:nth-child(4) {
        flex-basis: 20%;
      }
    }

    .today-order,
    .pre-order,
    .history-order,
    .comment-order {
      display: flex;
      text-align: center;
      justify-content: center;
      align-items: center;

      .today-order-content {
        width: 4rem;
      }
    }
  }

  .active {
    color: #000;
    font-size: 1rem;
    font-weight: 500;
  }

  .active-underline {
    content: "";
    min-height: 0.2rem;
    height: 0.2rem;
    background-color: #d2691e;
    color: #000;
    width: 100%;
    margin-top: 0.2rem;
  }
</style>
