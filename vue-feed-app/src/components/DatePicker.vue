<template>
  <div>
    <div class="date-pick">
      <ul class="pick-date">
        <li v-for="(item, index) in pickDates" :key="index">
          <p>{{ item.date }}</p>
          <p v-if="index == nowDay" class="pick-date-pick">
            {{ item.day }}
          </p>
          <p v-else @Click="pickDate(index)">
            {{ item.day }}
          </p>
        </li>
      </ul>
      <ul class="pick-date-more" v-show="show">
        <li v-for="(item, index) in pickMoreDates" :key="index">
          <p>{{ item.date }}</p>
          <p>{{ item.day }}</p>
        </li>
      </ul>
      <div class="show-more-date">
        <img
          v-show="!show"
          src="@/assets/chevron-down-outline.svg"
          alt=""
          @click="showMoreDate()"
        />
        <img
          v-show="show"
          src="@/assets/chevron-up-outline.svg"
          alt=""
          @click="showMoreDate()"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DatePicker",
  data() {
    return {
      show: false,
      showImg: "",
      nowDay: 0,
      pickDates: [],
      pickMoreDates: [],
      dayMapCn: ["日", "一", "二", "三", "四", "五", "六"],
    };
  },
  created() {
    this.initDates();
  },
  methods: {
    initDates() {
      const nowDate = new Date();
      let nowDay = nowDate.getDay();
      this.nowDay = nowDay;
      let j = 0;
      while (j <= nowDay) {
        this.getPickDates(-j);
        j++;
      }
      while (nowDay > 0) {
        this.getPickDates(nowDay);
        nowDay--;
      }
      this.pickDates.sort((a, b) => a.date - b.date);
      this.pickMoreDates.sort((a, b) => a.date - b.date);
    },
    pickDate(day) {
      this.nowDay = day;
    },
    getPickDates(n) {
      let countMiles = 24 * 60 * 60 * 1000 * n;
      let nextCountMiles = 24 * 60 * 60 * 1000 * 7;
      var curDate = new Date();
      var preDate = new Date(curDate.getTime() + countMiles);
      var sufDate = new Date(curDate.getTime() + countMiles + nextCountMiles);
      var preDateInfo = {
        date:
          preDate.getDate() < 10 ? "0" + preDate.getDate() : preDate.getDate(),
        day: this.dayMapCn[preDate.getDay()],
      };
      var sufDateInfo = {
        date:
          sufDate.getDate() < 10 ? "0" + sufDate.getDate() : sufDate.getDate(),
        day: this.dayMapCn[sufDate.getDay()],
      };
      this.pickDates.push(preDateInfo);
      this.pickMoreDates.push(sufDateInfo);
    },
    showMoreDate() {
      this.show = !this.show;
    },
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
.date-pick {
  margin: 10px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-weight: 500;
  gap: 10px;

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

  .pick-date-more {
    color: lightgray;
  }

  .pick-date-pick {
    border-radius: 5px;
    background-color: darkorange;
    color: #fff;
  }
}
</style>
