<template>
  <div class="order-list">
    <div class="breakfast">
      <div class="meal-header">
        <div class="left flex">
          <div class="left-empty">&nbsp;</div>
          <p class="left-content">早餐</p>
        </div>
        <div class="right">
          <p class="total-left">共1条</p>
          <p class="click-right" @click="changeOrderList('bf')">
            {{ showOrderList.bf.tip }}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="ionicon"
              viewBox="0 0 512 512"
            >
              <title>Chevron Up</title>
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="48"
                :d="showOrderList.bf.svg"
              />
            </svg>
          </p>
        </div>
      </div>
      <div class="breakfast-order-info" v-show="showOrderList.bf.show">
        <div class="order-content">
          <div class="layer-one">
            <div class="shop">
              <img src="https://fakeimg.pl/50x50/" alt="" class="shop-img" />
              <p>川粤味道</p>
            </div>
            <div class="shop-status">
              <p>商家备餐中</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="ionicon"
                viewBox="0 0 512 512"
              >
                <title>Ellipsis Vertical</title>
                <circle cx="256" cy="256" r="48" />
                <circle cx="256" cy="416" r="48" />
                <circle cx="256" cy="96" r="48" />
              </svg>
            </div>
          </div>
          <div class="layer-two">
            <div class="meal-img">
              <img src="@/assets/cai-120x120.jpeg" alt="" />
            </div>
            <div class="meal-detail">
              <div class="meal-title">七天无骨酸菜鱼+米饭</div>
              <div class="meal-date">
                <p>时间:</p>
                <p>12月29日 00:00-19:00 早餐</p>
              </div>
              <div class="meal-address">
                <p>地址:</p>
                <p>奥体南路自编9号奥体云谷创意园B栋1楼</p>
              </div>
            </div>
          </div>
          <div class="layer-three">
            <div class="gift">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="ionicon"
                viewBox="0 0 512 512"
              >
                <title>Gift</title>
                <path
                  d="M256 104v56h56a56 56 0 10-56-56zM256 104v56h-56a56 56 0 1156-56z"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-miterlimit="10"
                  stroke-width="32"
                />
                <rect
                  x="64"
                  y="160"
                  width="384"
                  height="112"
                  rx="32"
                  ry="32"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="32"
                />
                <path
                  d="M416 272v144a48 48 0 01-48 48H144a48 48 0 01-48-48V272M256 160v304"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="32"
                />
              </svg>
              <p>送人</p>
            </div>
            <div class="complaint">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="ionicon"
                viewBox="0 0 512 512"
              >
                <title>Alert Circle</title>
                <path
                  d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"
                  fill="none"
                  stroke="currentColor"
                  stroke-miterlimit="10"
                  stroke-width="32"
                />
                <path
                  d="M250.26 166.05L256 288l5.73-121.95a5.74 5.74 0 00-5.79-6h0a5.74 5.74 0 00-5.68 6z"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="32"
                />
                <path d="M256 367.91a20 20 0 1120-20 20 20 0 01-20 20z" />
              </svg>
              <p>投诉理赔</p>
            </div>
            <div class="comment">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="ionicon"
                viewBox="0 0 512 512"
              >
                <title>Chatbox Ellipses</title>
                <path
                  d="M408 64H104a56.16 56.16 0 00-56 56v192a56.16 56.16 0 0056 56h40v80l93.72-78.14a8 8 0 015.13-1.86H408a56.16 56.16 0 0056-56V120a56.16 56.16 0 00-56-56z"
                  fill="none"
                  stroke="currentColor"
                  stroke-linejoin="round"
                  stroke-width="32"
                />
                <circle cx="160" cy="216" r="32" />
                <circle cx="256" cy="216" r="32" />
                <circle cx="352" cy="216" r="32" />
              </svg>
              <p>评价</p>
            </div>
          </div>
        </div>
        <div class="no-more">没有更多订单了~</div>
      </div>
    </div>
    <div class="lunch">
      <div class="meal-header">
        <div class="left flex">
          <div class="left-empty">&nbsp;</div>
          <p class="left-content">午餐</p>
        </div>
        <div class="right">
          <p class="total-left">共1条</p>
          <p class="click-right" @click="changeOrderList('lh')">
            {{ showOrderList.lh.tip }}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="ionicon"
              viewBox="0 0 512 512"
            >
              <title>Chevron Up</title>
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="48"
                :d="showOrderList.lh.svg"
              />
            </svg>
          </p>
        </div>
      </div>
      <div class="breakfast-order-info" v-show="showOrderList.lh.show">
        <div class="order-content">
          <div class="layer-one">
            <div class="shop">
              <img src="https://fakeimg.pl/50x50/" alt="" class="shop-img" />
              <p>川粤味道</p>
            </div>
            <div class="shop-status">
              <p>商家备餐中</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="ionicon"
                viewBox="0 0 512 512"
              >
                <title>Ellipsis Vertical</title>
                <circle cx="256" cy="256" r="48" />
                <circle cx="256" cy="416" r="48" />
                <circle cx="256" cy="96" r="48" />
              </svg>
            </div>
          </div>
          <div class="layer-two">
            <div class="meal-img">
              <img src="@/assets/cai-120x120.jpeg" alt="" />
            </div>
            <div class="meal-detail">
              <div class="meal-title">七天无骨酸菜鱼+米饭</div>
              <div class="meal-date">
                <p>时间:</p>
                <p>12月29日 00:00-19:00 早餐</p>
              </div>
              <div class="meal-address">
                <p>地址:</p>
                <p>奥体南路自编9号奥体云谷创意园B栋1楼</p>
              </div>
            </div>
          </div>
          <div class="layer-three">
            <div class="gift">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="ionicon"
                viewBox="0 0 512 512"
              >
                <title>Gift</title>
                <path
                  d="M256 104v56h56a56 56 0 10-56-56zM256 104v56h-56a56 56 0 1156-56z"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-miterlimit="10"
                  stroke-width="32"
                />
                <rect
                  x="64"
                  y="160"
                  width="384"
                  height="112"
                  rx="32"
                  ry="32"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="32"
                />
                <path
                  d="M416 272v144a48 48 0 01-48 48H144a48 48 0 01-48-48V272M256 160v304"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="32"
                />
              </svg>
              <p>送人</p>
            </div>
            <div class="complaint">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="ionicon"
                viewBox="0 0 512 512"
              >
                <title>Alert Circle</title>
                <path
                  d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"
                  fill="none"
                  stroke="currentColor"
                  stroke-miterlimit="10"
                  stroke-width="32"
                />
                <path
                  d="M250.26 166.05L256 288l5.73-121.95a5.74 5.74 0 00-5.79-6h0a5.74 5.74 0 00-5.68 6z"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="32"
                />
                <path d="M256 367.91a20 20 0 1120-20 20 20 0 01-20 20z" />
              </svg>
              <p>投诉理赔</p>
            </div>
            <div class="comment">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="ionicon"
                viewBox="0 0 512 512"
              >
                <title>Chatbox Ellipses</title>
                <path
                  d="M408 64H104a56.16 56.16 0 00-56 56v192a56.16 56.16 0 0056 56h40v80l93.72-78.14a8 8 0 015.13-1.86H408a56.16 56.16 0 0056-56V120a56.16 56.16 0 00-56-56z"
                  fill="none"
                  stroke="currentColor"
                  stroke-linejoin="round"
                  stroke-width="32"
                />
                <circle cx="160" cy="216" r="32" />
                <circle cx="256" cy="216" r="32" />
                <circle cx="352" cy="216" r="32" />
              </svg>
              <p>评价</p>
            </div>
          </div>
        </div>
        <div class="no-more">没有更多订单了~</div>
      </div>
    </div>
    <div class="dinner">
      <div class="meal-header">
        <div class="left flex">
          <div class="left-empty">&nbsp;</div>
          <p class="left-content">晚餐</p>
        </div>
        <div class="right">
          <p class="total-left">共1条</p>
          <p class="click-right" @click="changeOrderList('dr')">
            {{ showOrderList.dr.tip }}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="ionicon"
              viewBox="0 0 512 512"
            >
              <title>Chevron Up</title>
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="48"
                :d="showOrderList.dr.svg"
              />
            </svg>
          </p>
        </div>
      </div>
      <div class="breakfast-order-info" v-show="showOrderList.dr.show">
        <div class="order-content">
          <div class="layer-one">
            <div class="shop">
              <img src="https://fakeimg.pl/50x50/" alt="" class="shop-img" />
              <p>川粤味道</p>
            </div>
            <div class="shop-status">
              <p>商家备餐中</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="ionicon"
                viewBox="0 0 512 512"
              >
                <title>Ellipsis Vertical</title>
                <circle cx="256" cy="256" r="48" />
                <circle cx="256" cy="416" r="48" />
                <circle cx="256" cy="96" r="48" />
              </svg>
            </div>
          </div>
          <div class="layer-two">
            <div class="meal-img">
              <img src="@/assets/cai-120x120.jpeg" alt="" />
            </div>
            <div class="meal-detail">
              <div class="meal-title">七天无骨酸菜鱼+米饭</div>
              <div class="meal-date">
                <p>时间:</p>
                <p>12月29日 00:00-19:00 早餐</p>
              </div>
              <div class="meal-address">
                <p>地址:</p>
                <p>奥体南路自编9号奥体云谷创意园B栋1楼</p>
              </div>
            </div>
          </div>
          <div class="layer-three">
            <div class="gift">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="ionicon"
                viewBox="0 0 512 512"
              >
                <title>Gift</title>
                <path
                  d="M256 104v56h56a56 56 0 10-56-56zM256 104v56h-56a56 56 0 1156-56z"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-miterlimit="10"
                  stroke-width="32"
                />
                <rect
                  x="64"
                  y="160"
                  width="384"
                  height="112"
                  rx="32"
                  ry="32"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="32"
                />
                <path
                  d="M416 272v144a48 48 0 01-48 48H144a48 48 0 01-48-48V272M256 160v304"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="32"
                />
              </svg>
              <p>送人</p>
            </div>
            <div class="complaint">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="ionicon"
                viewBox="0 0 512 512"
              >
                <title>Alert Circle</title>
                <path
                  d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"
                  fill="none"
                  stroke="currentColor"
                  stroke-miterlimit="10"
                  stroke-width="32"
                />
                <path
                  d="M250.26 166.05L256 288l5.73-121.95a5.74 5.74 0 00-5.79-6h0a5.74 5.74 0 00-5.68 6z"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="32"
                />
                <path d="M256 367.91a20 20 0 1120-20 20 20 0 01-20 20z" />
              </svg>
              <p>投诉理赔</p>
            </div>
            <div class="comment">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="ionicon"
                viewBox="0 0 512 512"
              >
                <title>Chatbox Ellipses</title>
                <path
                  d="M408 64H104a56.16 56.16 0 00-56 56v192a56.16 56.16 0 0056 56h40v80l93.72-78.14a8 8 0 015.13-1.86H408a56.16 56.16 0 0056-56V120a56.16 56.16 0 00-56-56z"
                  fill="none"
                  stroke="currentColor"
                  stroke-linejoin="round"
                  stroke-width="32"
                />
                <circle cx="160" cy="216" r="32" />
                <circle cx="256" cy="216" r="32" />
                <circle cx="352" cy="216" r="32" />
              </svg>
              <p>评价</p>
            </div>
          </div>
        </div>
        <div class="no-more">没有更多订单了~</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OrderListModal",
  data() {
    return {
      showOrderList: {
        bf: {
          show: true,
          tip: "收起",
          svg: "M112 328l144-144 144 144",
        },
        lh: {
          show: false,
          tip: "收起",
          svg: "M112 328l144-144 144 144",
        },
        dr: {
          show: false,
          tip: "收起",
          svg: "M112 328l144-144 144 144",
        },
      },
      orderList: [
        { bfOrderList: null },
        { lunchOrderList: null },
        { dinnerOrderList: null },
      ],
    };
  },
  methods: {
    changeOrderList(orderType) {
      switch (orderType) {
        case "bf":
          this.showOrderList.bf.show = !this.showOrderList.bf.show;
          if (this.showOrderList.bf.show) {
            this.showOrderList.bf.tip = "收起";
            this.showOrderList.bf.svg = "M112 328l144-144 144 144";
          } else {
            this.showOrderList.bf.tip = "展开";
            this.showOrderList.bf.svg = "M184 112l144 144-144 144";
          }
          break;
        case "lh":
          this.showOrderList.lh.show = !this.showOrderList.lh.show;
          if (this.showOrderList.lh.show) {
            this.showOrderList.lh.tip = "收起";
            this.showOrderList.lh.svg = "M112 328l144-144 144 144";
          } else {
            this.showOrderList.lh.tip = "展开";
            this.showOrderList.lh.svg = "M184 112l144 144-144 144";
          }
          break;
        case "dr":
          this.showOrderList.dr.show = !this.showOrderList.dr.show;
          if (this.showOrderList.dr.show) {
            this.showOrderList.dr.tip = "收起";
            this.showOrderList.dr.svg = "M112 328l144-144 144 144";
          } else {
            this.showOrderList.dr.tip = "展开";
            this.showOrderList.dr.svg = "M184 112l144 144-144 144";
          }
          break;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.order-list {
  margin-top: 4rem;
  margin-bottom: 5rem;
  margin-left: 1rem;
  margin-right: 1rem;

  .breakfast,
  .lunch,
  .dinner {
    background-color: #f7f7f5;
    border-radius: 1em;
    padding: 1em;
    margin: 1em 0;

    .meal-header {
      min-height: 2rem;

      .left {
        float: left;

        .left-empty {
          float: left;
          content: "";
          width: 0.3rem;
          height: 1.1rem;
          min-height: 1rem;
          color: #ff8c00;
          background-color: #d2691e;
          margin-top: 0.2rem;
          border-top-right-radius: 1rem;
          border-bottom-left-radius: 1rem;
        }

        .left-content {
          float: right;
          font-size: 1rem;
          font-weight: 600;
          line-height: 2rem;
          margin-left: 0.6rem;
        }
      }

      .right {
        float: right;
        .total-left {
          font-size: 12px;
          letter-spacing: 3px;
          opacity: 0.5;
        }

        display: flex;
        font-size: 0.9em;
        justify-content: flex-end;
        align-items: center;
        line-height: 2em;

        .click-right {
          position: relative;
          margin-left: 10px;
          margin-right: 10px;
          color: #ff8c00;

          svg {
            widows: 1em;
            height: 1em;
            line-height: 3em;
          }
        }
      }
    }
  }

  .breakfast-order-info {
    .order-content {
      background-color: #fff;
      border-radius: 0.5em;
      min-height: 12em;
      margin-top: 1rem;
      .layer-one,
      .layer-two {
        padding: 0 0.5em;
      }

      .layer-one {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        height: 3em;
        width: 100%;

        .shop {
          img {
            float: left;
            width: 1.5em;
            height: 1.5em;
            margin: 0.6em 0.5em;
            border-radius: 0.3em;
          }

          p {
            float: right;
            font-size: 0.9em;
            font-weight: 400;
            line-height: 3.2em;
          }
        }

        .shop-status {
          float: right;
          color: #ff8c00;
          line-height: 3em;

          p {
            float: left;
            font-size: 0.9em;
            line-height: 3.2em;
          }

          svg {
            float: right;
            width: 1em;
            height: 1em;
            line-height: 3em;
            margin: 1em 0;
            fill: #ff8c00;
          }
        }
      }

      .layer-two {
        display: flex;
        flex-direction: row;

        .meal-img {
          display: flex;
          justify-content: flex-start;
          margin: 0.3em;

          img {
            width: 4em;
            height: 4em;
            border-radius: 0.8em;
          }
        }

        .meal-detail {
          height: 4em;
          margin-left: 0.5em;
          width: 100%;

          .meal-title {
            font-size: 1em;
            font-weight: 500;
            padding: 0.3em 0;
            line-height: 1em;
          }

          .meal-date,
          .meal-address {
            display: flex;
            justify-content: flex-start;
            align-items: left;
            font-size: 10px;
            color: gray;
            font-size: 0.8em;
            opacity: 0.7;
            margin-top: 0.5em;

            p:first-child {
              float: left;
              margin-right: 0.8em;
            }

            p:last-child {
              flex: 1;
              float: left;
              overflow: hidden;
            }
          }

          .meal-address {
            margin-top: 0.2em;
          }
        }
      }

      .layer-three {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        margin-top: 1.5em;
        margin-right: 0.3em;

        .gift,
        .complaint,
        .comment {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 8em;
          height: 3em;
          border: 1px solid orange;
          border-radius: 0.8em;
          text-align: center;
          font-size: 10px;
          color: orange;
          margin: 0 0.5em;

          p {
            text-align: center;
            font-size: 1em;
            line-height: 3.5em;
          }

          svg {
            width: 1.8em;
            height: 1.8em;
            margin: 0.8em 0.3em;
            fill: #ff8c00;
          }
        }

        .complaint {
          color: #a9a9a9;
          border: 1px solid #a9a9a9;
        }
      }
    }
  }

  .no-more {
    widows: 100%;
    text-align: center;
    margin-top: 1em;
    font-size: 0.9em;
    color: #a9a9a9;
  }
}
</style>