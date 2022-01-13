<template>
  <div class="date-order">
    <div class="breakfast feed-layer-first flex">
      <div class="layer-one flex flex-column">
        <p class="ch">早餐</p>
        <p class="en">Breakfast</p>
        <p class="order-tips">已截止</p>
      </div>
      <div class="layer-two">
        <p>元气的一天从早餐开始!</p>
      </div>
      <div class="layer-three">
        <p class="order-button">已预订</p>
      </div>
    </div>
    <div class="lunch feed-layer-first flex">
      <div class="layer-one flex flex-column">
        <p class="ch">午餐</p>
        <p class="en">Lunch</p>
        <p class="order-tips">已截止</p>
      </div>
      <div class="layer-two">
        <p>再忙也要记得吃午餐哦~</p>
      </div>
      <div class="layer-three">
        <p class="order-button">已预订</p>
      </div>
    </div>
    <div class="dinner feed-layer-first flex">
      <div class="layer-one flex flex-column">
        <p class="ch">晚餐</p>
        <p class="en">Dinner</p>
        <p class="order-tips">已截止</p>
      </div>
      <div class="layer-two">
        <p>一天的晚餐请整顿好的!</p>
      </div>
      <div class="layer-three">
        <p class="order-button">已预订</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DateOrder",
};
</script>

<style lang="scss" scoped>
.date-order {
  min-height: 50vh;
  .feed-layer-first {
    min-height: 10vh;
    margin: 10px;
    border: 1px solid red;
    border-radius: 20px;
    box-shadow: 5px 5px 1px 1px rgba(0, 0, 0, 0.15);
  }
  //   .breakfast {
  //     background-color: green;
  //   }

  //   .lunch {
  //     background-color: blue;
  //   }

  //   .dinner {
  //     background-color: red;
  //   }

  .layer-one {
    margin: 10px 0 0 10px;
    display: flex;

    .ch {
      flex: 1;
      font-size: 15px;
    }
    .en {
      flex: 8;
      font-size: 12px;
      font-weight: 400;
      text-align: left;
      padding-top: 4px;
    }
    .order-tips {
      font-size: 12px;
      margin: 5px 10px;
      color: gray;
      justify-content: flex-end;
    }
  }

  .layer-two {
    margin: 0px 10px;
    font-size: 12px;
    font-weight: 300;
  }

  .layer-three {
    .order-button {
      position: relative;
      font-size: 12px;
      border: 1px solid orange;
      border-radius: 5px;
      margin-right: 10px;
      left: 78%;
      color: orange;
      max-width: 65px;
      text-align: end;
    }
  }
}
</style>
