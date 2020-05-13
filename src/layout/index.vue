<template>
  <div class="wrap">
    <Header />
    <SideLeft />
    <section class="app-wrap">
      <router-view :key="key"></router-view>
    </section>
    <ScrollTop />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header";
import SideLeft from "./components/Side/left";
import ScrollTop from "./components/ScrollTop";
import Footer from "./components/Footer";

export default {
  name: "index",
  components: {
    Header,
    SideLeft,
    ScrollTop,
    Footer,
  },
  computed: {
    key() {
      return this.$route.path;
    },
  },
};
</script>

<style scoped></style>
