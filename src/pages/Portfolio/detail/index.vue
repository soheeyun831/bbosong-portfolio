<template>
  <div class="portfolio-page-wrap">
    <div class="container">
      <PageHeader :title="portfolioData.title"></PageHeader>
      <article class="pb-70">
        <Article title="Info">
          <dl class="info-description-item clfix">
            <dt class="info-description-title">
              개발 기간
            </dt>
            <dd class="info-description-description">
              {{ setWorkDate() }}
            </dd>
          </dl>
          <dl class="info-description-item clfix">
            <dt class="info-description-title">
              담당 업무
            </dt>
            <dd class="info-description-description">
              <span
                v-for="(item, ind) in portfolioData.type"
                :key="`type-${ind}`"
              >
                {{ item.type_nm }} {{ item.part }}%
                {{ ind + 1 === portfolioData.type.length ? "" : ", " }}
              </span>
            </dd>
          </dl>
          <dl class="info-description-item clfix">
            <dt class="info-description-title">
              개발 언어
            </dt>
            <dd class="info-description-description">
              <span
                v-for="(item, ind) in portfolioData.skill"
                :key="`type-${ind}`"
              >
                {{ item }}
                {{ ind + 1 === portfolioData.skill.length ? "" : ", " }}
              </span>
            </dd>
          </dl>
          <dl
            v-if="portfolioData.link.length > 0"
            class="info-description-item clfix"
          >
            <dt class="info-description-title">
              링크
            </dt>
            <dd class="info-description-description">
              <span
                class="block"
                v-for="(item, index) in portfolioData.link"
                :key="`url-${index}`"
              >
                <a :href="item.url" target="_blank">{{ item.url }}</a>
                {{ item.state ? `(${item.state})` : "" }}
              </span>
            </dd>
          </dl>
          <dl class="info-description-item clfix" v-if="portfolioData.memo">
            <dt class="info-description-title">
              기타 사항
            </dt>
            <dd class="info-description-description">
              {{ portfolioData.memo }}
            </dd>
          </dl>
        </Article>
      </article>
      <article v-if="portfolioData.link.length > 0">
        <Article title="view">
          <iframe
            class="portfolio-view"
            title="Inline Frame Example"
            :src="portfolioData.link[0].url"
          ></iframe>
        </Article>
      </article>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
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
      const startDate = this.$moment(this.portfolioData.start_date).format(
        "YYYY년 MM월 DD일"
      );
      const endDate = this.portfolioData.end_date
        ? this.$moment(this.portfolioData.end_date)
        : "재직중";
      return `${startDate} ~ ${endDate}`;
    }
  }
};
</script>

<style lang="scss" scoped>
.portfolio-view {
  width: 100%;
  min-height: 500px;
  border: 1px solid #dddddd;
  border-radius: 6px;
}
</style>
