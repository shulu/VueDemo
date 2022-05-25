<template>
  <div class="user flex flex-column">
    <div class="flex user-header">
      <div class="user-info flex">
        <div class="user-avatar">
          <img src="@/assets/cai-120x120.jpeg" alt="" />
        </div>
        <div class="user-profile">
          <p class="user-name">ufan_e1568703123803></p>
          <p class="user-company">XXXXXXXXXXXX</p>
        </div>
      </div>
      <div class="qr-code">
        <img src="@/assets/qr-code-outline.svg" alt="" />
      </div>
    </div>
    <div class="user-pay-account">
      <div class="account-header">
        <img src="@/assets/wallet-outline.svg" alt="" />
        <p>账户(元)</p>
      </div>
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
    <div class="discount">
      <div class="left">
        <img src="@/assets/ticket-outline.svg" alt="" />
        <p>优惠券</p>
      </div>
      <div class="right">
        <img src="@/assets/chevron-forward-outline.svg" alt="" />
      </div>
    </div>
    <div class="user-taste">
      <div class="choose-taste left">
        <div class="left">
          <img src="@/assets/insert_emoticon_black_24dp.svg" alt="" />
          <p>口味偏好</p>
        </div>
        <div class="right">
          <img src="@/assets/chevron-forward-outline.svg" alt="" />
        </div>
      </div>
      <div class="order-tips right">
        <div class="left">
          <img src="@/assets/notifications-outline.svg" alt="" />
          <p>订餐微信提示</p>
        </div>
        <div class="right">
          <img src="@/assets/toggle_on_black_24dp.svg" alt="" />
        </div>
      </div>
    </div>
    <div class="about-us">
      <div class="left">
        <img src="@/assets/information-circle-outline.svg" alt="" />
        <p>关于我们</p>
      </div>
      <div class="right">
        <img src="@/assets/chevron-forward-outline.svg" alt="" />
      </div>
    </div>
  </div>
  <Footer />
</template>

<script>
import Footer from "@/components/Footer.vue";

export default {
  name: "User",
  components: {
    Footer,
  },
};
</script>

<style lang="scss" scoped>
.user {
  min-height: 50vh;
  background-color: #f7f7f5;
  padding-top: 10px;
  .user-header {
    width: 100%;
    display: flex;
    align-items: center;

    .user-info {
      display: flex;
      justify-content: left;
      align-items: center;

      div {
        display: inline-block;
      }
      .user-avatar {
        margin-left: 10px;
        img {
          width: 80px;
          height: 80px;
          border-radius: 50%;
        }
      }

      .user-profile {
        margin-left: 10px;
        .user-name {
          font-size: 15px;
        }
        .user-company {
          font-size: 10px;
          opacity: 0.5;
        }
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

    .account-header {
      display: flex;

      img {
        width: 20px;
        height: 20px;
      }

      p {
        display: inline-block;
        line-height: 20px;
      }
    }

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

  .discount,
  .about-us {
    height: 45px;
    border: 1px dashed red;
    margin: 10px 10px 10px 10px;
    background-color: #fff;
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    align-items: center;

    img {
      width: 20px;
      height: 20px;
      margin-left: 10px;
    }

    .left {
      display: flex;
      flex: 1;
      p {
        margin-left: 10px;
      }
    }
    .right {
      justify-content: flex-end;
      margin-right: 10px;
    }
  }

  .user-taste {
    height: 85px;
    border: 1px dashed red;
    margin: 10px 10px 10px 10px;
    background-color: #fff;
    border-radius: 5px;
    display: flex;
    flex-direction: column;

    img {
      width: 20px;
      height: 20px;
      margin-left: 10px;
    }

    p {
      display: inline-block;
    }

    .choose-taste,
    .order-tips {
      height: 50%;
      display: flex;
      justify-content: center;
      align-items: center;

      .left,
      .right {
        display: flex;
        flex-direction: row;
        flex-basis: 50%;
      }
      .right {
        justify-content: flex-end;
        margin-right: 10px;
      }

      p {
        margin-left: 10px;
      }
    }
  }
}
</style>
