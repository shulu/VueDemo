<template>
  <div class="home">
    <Header />
    <date-picker />
    <date-order />
  </div>
</template>

<script>
import Header from "@/components/Header";
import DateOrder from "@/components/DateOrder";
import DatePicker from "@/components/DatePicker.vue";

export default {
  name: "Home",
  components: {
    Header,
    DatePicker,
    DateOrder,
  },
};
</script>
