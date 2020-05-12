<template>
	<div class="contact-page-wrap">
		<div class="container">
			<h2 class="article-title">
				CONTACT ME
			</h2>
			<p class="main-sub-title">
				안녕하세요. 저에게 관심이 생기신 분들은 아래 입력란에 작성 후 보내주시면
				너무 너무 감사하겠습니다. :)
			</p>
			<div class="contact-box">
				<div class="contact-left">
					<img src="../../assets/images/main-contacy-me.png" alt="연락주세요"/>
				</div>
				<div class="contact-right">
					<div class="form-group">
						<s-form :form-data="formData" @submitData="submitData">
							<dl class="form-item clfix">
								<dt class="form-title">
									기업명 <span class="compulsory">*</span>
								</dt>
								<dd class="form-control">
									<s-form-item :rules="['required', 'blank']">
										<s-input
											ref="company"
											v-model="formData.company"
											type="text"
										></s-input>
									</s-form-item>
								</dd>
							</dl>
							<dl class="form-item clfix">
								<dt class="form-title">
									성함 <span class="compulsory">*</span>
								</dt>
								<dd class="form-control">
									<s-form-item :rules="['required', 'blank']">
										<s-input
											ref="name"
											v-model="formData.name"
											type="text"
										></s-input>
									</s-form-item>
								</dd>
							</dl>
							<dl class="form-item clfix">
								<dt class="form-title">
									전화번호 <span class="compulsory">*</span>
								</dt>
								<dd class="form-control">
									<s-form-item :rules="['required', 'tel']">
										<s-input
											ref="tel"
											v-model="formData.tel"
											type="tel"
											maxlength="11"
										></s-input>
									</s-form-item>
								</dd>
							</dl>
							<dl class="form-item clfix">
								<dt class="form-title">
									회사 주소 <span class="compulsory">*</span>
								</dt>
								<dd class="form-control address-form-item">
									<s-form-item :rules="['required', 'blank']">
										<div class="input-btn-layout clfix">
											<div class="input-layer" @click="openAddress()">
												<s-input
													v-model="address.address"
													placeholder="이곳을 클릭 후 주소를 검색해주세요."
													disabled
												>
												</s-input>
											</div>
											<div class="btn-layer">
												<s-button
													type="button"
													class="btn"
													@click="openAddress()"
												>
													주소 검색
												</s-button>
											</div>
										</div>
										<DaumPostcode
											:visible="daumPostcodeVisible"
											:on-complete="handleAddress"
											@close="daumPostcodeVisible = false"
										>
										</DaumPostcode>
									</s-form-item>
									<s-form-item class="pt-6">
										<s-input
											v-model="address.address_detail"
											placeholder="(선택) 상세주소 입력"
										>
										</s-input>
									</s-form-item>
								</dd>
							</dl>
							<dl class="form-item clfix">
								<dt class="form-title">
									이메일
								</dt>
								<dd class="form-control">
									<s-form-item :rules="['blank', 'email']">
										<s-input
											ref="email"
											v-model="formData.email"
											type="email"
										></s-input>
									</s-form-item>
								</dd>
							</dl>
							<dl class="form-item clfix">
								<dt class="form-title">
									추가 메시지
								</dt>
								<dd class="form-control">
									<s-form-item>
										<s-textarea
											ref="comment"
											v-model="formData.comment"
											type="text"
											rows="5"
										></s-textarea>
									</s-form-item>
								</dd>
							</dl>
							<div class="form-submit-btn">
								<s-button type="submit">보내기</s-button>
								<!--											<s-button @click.prevent="contactSubmit">보내기</s-button>-->
							</div>
						</s-form>
						<Dialog
							width="300px"
							height="300px"
							class="contact-result-dialog"
							:border-radius="'6px'"
							:visible.sync="resultDialog"
							:before-close="handleClose"
						>
							<section class="dialog-box">
								<header class="">
									<div class="dialog-close" @click="handleClose">
										<img
											src="../../assets/images/control/close-medium.png"
											alt="dialog close"
										/>
									</div>
								</header>
								<article>
									<div class="success-checkmark">
										<div class="check-icon">
											<span class="icon-line line-tip"></span>
											<span class="icon-line line-long"></span>
											<div class="icon-circle"></div>
											<div class="icon-fix"></div>
										</div>
									</div>
									<h3 class="main-copy">
										<!--						메일이 성공적으로<br/>-->
										<!--						발송되었습니다.-->
										mail 관련 back-end<br/>
										작업 진행중입니다.
									</h3>
									<p class="sub-copy">
										<!--						확인 후 연락 드리겠습니다! 감사합니다 :)-->
										빠른 시일 내에 완료될 것입니다..!<br/>
										010-2504-2452로 연락부탁드립니다!
									</p>
								</article>
							</section>
						</Dialog>
					</div>
				</div>
			</div>
		</div>
		<Dialog
			width="300px"
			height="300px"
			class="construction-dialog"
			:border-radius="'6px'"
			:visible.sync="constructionDialog"
			:before-close="constructionDialogClose"
		>
			<section class="dialog-box">
				<header class="">
					<div class="dialog-close" @click="constructionDialogClose">
						<img
							src="../../assets/images/control/close-medium.png"
							alt="dialog close"
						/>
					</div>
				</header>
				<article>
					<div class="construction-icon">
						<div class="construction"></div>
					</div>
					<h3 class="main-copy">
						mail 관련 back-end<br/>
						작업 진행중입니다.
					</h3>
					<p class="sub-copy">
						현재 메일 보내기 기능이 되지 않습니다.<br/>
						빠른 시일 내에 완료될 것입니다..!
					</p>
				</article>
			</section>
		</Dialog>
	</div>
