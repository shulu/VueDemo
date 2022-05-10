<template>
  <div>
    <div class="header">
      <div class="top-office">
        <img src="@/assets/location-outline.svg" alt="" />
        <p>鄱阳B2F办公点</p>
        <img src="@/assets/chevron-forward-outline.svg" alt="" />
      </div>
      <div class="top-right">
        <img src="@/assets/qr-code-outline.svg" alt="" />
        <img src="@/assets/scan-outline.svg" alt="" />
        <img src="@/assets/notifications-outline.svg" alt="" />
      </div>
    </div>
    <div class="date-pick">
      <ul class="pick-date">
        <li>
          <p>08</p>
          <p>日</p>
        </li>
        <li>
          <p>09</p>
          <p>10</p>
        </li>
        <li class="pick-date-pick">
          <p>10</p>
          <p>二</p>
        </li>
        <li>
          <p>11</p>
          <p>三</p>
        </li>
        <li>
          <p>12</p>
          <p>四</p>
        </li>
        <li>
          <p>13</p>
          <p>五</p>
        </li>
        <li>
          <p>14</p>
          <p>六</p>
        </li>
      </ul>
      <div class="show-more-date">
        <img src="@/assets/chevron-down-outline.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeHeader",
};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 30px;
  line-height: 30px;

  .top-office {
    float: left;
    vertical-align: middle;
    p {
      float: left;
      font-weight: 500;
    }

    img:first-child {
      float: left;
    }

    img {
      float: right;
      height: 20px;
      width: 20px;
      margin: 5px 0;
    }
  }

  .top-right {
    float: right;
    height: 100%;
    margin-right: 5px;
    img {
      margin: 0 4px;
      height: 18px;
    }
  }
}

.date-pick {
  margin: 10px 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-weight: 500;

  ul {
    float: left;
    width: 100%;
    display: flex;
    flex-direction: row;
  }

  li {
    flex: 1;
    list-style: none;
    margin: 0 5px;

    p {
      line-height: 30px;
      text-align: center;
    }
  }

  li:last-child {
    color: lightgray;
  }

  .show-more-date {
    float: right;
    width: 20px;
    margin: 0 5px;
    opacity: 0.3;
  }

  .pick-date-pick {
    p:last-child {
      border-radius: 5px;
      background-color: darkorange;
      color: #fff;
    }
  }
}
</style>
