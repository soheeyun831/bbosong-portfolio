<template>
	<ValidationProvider class="inline-block" :rules="rule" v-slot="{ errors }">
		<div :class="{ error: errors.length > 0 }">
			<slot></slot>
		</div>
		<p v-show="errors.length > 0" class="error-message">{{ errors[0] }}</p>
	</ValidationProvider>
</template>

<script>
	import {ValidationProvider, configure, extend} from "vee-validate";
	import {required} from 'vee-validate/dist/rules';

  configure({
    classes: {
      valid: 'is-valid',
      invalid: 'is-invalid',
      dirty: ['is-dirty', 'is-dirty'], // multiple classes per flag!
    }
  })

	extend('required', {
		...required,
		message: '2자 이상 입력해주세요.'
	});
	extend("blank", value => {
		if (value && value.toString().replace(/\s/gi, "").length > 1) {
			return true;
		}
		return "2자 이상 입력해주세요.";
	});
	extend("tel", value => {
		if (value.length < 12 && value.length > 8) {
			return true;
		}
		return "전화번호는 9자~11자이어야 합니다."
	});
	extend("email", value => {
		const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		if (re.test(value)) {
			return true;
		}
		return "이메일 주소가 올바르지 않습니다.";
	});

	export default {
		name: "SFormItem",
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
