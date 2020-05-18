<template>
  <div ref="main" class="main-page-wrap">
    <div class="main-side-right">
      <ul class="article-list">
        <li
          class="article-item"
          v-for="(item, index) in article"
          :key="`side-right-${index}`"
          :class="{ focus: item.focus }"
          :aria-label="item.label"
          @click="goArticle(item)"
        >
          <div class="eyes cf">
            <div class="eye eye-right"></div>
            <div class="eye eye-left"></div>
          </div>
          <div class="shy-circles cf">
            <div class="shy shy-left"></div>
            <div class="shy shy-right"></div>
          </div>
          <div class="mouth"></div>
        </li>
      </ul>
    </div>
    <div class="container">
      <article
        class="main-article main-greeting"
        v-waypoint="{
          active: true,
          callback: mainWaypoint,
          options: intersectionOptions,
        }"
      >
        <vue-typed-js :strings="strings" :type-speed="30">
          <h1><span class="typing"></span></h1>
        </vue-typed-js>
        <div class="typed-element not-show">
          <h1 style="opacity: 0;" v-html="strings"></h1>
        </div>
        <article class="main-image">
          <div class="image"></div>
        </article>
      </article>
      <article
        ref="introduction"
        class="main-article border-bottom"
        v-waypoint="{
          active: true,
          callback: introductionWaypoint,
          options: intersectionOptions,
        }"
      >
        <transition
          name="fade"
          enter-active-class="fadeInUp"
          leave-active-class="fadeOutDown"
        >
          <Article title="i am" v-show="article.introduction.visible">
            <p class="pb-20" v-html="main.introduction"></p>
            <s-button @click="downloadResume">
              이력서 다운로드
            </s-button>
          </Article>
        </transition>
      </article>
      <article
        ref="career"
        class="main-article border-bottom"
        v-waypoint="{
          active: true,
          callback: careerWaypoint,
          options: intersectionOptions,
        }"
      >
        <transition
          name="fade"
          enter-active-class="fadeInUp"
          leave-active-class="fadeOutDown"
        >
          <div v-show="article.career.visible">
            <h2 class="article-title">
              경력
            </h2>
            <CardList>
              <CardItem
                v-for="item in main.career"
                :key="item.no"
                :item="item"
                :link="'careerDetail'"
              ></CardItem>
            </CardList>
          </div>
        </transition>
      </article>
      <article
        ref="skills"
        class="main-article"
        v-waypoint="{
          active: true,
          callback: skillWaypoint,
          options: intersectionOptions,
        }"
      >
        <transition
          name="fade"
          enter-active-class="fadeInUp"
          leave-active-class="fadeOutDown"
        >
          <Article title="Skills" v-show="article.skill.visible">
            <ul>
              <li v-for="(item, index) in main.skill" :key="item.no">
                <StatusBar
                  :text="item.name"
                  :percent="item.ability"
                  :index="index"
                />
              </li>
            </ul>
          </Article>
        </transition>
      </article>
    </div>
    <div class="main-portfolio">
      <article
        ref="portfolio"
        class="container"
        v-waypoint="{
          active: true,
          callback: portfolioWaypoint,
          options: intersectionOptions,
        }"
      >
        <transition
          name="fade"
          enter-active-class="fadeInUp"
          leave-active-class="fadeOutDown"
        >
          <div v-show="article.portfolio.visible">
            <h2 class="article-title">
              <router-link to="/portfolio">
                PORTFOLIO
                <span class="more"
                  ><img
                    src="../assets/images/control/arrow-small-next.png"
                    alt="더보기"
                /></span>
              </router-link>
            </h2>
            <CardList>
              <CardItem
                v-for="item in main.portfolio.slice(0, 6)"
                :key="item.no"
                :item="item"
                :link="'portfolioDetail'"
              ></CardItem>
            </CardList>
          </div>
        </transition>
      </article>
    </div>
    <div class="container">
      <article
        ref="faq"
        class="main-article border-bottom"
        v-waypoint="{
          active: true,
          callback: faqWaypoint,
          options: intersectionOptions,
        }"
      >
        <transition
          name="fade"
          enter-active-class="fadeInUp"
          leave-active-class="fadeOutDown"
        >
          <Article title="FAQ" v-show="article.faq.visible">
            <ToggleMessage :list="main.faq" />
          </Article>
        </transition>
      </article>
    </div>
    <div class="main-contact container">
      <article
        ref="contact"
        class="main-article main-contact"
        v-waypoint="{
          active: true,
          callback: contactWaypoint,
          options: intersectionOptions,
        }"
      >
        <transition
          name="fade"
          enter-active-class="fadeInUp"
          leave-active-class="fadeOutDown"
        >
          <div v-show="article.contact.visible">
            <div></div>
            <div class="contact-body">
              <router-link class="contact-image" to="/contact"></router-link>
              <div class="contact-introduction">
                <h5>
                  안녕하세요<br />
                  이제 곧 3년차 프론트엔드 개발자 윤소희입니다.
                </h5>
                <p>
                  ui/ux에 대한 높은 이해도와 밝은 성격,<br />
                  커뮤니케이션이 탑재된 저에게<br />
                  관심이 생기신 분들은 아래 버튼을 눌러주세요 :)
                </p>
                <router-link to="/contact">
                  <s-button>
                    Want to work with me?
                  </s-button>
                </router-link>
              </div>
              <div class="contact-info">
                <ul>
                  <li>
                    <p class="tit">Where i live</p>
                    <p class="body">Gangdong-gu, Seoul, Republic of Korea</p>
                  </li>
                  <li>
                    <p class="tit">Give me a call</p>
                    <p class="body">T. +82 (0)10 2504 2452</p>
                  </li>
                  <li>
                    <p class="tit">Or, why don’t you email me?</p>
                    <p class="body">
                      <a href="mailto:sul831@naver.com">sul831@naver.com</a>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </transition>
      </article>
    </div>
  </div>
