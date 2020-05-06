<template>
  <div class="portfolio-page-wrap">
    <div class="container">
      <PageHeader :title="portfolioData.title">

      </PageHeader>
      <article>
        <Article title="Info">
          <dl class="info-description-item clfix">
            <dt class="info-description-title">
              개발 기간
            </dt>
            <dd class="info-description-description">
              {{setWorkDate()}}
            </dd>
          </dl>
        </Article>
      </article>
      <div>
        {{ portfolioData }}
      </div>
    </div>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from "vuex";
  import PageHeader from "../../../components/PageHeader";
  import Article from "../../../components/Article";

  export default {
    name: "index",
    components: {
      PageHeader,
      Article
    },
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
    },
    methods: {
      setWorkDate() {

      }
    }
  };
</script>

<style scoped></style>
