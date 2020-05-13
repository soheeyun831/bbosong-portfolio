<template>
  <transition
    name="fade"
    enter-active-class="fadeInUp"
    leave-active-class="fadeOutDown"
  >
    <div v-show="visible" class="scroll-to-top" @click="scrollToTop">
      <img src="../../../assets/images/common/top-btn.png" alt="맨 위로" />
    </div>
  </transition>
</template>

<script>
import { scrollTo } from "../../../utils/scroll-to";

export default {
  name: "index",
  data() {
    return {
      visible: false,
    };
  },
  created() {
    document.addEventListener("scroll", this.controlDisplay);
  },
  mounted() {
    scrollTo(0, 0);
  },
  methods: {
    scrollToTop() {
      scrollTo(0, 500);
    },
    controlDisplay() {
      this.visible = window.pageYOffset > 200;
    },
  },
};
</script>

<style lang="scss" scoped>
.scroll-to-top {
  width: 50px;
  height: 50px;
  position: fixed;
  bottom: 20px;
  right: 20px;
  cursor: pointer;
  z-index: 20;
  animation-duration: 0.2s;

  img {
    width: 100%;
    height: 100%;
  }
}
</style>
