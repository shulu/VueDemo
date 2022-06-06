<template>
  <div class="user">
    <div class="user-header">
      <router-link :to="{ name: 'UserInfo' }" title="个人设置">
        <div class="user-header-left">
          <img class="user-avatar" src="@/assets/cai-120x120.jpeg" alt="" />
          <div class="user-profile">
            <p class="user-name">ufan_e1568703123803 ></p>
            <p class="user-company">贪玩游戏/贪玩江西总公司技术部</p>
          </div>
        </div>
      </router-link>
      <router-link :to="{ name: 'ShowQR' }">
        <img class="qr-code" src="@/assets/qr-code-outline.svg" alt="" />
      </router-link>
    </div>
    <div class="user-pay-account">
      <div class="account-header">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAADAFBMVEUAAAAqKir/Zhr/dBf/gBX/eh//exz/chr3cyH3dB//eB74dRwmJiYlJSUmJiYmJib6dR4lJSX6dB8wKCYyKiX7dR/7dR5RNSQmJiZiOyP7dR/6dh36dh/6dh50QyP6dh76dR76dh36dR4lJSUmJib7dR6HSSMmJib7dh77dR4mJiYmJiYmJiYzKyX6dh48LiWiVCFCMCVDMCX6dR77dR76dR2lVSH7dR4lJSWnViH6dR76dR76dB77dR76dR37dR4mJiYoKCgsKysuKSUuKSYuKyguLCsvLi6nn5qqVyGtpJ/6dR76diD6dyH6eyj6fCr7hDb7hjr7hzz7jUX7kk77mVr77eX8llX8oGT8oGX8o2r8pGv8p3H8qnX8rnv9t4r9uIz9xqP9yqn9yqr+za3+za/+z7H+0bT+1Lr+17/+4M7+4c/+4tH+49P+5NT+59n+6Nv/7eP/7uT/7+b/8Oj/8el2dnZ3d3d4eHh5eXl6enp7e3t8fHx9fX1+fn5/f3+AgICBgYGCgoKDg4OEhISFhYWGhoaHh4eIiIiJiYmKioqLi4uMjIyNjY2Ojo6Pj4+QkJCRkZGSkpKTk5OUlJSVlZWWlpaXl5eYmJiZmZmampqbm5ucnJydnZ2enp6fn5+goKChoaGioqKjo6OkpKSlpaWmpqanp6eoqKipqamqqqqrq6usrKytra2urq6vr6+wsLCxsbGysrKzs7O0tLS1tbW2tra3t7e4uLi5ubm6urq7u7u8vLy9vb2+vr6/v7/AwMDBwcHCwsLDw8PExMTFxcXGxsbHx8fIyMjJycnKysrLy8vMzMzNzc3Ozs7Pz8/Q0NDR0dHS0tLT09PU1NTV1dXW1tbX19fY2NjZ2dna2trb29vc3Nzd3d3e3t7f39/g4ODh4eHi4uLj4+Pk5OTl5eXm5ubn5+fo6Ojp6enq6urr6+vs7Ozt7e3u7u7v7+/w8PDx8fHy8vLz8/P09PT19fX29vb39/f4+Pj5+fn6+vr7+/v8/Pz9/f3+/v7////obO71AAAAQHRSTlMABgoLDBkbHR8hIiUoKTxeXmBjZWZ0dnh5hY6VlZeYmpucn6WnsLGztLnByMrX3+Hn6Ojo6evt7/X3+Pn6+vv97sGykwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAS1JREFUOI3t1NdPwlAUx/HiwMWwTtwDFKV1L5wcilrqT3HjFvfe2v/f2lyV+HBvE18w8ft0T/J5ujk5kpTzlbV2FDqkpe0zQLcjWtI2jY8qxLS4ZcqCQ/UxjLkFtKhp0qLD1XlSI9DFpe6GCYuO1ORb74JeoPwn8PllVmXzuGHVX1dr12kYo1Wy7Pd9UVeYhIVdDAfElijAcITiyQVuyThFGFZJNwXppP7j5+vzM7t5IX46SIGVoB4+vlsFvvEAF7+uA6n9zJFdgga5+BhYu/8cZgV4B7gyneINLL05xpvAg2OcAbYd48dlYOvy5tZOhM2Txex/FmDzYiUL94l24+X0cG/Xbu7v7PNvsUJamm/TGikMB4k0nZtGFGTYExWfuqiHYckbUlRuSsgr5U7vXOfHsKPaMhgAAAAASUVORK5CYII="
          alt=""
        />
        <p>账户(元)</p>
      </div>
      <div class="pocket">
        <router-link :to="{ name: 'Wallet' }">
          <div class="pocket-money">
            <p class="pocket-num">0</p>
            <p class="pocket-txt">钱包</p>
          </div>
        </router-link>
        |
        <router-link :to="{ name: 'MealHistory' }">
          <div class="pocket-breakfast">
            <p class="pocket-num">8</p>
            <p class="pocket-txt">早</p>
          </div>
        </router-link>
        |
        <router-link :to="{ name: 'MealHistory' }">
          <div class="pocket-lunch">
            <p class="pocket-num">20</p>
            <p class="pocket-txt">中</p>
          </div>
        </router-link>
        |
        <router-link :to="{ name: 'MealHistory' }">
          <div class="pocket-dinner">
            <p class="pocket-num">20</p>
            <p class="pocket-txt">晚</p>
          </div>
        </router-link>
      </div>
    </div>
    <div class="discount">
      <router-link :to="{ name: 'Coupon' }">
        <div class="left">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="ionicon"
            viewBox="0 0 512 512"
          >
            <title>Ticket</title>
            <path
              fill="none"
              stroke="currentColor"
              stroke-miterlimit="10"
              stroke-width="32"
              d="M366.05 146a46.7 46.7 0 01-2.42-63.42 3.87 3.87 0 00-.22-5.26l-44.13-44.18a3.89 3.89 0 00-5.5 0l-70.34 70.34a23.62 23.62 0 00-5.71 9.24h0a23.66 23.66 0 01-14.95 15h0a23.7 23.7 0 00-9.25 5.71L33.14 313.78a3.89 3.89 0 000 5.5l44.13 44.13a3.87 3.87 0 005.26.22 46.69 46.69 0 0165.84 65.84 3.87 3.87 0 00.22 5.26l44.13 44.13a3.89 3.89 0 005.5 0l180.4-180.39a23.7 23.7 0 005.71-9.25h0a23.66 23.66 0 0114.95-15h0a23.62 23.62 0 009.24-5.71l70.34-70.34a3.89 3.89 0 000-5.5l-44.13-44.13a3.87 3.87 0 00-5.26-.22 46.7 46.7 0 01-63.42-2.32z"
            />
            <path
              fill="none"
              stroke="currentColor"
              stroke-miterlimit="10"
              stroke-width="32"
              stroke-linecap="round"
              d="M250.5 140.44l-16.51-16.51M294.52 184.46l-11.01-11M338.54 228.49l-11-11.01M388.07 278.01l-16.51-16.51"
            />
          </svg>
          <p>优惠券</p>
        </div>
      </router-link>
      <router-link :to="{ name: 'Coupon' }">
        <div class="right">
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
      </router-link>
    </div>
    <div class="user-taste">
      <router-link :to="{ name: 'Tastes' }">
        <div class="choose-taste">
          <div class="left">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"
              />
            </svg>
            <p>口味偏好</p>
          </div>
          <div class="right">
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
      </router-link>
      <div class="order-manual">
        <router-link :to="{ name: 'OrderManual' }">
          <div class="left">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="ionicon"
              viewBox="0 0 512 512"
            >
              <title>Notifications Circle</title>
              <path
                d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"
                fill="none"
                stroke="currentColor"
                stroke-miterlimit="10"
                stroke-width="32"
              />
              <path
                d="M365.2 313c-16.33-19.34-27.86-27.47-27.86-80.8 0-48.86-25.78-66.23-47-74.67a11.39 11.39 0 01-6.34-6.68C280.29 138.6 269.88 128 256 128s-24.31 10.6-28 22.86a11.35 11.35 0 01-6.33 6.68c-21.24 8.46-47 25.8-47 74.67 0 53.33-11.54 61.46-27.87 80.8-6.77 8-.65 23 11.19 23H354C365.77 336 371.94 321 365.2 313zM220.24 352a4 4 0 00-4 4.42C218.49 375.14 235.11 384 256 384c20.67 0 37.14-9.15 39.66-27.52a4 4 0 00-4-4.48z"
              />
            </svg>
            <p>自动订餐</p>
          </div>
        </router-link>
        <router-link :to="{ name: 'OrderManual' }">
          <div class="right">
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
        </router-link>
      </div>

      <div class="order-tips">
        <div class="left">
          <img
            src="data:image/png;base64,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"
            alt=""
          />
          <p>订餐微信提示</p>
        </div>
        <div class="right">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="48"
            width="48"
            :class="{ off: switchStats == 'off', on: switchStats == 'on' }"
            @click="switchTips()"
          >
            <path :d="d" />
          </svg>
        </div>
      </div>
    </div>
    <div class="about-us">
      <div class="left">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAADAFBMVEUAAAAkJCQkJCQlJSUmJiYlJSUnJycnJyclJSUmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYlJSUmJiYmJiYyMjE8OzpQTkxnY2FvamdvamiEf3uknJezqqWzq6W0q6bJvrnJv7nk2NHv4tvw49z36uL6dR76diD6eCP6eST6eib6eyj6eyn6gDD7gjP7i0P7jET7jUb7lFL8nWD8nWH8nmH8n2P8n2T8o2n8q3b8rXr9v5j9xJ/9xqL9x6X9yKb9yKf9y6v97+f+za7+07j+3Mf+3Mj+4M3+4c/+4tH+5db+5tf+8Oj+8en/69//7OD/7OH/8Oj/8elTU1NUVFRVVVVWVlZXV1dYWFhZWVlaWlpbW1tcXFxdXV1eXl5fX19gYGBhYWFiYmJjY2NkZGRlZWVmZmZnZ2doaGhpaWlqampra2tsbGxtbW1ubm5vb29wcHBxcXFycnJzc3N0dHR1dXV2dnZ3d3d4eHh5eXl6enp7e3t8fHx9fX1+fn5/f3+AgICBgYGCgoKDg4OEhISFhYWGhoaHh4eIiIiJiYmKioqLi4uMjIyNjY2Ojo6Pj4+QkJCRkZGSkpKTk5OUlJSVlZWWlpaXl5eYmJiZmZmampqbm5ucnJydnZ2enp6fn5+goKChoaGioqKjo6OkpKSlpaWmpqanp6eoqKipqamqqqqrq6usrKytra2urq6vr6+wsLCxsbGysrKzs7O0tLS1tbW2tra3t7e4uLi5ubm6urq7u7u8vLy9vb2+vr6/v7/AwMDBwcHCwsLDw8PExMTFxcXGxsbHx8fIyMjJycnKysrLy8vMzMzNzc3Ozs7Pz8/Q0NDR0dHS0tLT09PU1NTV1dXW1tbX19fY2NjZ2dna2trb29vc3Nzd3d3e3t7f39/g4ODh4eHi4uLj4+Pk5OTl5eXm5ubn5+fo6Ojp6enq6urr6+vs7Ozt7e3u7u7v7+/w8PDx8fHy8vLz8/P09PT19fX29vb39/f4+Pj5+fn6+vr7+/v8/Pz9/f3+/v7///+0gkTKAAAAFHRSTlMAFSs3PT5BVmGHlaGorsLl6Pj9/sFadoEAAAAJcEhZcwAACxMAAAsTAQCanBgAAAHGSURBVDiNvZV3UwIxEMURROn1gZSTJkSxN1TsYEMR1Pv+H8alHMleTvBmHN9/yf4ms9ndvHg8/ydvIBiORsPBgHcR6QslMFMi5JuDrsRgU2zlB3QpkqZwJm9UavV6rWLkM7RMR5acWH+cYmulhjlTo7RGW3G/zq4mgWx5YDK9l7NAclVjU0Buw9S0kQNSNtpP5xa7Omua3SKdvczuRvkWJdA5POzIFdFx9ZYRykGe+9YUovkmz6ZMIkp908gq+T4K0qOSdxZpWW/qRVlJc7gvxP5Q2ShTdyzWR/VlNeu12z11PaB6W50PASWnQkiVgNAUTiDTYLHe08sX22hkkJiwXqDAQpd0vwt+dAGYTGwAMFjkgOAdDhtAYAwHgSqLPBwJsc3hKhAcw2GgxkMfGlwDwmM4CtQXwXUg6h52lYZ2QQe4Yl1QK50DPCud1hQHOG81RW+3Bst264OkwetykGwj+np3LcTW7b18K+qI8uHv74qJ9j6tLXX4+bN6nrJisz/d4c+KP9irs9bJ8Wnr/Ga6tj1YuxVw2a1gkcnY7M6Nff1gjANnY5xjucs6OzPzglEdmXnVKMwxc4+rb2IkFx/QWL//2v5Q399eHpBI8v0eAAAAAElFTkSuQmCC"
          alt=""
        />
        <p>关于我们</p>
      </div>
      <div class="right">
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
  data() {
    return {
      switchStats: "off",
      d: "M13.9 34.15Q9.65 34.15 6.7 31.2Q3.75 28.25 3.75 24Q3.75 19.75 6.7 16.8Q9.65 13.85 13.9 13.85H34.1Q38.35 13.85 41.3 16.8Q44.25 19.75 44.25 24Q44.25 28.2 41.3 31.175Q38.35 34.15 34.1 34.15ZM13.9 29.05Q16.05 29.05 17.5 27.6Q18.95 26.15 18.95 24Q18.95 21.85 17.5 20.4Q16.05 18.95 13.9 18.95Q11.8 18.95 10.3 20.4Q8.8 21.85 8.8 24Q8.8 26.15 10.3 27.6Q11.8 29.05 13.9 29.05Z",
    };
  },
  methods: {
    switchTips() {
      this.switchStats = this.switchStats == "on" ? "off" : "on";
      this.d =
        this.switchStats == "on"
          ? "M13.9 34.15Q9.65 34.15 6.7 31.2Q3.75 28.25 3.75 24Q3.75 19.75 6.7 16.8Q9.65 13.85 13.9 13.85H34.1Q38.35 13.85 41.3 16.8Q44.25 19.75 44.25 24Q44.25 28.2 41.3 31.175Q38.35 34.15 34.1 34.15ZM34.1 29.05Q36.2 29.05 37.7 27.6Q39.2 26.15 39.2 24Q39.2 21.85 37.7 20.4Q36.2 18.95 34.1 18.95Q31.95 18.95 30.5 20.4Q29.05 21.85 29.05 24Q29.05 26.15 30.5 27.6Q31.95 29.05 34.1 29.05Z"
          : "M13.9 34.15Q9.65 34.15 6.7 31.2Q3.75 28.25 3.75 24Q3.75 19.75 6.7 16.8Q9.65 13.85 13.9 13.85H34.1Q38.35 13.85 41.3 16.8Q44.25 19.75 44.25 24Q44.25 28.2 41.3 31.175Q38.35 34.15 34.1 34.15ZM13.9 29.05Q16.05 29.05 17.5 27.6Q18.95 26.15 18.95 24Q18.95 21.85 17.5 20.4Q16.05 18.95 13.9 18.95Q11.8 18.95 10.3 20.4Q8.8 21.85 8.8 24Q8.8 26.15 10.3 27.6Q11.8 29.05 13.9 29.05Z";
    },
  },
};
</script>

