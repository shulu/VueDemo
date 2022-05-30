<template>
  <div class="footer">
    <div class="footer-wrap">
      <router-link
        :to="{ name: 'Home' }"
        class="footer-link"
        :class="{ on: pageChoose == 'home' }"
        @click="UPDATE_PAGE_CHOOSE('home')"
      >
        <div class="footer-inner">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="ionicon"
            viewBox="0 0 512 512"
          >
            <title>Home</title>
            <path
              d="M80 212v236a16 16 0 0016 16h96V328a24 24 0 0124-24h80a24 24 0 0124 24v136h96a16 16 0 0016-16V212"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="32"
            />
            <path
              d="M480 256L266.89 52c-5-5.28-16.69-5.34-21.78 0L32 256M400 179V64h-48v69"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="32"
            />
          </svg>
          <p>首页</p>
        </div>
      </router-link>
      <router-link
        :to="{ name: 'Order' }"
        class="footer-link"
        :class="{ on: pageChoose == 'order' }"
        @click="UPDATE_PAGE_CHOOSE('order')"
      >
        <div class="footer-inner">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="ionicon"
            viewBox="0 0 512 512"
          >
            <title>List Circle</title>
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="32"
              d="M224 184h128M224 256h128M224 327h128"
            />
            <path
              d="M448 258c0-106-86-192-192-192S64 152 64 258s86 192 192 192 192-86 192-192z"
              fill="none"
              stroke="currentColor"
              stroke-miterlimit="10"
              stroke-width="32"
            />
            <circle
              cx="168"
              cy="184"
              r="8"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="32"
            />
            <circle
              cx="168"
              cy="257"
              r="8"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="32"
            />
            <circle
              cx="168"
              cy="328"
              r="8"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="32"
            />
          </svg>
          <p>订单</p>
        </div>
      </router-link>
      <router-link
        :to="{ name: 'User' }"
        class="footer-link"
        :class="{ on: pageChoose == 'user' }"
        @click="UPDATE_PAGE_CHOOSE('user')"
      >
        <div class="footer-inner">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="ionicon"
            viewBox="0 0 512 512"
          >
            <title>Person Circle</title>
            <path
              d="M258.9 48C141.92 46.42 46.42 141.92 48 258.9c1.56 112.19 92.91 203.54 205.1 205.1 117 1.6 212.48-93.9 210.88-210.88C462.44 140.91 371.09 49.56 258.9 48zm126.42 327.25a4 4 0 01-6.14-.32 124.27 124.27 0 00-32.35-29.59C321.37 329 289.11 320 256 320s-65.37 9-90.83 25.34a124.24 124.24 0 00-32.35 29.58 4 4 0 01-6.14.32A175.32 175.32 0 0180 259c-1.63-97.31 78.22-178.76 175.57-179S432 158.81 432 256a175.32 175.32 0 01-46.68 119.25z"
            />
            <path
              d="M256 144c-19.72 0-37.55 7.39-50.22 20.82s-19 32-17.57 51.93C191.11 256 221.52 288 256 288s64.83-32 67.79-71.24c1.48-19.74-4.8-38.14-17.68-51.82C293.39 151.44 275.59 144 256 144z"
            />
          </svg>
          <p>我的</p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "Footer",
  methods: {
    ...mapActions(["UPDATE_PAGE_CHOOSE"]),
  },
  computed: {
    ...mapState(["pageChoose"]),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.footer {
  z-index: 11;
  background-color: #fff;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;

  .footer-wrap {
    font-size: 12px;
    display: flex;
    text-align: center;
    justify-content: center;
    align-content: center;
    color: gray;

    .footer-link {
      flex: 1;
    }

    p {
      font-size: 0.9rem;
    }

    svg {
      width: 1.8rem;
      height: 1.8rem;
    }
  }

  .on {
    fill: #f37626;
    color: #f37626;
    font-weight: 800;
  }
}
</style>
