<template>
  <div class="career-page-wrap">
    <div class="container">
      <h2>Career detail no:{{ this.$route.params.no }}</h2>
      <div>
        {{ careerData }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "index",
  computed: {
    ...mapActions("career", ["setCareerData"]),
    ...mapGetters(["careerData"])
  },
  created() {
    this.$store.dispatch("career/setCareerData", Number(this.$route.params.no));
  },
  mounted() {
    console.log(this.careerData);
  }
};
</script>

<style scoped></style>
