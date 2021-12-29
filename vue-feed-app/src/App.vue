<template>
  <div class="container">
    <div class="toper">Feed Vue</div>
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer";

export default {
  name: "App",
  components: {
    Footer,
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

.container {
  max-width: 375px;
  height: 100%;
  border: 1px solid red;

  .toper {
    max-width: 120px;
    margin: 0 auto;
    padding: 0;
    font-size: 18px;
    border: 1px solid green;
  }
}

.flex {
  flex: 1;
}

.flex-column {
  flex-direction: row;
}

.flex-row {
  flex-direction: column;
}
</style>
