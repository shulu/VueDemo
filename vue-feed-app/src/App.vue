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
  max-width: 400px;
  height: 100%;
  background-color: #fff;
  .toper {
    margin: 0 auto;
    padding: 0;
    font-size: 18px;
    text-align: center;
  }
  cursor: pointer;
}

a {
  text-decoration: none;
  text-decoration-color: none;
}
</style>
