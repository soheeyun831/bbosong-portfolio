<template>
  <div class="card">
    <div class="card-bg"></div>
    <div
      class="card-image"
      :style="{
        'background-image': `url(${require('@/assets/images/' +
          item.thumbnail)})`
      }"
    ></div>
    <div class="card-text">
      {{ item.title }}
      <p>
        <span class="date">
          {{ setDate() }}
        </span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  props: {
    item: {
      type: Object,
      default: undefined
    }
  },
  methods: {
    setDate() {
      let startDate = this.item.start_date
        ? this.$moment(this.item.start_date).format("YYYY.MM")
        : "";
      let endDate = this.item.end_data
        ? this.$moment(this.item.end_data).format("YYYY.MM")
        : "";

      return `${startDate} ~ ${endDate}`;
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
  width: 100%;
  height: 0;
  overflow: hidden;
  position: relative;
  padding-bottom: 65%;
  text-align: center;
  background-color: #333333;
  cursor: pointer;

  .card-bg {
    width: 1000px;
    height: 1000px;
    position: absolute;
    opacity: 0.45;
    z-index: 5;
    left: 50%;
    top: 50%;
    margin-left: -500px;
    margin-top: -500px;
    border-radius: 999px;
    animation-duration: 400ms;
    transition: opacity 400ms cubic-bezier(0.39, 0.575, 0.565, 1) 0ms;
    background-color: #333333;
    background-size: 337.5px 337.5px;
  }

  .card-text {
    width: calc(100% - 40px);
    display: block;
    position: absolute;
    z-index: 8;
    top: 50%;
    left: 50%;
    opacity: 1;
    color: white;
    font-size: 24px;
    font-weight: 800;
    letter-spacing: -0.3px;
    text-align: center;
    text-transform: uppercase;
    backface-visibility: hidden;
    transform: translateX(-50%) translateY(-50%);
    transition: opacity 300ms;

    &:after {
      content: "";
      width: 50px;
      height: 2px;
      background-color: #cccccc;
      display: block;
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      transition: background-color 300ms;
    }

    p {
      opacity: 0.8;
      padding-bottom: 8px;

      span {
        height: 14px;
        display: inline-block;
        margin-right: 8px;
        font-size: 14px;
        line-height: 14px;
        letter-spacing: 3px;
      }
    }
  }

  .card-image {
    min-width: 100%;
    min-height: 100%;
    position: absolute;
    filter: grayscale(100%) blur(1.2px);
    -webkit-filter: grayscale(100%) blur(1.2px);
    transform: scale(1.08);
    transition: all 700ms cubic-bezier(0.165, 0.84, 0.44, 1) 0ms;
    background-size: cover;
    background-position: center center;
    backface-visibility: hidden;
  }

  &:hover {
    .card-bg {
      opacity: 0.5;
      transform: scale(1);
      animation-duration: 400ms;
      transition: opacity 400ms cubic-bezier(0.23, 1, 0.32, 1) 0ms,
        transform 400ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
    }

    .card-text {
      &:after {
        background-color: #ffffff;
      }
    }

    .card-image {
      filter: grayscale(0) blur(0);
      -webkit-filter: grayscale(0) blur(0);
      transform: scale(1.2);
      transition: transform 500ms cubic-bezier(0.165, 0.84, 0.44, 1) 0ms;
    }
  }
}

@media (max-width: 1280px) {
  .card {
    .card-text {
      font-size: 20px;

      p {
        span {
          font-size: 13px;
          letter-spacing: 0;
        }
      }
    }
  }
}

@media (max-width: 890px) {
  .card {
    .card-text {
      font-size: 26px;

      p {
        span {
          font-size: 14px;
          letter-spacing: 3px;
        }
      }
    }
  }
}

@media (max-width: 550px) {
  .card {
    .card-text {
      font-size: 20px;

      p {
        span {
          font-size: 12px;
          letter-spacing: 0;
        }
      }
    }
  }
}
</style>
