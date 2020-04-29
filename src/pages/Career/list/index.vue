<template>
  <div class="career-page-wrap">
    <div class="container">
      <PageHeader title="Career">
        {{ setToday() }} 기준<br />
        총 경력
        {{ setCareerDate() }}
      </PageHeader>
      <cardList :card-list="careerList"></cardList>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import cardList from "../../../components/Card/List";
import PageHeader from "../../../components/PageHeader";

export default {
  name: "index",
  components: {
    cardList,
    PageHeader
  },
  computed: {
    ...mapGetters(["careerList"])
  },
  methods: {
    setToday() {
      return this.$moment().format("YYYY년 M월 D일");
    },
    setCareerDate() {
      let careerDate = 0;
      this.careerList.forEach(item => {
        const startDate = this.$moment(item.start_date);
        const endDate = item.end_date
          ? this.$moment(item.end_date)
          : this.$moment(new Date());
        careerDate += this.$moment(endDate.diff(startDate, "months"));
      });
      const year = parseInt(careerDate / 12)
        ? `${parseInt(careerDate / 12)}년`
        : "";
      const month = parseInt(careerDate % 12)
        ? `${parseInt(careerDate % 12)}개월`
        : "";
      return `${year} ${month}`;
    }
  }
};
</script>

<style scoped></style>
