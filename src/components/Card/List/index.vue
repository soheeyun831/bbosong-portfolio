<template>
  <ul class="card-list clfix">
    <li class="card-item" v-for="item in cardList" :key="item.no">
      <router-link :to="{ name: 'careerDetail', params: { no: item.no } }">
        <cardItem :item="item" />
      </router-link>
    </li>
  </ul>
</template>

<script>
import cardItem from "../Item";

export default {
  name: "index",
  props: {
    cardList: {
      type: Array,
      default: undefined
    }
  },
  components: { cardItem }
};
</script>

<style lang="scss" scoped>
.card-list {
  .card-item {
    width: calc(33.333% - 8px);
    float: left;
    margin-right: 12px;
    margin-top: 12px;

    &:nth-child(-n + 3) {
      margin-top: 0;
    }

    &:nth-child(3n) {
      margin-right: 0;
    }

    &:nth-child(3n + 1) {
      clear: both;
    }
  }
}

@media (max-width: 890px) {
  .card-list {
    .card-item {
      width: 100%;
      float: none;
      margin-right: 0;
      margin-top: 10px;
      &:nth-child(-n + 3) {
        margin-top: 10px;
      }
      &:first-child {
        margin-top: 0;
      }
    }
  }
}
</style>
