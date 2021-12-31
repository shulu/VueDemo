<template>
  <div class="order">
    <div class="order-header">
      <div class="choose-order today-order active">今日订单</div>
      <div class="choose-order pre-order">预定订单</div>
      <div class="choose-order history-order">历史订单</div>
      <div class="choose-order comment-order">待评价</div>
    </div>
    <div class="order-list">
      <div class="breakfast">
        <div class="meal-header">
          <p class="left flex">早餐</p>
          <div class="right flex flex-column">
            <p class="total-left">共1条</p>
            <p class="click-right">
              展开
              <img src="@/assets/chevron-down-outline.svg" alt="" />
            </p>
          </div>
        </div>
        <div class="bf-order-list">
          <div class="layer-one">
            <div class="shop">
              <img src="" alt="" class="shop-img" />
              <p>川粤味道</p>
            </div>
            <div class="shop-status">商家备餐中</div>
          </div>
          <div class="layer-two">
            <div class="meal-img">
              <img src="@/assets/cai-120x120.jpeg" alt="" />
            </div>
            <div class="meal-detail">
              <div class="meal-title">七天无骨酸菜鱼+米饭</div>
              <div class="meal-date">12月29日 00:00-19:00</div>
              <div class="meal-address">奥体南路自编9号</div>
            </div>
          </div>
          <div class="layer-three">
            <div class="get">收藏</div>
            <div class="gift">送人</div>
          </div>
        </div>
        <div class="no-more" v-if="orderList.bfOrderList">没有更多订单了~</div>
      </div>
      <div class="lunch">
        <div class="meal-header">
          <p class="left flex">午餐</p>
          <div class="right flex flex-column">
            <p class="total-left">共1条</p>
            <p class="click-right">
              展开
              <img src="@/assets/chevron-forward-outline.svg" alt="" />
            </p>
          </div>
        </div>
        <div class="bf-order-list">
          <div class="layer-one">
            <div class="shop"></div>
            <div class="status"></div>
          </div>
          <div class="layer-two">
            <div class="meal-img"></div>
            <div class="meal-detail">
              <div class="meal-title"></div>
              <div class="meal-date"></div>
              <div class="meal-address"></div>
            </div>
          </div>
          <div class="layer-three">
            <div class="get"></div>
            <div class="gift"></div>
          </div>
        </div>
        <div class="no-more" v-if="orderList.bfOrderList">没有更多订单了~</div>
      </div>
      <div class="dinner">
        <div class="meal-header">
          <p class="left flex">晚餐</p>
          <div class="right flex flex-column">
            <p class="total-left">共1条</p>
            <p class="click-right">
              展开
              <img src="@/assets/chevron-forward-outline.svg" alt="" />
            </p>
          </div>
        </div>
        <div class="bf-order-list">
          <div class="layer-one">
            <div class="shop"></div>
            <div class="status"></div>
          </div>
          <div class="layer-two">
            <div class="meal-img"></div>
            <div class="meal-detail">
              <div class="meal-title"></div>
              <div class="meal-date"></div>
              <div class="meal-address"></div>
            </div>
          </div>
          <div class="layer-three">
            <div class="get"></div>
            <div class="gift"></div>
          </div>
        </div>
        <div class="no-more" v-if="orderList.bfOrderList">没有更多订单了~</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "orderList",
  data() {
    return {
      orderList: [
        { bfOrderList: null },
        { lunchOrderList: null },
        { dinnerOrderList: null },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.order {
  min-height: 500px;
  background-color: #f7f7f5;
  .order-header {
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: left;
    align-items: center;

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
        justify-content: flex-end;
      }

      &:active {
        color: #000;
        text-decoration: underline orangered;
        text-decoration-thickness: 2px;
      }
    }

    .active {
      color: #000;
      text-decoration: underline orange;
      text-decoration-thickness: 2px;
    }
  }
  .order-list {
    min-height: 30px;
    margin-bottom: 30px;
    .breakfast,
    .lunch,
    .dinner {
      background-color: #fff;
      border: 1px solid #fff;
      border-radius: 5px;
      margin: 5px 5px;

      .meal-header {
        min-height: 30px;
        display: flex;
        flex-direction: row;

        .left {
          position: relative;
          font-size: 15px;
          font-weight: 600;
          line-height: 30px;
        }

        .right {
          .total-left {
            font-size: 12px;
            letter-spacing: 3px;
            opacity: 0.5;
          }

          display: flex;
          font-size: 12px;
          justify-content: flex-end;
          align-items: center;
          line-height: 30px;

          .click-right {
            position: relative;
            margin-left: 10px;
            margin-right: 10px;
            color: orange;
          }
        }
        img {
          widows: 10px;
          height: 10px;
          line-height: 30px;
        }
      }
    }

    .bf-order-list {
      .layer-one {
        display: flex;
        flex-direction: row;

        .shop {
          flex: 1;
          justify-content: flex-start;
          display: flex;
          font-size: 10px;
          margin-left: 5px;
          font-weight: 400;
        }

        .shop-status {
          flex: 1;
          display: flex;
          justify-content: flex-end;
          color: orange;
          font-size: 12px;
          margin-right: 15px;
        }
      }

      .layer-two {
        display: flex;
        flex-direction: row;
        max-height: 130px;

        .meal-img {
          display: flex;
          justify-content: flex-start;
          margin: 5px;
          img {
            width: 120px;
            height: 120px;
            border-radius: 15px;
          }
        }

        .meal-detail {
          display: flex;
          flex-direction: column;
          justify-content: left;

          .meal-title {
            display: flex;
            font-size: 14px;
            justify-content: left;
            flex: 1;
          }

          .meal-date {
            display: flex;
            font-size: 10px;
            color: gray;
          }

          .meal-address {
            display: flex;
            font-size: 10px;
            color: gray;
          }
        }
      }

      .layer-three {
        display: flex;
        flex-direction: row;
        .get {
          display: flex;
          flex: 1;
          justify-content: flex-start;

          font-size: 10px;
          color: gray;
        }

        .gift {
          justify-content: flex-end;
          width: 60px;
          height: 20px;
          border: 1px solid orange;
          color: orange;
          border-radius: 5px;
          text-align: center;
          font-size: 10px;
        }
      }
    }
  }
}
</style>
