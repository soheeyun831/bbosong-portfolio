<template>
  <div class="portfolio-page-wrap">
    <div class="container">
      <PageHeader title="Portfolio">
        <span
          v-for="(type, index) in types"
          :key="`type-${index}`"
          :class="{ active: currentType === type }"
          class="tab-item"
          @click="changeListType(type)"
          >{{ type }}</span
        >
      </PageHeader>
      <transition name="slide-fade" mode="out-in" @after-leave="setList">
        <cardList :card-list="portfolioList" v-show="isList"></cardList>
      </transition>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import cardList from "../../../components/Card/List";
import PageHeader from "../../../components/PageHeader";

export default {
  name: "index",
  components: {
    cardList,
    PageHeader
  },
  computed: {
    ...mapActions("portfolio", ["setPortfolioList"]),
    ...mapGetters(["portfolioList"])
  },
  created() {
    this.init();
  },
  data() {
    return {
      types: ["All", "front-end", "back-end", "design"],
      currentType: "All",
      isList: false
    };
  },
  methods: {
    init() {
      this.setList();
    },
    changeListType(type) {
      if (this.currentType !== type) {
        this.isList = false;
        this.currentType = type;
      }
    },
    setList() {
      this.$store.dispatch("portfolio/setPortfolioList", this.currentType);
      this.isList = true;
    }
  }
};
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0.4;
}
</style>
