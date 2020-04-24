<template>
  <div class="faq-wrap">
    <ul class="faq-list">
      <li
        v-for="item in list"
        :ref="`faq-${item.no}`"
        :key="item.no"
        :class="{ on: viewFaq === item.no }"
      >
        <p class="title" @click="showAnswer(item)">
          {{ item.question }}
        </p>
        <!-- eslint-disable vue/no-v-html -->
        <div class="answer-detail" v-html="item.answer"></div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "index",
  props: {
    list: {
      type: Array,
      default: undefined
    }
  },
  data() {
    return {
      viewFaq: 0
    };
  },
  methods: {
    showAnswer(item) {
      if (this.viewFaq === item.no) {
        this.viewFaq = 0;
      } else {
        this.viewFaq = item.no;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/color";

.faq-wrap {
  .faq-list {
    width: 100%;
    border-top: 3px solid $on-color;

    li {
      border-bottom: 1px solid $light-gray-color;

      .title {
        height: 65px;
        padding-left: 39px;
        color: $basic-color;
        font-size: 16px;
        line-height: 65px;
        background-image: url(../../../assets/images/control/toggle-arrow-open.png);
        background-size: 15px 10px;
        background-repeat: no-repeat;
        background-position-x: calc(100% - 13px);
        background-position-y: center;
        cursor: pointer;
      }

      .answer-detail {
        width: 100%;
        height: 0;
        padding: 0 40px 0;
        overflow: hidden;
        color: $basic-color;
        font-size: 14px;
        line-height: 1.86;
        box-sizing: border-box;
        border-color: transparent;
        background-color: $white-cloud-color;
        transition: all 300ms;

        p {
          color: red;
        }

        .image {
          margin-top: 15px;
          margin-bottom: 15px;

          &:first-child {
            margin-top: 0;
          }

          &:last-child {
            margin-bottom: 0;
          }

          img {
            max-width: 100%;
          }
        }
      }

      &.on {
        .title {
          color: $on-color;
          font-weight: bold;
          letter-spacing: -0.1px;
          background-image: url(../../../assets/images/control/toggle-arrow-close.png);
        }

        .answer-detail {
          height: auto;
          padding: 40px 40px 45px;
          border-top: 1px solid $light-gray-color;
          transition: all 300ms;
        }
      }
    }
  }
}
</style>
