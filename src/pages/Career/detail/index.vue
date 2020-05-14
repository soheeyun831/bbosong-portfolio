<template>
  <div class="career-page-wrap">
    <div v-if="careerData" class="container">
      <PageHeader :title="careerData.title">
        <label
          class="logo"
          slot="label"
          :style="{
            'background-image': `url(${require('@/assets/images/' +
              careerData.logo)})`,
          }"
        ></label>
        {{ careerData.info }}
      </PageHeader>
      <article>
        <Article title="Info">
          <dl class="info-description-item clfix">
            <dt class="info-description-title">
              근무 기간
            </dt>
            <dd class="info-description-description">
              {{ setCareerDate() }}
            </dd>
          </dl>
          <dl class="info-description-item clfix">
            <dt class="info-description-title">
              담당 업무
            </dt>
            <dd class="info-description-description">
              {{ careerData.business.text }}
              <ul
                v-if="
                  careerData.business.detail &&
                  careerData.business.detail.length > 0
                "
              >
                <li
                  v-for="(item, index) in careerData.business.detail"
                  :key="`careerBusiness-${index}`"
                >
                  <b>{{ index + 1 }}. {{ item.text }}</b
                  ><br />
                  {{ item.info }}
                  <span>개발언어 : {{ item.lang }}</span>
                  <span
                    >링크 :
                    <!-- eslint-disable vue/no-use-v-if-with-v-for,vue/no-confusing-v-for-v-if -->
                    <span
                      class="link"
                      v-if="item.link && item.link.length > 0"
                      v-for="(obj, index) in item.link"
                      :key="`url-${index}`"
                    >
                      <a :href="obj.url" target="_blank">
                        {{ obj.url }}
                      </a>
                      {{ obj.state ? `(${obj.state})` : "" }}
                    </span>
                  </span>
                </li>
              </ul>
            </dd>
          </dl>
          <dl
            v-if="careerData.resign.status"
            class="info-description-item clfix"
          >
            <dt class="info-description-title">
              퇴사 사유
            </dt>
            <dd class="info-description-description">
              {{ careerData.resign.reason }}
            </dd>
          </dl>
        </Article>
      </article>
      <article class="career_map">
        <DaumMap :center.sync="careerData.latLng"></DaumMap>
      </article>
      <article>
        <h2 class="article-title">
          PORTFOLIO
        </h2>
        <CardList>
          <CardItem
            v-for="item in careerData.portfolio"
            :key="item.no"
            :item="item"
            :link="'portfolioDetail'"
          ></CardItem>
        </CardList>
      </article>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import PageHeader from "../../../components/PageHeader";
import Article from "../../../components/Article";
import DaumMap from "../../../components/DaumMap";
import CardList from "../../../components/Card/List";
import CardItem from "../../../components/Card/Item";

export default {
  name: "index",
  components: {
    PageHeader,
    Article,
    DaumMap,
    CardList,
    CardItem,
  },
  computed: {
    ...mapActions("career", ["setCareerData"]),
    ...mapGetters(["careerData"]),
  },
  created() {
    this.$store.dispatch("career/setCareerData", Number(this.$route.params.no));
  },
  methods: {
    setCareerDate() {
      const startDate = this.$moment(this.careerData.start_date).format(
        "YYYY년 MM월 DD일"
      );
      const endDate = this.careerData.end_date
        ? this.$moment(this.careerData.end_date).format("YYYY년 MM월 DD일")
        : "재직중";
      return `${startDate} ~ ${endDate}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.career_full_image {
  width: 100%;
  height: 320px;
  margin-top: 100px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
}

.career_map {
  width: 100%;
  margin-top: 70px;
  margin-bottom: 70px;
}
</style>
