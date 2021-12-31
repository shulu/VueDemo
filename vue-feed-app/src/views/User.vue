<template>
  <div class="user flex flex-column">
    <div class="flex user-header">
      <div class="user-avatar flex">
        <img src="@/assets/cai-120x120.jpeg" alt="" />
      </div>
      <div class="user-info">
        <p class="user-name">ufan_e1568703123803></p>
        <p class="user-company">XXXXXXXXXXXX</p>
      </div>
      <div class="qr-code">
        <img src="@/assets/qr-code-outline.svg" alt="" />
      </div>
    </div>
    <div class="user-pay-account">
      <div class="account-header">账户(元)</div>
      <div class="pocket">
        <div class="pocket-money">
          <p class="pocket-num">0</p>
          <p class="pocket-txt">钱包</p>
        </div>
        |
        <div class="pocket-breakfast">
          <p class="pocket-num">8</p>
          <p class="pocket-txt">早</p>
        </div>
        |
        <div class="pocket-lunch">
          <p class="pocket-num">20</p>
          <p class="pocket-txt">中</p>
        </div>
        |
        <div class="pocket-dinner">
          <p class="pocket-num">20</p>
          <p class="pocket-txt">晚</p>
        </div>
      </div>
    </div>
    <div class="discount"></div>
    <div class="user-taste">
      <div class="choose-taste"></div>
      <div class="order-tips"></div>
    </div>
    <div class="about-us"></div>
  </div>
</template>


<style lang="scss" scoped>
.user {
  width: 100%;
  height: 30vh;
  background-color: #f7f7f5;
  padding-top: 10px;
  .user-header {
    width: 100%;
    display: flex;
    align-items: center;
    .user-avatar {
      justify-content: flex-start;
      margin-left: 10px;
      img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
      }
    }

    .user-info {
      flex: 2;
      justify-content: center;
      margin: 0 10px 0 10px;
      .user-name {
        font-size: 15px;
      }
      .user-company {
        font-size: 10px;
        opacity: 0.5;
      }
    }

    .qr-code {
      justify-content: flex-end;
      margin-right: 10px;
      img {
        width: 30px;
        height: 30px;
      }
    }
  }

  .user-pay-account {
    display: flex;
    flex-direction: column;
    margin: 10px 10px 10px 10px;
    border: 1px dashed red;
    border-radius: 5px;
    padding: 10px;
    background-color: #fff;

    .pocket-money {
      font-size: 13px;
    }

    .pocket {
      display: flex;
      flex-direction: row;
      text-align: center;
      justify-content: center;
      align-items: center;
      gap: 10%;

      .pocket-num {
        font-size: 18px;
        font-weight: 600;
      }

      .pocket-txt {
        font-size: 8px;
        opacity: 0.5;
      }
    }
  }
}
</style>