<template>
	<label>
		<input
			ref="input"
			class="input"
			:type="type"
			:autocomplete="autocomplete"
			v-bind="$attrs"
			@input="handleInput"
			@focus="handleFocus"
			@blur="handleBlur"
			@change="handleChange"
			@keyup.enter="handleEnter"
		/>
	</label>
</template>

<script>
	export default {
		name: "SInput",
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
			autocomplete: {
				// 자동완성기능
				type: String,
				default: "new-password"
			},
			max: {
				type: Number,
				default: Infinity
			},
			min: {
				type: Number,
				default: -Infinity
			}
		},
		computed: {
			nativeInputValue() {
				return this.value === null || this.value === undefined
					? ""
					: String(this.value);
			}
		},
		watch: {
			nativeInputValue() {
				this.setNativeInputValue();
			}
		},
		mounted() {
			this.setNativeInputValue();
		},
		methods: {
			getInput() {
				return this.$refs.input;
			},
			setNativeInputValue() {
				// value 데이터  input 에 삽입
				const input = this.getInput();
				if (!input) {
					return;
				}
				if (input.value === this.nativeInputValue) {
					return;
				}
				input.value = this.nativeInputValue;
			},
			focus() {
				// input 포커스 In
				this.getInput().focus();
			},
			select() {
				// input 내용 전체 선택 & 포커스 In
				this.getInput().index();
			},
			blur() {
				// input 포커스 Out
				this.getInput().blur();
			},
			handleInput(event) {
				// 실시간 감시
				let newVal;
				if (this.type === "number") {
					if (event.target.value === "" || event.target.value.length === 0) {
						newVal = NaN;
					} else {
						newVal = parseFloat(event.target.value);
					}
					if (newVal >= this.max) {
						newVal = this.max;
					}
					if (newVal <= this.min) {
						newVal = this.min;
					}
				} else if (this.type === "tel") {
					newVal = event.target.value.toString().replace(/[^0-9]/g, "");
				} else {
					if (event.target.value === this.nativeInputValue) {
						return;
					}
					newVal = event.target.value;
				}

				this.$emit("input", newVal);

				this.$nextTick(() => {
					this.setNativeInputValue();
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
			handleChange() {
				// 포커스 Out 시 변경 여부
				// this.$emit('change', event.target.value)
			},
			handleEnter() {
				this.$emit("enter");
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

	input {
		width: 100%;
		padding: 0 14px;
		font-weight: 400;
		line-height: normal;
		vertical-align: middle;
		border-radius: 0;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
		-webkit-appearance: none;
	}

	.input {
		width: 100%;
		height: 44px;
		padding: 0 13px;
		color: $basic-color;
		font-size: 14px;
		font-weight: 400;
		border-radius: 2px;
		border: 1px solid $cloud-color;

		&:hover,
		&:focus,
		&:active {
			border-color: $on-color;
			outline: none;
		}

		&:disabled {
			opacity: 1;
			cursor: pointer;
			-webkit-text-fill-color: currentcolor;
			background-color: $white-color;

			&::-webkit-input-placeholder {
				color: $gray-color;
				-webkit-text-fill-color: $gray-color;
			}

			&::-moz-placeholder {
				color: $gray-color;
				-webkit-text-fill-color: $gray-color;
			}

			&:-ms-input-placeholder {
				color: $gray-color;
				-webkit-text-fill-color: $gray-color;
			}

			&::placeholder {
				color: $gray-color;
				-webkit-text-fill-color: $gray-color;
			}
		}

		&::-moz-focus-inner {
			border: 0;
			padding: 0;
		}

		&:-webkit-autofill,
		&:-webkit-autofill {
			/* chrome input에 자동으로 채워지는 배경과 색상 변경하기 */
			color: $basic-color;
			font-weight: 400;
			background-color: transparent;
			-webkit-box-shadow: 0 0 0 1000px $white-color inset;
		}

		&[type="text"]::-ms-clear {
			display: none;
		}

		&::-ms-clear {
			display: none;
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

	.error {
		.input {
			border: 1px $primary-color solid;
			box-shadow: 0 0 1px $primary-color;

			&:focus {
				border: 2px $primary-color solid;
				box-shadow: 0 0 3px $primary-color;
			}
		}
	}

	.input-btn-layout {
		width: 100%;
		> div {
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
