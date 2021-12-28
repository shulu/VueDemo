<template>
  <div class="home">
    <home-header />
    <date-order />
  </div>
</template>

<script>
import HomeHeader from "@/components/HomeHeader";
import DateOrder from "@/components/DateOrder";

export default {
  name: "Home",
  components: {
    HomeHeader,
    DateOrder,
  },
};
</script>
