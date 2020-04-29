<template>
  <div>
    <ul class="input-btn-layout clfix">
      <li class="input-layer" @click="openAddress()">
        <s-input
          v-model="value.address"
          placeholder="이곳을 클릭 후 주소를 검색해주세요."
          disabled
        >
        </s-input>
      </li>
      <li class="btn-layer">
        <s-button type="button" class="btn" @click="openAddress()">
          주소 검색
        </s-button>
      </li>
    </ul>
    <DaumPostcode
      :visible="daumPostcodeVisible"
      :on-complete="handleAddress"
      @close="daumPostcodeVisible = false"
    >
    </DaumPostcode>
    <s-input
      v-model="value.address_detail"
      @focus="scrollMove('address')"
      placeholder="(선택) 상세주소 입력"
    >
    </s-input>
  </div>
</template>

<script>
import "../../plugins/element.js";
import DaumPostcode from "../DaumPostcode";
// import { scrollTo } from "../../utils/scroll-to";

export default {
  name: "index",
  components: { DaumPostcode },
  props: {
    value: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      daumPostcodeVisible: false
    };
  },
  methods: {
    openAddress() {
      this.daumPostcodeVisible = true;
    },
    handleAddress(data) {
      let extraAddress = "";
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      extraAddress = extraAddress !== "" ? ` (${extraAddress})` : "";

      this.daumPostcodeVisible = false;
      this.value.address = data.address + " " + extraAddress;
      this.value.sigungu_cd = data.sigunguCode;
      this.value.post_no = data.zonecode;
    },
    // scrollMove(el) {
    scrollMove() {
      // scrollTo(
      //   this.$refs[el].$el.getBoundingClientRect().top +
      //     window.pageYOffset -
      //     50,
      //   500
      // );
    }
  }
};
</script>

<style lang="scss" scoped>
.input-btn-layout {
  width: 100%;
  padding-bottom: 6px;

  li {
    float: left;

    &.input-layer {
      width: calc(100% - 114px);
      margin-right: 6px;
    }

    &.btn-layer {
      width: 108px;

      button {
        width: 100%;
        border-radius: 2px;
      }
    }
  }
}
</style>
