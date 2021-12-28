<template>
  <div class="date-order">
    <div class="breakfast flex">here order breakfast</div>
    <div class="lunch flex">here order lunch</div>
    <div class="dinner flex">here order dinner</div>
  </div>
</template>

<script>
export default {
  name: "DateOrder",
};
</script>

<style lang="scss" scoped>
.date-order {
  div {
    height: 10vh;
    margin: 10px;
    border: 1px solid red;
    border-radius: 20px;
    box-shadow: 5px 5px 1px 1px rgba(0, 0, 0, 0.15);

    &:first-child {
      background-color: green;
    }

    &:nth-child(2) {
      background-color: blue;
    }

    &:nth-child(3) {
      background-color: red;
    }
  }
}
</style>