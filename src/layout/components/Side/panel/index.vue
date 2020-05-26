<template>
  <Dialog
    width="300px"
    height="100%"
    max-height="100%"
    class="side-panel"
    :visible.sync="visible"
    :before-close="handleClose"
    :align-center-x="false"
    :align-center-y="false"
  >
    <div class="side-panel-wrapper">
      <section class="side-panel-close" @click="handleClose">
        <img
          src="../../../../assets/images/control/close-small.png"
          alt="side panel close"
        />
      </section>
      <section class="gnb-side">
        <div class="mobile-side-message">
          <p>Bbosong Portfolio</p>
        </div>
        <div class="mobile-side-menu">
          <ul class="menu-list">
            <li @click="handleClose">
              <router-link class="home" to="/">Main</router-link>
            </li>
            <li @click="handleClose">
              <router-link class="career" to="/career">Career</router-link>
            </li>
            <li @click="handleClose">
              <router-link class="portfolio" to="/portfolio"
                >Portfolio</router-link
              >
            </li>
            <li @click="handleClose">
              <router-link class="contact" to="/contact"
                >Contact me</router-link
              >
            </li>
          </ul>
        </div>
        <div class="mobile-side-sns">
          <ul>
            <li>
              <a href="https://github.com/soheeyun831/bbosong-portfolio" target="_blank">gitHub</a>
            </li>
            <li>
              <a href="https://bbosong-develop.tistory.com" target="_blank">Blog</a>
            </li>
            <li>
              <a href="https://www.instagram.com/bbosong_hee/" target="_blank">Instagram</a>
            </li>
            <li>
              <a href="https://open.kakao.com/o/sxEbGCac" target="_blank">KakaoTalk</a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  </Dialog>
</template>

<script>
import Dialog from "../../../../components/Dialog";

export default {
  name: "index",
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    Dialog,
  },
  watch: {
    visible() {
      const mobileSidePanel = document.querySelector(
        ".side-panel.dialog-wrapper .dialog"
      );
      if (this.visible) {
        setTimeout(() => {
          mobileSidePanel.style.right = "0";
        }, 100);
      } else {
        mobileSidePanel.style.right = "-300px";
      }
    },
  },
  methods: {
    handleClose() {
      this.$emit("update:visible", false);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../../../assets/scss/color";

@mixin list-bg {
  background-size: 6px 10px, 24px 24px;
  background-position: right center, left center;
  background-repeat: no-repeat;
}

.side-panel-wrapper {
  width: 100%;
  height: 100%;
  position: relative;

  .side-panel-close {
    width: 50px;
    height: 50px;
    position: absolute;
    top: 18px;
    right: 10px;

    img {
      width: 50px;
      display: block;
      object-fit: contain;
    }
  }

  .gnb-side {
    width: 100%;
    padding: 70px 0 16px;
    box-sizing: border-box;
    overflow-y: auto;

    .mobile-side-message {
      width: 100%;
      padding: 0 30px 24px;
      box-sizing: border-box;
      color: $basic-color;
      font-size: 20px;
      line-height: 1;

      > span {
        display: inline-block;
        overflow: hidden;
        line-height: 1;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }

    .mobile-side-menu {
      width: 100%;
      padding: 0 30px;
      box-sizing: border-box;
      border-bottom: 6px solid $light-cloud-color;
      .menu-list {
        li {
          width: 100%;
          height: 54px;

          a {
            width: 100%;
            height: 54px;
            display: block;
            padding-left: 34px;
            line-height: 54px;
            box-sizing: border-box;

            &.home {
              background-image: url(../../../../assets/images/common/next-black.png),
                url(../../../../assets/images/common/side-home.png);
              @include list-bg;
            }

            &.career {
              background-image: url(../../../../assets/images/common/next-black.png),
                url(../../../../assets/images/common/side-career.png);
              @include list-bg;
            }

            &.portfolio {
              background-image: url(../../../../assets/images/common/next-black.png),
                url(../../../../assets/images/common/side-portfolio.png);
              @include list-bg;
            }

            &.contact {
              background-image: url(../../../../assets/images/common/next-black.png),
                url(../../../../assets/images/common/side-contact.png);
              @include list-bg;
            }
          }
        }
      }
    }
    .mobile-side-sns {
      width: 100%;
      padding: 16px 30px;
      box-sizing: border-box;
      ul {
        display: flex;
        flex-direction: column;
        li {
          width: 100%;
          height: 36px;
          color: $gray-color;
          font-size: 14px;
          line-height: 36px;
          a {
            width: 100%;
            display: inline-block;
          }
        }

      }
    }
  }
}
</style>
<style lang="scss">
.side-panel.dialog-wrapper {
  height: 100%;

  .dialog {
    height: 100%;
    position: fixed;
    top: 0;
    left: auto !important;
    right: -300px;
    overflow-y: auto;
    transition: right 300ms;
  }
}
</style>