</template>

<script>
import SButton from "../components/Element/Button/index";

require("vue2-animate/dist/vue2-animate.min.css");
import { mapGetters } from "vuex";
import { VueTypedJs } from "vue-typed-js";
import { saveAs } from "file-saver";
import Article from "../components/Article";
import CardList from "../components/Card/List";
import CardItem from "../components/Card/Item";
import StatusBar from "../components/StatusBar";
import ToggleMessage from "../components/ToggleMessage/List";
import { scrollTo } from "../utils/scroll-to";

export default {
  name: "index",
  components: {
    SButton,
    Article,
    CardList,
    CardItem,
    VueTypedJs,
    StatusBar,
    ToggleMessage,
  },
  computed: {
    ...mapGetters(["main"]),
  },
  data() {
    return {
      strings: [
        "A third-year skilled front-end developer 💻<br/>Area of expertise<br/>: vue.js / javascript (es5,6) / css(3) / html (5)",
      ],
      intersectionOptions: {
        root: null,
        thresholds: [0, 1],
      }, // https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
      article: {
        main: {
          visible: false,
          focus: false,
          label: "Main",
        },
        introduction: {
          visible: false,
          focus: false,
          label: "Introduction",
        },
        career: {
          visible: false,
          focus: false,
          label: "Career",
        },
        skill: {
          visible: false,
          focus: false,
          label: "Skills",
        },
        portfolio: {
          visible: false,
          focus: false,
          label: "Portfolio",
        },
        faq: {
          visible: false,
          focus: false,
          label: "Faq",
        },
        contact: {
          visible: false,
          focus: false,
          label: "Contact",
        },
      },
    };
  },
  methods: {
    mainWaypoint({ going }) {
      this.onWaypoint(going, "main");
    },
    introductionWaypoint({ going }) {
      this.onWaypoint(going, "introduction");
    },
    careerWaypoint({ going }) {
      this.onWaypoint(going, "career");
    },
    skillWaypoint({ going }) {
      this.onWaypoint(going, "skill");
    },
    portfolioWaypoint({ going }) {
      this.onWaypoint(going, "portfolio");
    },
    faqWaypoint({ going }) {
      this.onWaypoint(going, "faq");
    },
    contactWaypoint({ going }) {
      this.onWaypoint(going, "contact");
    },
    onWaypoint(going, type) {
      if (going === "in") {
        this.article[type].visible = true;
        this.article[type].focus = true;
      } else {
        this.article[type].focus = false;
      }
    },
    downloadResume() {
      const url =
        "http://bbosongbbosong.com/portfolio/assets/files/SoheeYun-resume.doc";
      saveAs(url, "test.doc");
    },
    goArticle(article) {
      const positionTop =
        article === "Main"
          ? 0
          : this.$refs[article.label.toLowerCase()].getBoundingClientRect()
              .top +
            window.pageYOffset -
            80;
      scrollTo(positionTop, 300);
    },
  },
};
</script>

