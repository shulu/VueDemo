<template>
  <div class="meal-history">
    <top-modal title="餐补" />
    <div class="history-info">
      <div class="history-desc">
        <div class="desc-title">公司支付, 按餐补贴</div>
        <div class="desc-meal">
          <div class="desc-meal-content">
            <p>8</p>
            <p>早</p>
          </div>
          <div class="desc-meal-space">&nbsp;</div>
          <div class="desc-meal-content">
            <p>20</p>
            <p>午</p>
          </div>
          <div class="desc-meal-space">&nbsp;</div>
          <div class="desc-meal-content">
            <p>20</p>
            <p>午</p>
          </div>
        </div>
      </div>
      <record-list-modal :recordList="recordList" />
    </div>
  </div>
</template>

<script>
import TopModal from "@/components/TopModal";
import RecordListModal from "@/components/RecordListModal";
export default {
  name: "Wallet",
  components: {
    TopModal,
    RecordListModal,
  },
  data() {
    return {
      recordList: [
        {
          period: "午",
          date: "2022-06-02 周四",
          money: "-20",
        },
        {
          period: "午",
          date: "2022-06-02 周四",
          money: "-20",
        },
        {
          period: "午",
          date: "2022-06-02 周四",
          money: "-20",
        },
      ],
    };
  },
  created() {},
  methods: {},
  computed: {},
};
</script>

<style scoped lang="scss">
.meal-history {
  .history-info {
    position: absolute;
    margin: auto;
    top: 3rem;
    left: 0;
    right: 0;
    bottom: 0;
    margin: 0 2rem;

    .history-desc {
      border-top-left-radius: 1rem;
      border-top-right-radius: 1rem;
      height: 7rem;
      background-color: #f37829;
      color: #fff;
      margin: 0 1rem;
      padding-top: 1rem;
      text-align: center;

      .desc-title {
        font-size: 0.8rem;
      }

      .desc-meal {
        display: flex;
        flex-direction: row;
        justify-content: center;
        .desc-meal-content {
          flex: 1;

          p:first-child {
            font-size: 1.4rem;
            font-weight: 800;
          }

          p:last-child {
            font-size: 0.8rem;
          }
        }

        .desc-meal-space {
          content: "";
          width: 0.01rem;
          height: 2.5rem;
          min-height: 1rem;
          background-color: #fff;
          margin-top: 0.2rem;
        }
      }
    }
  }
}
</style>
