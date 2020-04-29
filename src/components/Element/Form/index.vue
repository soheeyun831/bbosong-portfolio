<template>
  <ValidationProvider :rules="rule" v-slot="{ errors }">
    <div :class="{ error: errors.length > 0 }">
      <slot></slot>
    </div>
    <p class="error-message">{{ errors[0] }}</p>
  </ValidationProvider>
</template>

<script>
import { ValidationProvider } from "vee-validate";
import { extend } from "vee-validate";

extend("blank", value => {
  if (value && value.toString().replace(/\s/gi, "").length > 2) {
    return true;
  }
  return "2자 이상 입력해주세요.";
});
extend("tel", {
  validate(value, { min, max }) {
    return value.length >= min && value.length <= max;
  },
  params: ["min", "max"],
  message: "{min} 자 이상 {max} 이하로 입력해주세요."
});
extend("email", value => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(value)) {
    return true;
  }
  return "이메일 주소가 올바르지 않습니다.";
});

export default {
  name: "SForm",
  components: {
    ValidationProvider
  },
  props: {
    rules: {
      type: Array,
      default: undefined
    }
  },
  data() {
    return {
      rule: ""
    };
  },
  created() {
    if (this.rules && this.rules.length > 0) {
      this.rules.forEach((rule, ind) => {
        if (this.rules.length === ind + 1) {
          this.rule += `${rule}`;
        } else {
          this.rule += `${rule}|`;
        }
      });
    } else {
      this.rule = "";
    }
  }
};
</script>

<style lang="scss">
@import "../../../assets/scss/color";

.error-message {
  color: $primary-color;
  font-size: 14px;
  margin-top: 8px;
}
</style>
