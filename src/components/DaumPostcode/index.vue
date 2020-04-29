<template>
  <div
    v-show="visible"
    id="postcode"
    style="border:1px solid;margin:5px 0;position:relative"
    :style="[{ width: width, height: height }, componentStyle]"
  >
    <img
      id="btnFoldWrap"
      src="../../assets/images/control/daum-postcode-close.png"
      style="cursor:pointer;position:absolute;right:0px;top:-1px;z-index:1"
      alt="주소검색 닫기"
      @click="closeDaumPostCode"
    />
    {{ dataError && errorMessage }}
  </div>
</template>

<script>
const defaultErrorMessage =
  "현재 Daum 우편번호 서비스를 이용할 수 없습니다. 잠시 후 다시 시도해주세요.";
export default {
  props: {
    visible: {
      type: Boolean,
      required: true
    },
    // eslint-disable-next-line vue/require-default-prop
    onComplete: Function,
    width: {
      type: String,
      default: "100%"
    },
    height: {
      type: String,
      default: "500px"
    },
    autoClose: {
      type: Boolean,
      default: true
    },
    autoResize: {
      type: Boolean,
      default: false
    },
    animation: {
      type: Boolean,
      default: false
    },
    autoMapping: {
      type: Boolean,
      default: true
    },
    shorthand: {
      type: Boolean,
      default: true
    },
    pleaseReadGuide: {
      type: Number,
      default: 0
    },
    pleaseReadGuideTimer: {
      type: Number,
      default: 1.5
    },
    maxSuggestItems: {
      type: Number,
      default: 10
    },
    showMoreHName: {
      type: Boolean,
      default: false
    },
    hideMapBtn: {
      type: Boolean,
      default: false
    },
    hideEngBtn: {
      type: Boolean,
      default: false
    },
    alwaysShowEngAddr: {
      type: Boolean,
      default: false
    },
    submitMode: {
      type: Boolean,
      default: true
    },
    useSuggest: {
      type: Boolean,
      default: true
    },
    componentStyle: {
      type: Object,
      default: null
    },
    defaultQuery: {
      type: String,
      default: null
    },
    theme: {
      type: Object,
      default: null
    },
    scriptUrl: {
      type: String,
      default:
        "https://ssl.daumcdn.net/dmaps/map_js_init/postcode.v2.js?autoload=false"
    },
    // eslint-disable-next-line vue/require-prop-types
    errorMessage: {
      default: defaultErrorMessage
    }
  },
  data() {
    return {
      initiate: comp => {
        window.daum.postcode.load(() => {
          new window.daum.Postcode({
            oncomplete: function oncomplete(data) {
              comp.onComplete(data);
              // if (comp.autoClose) comp.setState({ display: 'none' })
            },
            onresize: function onresize() {
              // console.log(size);
              // if (comp.autoResize) comp.setState({ height: size.height })
            },
            alwaysShowEngAddr: this.alwaysShowEngAddr,
            animation: this.animation,
            autoMapping: this.autoMapping,
            autoResize: this.autoResize,
            hideEngBtn: this.hideEngBtn,
            hideMapBtn: this.hideMapBtn,
            maxSuggestItems: this.maxSuggestItems,
            pleaseReadGuide: this.pleaseReadGuide,
            pleaseReadGuideTimer: this.pleaseReadGuideTimer,
            shorthand: this.shorthand,
            showMoreHName: this.showMoreHName,
            submitMode: this.submitMode,
            theme: this.theme,
            useSuggest: this.useSuggest,
            width: "100%",
            height: "100%"
          }).embed(this.$el, {
            q: this.defaultQuery,
            autoClose: this.autoClose
          });
        });
      },
      handleError: err => {
        console.warn(
          `This component threw an error (in '${err.target.outerHTML}'):`,
          this
        );
        this.dataError = true;
      },
      dataError: ""
    };
  },
  watch: {
    visible() {
      if (this.visible) {
        this.resetForm();
      }
    }
  },
  mounted() {
    this.resetForm();
  },
  methods: {
    resetForm() {
      const scriptId = "daum_postcode_script";
      const isExist = !!document.getElementById(scriptId);
      if (!isExist) {
        const script = document.createElement("script");
        script.src = this.scriptUrl;
        script.onload = () => this.initiate(this);
        script.onerror = error => this.handleError(error);
        script.id = scriptId;
        document.body.appendChild(script);
      } else {
        this.initiate(this);
      }
    },
    closeDaumPostCode() {
      this.$emit("close");
    }
  }
};
</script>

<style scoped></style>
