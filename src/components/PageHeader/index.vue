<template>
  <div class="page-header">
    <h1 class="page-header-main-copy">
      <slot name="label"></slot>
      {{ title }}
    </h1>
    <p class="page-header-sub-copy">
      <slot></slot>
    </p>
  </div>
</template>

<script>
export default {
  name: "index",
  props: {
    title: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/color";

.page-header {
  width: 100%;
  padding-top: 110px;
  padding-bottom: 70px;

  .page-header-main-copy {
    color: $basic-color;
    font-size: 46px;
    padding-bottom: 20px;

    .logo {
      width: 46px;
      height: 46px;
      display: inline-block;
      vertical-align: bottom;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center center;
    }
  }

  .page-header-sub-copy {
    color: $deep-gray-color;
    font-size: 16px;
    line-height: 1.43;

    .tab-item {
      display: inline-block;
      margin-right: 30px;
      cursor: pointer;

      &:last-child {
        margin-right: 0;
      }

      &.active {
        color: $primary-color;
        text-decoration: underline;
      }
    }
  }
}

@media (max-width: 1680px) {
  .page-header {
    .page-header-main-copy {
      font-size: 42px;

      .logo {
        width: 42px;
        height: 42px;
      }
    }
  }
}

@media (max-width: 1440px) {
  .page-header {
    .page-header-main-copy {
      font-size: 40px;

      .logo {
        width: 40px;
        height: 40px;
      }
    }
  }
}

@media (max-width: 1366px) {
  .page-header {
    padding-top: 100px;

    .page-header-main-copy {
      font-size: 38px;

      .logo {
        width: 38px;
        height: 38px;
      }
    }
  }
}

@media (max-width: 1280px) {
  .page-header {
    padding-top: 90px;

    .page-header-main-copy {
      font-size: 35px;

      .logo {
        width: 34px;
        height: 34px;
      }
    }
  }
}

@media (max-width: 1024px) {
  .page-header {
    padding-top: 80px;

    .page-header-main-copy {
      font-size: 28px;

      .logo {
        width: 28px;
        height: 28px;
      }
    }
  }
}

@media (max-width: 550px) {
  .page-header {
    padding-top: 60px;

    .page-header-main-copy {
      font-size: 24px;

      .logo {
        width: 24px;
        height: 24px;
      }
    }

    .page-header-sub-copy {
      font-size: 14px;

      .tab-item {
        margin-right: 16px;

        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
}
</style>
