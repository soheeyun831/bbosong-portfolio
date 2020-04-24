<template>
  <div class="portfolio-page-wrap">
    <div class="container">
      Portfolio
      <cardList :card-list="portfolioList"></cardList>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import cardList from "../../../components/Card/List";

export default {
  name: "index",
  components: {
    cardList
  },
  computed: {
    ...mapGetters(["portfolioList"])
  }
};
</script>

<style scoped></style>
