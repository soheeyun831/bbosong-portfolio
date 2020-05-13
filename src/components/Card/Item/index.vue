<template>
  <li class="card-item">
    <router-link :to="{ name: link, params: { no: item.no } }">
      <div class="card">
        <div class="card-border">
          <div class="border"></div>
        </div>
        <div class="card-bg"></div>
        <div
          class="card-image"
          :style="{
            'background-image': `url(${require('@/assets/images/' +
              item.thumbnail)})`,
          }"
        ></div>
        <div class="card-text">
          <h5 :data-hover="item.title"></h5>
          <p class="date" :data-hover="setDate()"></p>
        </div>
      </div>
    </router-link>
  </li>
</template>

<script>
export default {
  name: "index",
  props: {
    item: {
      type: Object,
      default: undefined,
    },
    link: {
      type: String,
      default: "",
    },
  },
  methods: {
    setDate() {
      let startDate = this.item.start_date
        ? this.$moment(this.item.start_date).format("YYYY.MM")
        : "";
      let endDate = this.item.end_date
        ? this.$moment(this.item.end_date).format("YYYY.MM")
        : "";

      return `${startDate} ~ ${endDate}`;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/color";

@mixin hoverText {
  width: 100%;
  position: relative;
  top: 0;

  &:before {
    width: 100%;
    content: attr(data-hover);
    position: absolute;
    left: 0;
    transition: top 300ms;
  }
}
@mixin oneLineText {
  overflow: hidden;
  word-wrap: normal;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.card {
  width: 100%;
  height: 0;
  overflow: hidden;
  position: relative;
  padding-bottom: 65%;
  text-align: center;
  background-color: #333333;
  cursor: pointer;

  .card-border {
    width: calc(100% - 24px);
    height: calc(100% - 24px);
    position: absolute;
    z-index: 6;
    left: 12px;
    top: 12px;
    border: none;

    .border {
      width: 100%;
      height: 100%;
      position: relative;
      border: none;
      opacity: 0.4;

      &::after,
      &::before {
        content: "";
        display: block;
        position: absolute;
        width: 0;
        height: 0;
        border: 2px solid;
        transition: all 0.6s ease;
        border-radius: 2px;
      }

      &::after {
        bottom: 0;
        right: 0;
        border-top-color: transparent;
        border-left-color: transparent;
        border-bottom-color: $white-color;
        border-right-color: $white-color;
      }

      &::before {
        top: 0;
        left: 0;
        border-bottom-color: transparent;
        border-right-color: transparent;
        border-top-color: $white-color;
        border-left-color: $white-color;
      }
    }
  }

  .card-bg {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 5;
    left: 0;
    top: 0;
    animation-duration: 400ms;
    transition: background-color 400ms;
    background-color: rgba(51, 51, 51, 0.2);
  }

  .card-text {
    width: calc(100% - 40px);
    display: block;
    position: absolute;
    z-index: 8;
    top: 50%;
    left: 50%;
    opacity: 0.8;
    color: $white-color;
    text-align: center;
    transform: translateX(-50%) translateY(-50%);
    transition: opacity 300ms;

    h5 {
      height: 24px;
      margin-bottom: 14px;
      font-size: 24px;
      font-weight: 400;
      line-height: 24px;
      letter-spacing: -0.3px;
      @include hoverText;
      @include oneLineText;

      &:before {
        top: -24px;
        height: 24px;
        @include oneLineText;
      }
    }

    p {
      height: 14px;
      opacity: 0.8;
      font-size: 14px;
      line-height: 14px;
      letter-spacing: 3px;
      @include hoverText;
      @include oneLineText;

      &:before {
        top: -14px;
        height: 14px;
        @include oneLineText;
      }
    }
  }

  .card-image {
    min-width: 100%;
    min-height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    filter: grayscale(0) blur(0);
    -webkit-filter: grayscale(0) blur(0);
    background-size: cover;
    background-position: center center;
    backface-visibility: hidden;
  }

  &:hover {
    .card-border {
      .border {
        &:after,
        &:before {
          width: 100%;
          height: 100%;
        }
      }
    }

    .card-bg {
      animation-duration: 400ms;
      transition: background-color 400ms;
      background-color: rgba(51, 51, 51, 0.9);
    }

    .card-text {
      opacity: 1;
      transition: all 400ms;

      h5 {
        top: 0;
        font-weight: 700;

        &:before {
          top: 0;
        }
      }

      p {
        top: 0;
        font-weight: 400;

        &:before {
          top: 0;
        }
      }
    }

    .card-image {
      filter: grayscale(100%) blur(1.2px);
      -webkit-filter: grayscale(100%) blur(1.2px);
      transition: filter 500ms;
    }
  }
}

@media (max-width: 1280px) {
  .card {
    .card-text {
      h5 {
        height: 20px;
        font-size: 20px;
        line-height: 20px;

        &:before {
          position: absolute;
          top: -20px;
          height: 20px;
        }
      }

      p {
        height: 13px;
        font-size: 13px;
        line-height: 13px;
        letter-spacing: 0;

        &:before {
          height: 13px;
          top: -13px;
        }
      }
    }
  }
}

@media (max-width: 890px) {
  .card {
    .card-text {
      h5 {
        height: 26px;
        font-size: 26px;
        line-height: 26px;

        &:before {
          position: absolute;
          top: -26px;
          height: 26px;
        }
      }

      p {
        height: 14px;
        font-size: 14px;
        line-height: 14px;
        letter-spacing: 3px;

        &:before {
          height: 14px;
          top: -14px;
        }
      }
    }
  }
}

@media (max-width: 550px) {
  .card {
    .card-bg {
      background-color: rgba(51, 51, 51, 0.6);
    }

    .card-text {
      opacity: 1;

      h5 {
        height: 20px;
        font-size: 20px;
        line-height: 20px;

        &:before {
          height: 20px;
          top: 0;
          font-weight: bold;
        }
      }

      p {
        height: 12px;
        font-size: 12px;
        line-height: 12px;
        letter-spacing: 0;

        &:before {
          height: 12px;
          top: 0;
        }
      }
    }
  }
}
</style>