<style lang="scss" scoped>
.user {
  padding: 0 1.5rem;

  .user-header {
    height: 6rem;
    display: flex;
    justify-content: space-between;
    margin: 2rem 0;
    .user-header-left {
      flex: 1;

      .user-avatar {
        float: left;
        width: 6rem;
        height: 6rem;
        border-radius: 3rem;
      }

      .user-profile {
        float: left;
        flex: 1;
        margin-left: 1.5rem;
        height: 6rem;

        .user-name {
          height: 3rem;
          line-height: 3rem;
          font-size: 1.8rem;
          font-weight: 800;
          color: #000;
        }

        .user-company {
          height: 3rem;
          font-size: 1rem;
          color: gray;
        }
      }
    }

    .qr-code {
      width: 3rem;
      height: 3rem;
      margin: 1.2rem 0;
    }
  }

  .user-pay-account {
    display: flex;
    flex-direction: column;
    border-radius: 0.5rem;
    background-color: #fff;
    margin: 2rem 0;

    .account-header {
      img {
        width: 3rem;
        height: 3rem;
        color: #f37626;
        float: left;
      }

      p {
        font-size: 1.4rem;
        margin-left: 4rem;
        height: 3rem;
        line-height: 3rem;
      }
    }

    .pocket {
      display: flex;
      flex-direction: row;
      text-align: center;
      justify-content: center;
      align-items: center;
      gap: 10%;
      margin: 0.5rem 0;
      color: lightgray;

      .pocket-num {
        color: #000;
        font-size: 1.8rem;
        font-weight: 800;
      }

      .pocket-txt {
        font-size: 1.3rem;
        color: rgba($color: #a1a1a1, $alpha: 1);
      }
    }
  }

  .discount,
  .about-us {
    height: 5rem;
    margin: 2rem 0;
    background-color: #fff;
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    .left {
      flex: 1;
      img {
        float: left;
        width: 2.5rem;
        height: 2.5rem;
      }

      svg {
        float: left;
        width: 2.5rem;
        height: 2.5rem;
        color: #f37626;
      }

      p {
        margin-left: 4rem;
        line-height: 3rem;
        font-size: 1.5rem;
        font-weight: 500;
        opacity: 0.7;
      }
    }

    .right {
      svg {
        float: left;
        width: 2rem;
        height: 2rem;
        color: gray;
      }
    }
  }

  a {
    color: #000;
  }

  .user-taste {
    background-color: #fff;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    margin: 2rem 0;

    p {
      display: inline-block;
    }

    .choose-taste,
    .order-manual,
    .order-tips {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0.5rem 0;

      .left,
      .right {
        display: flex;
        flex-direction: row;
        flex-basis: 50%;
      }

      .left {
        svg {
          width: 2.5rem;
          height: 2.5rem;
          color: #f37626;
          fill: #f37626;
        }
        img {
          height: 2.5rem;
          width: 2.5rem;
        }
        p {
          font-size: 1.6rem;
          line-height: 3rem;
          margin-left: 1rem;
        }
      }

      .right {
        justify-content: flex-end;
        svg {
          width: 2.5rem;
          height: 2.5rem;
          color: gray;
        }

        .on {
          width: 5rem;
          height: 3.5rem;
          fill: #f37626;
        }

        .off {
          width: 5rem;
          height: 3.5rem;
          fill: lightgray;
        }
      }

      p {
        margin-left: 0.3rem;
        font-weight: 500;
        opacity: 0.7;
      }
    }
  }
}
</style>
