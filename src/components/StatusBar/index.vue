<template>
  <li class="status-bar-item clfix">
    <div class="status-bar-item-name">{{ text }}</div>
    <div class="status-bar-item-ability">
      <div
        class="percent"
        :class="[`percent-${percent}`, `percent-color-${index}`]"
      >
        <span class="status-bar-item-percent">{{ percent }}%</span>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  name: "index",
  props: {
    text: {
      type: String,
      default: undefined
    },
    percent: {
      type: Number,
      default: 0
    },
    index: {
      type: Number,
      default: 1
    }
  }
};
</script>

<style lang="scss" scoped>
.status-bar-item {
  width: 100%;
  height: 40px;

  .status-bar-item-name {
    width: 120px;
    height: 24px;
    float: left;
    color: #191919;
    line-height: 24px;
  }

  .status-bar-item-ability {
    width: calc(100% - 120px);
    height: 24px;
    float: left;
    position: relative;
    overflow: hidden;
    background-color: #f8f8f8;

    .percent {
      position: absolute;
      width: 0;
      height: 100%;
      -webkit-border-radius: 5px;
      -moz-border-radius: 5px;
      -ms-border-radius: 5px;
      border-radius: 5px;
      -webkit-animation-duration: 2s;
      animation-duration: 2s;
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
      -webkit-animation-fill-mode: both;
      animation-fill-mode: both;

      .status-bar-item-percent {
        width: 100%;
        height: 24px;
        padding-right: 12px;
        display: block;
        color: #ffffff;
        font-size: 14px;
        line-height: 24px;
        text-align: right;
        box-sizing: border-box;
      }
    }
  }
}

@for $i from 10 through 100 {
  .status-bar-item {
    .status-bar-item-ability {
      .percent-#{$i} {
        -webkit-animation-name: status-bar-#{$i};
        animation-name: status-bar-#{$i};
      }
    }
  }
  @-webkit-keyframes status-bar-#{$i} {
    0% {
      width: 0%;
    }
    100% {
      width: $i + 1%;
    }
  }

  @-moz-keyframes status-bar-#{$i} {
    0% {
      width: 0%;
    }
    100% {
      width: $i + 1%;
    }
  }

  @keyframes status-bar-#{$i} {
    0% {
      width: 0%;
    }
    100% {
      width: $i + 1%;
    }
  }
}

$animation-delay: 0.3s;
$colors: #7ea1e5, #aaaaf2, #a87ee5, #e0aaf2, #b852cc, #e57ed5, #f2aace, #b32d91,
  #cc5285, #e57e88, #f2bcaa;
@for $i from 0 through 11 {
  .percent-color-#{$i} {
    -webkit-animation-delay: $animation-delay * $i;
    animation-delay: $animation-delay * $i;
    background: linear-gradient(
      to right,
      nth($colors, random(length($colors))),
      nth($colors, random(length($colors)))
    );
  }
}
</style>
