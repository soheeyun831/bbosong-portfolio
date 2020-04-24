<template>
  <div class="portfolio-page-wrap">
    <div class="container">
      <h2>Portfolio detail no:{{ this.$route.params.no }}</h2>
      <div>
        {{ portfolioData }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "index",
  computed: {
    ...mapActions("portfolio", ["setPortfolioData"]),
    ...mapGetters(["portfolioData"])
  },
  created() {
    this.$store.dispatch(
      "portfolio/setPortfolioData",
      Number(this.$route.params.no)
    );
  },
  mounted() {
    console.log(this.portfolioData);
  }
};
</script>

<style scoped></style>