<style lang="scss">
@import "../assets/scss/color";

.main-page-wrap {
  width: 100%;
  padding-top: 110px;

  .main-side-right {
    position: fixed;
    right: 34px;
    z-index: 10;

    .article-list {
      width: 20px;
      position: relative;

      .article-item {
        width: 20px;
        height: 20px;
        position: relative;
        z-index: 2;
        margin-bottom: 12px;
        box-sizing: border-box;
        border: 2px solid $light-cloud-color;
        border-radius: 100%;
        -moz-border-radius: 100%;
        -webkit-border-radius: 100%;
        background-color: $white-color;
        cursor: pointer;

        &:hover,
        &.focus {
          border: none;
          background: #fdda5f;
          -webkit-box-shadow: inset -1px -2px 0 0 #fd9744;
          -moz-box-shadow: inset -1px -2px 0 0 #fd9744;
          box-shadow: inset -1px -2px 0 0 #fd9744;
          position: relative;

          .cf {
            &.eyes {
              width: 50%;
              margin: 0 auto;
              position: relative;
              top: 6px;

              .eye {
                width: 2px;
                height: 2px;
                background: $basic-color;
                border-radius: 100%;
                -moz-border-radius: 100%;
                -webkit-border-radius: 100%;

                &.eye-right {
                  float: right;
                }

                &.eye-left {
                  float: left;
                }
              }
            }

            &.shy-circles {
              width: 80%;
              margin: 0 auto;
              position: relative;
              top: 6px;

              .shy {
                width: 4px;
                height: 4px;
                border-radius: 100%;
                -moz-border-radius: 100%;
                -webkit-border-radius: 100%;
                background: $primary-color;

                &.shy-right {
                  float: right;
                }

                &.shy-left {
                  float: left;
                }
              }
            }

            &:after {
              content: "";
              clear: both;
              display: table;
            }
          }

          .mouth {
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background: transparent;
            border-bottom: 2px solid $basic-color;
            position: absolute;
            left: 50%;
            top: 5px;
            -webkit-transform: translateX(-50%);
            -moz-transform: translateX(-50%);
            -ms-transform: translateX(-50%);
            -o-transform: translateX(-50%);
          }
        }

        &:before,
        &:after {
          position: absolute;
          opacity: 0;
          transition: 100ms;
        }

        &:before {
          content: "";
          top: 5px;
          right: 20px;
          border: solid 6px transparent;
          border-left-color: $primary-color;
        }

        &:after {
          height: 20px;
          content: attr(aria-label);
          top: 2px;
          right: 30px;
          padding: 0 0.75rem;
          color: white;
          font-size: 13px;
          line-height: 20px;
          border-radius: 3px;
          background-color: $primary-color;
        }

        &:hover {
          background: $light-on-color;
          -webkit-box-shadow: inset -1px -2px 0 0 $on-color;
          -moz-box-shadow: inset -1px -2px 0 0 $on-color;
          box-shadow: inset -1px -2px 0 0 $on-color;
          &:before,
          &:after {
            opacity: 1;
          }
        }
      }

      &:before {
        content: " ";
        z-index: 0;
        width: 2px;
        height: 100%;
        position: absolute;
        left: 50%;
        margin-left: -1px;
        background-color: $light-cloud-color;
      }
    }
  }

  .main-article {
    width: 100%;
    position: relative;
    padding-top: 70px;

    &.border-bottom {
      border-bottom: 1px solid #dddddd;
      padding-bottom: 70px;
    }

    &.main-contact {
      padding-bottom: 30px;

      .contact-body {
        display: flex;

        .contact-image {
          flex: 1;
          margin-right: 30px;
          background-image: url(../assets/images/main-contact-image.png);
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center center;
          box-sizing: border-box;
        }

        .contact-introduction {
          flex: 1;
          color: $basic-color;
          line-height: 1.43;

          h5 {
            margin-bottom: 8px;
            font-size: 16px;
          }

          p {
            margin-bottom: 20px;
            font-size: 14px;
          }
        }

        .contact-info {
          flex: 1;

          ul {
            li {
              padding-bottom: 20px;

              .tit {
                padding-bottom: 8px;
                color: $gray-color;
              }

              .body {
                color: $basic-color;
              }
            }
          }
        }
      }
    }
  }

  h2.article-title {
    position: relative;
    padding-bottom: 30px;
    font-size: 28px;
    text-align: center;
    line-height: 28px;
    letter-spacing: -0.4px;

    .more {
      position: absolute;
      right: 0;
      font-size: 16px;
      font-weight: 400;
      line-height: 28px;

      img {
        width: 16px;
        height: 16px;
        display: inline-block;
        padding-left: 4px;
        line-height: 28px;
        vertical-align: middle;
      }

      &:before {
        content: "더보기";
      }
    }
  }

  p.main-sub-title {
    padding-bottom: 60px;
    color: $gray-color;
    font-size: 15px;
    text-align: center;
  }

  .main-greeting {
    padding-top: 0;
    padding-bottom: 100px;

    .typed-element {
      width: 100%;
      position: absolute;
      top: 0;
      font-weight: 100;
      font-family: "Russo", cursive;
      line-height: 1.43;
      word-break: break-all;
      transition: all 300ms;

      h1 {
        width: max-content;
        max-width: 100%;
        color: #191919;
        font-size: 46px;

        &:hover {
          color: #df405a;
          filter: drop-shadow(10px 10px 0px rgba(0, 0, 0, 0.1));
          transition: all 300ms;
        }
      }

      &.not-show {
        opacity: 0;
        position: relative;
        padding-bottom: 100px;
      }
    }

    .main-image {
      width: 100%;
      padding-bottom: 43%;
      position: relative;
      overflow: hidden;

      .image {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        background-image: url(../assets/images/main-image.gif);
        background-size: auto 50%;
      }
    }
  }

  .main-portfolio {
    margin-top: 70px;
    padding-top: 70px;
    padding-bottom: 70px;
    background-color: $white-background-color;
  }
}