</template>

<script>
	import DaumPostcode from "../../components/DaumPostcode";
	import Dialog from "../../components/Dialog";
	import "../../plugins/element.js";

	export default {
		name: "contact",
		components: {
			DaumPostcode,
			Dialog,
		},
		data() {
			return {
				formData: {
					company: "",
					name: "",
					tel: "",
					email: "",
					comment: "",
					address: {
						address: "",
						sigungu_cd: "",
						address_detail: "",
						post_no: "",
					},
				},
				address: {
					address: "",
					sigungu_cd: "",
					address_detail: "",
					post_no: "",
				},
				daumPostcodeVisible: false,
				resultDialog: false,
				constructionDialog: true,
			};
		},
		watch: {
			address: {
				deep: true,
				immediate: true,
				handler() {
					this.formData.address.address = this.address.address;
					this.formData.address.sigungu_cd = this.address.sigungu_cd;
					this.formData.address.address_detail = this.address.address_detail;
					this.formData.address.post_no = this.address.post_no;
				},
			},
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
				this.address.address = data.address + " " + extraAddress;
				this.address.sigungu_cd = data.sigunguCode;
				this.address.post_no = data.zonecode;
			},
			submitData() {
				console.log(this.formData);
				this.resultDialog = true;
			},
			handleClose() {
				this.resultDialog = false;
			},
			constructionDialogClose() {
				// TODO :임시 BACK-END 개발 전 Dialog
				this.constructionDialog = false;
			},
		},
	};
</script>

