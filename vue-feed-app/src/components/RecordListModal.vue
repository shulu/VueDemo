<template>
  <div class="user-record">
    <div class="record-left">&nbsp;</div>
    <div class="record-title">消费记录</div>
  </div>
  <div class="user-record-list" v-if="recordList.length > 0">
    <div v-for="(item, index) in recordList" :key="index" class="list-part">
      <div class="record-date">
        <p>({{ item.period }})</p>
        <p>{{ item.date }}</p>
      </div>
      <div class="record-money">{{ item.money }}</div>
    </div>
  </div>
  <div v-else class="empty-record-list">
    <img src="@/assets/wallet_no_data_icon.png" alt="" />
    <p>您暂时还没有明细记录哦~</p>
  </div>
</template>
<script>
export default {
  name: "RecordListModal",
  props: ["recordList"],
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.user-record {
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;

  .record-left {
    float: left;
    content: "";
    width: 0.3rem;
    height: 1.1rem;
    min-height: 1rem;
    color: #ff8c00;
    background-color: #ff8c00;
    margin-top: 0.2rem;
    border-top-right-radius: 1rem;
    border-bottom-left-radius: 1rem;
    margin: 1.5rem 0.5rem 1.5rem 1rem;
  }

  .record-title {
    height: 4.1rem;
    line-height: 4.1rem;
    font-size: 1.2rem;
    font-weight: 600;
  }
}

.user-record-list {
  margin: 0 1rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  height: 2rem;

  .record-date {
    float: left;

    p:first-child {
      font-size: 0.9rem;
      font-weight: 800;
    }

    p:last-child {
      font-size: 0.9rem;
      color: gray;
    }
  }

  .record-money {
    color: green;
    line-height: 2rem;
    float: right;
  }
}

.empty-record-list {
  z-index: 9;
  margin: auto;
  position: absolute;
  top: 5rem;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 0.5em;

  img {
    height: 9rem;
    width: 9rem;
  }

  p {
    font-size: 1rem;
    color: gray;
    opacity: 0.8;
  }
}
</style>