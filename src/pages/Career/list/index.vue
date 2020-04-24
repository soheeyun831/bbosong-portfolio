<template>
  <div class="career-page-wrap">
    <div class="container">
      career
      <cardList :card-list="careerList"></cardList>
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
    ...mapGetters(["careerList"])
  }
};
</script>

<style scoped></style>
