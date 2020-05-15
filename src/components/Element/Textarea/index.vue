<template>
  <label>
    <textarea
      ref="textarea"
      class="textarea"
      v-bind="$attrs"
      @input="handleInput"
      @focus="handleFocus"
      @blur="handleBlur"
      @change="handleChange"
    />
  </label>
</template>

<script>
export default {
  name: "STextarea",
  inheritAttrs: false,
  props: {
    value: {
      type: [String, Number],
      required: true
    },
    type: {
      type: String,
      default: "text" // text, password, tel, number 만 가능
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    nativeTextareaValue() {
      return this.value === null || this.value === undefined
        ? ""
        : String(this.value);
    }
  },
  watch: {
    nativeTextareaValue() {
      this.setNativeTextareaValue();
    }
  },
  mounted() {
    this.setNativeTextareaValue();
  },
  methods: {
    getTextarea() {
      return this.$refs.textarea;
    },
    setNativeTextareaValue() {
      // value 데이터  textarea 에 삽입
      const textarea = this.getTextarea();
      if (!textarea) {
        return;
      }
      if (textarea.value === this.nativeTextareaValue) {
        return;
      }
      textarea.value = this.nativeTextareaValue;
    },
    focus() {
      // select 포커스 In
      this.getSelect().focus();
    },
    select() {
      // select 내용 전체 선택 & 포커스 In
      this.getSelect().index();
    },
    blur() {
      // select 포커스 Out
      this.getSelect().blur();
    },
    handleInput(event) {
      // 실시간 감시
      if (event.target.value === this.nativeTextareaValue) {
        return;
      }

      this.$emit("input", event.target.value);

      this.$nextTick(() => {
        this.setNativeTextareaValue();
      });
    },
    handleFocus(event) {
      // 포커스 In
      this.$emit("focus", event);
    },
    handleBlur(event) {
      // 포커스 Out
      this.$emit("blur", event);
    },
    handleChange(event) {
      // 포커스 Out 시 변경 여부
      this.$emit('change', event.target.value)
    },
    clear() {
      this.$emit("input", "");
      this.$emit("change", "");
      this.$emit("clear");
    }
  }
};
</script>

<style lang="scss">
@import "../../../assets/scss/color";

.textarea {
  width: calc(100% - 26px);
  width: -webkit-calc(100% - 26px);
  padding: 13px;
  box-sizing: content-box;
  resize: none;
  color: $basic-color;
  font-size: 14px;
  -webkit-appearance: none;
  -webkit-border-radius: 2px;
  -moz-appearance: none;
  appearance: none;
  border-radius: 2px;
  border: 1px solid $cloud-color;

  &:hover,
  &:focus,
  &:active {
    border-color: $on-color;
    outline: none;
  }

  &::-webkit-input-placeholder {
    color: $gray-color;
    font-weight: 400;
  }

  &::-moz-placeholder {
    color: $gray-color;
    font-weight: 400;
  }

  &:-ms-input-placeholder {
    color: $gray-color;
    font-weight: 400;
  }

  &:-moz-placeholder {
    color: $gray-color;
    font-weight: 400;
  }

  &::placeholder {
    color: $gray-color;
    font-weight: 400;
  }
}
</style>
