<template>
  <ul class="card-list clfix">
    <slot></slot>
  </ul>
</template>

<script>
  export default {
    name: "index"
  };
</script>

<style lang="scss">
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
