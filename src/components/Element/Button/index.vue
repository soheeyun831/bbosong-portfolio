<template>
  <button
    type="button"
    class="btn"
    :class="{ disabled: disabled }"
    :disabled="disabled"
    @click="handleClick"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "SButton",
  props: {
    disabled: Boolean
  },
  methods: {
    handleClick(event) {
      this.$emit("click", event);
    }
  }
};
</script>

<style lang="scss">
@import "../../../assets/scss/color";

.btn {
  height: 44px;
  padding: {
    left: 12px;
    right: 12px;
  };
  color: $basic-color;
  font-size: 15px;
  border: solid 1px $cloud-color;
  border-radius: 6px;
  background-color: $white-color;
  box-sizing: border-box;
  transition: all 300ms;
  cursor: pointer;
  &:hover {
    background-color: #eeeeee;
    border: 1px solid #eeeeee;
  }
}
</style>
