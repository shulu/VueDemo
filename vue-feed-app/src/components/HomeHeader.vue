<template>
  <div class="home-header flex flex-column">
    <div class="top flex flex-column">
      <div class="left">
        <img src="@/assets/location-outline.svg" alt="" class="img-location" />
        <p>鄱阳贪玩A栋5F(...</p>
        <img
          src="@/assets/chevron-forward-outline.svg"
          alt=""
          class="img-arrow-right"
        />
      </div>
      <div class="right flex">
        <div class="qrcode">
          <img src="@/assets/qr-code-outline.svg" alt="" />
        </div>
        <div class="scan"><img src="@/assets/scan-outline.svg" alt="" /></div>
        <div class="ringbell">
          <img src="@/assets/notifications-outline.svg" alt="" />
        </div>
      </div>
    </div>
    <div class="date-picker">
      <ul>
        <li>
          <p>26</p>
          <p>日</p>
        </li>
        <li>
          <p>27</p>
          <p>一</p>
        </li>
        <li>
          <p>28</p>
          <p>二</p>
        </li>
        <li>
          <p>29</p>
          <p>三</p>
        </li>
        <li>
          <p>30</p>
          <p>四</p>
        </li>
        <li>
          <p>31</p>
          <p>五</p>
        </li>
        <li>
          <p>01</p>
          <p>六</p>
        </li>
      </ul>
      <img src="@/assets/chevron-down-outline.svg" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeHeader",
};
</script>

<style lang="scss" scoped>
.home-header {
  width: 100%;
  min-height: 100px;
  margin-bottom: 20px;
  border: 1px solid skyblue;

  .top {
    display: flex;
    margin: 5px 5px;
    img {
      width: 18px;
      height: 18px;
    }

    .left {
      display: flex;
      max-width: 175px;
      justify-content: left;
      align-items: center;
      flex-basis: 70%;

      p {
        width: 100px;
        font-size: 12px;
        display: contents;
        font-weight: 600;
        line-height: 22px;
      }

      .img-location {
        width: 18px;
        height: 18px;
      }

      .img-arrow-right {
        width: 12px;
        height: 12px;
      }
    }

    .right {
      display: flex;
      flex-basis: 30%;
      justify-content: flex-end;

      div {
        padding-inline: 0 10px;
      }
    }
  }

  .date-picker {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 18px;

    img {
      display: flex;
      width: 15px;
      height: 15px;
      opacity: 0.2;
      flex: 1;
      flex-basis: 10%;
      justify-content: flex-end;
    }

    ul {
      display: flex;
      flex: 1;
      flex-basis: 90%;
      li {
        list-style: none;
        flex-direction: row;
        padding: 0px 13px;
      }
    }
  }
}
</style>