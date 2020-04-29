<template>
  <div class="toggle-message-wrap">
    <ul class="toggle-message-list">
      <li v-for="item in list" :key="item.no">
        <ToggleMessageDetail
          :item="item"
          :activeItem="activeItem"
          @showItem="showItem"
        ></ToggleMessageDetail>
      </li>
    </ul>
  </div>
</template>

<script>
import ToggleMessageDetail from "../Item";

export default {
  name: "index",
  props: {
    list: {
      type: Array,
      default: undefined
    }
  },
  components: {
    ToggleMessageDetail
  },
  data() {
    return {
      activeItem: 0
    };
  },
  methods: {
    showItem(item) {
      if (this.activeItem === item.no) {
        this.activeItem = 0;
      } else {
        this.activeItem = item.no;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/color";

.toggle-message-wrap {
  .toggle-message-list {
    width: 100%;
    border-top: 3px solid $on-color;

    li {
      border-bottom: 1px solid $light-gray-color;
    }
  }
}
</style>
