<template>
  <div
    :ref="`faq-${item.no}`"
    :key="item.no"
    class="toggle-message-item"
    :class="{ on: activeItem === item.no }"
  >
    <p class="title" @click="showItem(item)">
      {{ item.title }}
    </p>
    <!-- eslint-disable vue/no-v-html -->
    <div class="answer-detail" v-html="item.content"></div>
  </div>
</template>

<script>
export default {
  name: "index",
  props: {
    item: {
      type: Object,
      default: undefined
    },
    activeItem: {
      type: Number,
      default: 0
    }
  },
  methods: {
    showItem(item) {
      this.$emit("showItem", item);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/color";

.toggle-message-item {
  .title {
    height: 65px;
    padding-left: 16px;
    padding-right: 36px;
    color: $basic-color;
    font-size: 16px;
    line-height: 65px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
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

@media (max-width: 890px) {

  .toggle-message-item {
    .title {
      height: 60px;
      font-size: 16px;
      line-height: 60px;
    }
  }
}

@media (max-width: 550px) {

  .toggle-message-item {
    .title {
      height: 42px;
      font-size: 14px;
      line-height: 42px;
    }
  }
}
</style>
