<template>
  <div class="order-manual">
    <top-modal
      title="自动订餐"
      showSwitch="true"
      :switchStats="switchStats"
      :d="d"
      @emitEvent="switchTips"
    />
    <div class="order-manual-tips">
      友情提示：开启自动订餐后系统将会在订餐截止时间前15分钟为您自动订购一份餐品。
    </div>
    <div class="period-order">
      <div class="tip">
        <prefix-modal />
        <div class="title">选择餐段</div>
      </div>
      <div class="period-order-content">
        <div class="choose-period">
          <div
            @click="activePeriod('breakfast')"
            :class="{ active: pickPeriod.indexOf('breakfast') > -1 }"
          >
            早餐
          </div>
          <div
            @click="activePeriod('lunch')"
            :class="{ active: pickPeriod.indexOf('lunch') > -1 }"
          >
            午餐
          </div>
          <div
            @click="activePeriod('dinner')"
            :class="{ active: pickPeriod.indexOf('dinner') > -1 }"
          >
            晚餐
          </div>
          <div
            @click="activePeriod('noontea')"
            :class="{ active: pickPeriod.indexOf('noontea') > -1 }"
          >
            下午茶
          </div>
          <div
            @click="activePeriod('nightmeal')"
            :class="{ active: pickPeriod.indexOf('nightmeal') > -1 }"
          >
            宵夜
          </div>
        </div>
      </div>
    </div>
    <div class="week">
      <div class="tip">
        <prefix-modal />
        <div class="title">口味选择</div>
      </div>
      <div class="weekday period-order-content">
        <div class="choose-period">
          <div
            @click="activeWeekDay('mon')"
            :class="{ active: pickWeekDay.indexOf('mon') > -1 }"
          >
            周一
          </div>
          <div
            @click="activeWeekDay('tue')"
            :class="{ active: pickWeekDay.indexOf('tue') > -1 }"
          >
            周二
          </div>
          <div
            @click="activeWeekDay('web')"
            :class="{ active: pickWeekDay.indexOf('web') > -1 }"
          >
            周三
          </div>
          <div
            @click="activeWeekDay('thu')"
            :class="{ active: pickWeekDay.indexOf('thu') > -1 }"
          >
            周四
          </div>
          <div
            @click="activeWeekDay('fri')"
            :class="{ active: pickWeekDay.indexOf('fri') > -1 }"
          >
            周五
          </div>
        </div>
        <div class="choose-period">
          <div
            @click="activeWeekDay('sat')"
            :class="{ active: pickWeekDay.indexOf('sat') > -1 }"
          >
            周六
          </div>
          <div
            @click="activeWeekDay('sun')"
            :class="{ active: pickWeekDay.indexOf('sun') > -1 }"
          >
            周日
          </div>
        </div>
      </div>
    </div>
    <div class="footer">保存</div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import TopModal from "@/components/TopModal";
import PrefixModal from "@/components/PrefixModal";

export default {
  name: "Tastes",
  data() {
    return {
      pickPeriod: ["breakfast", "lunch"],
      pickWeekDay: ["mon"],
      switchStats: "off",
      d: "M13.9 34.15Q9.65 34.15 6.7 31.2Q3.75 28.25 3.75 24Q3.75 19.75 6.7 16.8Q9.65 13.85 13.9 13.85H34.1Q38.35 13.85 41.3 16.8Q44.25 19.75 44.25 24Q44.25 28.2 41.3 31.175Q38.35 34.15 34.1 34.15ZM13.9 29.05Q16.05 29.05 17.5 27.6Q18.95 26.15 18.95 24Q18.95 21.85 17.5 20.4Q16.05 18.95 13.9 18.95Q11.8 18.95 10.3 20.4Q8.8 21.85 8.8 24Q8.8 26.15 10.3 27.6Q11.8 29.05 13.9 29.05Z",
    };
  },
  methods: {
    activePeriod(period) {
      let indexPick = this.pickPeriod.indexOf(period);
      if (indexPick > -1) {
        this.pickPeriod.splice(indexPick, 1);
      } else {
        this.pickPeriod.push(period);
      }
    },
    activeWeekDay(weekday) {
      let indexPick = this.pickWeekDay.indexOf(weekday);
      if (indexPick > -1) {
        this.pickWeekDay.splice(indexPick, 1);
      } else {
        this.pickWeekDay.push(weekday);
      }
    },
    switchTips() {
      this.switchStats = this.switchStats == "on" ? "off" : "on";
      this.d =
        this.switchStats == "on"
          ? "M13.9 34.15Q9.65 34.15 6.7 31.2Q3.75 28.25 3.75 24Q3.75 19.75 6.7 16.8Q9.65 13.85 13.9 13.85H34.1Q38.35 13.85 41.3 16.8Q44.25 19.75 44.25 24Q44.25 28.2 41.3 31.175Q38.35 34.15 34.1 34.15ZM34.1 29.05Q36.2 29.05 37.7 27.6Q39.2 26.15 39.2 24Q39.2 21.85 37.7 20.4Q36.2 18.95 34.1 18.95Q31.95 18.95 30.5 20.4Q29.05 21.85 29.05 24Q29.05 26.15 30.5 27.6Q31.95 29.05 34.1 29.05Z"
          : "M13.9 34.15Q9.65 34.15 6.7 31.2Q3.75 28.25 3.75 24Q3.75 19.75 6.7 16.8Q9.65 13.85 13.9 13.85H34.1Q38.35 13.85 41.3 16.8Q44.25 19.75 44.25 24Q44.25 28.2 41.3 31.175Q38.35 34.15 34.1 34.15ZM13.9 29.05Q16.05 29.05 17.5 27.6Q18.95 26.15 18.95 24Q18.95 21.85 17.5 20.4Q16.05 18.95 13.9 18.95Q11.8 18.95 10.3 20.4Q8.8 21.85 8.8 24Q8.8 26.15 10.3 27.6Q11.8 29.05 13.9 29.05Z";
    },
  },
  created() {},
  components: {
    TopModal,
    PrefixModal,
  },
  computed: {
    ...mapState(["tasteRegion"]),
  },
};
</script>

<style scoped lang="scss">
.order-manual {
  .order-manual-tips {
    margin: 3.5rem 1rem 0 1rem;
    border: 1px solid #f37626;
    border-radius: 0.5rem;
    line-height: 1.3rem;
    background-color: #fef1e9;
    padding: 0.5rem 0.5rem;
    color: #f37626;
    font-size: 0.9rem;
  }

  .tip {
    margin-bottom: 1rem;
    .title {
      margin-left: 0.8rem;
      font-weight: 800;
    }
  }

  .period-order,
  .week {
    margin-bottom: 1rem;
    margin: 1rem 3rem;
  }

  .period-order-content {
    display: flex;
    flex-direction: column;
    .choose-period {
      margin: 0.5rem 0;
      display: flex;
      flex-direction: row;
      gap: 1rem;

      div {
        width: 5rem;
        height: 2rem;
        line-height: 2rem;
        justify-content: center;
        align-items: left;
        text-align: center;
        border-radius: 0.5rem;
      }
    }
  }

  .active {
    border: 1px solid #f37626;
    border-radius: 0.5rem;
    color: #f37626;
    font-weight: 400;
    background-color: #f37626;
    color: #fff;
  }

  .footer {
    border: 1px solid #f37626;
    position: fixed;
    bottom: 1rem;
    left: 2rem;
    right: 2rem;
    height: 3.5rem;
    border-radius: 0.5rem;
    text-align: center;
    line-height: 3.5rem;
    font-weight: 800;
    color: #fff;
    background-color: #f37626;
  }
}
</style>
