<template>
  <div class="career-page-wrap">
    <div v-if="careerData" class="container">
      <PageHeader :title="careerData.title">
        {{ careerData.info }}
      </PageHeader>
      <article>
        <Article title="Info">
          <dl class="info-description-item clfix">
            <dt class="info-description-title">
              근무 기간
            </dt>
            <dd class="info-description-description">
              {{setCareerDate()}}
            </dd>
          </dl>
          <dl class="info-description-item clfix">
            <dt class="info-description-title">
              담당 업무
            </dt>
            <dd class="info-description-description">
              {{careerData.business.text}}
              <ul v-if="careerData.business.detail && careerData.business.detail.length > 0">
                <li v-for="(item,index) in careerData.business.detail" :key="`careerBusiness-${index}`">
                  <b>{{index+1}}. {{item.text}}</b><br/>
                  {{item.info}}
                  <span>개발언어 : {{item.lang}}</span>
                  <span>링크 :
                    <a v-if="item.urls && item.urls.length > 0" v-for="(url, index) in item.urls" :key="`url-${index}`">{{url.link}}</a>
                  </span>
                </li>
              </ul>
            </dd>
          </dl>
          <dl v-if="careerData.resign.status" class="info-description-item clfix">
            <dt class="info-description-title">
              퇴사 사유
            </dt>
            <dd class="info-description-description">
              {{careerData.resign.reason}}
            </dd>
          </dl>
        </Article>
      </article>
      <article class="career_full_image" :style="{
        'background-image': `url(${require('@/assets/images/' +
          careerData.thumbnail)})`,
          'background-color' : careerData.color
      }">
      </article>
      <article>
        <h2 class="article-title">
          PORTFOLIO
        </h2>
        {{careerData.portfolio}}
        <CardList>
          <CardItem v-for="item in careerData.portfolio" :key="item.no" :item="item" :link="'portfolioDetail'"></CardItem>
        </CardList>
      </article>
    </div>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from "vuex";
  import PageHeader from "../../../components/PageHeader";
  import Article from "../../../components/Article";
  import CardList from "../../../components/Card/List";
  import CardItem from "../../../components/Card/Item";

  export default {
    name: "index",
    components: {
      PageHeader,
      Article,
      CardList,
      CardItem
    },
    computed: {
      ...mapActions("career", ["setCareerData"]),
      ...mapGetters(["careerData"])
    },
    created() {
      this.$store.dispatch("career/setCareerData", Number(this.$route.params.no));
    },
    methods: {
      setCareerDate() {
        const startDate = this.$moment(this.careerData.start_date).format('YYYY년 MM월 DD일');
        const endDate = this.careerData.end_date ? this.$moment(this.careerData.end_date) : '재직중';
        return `${startDate} ~ ${endDate}`;
      }
    }
  };
</script>

<style lang="scss" scoped>
  .career_full_image {
    width: 100%;
    height: 320px;
    margin-top: 70px;
    margin-bottom: 70px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
  }
</style>
