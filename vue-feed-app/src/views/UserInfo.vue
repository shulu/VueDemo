<template>
  <div class="user-info-setting">
    <top-modal title="用户设置" />
    <div class="user-info-content">
      <div class="user-info-set">
        <div class="avatar">
          <div class="show-avatar">
            <img src="https://fakeimg.pl/100x100/" alt="" />
          </div>
          <div class="edit-avatar">
            <img src="@/assets/create-outline.svg" alt="" />
          </div>
        </div>
        <div class="info">
          <div class="title">昵称</div>
          <div class="content">
            <p>ufan_O1653011603989</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="ionicon"
              viewBox="0 0 512 512"
            >
              <title>Chevron Forward</title>
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="48"
                d="M184 112l144 144-144 144"
              />
            </svg>
          </div>
        </div>
        <div class="info">
          <div class="title">所属公司</div>
          <div class="content">
            <p>贪玩游戏/贪玩江西总公司技术部/XX</p>
          </div>
        </div>
      </div>
      <div class="user-info-account">
        <div class="info">
          <div class="title">账号</div>
          <div class="content">
            <p>ufan_F1653011603991</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="ionicon"
              viewBox="0 0 512 512"
            >
              <title>Chevron Forward</title>
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="48"
                d="M184 112l144 144-144 144"
              />
            </svg>
          </div>
        </div>
        <div class="info">
          <div class="title">密码</div>
          <div class="content">
            <p>修改密码</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="ionicon"
              viewBox="0 0 512 512"
            >
              <title>Chevron Forward</title>
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="48"
                d="M184 112l144 144-144 144"
              />
            </svg>
          </div>
        </div>
        <div class="info">
          <div class="title">邮箱</div>
          <div class="content">
            <p>xx@tw.com</p>
          </div>
        </div>
        <div class="info">
          <div class="title">手机号码</div>
          <div class="content">
            <p>137xxxxxxxx</p>
          </div>
        </div>
      </div>
      <div class="info-qr info">
        <div class="title">二维码</div>
        <router-link :to="{ name: 'ShowQR' }">
          <div class="content">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="ionicon"
              viewBox="0 0 512 512"
            >
              <title>Qr Code</title>
              <rect x="336" y="336" width="80" height="80" rx="8" ry="8" />
              <rect x="272" y="272" width="64" height="64" rx="8" ry="8" />
              <rect x="416" y="416" width="64" height="64" rx="8" ry="8" />
              <rect x="432" y="272" width="48" height="48" rx="8" ry="8" />
              <rect x="272" y="432" width="48" height="48" rx="8" ry="8" />
              <rect x="336" y="96" width="80" height="80" rx="8" ry="8" />
              <rect
                x="288"
                y="48"
                width="176"
                height="176"
                rx="16"
                ry="16"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="32"
              />
              <rect x="96" y="96" width="80" height="80" rx="8" ry="8" />
              <rect
                x="48"
                y="48"
                width="176"
                height="176"
                rx="16"
                ry="16"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="32"
              />
              <rect x="96" y="336" width="80" height="80" rx="8" ry="8" />
              <rect
                x="48"
                y="288"
                width="176"
                height="176"
                rx="16"
                ry="16"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="32"
              />
            </svg>
          </div>
        </router-link>
      </div>
      <div class="exit-login">退出登录</div>
    </div>
  </div>
</template>

<script>
import TopModal from "@/components/TopModal";

export default {
  name: "UserInfo",
  components: {
    TopModal,
  },
  data() {
    return {};
  },
  created() {},
  methods: {},
  computed: {},
};
</script>

<style scoped lang="scss">
.user-info-setting {
  height: 100%;
  .user-info-content {
    margin: auto;
    position: absolute;
    text-align: center;
    top: 4rem;
    left: 0;
    right: 0;
    bottom: 0;

    .user-info-set {
      margin-bottom: 3rem;
      .avatar {
        margin-bottom: 1rem;

        .show-avatar {
          position: relative;
          img {
            height: 5rem;
            width: 5rem;
            border-radius: 3rem;
          }
        }

        .edit-avatar {
          position: absolute;
          top: 3.5rem;
          left: 17rem;
          background-color: rgba($color: #000000, $alpha: 0.4);
          width: 1.5rem;
          height: 1.5rem;
          border-radius: 1rem;
          img {
            height: 1rem;
            width: 1rem;
            margin: 0.2rem 0;
            margin-left: 0.18rem;
          }
        }
      }
    }

    .info {
      height: 1.5rem;
      margin: 1rem 4rem;
      .title {
        float: left;
        line-height: 1.5rem;
        color: gray;
        font-size: 0.9rem;
      }

      .content {
        float: right;
        p {
          line-height: 1.5rem;
          display: inline;
          font-size: 0.9rem;
          margin-right: 0.3rem;
        }
        svg {
          float: right;
          fill: gray;
          color: gray;
          height: 1rem;
          width: 1rem;
          margin: 0.2rem 0;
        }
      }
    }

    .info-qr {
      margin: 4rem;
      .content {
        svg {
          height: 1.5rem;
          width: 1.5rem;
        }
      }
    }

    .exit-login {
      margin: 0 3rem;
      height: 3.5rem;
      line-height: 3.5rem;
      border: 1px solid #f37829;
      border-radius: 1rem;
      font-size: 1.2rem;
      font-weight: 500;
      color: #f37829;
    }
  }
}
</style>
