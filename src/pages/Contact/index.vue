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
          <img src="../../assets/images/main-contacy-me.png" alt="연락주세요" />
        </div>
        <div class="contact-right">
          <div class="form-group">
            <s-form ref="form" :form-data="formData" @submitData="submitData">
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
              </div>
            </s-form>
            <Dialog
              width="300px"
              height="300px"
              class="contact-result-dialog"
              :border-radius="'6px'"
              :visible.sync="resultDialog.visible"
              :before-close="closeResultDialog"
            >
              <section class="dialog-box">
                <header class="">
                  <div class="dialog-close" @click="closeResultDialog">
                    <img
                      src="../../assets/images/control/close-medium.png"
                      alt="dialog close"
                    />
                  </div>
                </header>
                <article>
                  <div
                    :class="{
                      'success-checkmark': resultDialog.state === 'success',
                      loading: resultDialog.state === 'request',
                      error: resultDialog.state === 'error',
                    }"
                  >
                    <div class="check-icon">
                      <span class="icon-line line-tip"></span>
                      <span class="icon-line line-long"></span>
                      <div class="icon-circle"></div>
                      <div class="icon-fix"></div>
                    </div>
                  </div>
                  <h3 class="main-copy" v-html="resultDialog.title"></h3>
                  <p class="sub-copy" v-html="resultDialog.message"></p>
                </article>
              </section>
            </Dialog>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DaumPostcode from "../../components/DaumPostcode";
import Dialog from "../../components/Dialog";
import "../../plugins/element.js";
// import emailSend from "../../api/emailSend";
import axios from "axios";

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
      resultDialog: {
        visible: false,
        state: "error",
        title: "메일이 가는 중",
        message: "잠시만 기다려주세요!",
      },
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
    setParams() {
      return (
        `기업명: ${this.formData.company}<br/>` +
        `성함: ${this.formData.name}<br/>` +
        `전화번호:${this.formData.name}<br/>` +
        `회사주소: ${this.formData.address.address} ${this.formData.address.address_detail}<br/>` +
        `이메일: ${this.formData.email}<br/>` +
        `추가메시지: ${this.formData.comment}`
      );
    },
    submitData() {
      const params = {
        subject: `포트폴리오 보고 연락 드립니다. : ${this.formData.company}`,
        msg: this.setParams(),
        to: "sul831@naver.com",
      };

      axios.interceptors.request.use(
        (config) => {
          this.resultDialog.visible = true;
          this.resultDialog.state = "request";
          this.resultDialog.title = "메일이 가는 중";
          this.resultDialog.message = "잠시만 기다려주세요!";
          return config;
        },
        (error) => {
          return Promise.reject(error);
        }
      );

      axios.interceptors.response.use(
        (response) => {
          this.resultDialog.message = "거의 다 됐어요!";
          return response;
        },
        (error) => {
          return Promise.reject(error);
        }
      );
      axios
        .post("http://132.145.93.122/api/email/send", params)
        .then(() => {
          this.resultDialog.state = "success";
          this.resultDialog.title = "메일이 성공적으로<br/>발송되었습니다.";
          this.resultDialog.message =
            "확인 후 연락 드리겠습니다! 감사합니다 :)";
          this.resetFormData(this.formData, true);
          this.$refs.form.reset();
        })
        .catch((err) => {
          this.resultDialog.state = "error";
          this.resultDialog.title = "메일 발송이<br/> 실패하였습니다.";
          this.resultDialog.message =
            "잠시 후 다시 시도해주시거나<br/> 010-2504-2452로 연락부탁드립니다.";
          console.error("api/email/send error");
          console.error(err);
        });
    },
    resetFormData(obj, deep) {
      let self = this;
      self.obj = obj;

      for (let item in self.obj) {
        const dataType = typeof self.obj[item];
        if (dataType === "number") {
          self.obj[item] = 0;
        } else if (dataType === "string") {
          self.obj[item] = "";
        } else if (dataType === "boolean") {
          self.obj[item] = false;
        } else if (dataType === "array") {
          self.obj[item] = [];
        } else if (dataType === "object") {
          if (deep) {
            if (item === "address") {
              this.resetFormData(this.address);
            }
            this.resetFormData(self.obj[item]);
          } else {
            self.obj[item] = {};
          }
        }
      }
    },
    closeResultDialog() {
      this.resultDialog.visible = false;
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

      .loading {
        width: 80px;
        height: 115px;
        margin: 0 auto;
        position: relative;

        &:before {
          content: "";
          display: block;
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        &:not(:required):after {
          content: "";
          width: 10px;
          height: 10px;
          display: block;
          position: absolute;
          top: 40px;
          left: 50%;
          margin-left: -5px;
          -webkit-animation: spinner 2500ms infinite linear;
          -moz-animation: spinner 2500ms infinite linear;
          -ms-animation: spinner 2500ms infinite linear;
          -o-animation: spinner 2500ms infinite linear;
          animation: spinner 2500ms infinite linear;
          border-radius: 0.5em;
          -webkit-box-shadow: #4caf50 1.5em 0 0 0, #67c66b 1.1em 1.1em 0 0,
            #67c66b 0 1.5em 0 0, #79d27d -1.1em 1.1em 0 0, #93e096 -1.5em 0 0 0,
            #a7ebaa -1.1em -1.1em 0 0, #bff3c1 0 -1.5em 0 0,
            #d2f7d4 1.1em -1.1em 0 0;
          box-shadow: #4caf50 1.5em 0 0 0, #67c66b 1.1em 1.1em 0 0,
            #67c66b 0 1.5em 0 0, #79d27d -1.1em 1.1em 0 0, #93e096 -1.5em 0 0 0,
            #a7ebaa -1.1em -1.1em 0 0, #bff3c1 0 -1.5em 0 0,
            #d2f7d4 1.1em -1.1em 0 0;
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

@-webkit-keyframes spinner {
  0% {
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@-moz-keyframes spinner {
  0% {
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@-o-keyframes spinner {
  0% {
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes spinner {
  0% {
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>