<style lang="scss" scoped>
	@import "../../assets/scss/color";

	p.main-sub-title {
		padding-bottom: 60px;
		color: $gray-color;
		font-size: 15px;
		text-align: center;
	}

	// result dialog
	.contact-result-dialog.dialog-wrapper {
		.dialog {
			.dialog-box {
				padding: 50px 0 30px;

				h3.main-copy {
					font-size: 20px;
					text-align: center;
					line-height: 1.43;
				}

				p.sub-copy {
					margin-top: 12px;
					color: $gray-color;
					font-size: 14px;
					text-align: center;
				}

				.success-checkmark {
					width: 80px;
					height: 115px;
					margin: 0 auto;

					.check-icon {
						width: 80px;
						height: 80px;
						position: relative;
						border-radius: 50%;
						box-sizing: content-box;
						border: 4px solid #4caf50;

						&::before {
							top: 3px;
							left: -2px;
							width: 30px;
							transform-origin: 100% 50%;
							border-radius: 100px 0 0 100px;
						}

						&::after {
							top: 0;
							left: 30px;
							width: 60px;
							transform-origin: 0 50%;
							border-radius: 0 100px 100px 0;
							animation: rotate-circle 4.25s ease-in;
						}

						&::before,
						&::after {
							content: "";
							height: 100px;
							position: absolute;
							background: #ffffff;
							transform: rotate(-45deg);
						}

						.icon-line {
							height: 5px;
							background-color: #4caf50;
							display: block;
							border-radius: 2px;
							position: absolute;
							z-index: 10;

							&.line-tip {
								top: 46px;
								left: 14px;
								width: 25px;
								transform: rotate(45deg);
								animation: icon-line-tip 0.75s;
							}

							&.line-long {
								top: 38px;
								right: 8px;
								width: 47px;
								transform: rotate(-45deg);
								animation: icon-line-long 0.75s;
							}
						}

						.icon-circle {
							top: -4px;
							left: -4px;
							z-index: 10;
							width: 80px;
							height: 80px;
							border-radius: 50%;
							position: absolute;
							box-sizing: content-box;
							border: 4px solid rgba(76, 175, 80, 0.5);
						}

						.icon-fix {
							top: 8px;
							width: 5px;
							left: 26px;
							z-index: 1;
							height: 85px;
							position: absolute;
							transform: rotate(-45deg);
							background-color: $white-color;
						}
					}
				}
			}
		}
	}

	@keyframes rotate-circle {
		0% {
			transform: rotate(-45deg);
		}
		5% {
			transform: rotate(-45deg);
		}
		12% {
			transform: rotate(-405deg);
		}
		100% {
			transform: rotate(-405deg);
		}
	}

	@keyframes icon-line-tip {
		0% {
			width: 0;
			left: 1px;
			top: 19px;
		}
		54% {
			width: 0;
			left: 1px;
			top: 19px;
		}
		70% {
			width: 50px;
			left: -8px;
			top: 37px;
		}
		84% {
			width: 17px;
			left: 21px;
			top: 48px;
		}
		100% {
			width: 25px;
			left: 14px;
			top: 45px;
		}
	}

	@keyframes icon-line-long {
		0% {
			width: 0;
			right: 46px;
			top: 54px;
		}
		65% {
			width: 0;
			right: 46px;
			top: 54px;
		}
		84% {
			width: 55px;
			right: 0px;
			top: 35px;
		}
		100% {
			width: 47px;
			right: 8px;
			top: 38px;
		}
	}

	// TODO : 임시.. 공사중 모달
	.construction-dialog.dialog-wrapper {
		.dialog {
			.dialog-box {
				padding: 50px 0 30px;

				h3.main-copy {
					font-size: 20px;
					text-align: center;
					line-height: 1.43;
				}

				p.sub-copy {
					margin-top: 12px;
					color: $gray-color;
					font-size: 14px;
					text-align: center;
					line-height: 1.43;
				}

				.construction-icon {
					width: 100%;
					text-align: center;

					.construction {
						animation: work 0.375s steps(1, start) infinite;
						font-size: 2px; /* pixel size */
						height: 1em;
						display: inline-block;
						margin-bottom: 46em;
						position: relative;
						width: 1em;

						&:after {
							background-color: #fdd400; /* colour of the sign */
							border-radius: 3em;
							content: "";
							height: 28em;
							left: -12em;
							position: absolute;
							top: 5em;
							transform: rotate(45deg);
							width: 28em;
							z-index: -1;
						}
					}
				}
			}
		}
	}

	/* Animation */
	@keyframes work {
		25% {
			box-shadow: /* row 1 */
				inset 0 0 0 1em, 1em 0, 2em 0, 3em 0,
					/* row 2 */
				-1em 1em, 0 1em, 1em 1em, 2em 1em, 3em 1em, 4em 1em,
					/* row 3 */
				-2em 2em, -1em 2em, 4em 2em, 5em 2em, /* row 4 */
				-3em 3em,
				-2em 3em, 5em 3em, 6em 3em, /* row 5 */
				-4em 4em, -3em 4em, 6em 4em,
				7em 4em, /* row 6 */
				-5em 5em, -4em 5em, 7em 5em, 8em 5em,
					/* row 7 */
				-6em 6em, -5em 6em, 8em 6em, 9em 6em, /* row 8 */
				-7em 7em,
				-6em 7em, 0 7em, 1em 7em, 2em 7em, 3em 7em, 9em 7em, 10em 7em,
					/* row 9 */
				-8em 8em, -7em 8em, -1em 8em, 0 8em, 1em 8em, 2em 8em, 3em 8em,
				4em 8em, 10em 8em, 11em 8em, /* row 10 */
				-9em 9em, -8em 9em, -1em 9em,
				0 9em, 1em 9em, 2em 9em, 3em 9em, 4em 9em, 11em 9em, 12em 9em,
					/* row 11 */
				-10em 10em, -9em 10em, -1em 10em, 0 10em, 1em 10em, 2em 10em,
				3em 10em, 4em 10em, 12em 10em, 13em 10em, /* row 12 */
				-11em 11em,
				-10em 11em, -1em 11em, 0 11em, 1em 11em, 2em 11em, 3em 11em, 4em 11em,
				13em 11em, 14em 11em, /* row 13 */
				-12em 12em, -11em 12em, -8em 12em,
				-7em 12em, -6em 12em, -5em 12em, -4em 12em, -3em 12em, -2em 12em, 0 12em,
				1em 12em, 2em 12em, 3em 12em, 14em 12em, 15em 12em,
					/* row 14 */
				-13em 13em, -12em 13em, -8em 13em, -4em 13em, -3em 13em,
				-2em 13em, -1em 13em, 15em 13em, 16em 13em, /* row 15 */
				-14em 14em,
				-13em 14em, -7em 14em, -5em 14em, -4em 14em, -3em 14em, -2em 14em,
				-1em 14em, 0 14em, 16em 14em, 17em 14em, /* row 16 */
				-15em 15em,
				-14em 15em, -7em 15em, -6em 15em, -5em 15em, -4em 15em, -3em 15em,
				-2em 15em, 0 15em, 17em 15em, 18em 15em, /* row 17 */
				-16em 16em,
				-15em 16em, -7em 16em, -6em 16em, -5em 16em, -4em 16em, -3em 16em, 0 16em,
				18em 16em, 19em 16em, /* row 18 */
				-17em 17em, -16em 17em, -8em 17em,
				-7em 17em, -6em 17em, -5em 17em, -4em 17em, -3em 17em, 0 17em, 19em 17em,
				20em 17em, /* row 19 */
				-17em 18em, -16em 18em, -8em 18em, -7em 18em,
				-6em 18em, -5em 18em, -4em 18em, -2em 18em, 0 18em, 19em 18em, 20em 18em,
					/* row 20 */
				-17em 19em, -16em 19em, -8em 19em, -7em 19em, -6em 19em,
				-5em 19em, -4em 19em, -1em 19em, 0 19em, 19em 19em, 20em 19em,
					/* row 21 */
				-17em 20em, -16em 20em, -8em 20em, -7em 20em, -6em 20em,
				-5em 20em, -4em 20em, -3em 20em, 0 20em, 19em 20em, 20em 20em,
					/* row 22 */
				-16em 21em, -15em 21em, -8em 21em, -7em 21em, -6em 21em,
				-5em 21em, -4em 21em, -3em 21em, -2em 21em, 1em 21em, 18em 21em, 19em 21em,
					/* row 23 */
				-15em 22em, -14em 22em, -8em 22em, -7em 22em, -6em 22em,
				-4em 22em, -3em 22em, -2em 22em, -1em 22em, 2em 22em, 17em 22em, 18em 22em,
					/* row 24 */
				-14em 23em, -13em 23em, -8em 23em, -7em 23em, -6em 23em,
				-3em 23em, -2em 23em, -1em 23em, 3em 23em, 16em 23em, 17em 23em,
					/* row 25 */
				-13em 24em, -12em 24em, -8em 24em, -7em 24em, -6em 24em,
				-3em 24em, -2em 24em, -1em 24em, 4em 24em, 5em 24em, 6em 24em, 15em 24em,
				16em 24em, /* row 26 */
				-12em 25em, -11em 25em, -8em 25em, -7em 25em,
				-6em 25em, -3em 25em, -2em 25em, -1em 25em, 4em 25em, 5em 25em, 6em 25em,
				7em 25em, 14em 25em, 15em 25em, /* row 27 */
				-11em 26em, -10em 26em,
				-8em 26em, -7em 26em, -6em 26em, -3em 26em, -2em 26em, 3em 26em, 4em 26em,
				5em 26em, 6em 26em, 7em 26em, 8em 26em, 13em 26em, 14em 26em,
					/* row 28 */
				-10em 27em, -9em 27em, -7em 27em, -6em 27em, -3em 27em,
				-2em 27em, -1em 27em, 2em 27em, 3em 27em, 4em 27em, 5em 27em, 6em 27em,
				7em 27em, 8em 27em, 9em 27em, 12em 27em, 13em 27em, /* row 29 */
				-9em 28em,
				-8em 28em, -6em 28em, -3em 28em, -2em 28em, -1em 28em, 2em 28em, 3em 28em,
				4em 28em, 5em 28em, 6em 28em, 7em 28em, 8em 28em, 9em 28em, 11em 28em,
				12em 28em, /* row 30 */
				-8em 29em, -7em 29em, 10em 29em, 11em 29em,
					/* row 31 */
				-7em 30em, -6em 30em, 9em 30em, 10em 30em,
					/* row 32 */
				-6em 31em, -5em 31em, 8em 31em, 9em 31em,
					/* row 33 */
				-5em 32em, -4em 32em, 7em 32em, 8em 32em,
					/* row 34 */
				-4em 33em, -3em 33em, 6em 33em, 7em 33em,
					/* row 35 */
				-3em 34em, -2em 34em, 5em 34em, 6em 34em,
					/* row 36 */
				-2em 35em, -1em 35em, 4em 35em, 5em 35em,
					/* row 37 */
				-1em 36em, 0 36em, 1em 36em, 2em 36em, 3em 36em, 4em 36em,
					/* row 38 */
				0 37em, 1em 37em, 2em 37em, 3em 37em;
		}
		50% {
			box-shadow: /* row 1 */
				inset 0 0 0 1em, 1em 0, 2em 0, 3em 0,
					/* row 2 */
				-1em 1em, 0 1em, 1em 1em, 2em 1em, 3em 1em, 4em 1em,
					/* row 3 */
				-2em 2em, -1em 2em, 4em 2em, 5em 2em, /* row 4 */
				-3em 3em,
				-2em 3em, 5em 3em, 6em 3em, /* row 5 */
				-4em 4em, -3em 4em, 6em 4em,
				7em 4em, /* row 6 */
				-5em 5em, -4em 5em, 7em 5em, 8em 5em,
					/* row 7 */
				-6em 6em, -5em 6em, 8em 6em, 9em 6em, /* row 8 */
				-7em 7em,
				-6em 7em, 0 7em, 1em 7em, 2em 7em, 3em 7em, 9em 7em, 10em 7em,
					/* row 9 */
				-8em 8em, -7em 8em, -1em 8em, 0 8em, 1em 8em, 2em 8em, 3em 8em,
				4em 8em, 10em 8em, 11em 8em, /* row 10 */
				-9em 9em, -8em 9em, -1em 9em,
				0 9em, 1em 9em, 2em 9em, 3em 9em, 4em 9em, 11em 9em, 12em 9em,
					/* row 11 */
				-10em 10em, -9em 10em, -1em 10em, 0 10em, 1em 10em, 2em 10em,
				3em 10em, 4em 10em, 12em 10em, 13em 10em, /* row 12 */
				-11em 11em,
				-10em 11em, -1em 11em, 0 11em, 1em 11em, 2em 11em, 3em 11em, 4em 11em,
				13em 11em, 14em 11em, /* row 13 */
				-12em 12em, -11em 12em, -9em 12em,
				-8em 12em, -7em 12em, -6em 12em, -5em 12em, -4em 12em, -3em 12em,
				-2em 12em, 0 12em, 1em 12em, 2em 12em, 3em 12em, 14em 12em, 15em 12em,
					/* row 14 */
				-13em 13em, -12em 13em, -9em 13em, -4em 13em, -3em 13em,
				-2em 13em, -1em 13em, 15em 13em, 16em 13em, /* row 15 */
				-14em 14em,
				-13em 14em, -8em 14em, -5em 14em, -4em 14em, -3em 14em, -2em 14em,
				-1em 14em, 0 14em, 16em 14em, 17em 14em, /* row 16 */
				-15em 15em,
				-14em 15em, -7em 15em, -6em 15em, -5em 15em, -4em 15em, -3em 15em,
				-2em 15em, 0 15em, 17em 15em, 18em 15em, /* row 17 */
				-16em 16em,
				-15em 16em, -7em 16em, -6em 16em, -5em 16em, -4em 16em, -3em 16em, 0 16em,
				18em 16em, 19em 16em, /* row 18 */
				-17em 17em, -16em 17em, -8em 17em,
				-7em 17em, -6em 17em, -5em 17em, -4em 17em, -2em 17em, 0 17em, 19em 17em,
				20em 17em, /* row 19 */
				-17em 18em, -16em 18em, -8em 18em, -7em 18em,
				-6em 18em, -5em 18em, -4em 18em, -1em 18em, 0 18em, 19em 18em, 20em 18em,
					/* row 20 */
				-17em 19em, -16em 19em, -8em 19em, -7em 19em, -6em 19em,
				-5em 19em, -4em 19em, 1em 19em, 19em 19em, 20em 19em,
					/* row 21 */
				-17em 20em, -16em 20em, -8em 20em, -7em 20em, -6em 20em,
				-5em 20em, -4em 20em, -3em 20em, 2em 20em, 19em 20em, 20em 20em,
					/* row 22 */
				-16em 21em, -15em 21em, -8em 21em, -7em 21em, -6em 21em,
				-5em 21em, -4em 21em, -3em 21em, -2em 21em, 3em 21em, 18em 21em, 19em 21em,
					/* row 23 */
				-15em 22em, -14em 22em, -8em 22em, -7em 22em, -6em 22em,
				-4em 22em, -3em 22em, -2em 22em, -1em 22em, 4em 22em, 5em 22em, 6em 22em,
				7em 22em, 17em 22em, 18em 22em, /* row 24 */
				-14em 23em, -13em 23em,
				-8em 23em, -7em 23em, -6em 23em, -3em 23em, -2em 23em, -1em 23em, 4em 23em,
				5em 23em, 6em 23em, 7em 23em, 8em 23em, 16em 23em, 17em 23em,
					/* row 25 */
				-13em 24em, -12em 24em, -8em 24em, -7em 24em, -6em 24em,
				-3em 24em, -2em 24em, -1em 24em, 4em 24em, 5em 24em, 6em 24em, 7em 24em,
				8em 24em, 15em 24em, 16em 24em, /* row 26 */
				-12em 25em, -11em 25em,
				-8em 25em, -7em 25em, -6em 25em, -3em 25em, -2em 25em, -1em 25em, 4em 25em,
				5em 25em, 6em 25em, 7em 25em, 8em 25em, 14em 25em, 15em 25em,
					/* row 27 */
				-11em 26em, -10em 26em, -8em 26em, -7em 26em, -6em 26em,
				-3em 26em, -2em 26em, 3em 26em, 4em 26em, 5em 26em, 6em 26em, 7em 26em,
				8em 26em, 13em 26em, 14em 26em, /* row 28 */
				-10em 27em, -9em 27em,
				-7em 27em, -6em 27em, -3em 27em, -2em 27em, -1em 27em, 2em 27em, 3em 27em,
				4em 27em, 5em 27em, 6em 27em, 7em 27em, 8em 27em, 9em 27em, 12em 27em,
				13em 27em, /* row 29 */
				-9em 28em, -8em 28em, -6em 28em, -3em 28em,
				-2em 28em, -1em 28em, 2em 28em, 3em 28em, 4em 28em, 5em 28em, 6em 28em,
				7em 28em, 8em 28em, 9em 28em, 11em 28em, 12em 28em, /* row 30 */
				-8em 29em,
				-7em 29em, 10em 29em, 11em 29em, /* row 31 */
				-7em 30em, -6em 30em,
				9em 30em, 10em 30em, /* row 32 */
				-6em 31em, -5em 31em, 8em 31em, 9em 31em,
					/* row 33 */
				-5em 32em, -4em 32em, 7em 32em, 8em 32em,
					/* row 34 */
				-4em 33em, -3em 33em, 6em 33em, 7em 33em,
					/* row 35 */
				-3em 34em, -2em 34em, 5em 34em, 6em 34em,
					/* row 36 */
				-2em 35em, -1em 35em, 4em 35em, 5em 35em,
					/* row 37 */
				-1em 36em, 0 36em, 1em 36em, 2em 36em, 3em 36em, 4em 36em,
					/* row 38 */
				0 37em, 1em 37em, 2em 37em, 3em 37em;
		}

		75% {
			box-shadow: /* row 1 */
				inset 0 0 0 1em, 1em 0, 2em 0, 3em 0,
					/* row 2 */
				-1em 1em, 0 1em, 1em 1em, 2em 1em, 3em 1em, 4em 1em,
					/* row 3 */
				-2em 2em, -1em 2em, 4em 2em, 5em 2em, /* row 4 */
				-3em 3em,
				-2em 3em, 5em 3em, 6em 3em, /* row 5 */
				-4em 4em, -3em 4em, 6em 4em,
				7em 4em, /* row 6 */
				-5em 5em, -4em 5em, 7em 5em, 8em 5em,
					/* row 7 */
				-6em 6em, -5em 6em, 8em 6em, 9em 6em, /* row 8 */
				-7em 7em,
				-6em 7em, 0 7em, 1em 7em, 2em 7em, 3em 7em, 9em 7em, 10em 7em,
					/* row 9 */
				-8em 8em, -7em 8em, -1em 8em, 0 8em, 1em 8em, 2em 8em, 3em 8em,
				4em 8em, 10em 8em, 11em 8em, /* row 10 */
				-9em 9em, -8em 9em, -1em 9em,
				0 9em, 1em 9em, 2em 9em, 3em 9em, 4em 9em, 11em 9em, 12em 9em,
					/* row 11 */
				-10em 10em, -9em 10em, -1em 10em, 0 10em, 1em 10em, 2em 10em,
				3em 10em, 4em 10em, 12em 10em, 13em 10em, /* row 12 */
				-11em 11em,
				-10em 11em, -1em 11em, 0 11em, 1em 11em, 2em 11em, 3em 11em, 4em 11em,
				13em 11em, 14em 11em, /* row 13 */
				-12em 12em, -11em 12em, -9em 12em,
				-8em 12em, -7em 12em, -6em 12em, -5em 12em, -4em 12em, -3em 12em,
				-2em 12em, 0 12em, 1em 12em, 2em 12em, 3em 12em, 14em 12em, 15em 12em,
					/* row 14 */
				-13em 13em, -12em 13em, -9em 13em, -4em 13em, -3em 13em,
				-2em 13em, -1em 13em, 15em 13em, 16em 13em, /* row 15 */
				-14em 14em,
				-13em 14em, -9em 14em, -5em 14em, -4em 14em, -3em 14em, -2em 14em,
				-1em 14em, 0 14em, 16em 14em, 17em 14em, /* row 16 */
				-15em 15em,
				-14em 15em, -9em 15em, -7em 15em, -6em 15em, -5em 15em, -4em 15em,
				-3em 15em, -2em 15em, 0 15em, 17em 15em, 18em 15em,
					/* row 17 */
				-16em 16em, -15em 16em, -9em 16em, -8em 16em, -7em 16em,
				-6em 16em, -5em 16em, -4em 16em, -3em 16em, 0 16em, 18em 16em, 19em 16em,
					/* row 18 */
				-17em 17em, -16em 17em, -8em 17em, -7em 17em, -6em 17em,
				-5em 17em, -4em 17em, 0 17em, 19em 17em, 20em 17em,
					/* row 19 */
				-17em 18em, -16em 18em, -8em 18em, -7em 18em, -6em 18em,
				-5em 18em, -4em 18em, -3em 18em, -2em 18em, 0 18em, 6em 18em, 7em 18em,
				19em 18em, 20em 18em, /* row 20 */
				-17em 19em, -16em 19em, -8em 19em,
				-7em 19em, -6em 19em, -5em 19em, -4em 19em, -1em 19em, 0 19em, 1em 19em,
				5em 19em, 6em 19em, 7em 19em, 8em 19em, 19em 19em, 20em 19em,
					/* row 21 */
				-17em 20em, -16em 20em, -8em 20em, -7em 20em, -6em 20em,
				-5em 20em, -4em 20em, -3em 20em, 2em 20em, 3em 20em, 4em 20em, 5em 20em,
				6em 20em, 7em 20em, 8em 20em, 9em 20em, 19em 20em, 20em 20em,
					/* row 22 */
				-16em 21em, -15em 21em, -8em 21em, -7em 21em, -6em 21em,
				-5em 21em, -4em 21em, -3em 21em, -2em 21em, 4em 21em, 5em 21em, 6em 21em,
				7em 21em, 8em 21em, 9em 21em, 18em 21em, 19em 21em,
					/* row 23 */
				-15em 22em, -14em 22em, -8em 22em, -7em 22em, -6em 22em,
				-4em 22em, -3em 22em, -2em 22em, -1em 22em, 4em 22em, 5em 22em, 6em 22em,
				7em 22em, 8em 22em, 9em 22em, 17em 22em, 18em 22em,
					/* row 24 */
				-14em 23em, -13em 23em, -8em 23em, -7em 23em, -6em 23em,
				-3em 23em, -2em 23em, -1em 23em, 7em 23em, 8em 23em, 9em 23em, 16em 23em,
				17em 23em, /* row 25 */
				-13em 24em, -12em 24em, -8em 24em, -7em 24em,
				-6em 24em, -3em 24em, -2em 24em, -1em 24em, 5em 24em, 6em 24em, 15em 24em,
				16em 24em, /* row 26 */
				-12em 25em, -11em 25em, -8em 25em, -7em 25em,
				-6em 25em, -3em 25em, -2em 25em, -1em 25em, 4em 25em, 5em 25em, 6em 25em,
				7em 25em, 14em 25em, 15em 25em, /* row 27 */
				-11em 26em, -10em 26em,
				-8em 26em, -7em 26em, -6em 26em, -3em 26em, -2em 26em, 3em 26em, 4em 26em,
				5em 26em, 6em 26em, 7em 26em, 8em 26em, 13em 26em, 14em 26em,
					/* row 28 */
				-10em 27em, -9em 27em, -7em 27em, -6em 27em, -3em 27em,
				-2em 27em, -1em 27em, 2em 27em, 3em 27em, 4em 27em, 5em 27em, 6em 27em,
				7em 27em, 8em 27em, 9em 27em, 12em 27em, 13em 27em, /* row 29 */
				-9em 28em,
				-8em 28em, -6em 28em, -3em 28em, -2em 28em, -1em 28em, 2em 28em, 3em 28em,
				4em 28em, 5em 28em, 6em 28em, 7em 28em, 8em 28em, 9em 28em, 11em 28em,
				12em 28em, /* row 30 */
				-8em 29em, -7em 29em, 10em 29em, 11em 29em,
					/* row 31 */
				-7em 30em, -6em 30em, 9em 30em, 10em 30em,
					/* row 32 */
				-6em 31em, -5em 31em, 8em 31em, 9em 31em,
					/* row 33 */
				-5em 32em, -4em 32em, 7em 32em, 8em 32em,
					/* row 34 */
				-4em 33em, -3em 33em, 6em 33em, 7em 33em,
					/* row 35 */
				-3em 34em, -2em 34em, 5em 34em, 6em 34em,
					/* row 36 */
				-2em 35em, -1em 35em, 4em 35em, 5em 35em,
					/* row 37 */
				-1em 36em, 0 36em, 1em 36em, 2em 36em, 3em 36em, 4em 36em,
					/* row 38 */
				0 37em, 1em 37em, 2em 37em, 3em 37em;
		}
		100% {
			box-shadow: /* row 1 */
				inset 0 0 0 1em, 1em 0, 2em 0, 3em 0,
					/* row 2 */
				-1em 1em, 0 1em, 1em 1em, 2em 1em, 3em 1em, 4em 1em,
					/* row 3 */
				-2em 2em, -1em 2em, 4em 2em, 5em 2em, /* row 4 */
				-3em 3em,
				-2em 3em, 5em 3em, 6em 3em, /* row 5 */
				-4em 4em, -3em 4em, 6em 4em,
				7em 4em, /* row 6 */
				-5em 5em, -4em 5em, 7em 5em, 8em 5em,
					/* row 7 */
				-6em 6em, -5em 6em, 8em 6em, 9em 6em, /* row 8 */
				-7em 7em,
				-6em 7em, 0 7em, 1em 7em, 2em 7em, 3em 7em, 9em 7em, 10em 7em,
					/* row 9 */
				-8em 8em, -7em 8em, -1em 8em, 0 8em, 1em 8em, 2em 8em, 3em 8em,
				4em 8em, 10em 8em, 11em 8em, /* row 10 */
				-9em 9em, -8em 9em, -1em 9em,
				0 9em, 1em 9em, 2em 9em, 3em 9em, 4em 9em, 11em 9em, 12em 9em,
					/* row 11 */
				-10em 10em, -9em 10em, -1em 10em, 0 10em, 1em 10em, 2em 10em,
				3em 10em, 4em 10em, 9em 10em, 10em 10em, 12em 10em, 13em 10em,
					/* row 12 */
				-11em 11em, -10em 11em, -1em 11em, 0 11em, 1em 11em, 2em 11em,
				3em 11em, 4em 11em, 7em 11em, 9em 11em, 10em 11em, 13em 11em, 14em 11em,
					/* row 13 */
				-12em 12em, -11em 12em, -9em 12em, -8em 12em, -7em 12em,
				-6em 12em, -5em 12em, -4em 12em, -3em 12em, -2em 12em, 0 12em, 1em 12em,
				2em 12em, 3em 12em, 14em 12em, 15em 12em, /* row 14 */
				-13em 13em,
				-12em 13em, -9em 13em, -4em 13em, -3em 13em, -2em 13em, -1em 13em,
				8em 13em, 15em 13em, 16em 13em, /* row 15 */
				-14em 14em, -13em 14em,
				-9em 14em, -5em 14em, -4em 14em, -3em 14em, -2em 14em, -1em 14em, 0 14em,
				8em 14em, 10em 14em, 16em 14em, 17em 14em, /* row 16 */
				-15em 15em,
				-14em 15em, -9em 15em, -7em 15em, -6em 15em, -5em 15em, -4em 15em,
				-3em 15em, -2em 15em, 0 15em, 6em 15em, 10em 15em, 17em 15em, 18em 15em,
					/* row 17 */
				-16em 16em, -15em 16em, -9em 16em, -7em 16em, -6em 16em,
				-5em 16em, -4em 16em, -3em 16em, 0 16em, 6em 16em, 8em 16em, 18em 16em,
				19em 16em, /* row 18 */
				-17em 17em, -16em 17em, -9em 17em, -8em 17em,
				-7em 17em, -6em 17em, -5em 17em, -4em 17em, 0 17em, 19em 17em, 20em 17em,
					/* row 19 */
				-17em 18em, -16em 18em, -9em 18em, -8em 18em, -7em 18em,
				-6em 18em, -5em 18em, -4em 18em, -3em 18em, -2em 18em, -1em 18em, 0 18em,
				1em 18em, 2em 18em, 3em 18em, 4em 18em, 5em 18em, 6em 18em, 7em 18em,
				8em 18em, 9em 18em, 10em 18em, 11em 18em, 19em 18em, 20em 18em,
					/* row 20 */
				-17em 19em, -16em 19em, -8em 19em, -7em 19em, -6em 19em,
				-5em 19em, -4em 19em, 0 19em, 6em 19em, 7em 19em, 8em 19em, 9em 19em,
				10em 19em, 19em 19em, 20em 19em, /* row 21 */
				-17em 20em, -16em 20em,
				-8em 20em, -7em 20em, -6em 20em, -5em 20em, -4em 20em, -3em 20em, 6em 20em,
				7em 20em, 8em 20em, 9em 20em, 19em 20em, 20em 20em,
					/* row 22 */
				-16em 21em, -15em 21em, -8em 21em, -7em 21em, -6em 21em,
				-5em 21em, -4em 21em, -3em 21em, -2em 21em, 18em 21em, 19em 21em,
					/* row 23 */
				-15em 22em, -14em 22em, -8em 22em, -7em 22em, -6em 22em,
				-4em 22em, -3em 22em, -2em 22em, -1em 22em, 17em 22em, 18em 22em,
					/* row 24 */
				-14em 23em, -13em 23em, -8em 23em, -7em 23em, -6em 23em,
				-3em 23em, -2em 23em, -1em 23em, 16em 23em, 17em 23em,
					/* row 25 */
				-13em 24em, -12em 24em, -8em 24em, -7em 24em, -6em 24em,
				-3em 24em, -2em 24em, -1em 24em, 5em 24em, 6em 24em, 15em 24em, 16em 24em,
					/* row 26 */
				-12em 25em, -11em 25em, -8em 25em, -7em 25em, -6em 25em,
				-3em 25em, -2em 25em, -1em 25em, 4em 25em, 5em 25em, 6em 25em, 7em 25em,
				14em 25em, 15em 25em, /* row 27 */
				-11em 26em, -10em 26em, -8em 26em,
				-7em 26em, -6em 26em, -3em 26em, -2em 26em, 3em 26em, 4em 26em, 5em 26em,
				6em 26em, 7em 26em, 8em 26em, 13em 26em, 14em 26em,
					/* row 28 */
				-10em 27em, -9em 27em, -7em 27em, -6em 27em, -3em 27em,
				-2em 27em, -1em 27em, 2em 27em, 3em 27em, 4em 27em, 5em 27em, 6em 27em,
				7em 27em, 8em 27em, 9em 27em, 12em 27em, 13em 27em, /* row 29 */
				-9em 28em,
				-8em 28em, -6em 28em, -3em 28em, -2em 28em, -1em 28em, 2em 28em, 3em 28em,
				4em 28em, 5em 28em, 6em 28em, 7em 28em, 8em 28em, 9em 28em, 11em 28em,
				12em 28em, /* row 30 */
				-8em 29em, -7em 29em, 10em 29em, 11em 29em,
					/* row 31 */
				-7em 30em, -6em 30em, 9em 30em, 10em 30em,
					/* row 32 */
				-6em 31em, -5em 31em, 8em 31em, 9em 31em,
					/* row 33 */
				-5em 32em, -4em 32em, 7em 32em, 8em 32em,
					/* row 34 */
				-4em 33em, -3em 33em, 6em 33em, 7em 33em,
					/* row 35 */
				-3em 34em, -2em 34em, 5em 34em, 6em 34em,
					/* row 36 */
				-2em 35em, -1em 35em, 4em 35em, 5em 35em,
					/* row 37 */
				-1em 36em, 0 36em, 1em 36em, 2em 36em, 3em 36em, 4em 36em,
					/* row 38 */
				0 37em, 1em 37em, 2em 37em, 3em 37em;
		}
	}
</style>