@media (max-width: 1680px) {
  .main-page-wrap {
    .main-greeting .typed-element h1 {
      font-size: 42px;
    }
  }
}

@media (max-width: 1440px) {
  .main-page-wrap {
    .main-greeting .typed-element h1 {
      font-size: 40px;
    }
  }
}

@media (max-width: 1366px) {
  .main-page-wrap {
    padding-top: 100px;

    .main-greeting .typed-element h1 {
      font-size: 38px;
    }
  }
}

@media (max-width: 1280px) {
  .main-page-wrap {
    padding-top: 90px;

    .main-greeting .typed-element h1 {
      font-size: 35px;
    }

    .main-article {
      &.main-contact {
        .contact-body {
          .contact-image {
            display: none;
          }
        }
      }
    }
  }
}

@media (max-width: 1024px) {
  .main-page-wrap {
    padding-top: 80px;

    .main-greeting .typed-element h1 {
      font-size: 28px;
    }
  }
}

@media (max-width: 890px) {
  .main-page-wrap {
    .main-side-right {
      display: none;
    }

    h2.article-title {
      .more {
        right: auto;
        margin-top: -2px;

        &:before {
          content: "";
        }
      }
    }

    .main-article {
      &.main-contact {
        padding-bottom: 30px;

        .contact-body {
          padding-top: 30px;
          display: block;

          .contact-image {
            display: none;
          }

          .contact-introduction {
            flex: none;
            padding-bottom: 50px;

            h5 {
              margin-bottom: 8px;
              font-size: 24px;
            }

            p {
              margin-bottom: 20px;
              font-size: 16px;
            }
          }

          .contact-info {
            flex: none;
          }
        }
      }
    }
  }
}

@media (max-width: 550px) {
  .main-page-wrap {
    padding-top: 60px;

    .main-greeting .typed-element h1 {
      font-size: 24px;
    }

    .main-article {
      &.main-contact {
        .contact-body {
          padding-top: 20px;

          .contact-introduction {
            letter-spacing: -0.5px;

            h5 {
              font-size: 18px;
            }

            p {
              font-size: 14px;
            }
          }

          .contact-info {
          }
        }
      }
    }
  }
}
</style>
