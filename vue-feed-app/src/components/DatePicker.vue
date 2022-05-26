<template>
  <div>
    <div class="date-pick">
      <ul class="pick-date">
        <li v-for="(item, index) in pickDates" :key="index">
          <p>{{ item.date }}</p>
          <p v-if="index == nowDay" class="pick-date-pick">
            {{ item.dayCN }}
          </p>
          <p v-else @Click="pickDate(index)">
            {{ item.dayCN }}
          </p>
        </li>
      </ul>
      <ul class="pick-date-more" v-show="show">
        <li v-for="(item, index) in pickMoreDates" :key="index">
          <p>{{ item.date }}</p>
          <p>{{ item.dayCN }}</p>
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
      let countMiles = 24 * 60 * 60 * 1000;
      let nowDay = nowDate.getDay();
      let nextDate = new Date(nowDate.getTime() + 7 * countMiles);
      this.genWeekByDate(nowDate, this.pickDates);
      this.genWeekByDate(nextDate, this.pickMoreDates);
      this.nowDay = nowDay;
    },
    pickDate(day) {
      this.nowDay = day;
    },
    genWeekByDate(date, info) {
      let startDay = date.getDay();
      let countMiles = 24 * 60 * 60 * 1000;
      let j = 0;
      while (j <= startDay) {
        var preDate = new Date(date.getTime() + -j * countMiles);
        var preDateInfo = {
          date:
            preDate.getDate() < 10
              ? "0" + preDate.getDate()
              : preDate.getDate(),
          day: preDate.getDay(),
          dayCN: this.dayMapCn[preDate.getDay()],
        };
        info.push(preDateInfo);
        j++;
      }
      let spareDay = 6 - startDay;
      while (spareDay > 0) {
        preDate = new Date(date.getTime() + spareDay * countMiles);
        preDateInfo = {
          date:
            preDate.getDate() < 10
              ? "0" + preDate.getDate()
              : preDate.getDate(),
          day: preDate.getDay(),
          dayCN: this.dayMapCn[preDate.getDay()],
        };
        info.push(preDateInfo);
        spareDay--;
      }
      info.sort((a, b) => a.day - b.day);
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
