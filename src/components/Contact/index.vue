<template>
	<div class="form-group">
		<s-form :form-data="formData" @submitData="submitData">
			<dl class="form-item clfix">
				<dt class="form-title">
					기업명 <span class="compulsory">*</span>
				</dt>
				<dd class="form-control">
					<s-form-item :rules="['required','blank']">
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
					<s-form-item :rules="['required','blank']">
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
					<s-form-item :rules="['required','tel']">
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
					<s-form-item :rules="['required','blank']">
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
								<s-button type="button" class="btn" @click="openAddress()">
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
	</div>
</template>

<script>
	import DaumPostcode from "../DaumPostcode";
	import "../../plugins/element.js";

	export default {
		name: "index",
		components: {
			DaumPostcode
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
						post_no: ""
					}
				},
				address: {
					address: "",
					sigungu_cd: "",
					address_detail: "",
					post_no: ""
				},
				daumPostcodeVisible: false
			}
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
				}
			}
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
				console.log(this.formData)
			}
		}
	}
</script>

<style scoped>

</style>
