<template>
	<div class="error-page">
		<h1>요청하신 페이지를 찾을 수 없습니다.</h1>
		<p class="zoom-area">
			페이지 주소(URL)가 잘못 입력되었거나
			변경 또는 삭제되어 접속할 수 없습니다.
		</p>
		<section class="error-container">
			<span class="four">
				<span class="screen-reader-text">4</span>
			</span>
			<span class="zero">
				<span class="screen-reader-text">0</span>
			</span>
			<span class="four">
				<span class="screen-reader-text">4</span>
			</span>
		</section>
		<div class="link-container">
			<router-link
				to="/"
				class="go-home">포트폴리오 사이트로 돌아가기
			</router-link>
		</div>
	</div>
</template>

<script>
	export default {
		name: "error"
	};
</script>

<style
	lang="scss"
	scoped>
	@import "../assets/scss/color";
	@import url('https://fonts.googleapis.com/css?family=Montserrat:400,600,700');
	@import url('https://fonts.googleapis.com/css?family=Catamaran:400,800');

	@keyframes bgshadow {
		0% {
			box-shadow: inset -160px 160px 0px 5px rgba(0, 0, 0, 0.4);
		}
		45% {
			box-shadow: inset 0px 0px 0px 0px rgba(0, 0, 0, 0.1);
		}
		55% {
			box-shadow: inset 0px 0px 0px 0px rgba(0, 0, 0, 0.1);
		}
		100% {
			box-shadow: inset 160px -160px 0px 5px rgba(0, 0, 0, 0.4);
		}
	}

	.error-page {
		width: 100%;
		height: 100%;
		background-color: #FDFAF5;
		padding: 100px 0;
    box-sizing: border-box;

		h1 {
			color: $grayish-navy-color;
			text-align: center;
			margin: 30px auto;
		}

		.zoom-area {
			max-width: 490px;
			margin: 30px auto;
			color: $gray-color;
			font-size: 14px;
			text-align: center;
		}

		.error-container {
			text-align: center;
			font-size: 106px;
			font-family: 'Catamaran', sans-serif;
			font-weight: 800;
			margin: 70px 15px;

			> span {
				display: inline-block;
				position: relative;

				&.four {
					width: 136px;
					height: 43px;
					border-radius: 999px;
					background: linear-gradient(140deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.07) 43%, transparent 44%, transparent 100%),
					linear-gradient(105deg, transparent 0%, transparent 40%, rgba(0, 0, 0, 0.06) 41%, rgba(0, 0, 0, 0.07) 76%, transparent 77%, transparent 100%),
					linear-gradient(to right, #d89ca4, #e27b7e);

					&:before,
					&:after {
						content: '';
						display: block;
						position: absolute;
						border-radius: 999px;
					}

					&:before {
						width: 43px;
						height: 156px;
						left: 60px;
						bottom: -43px;
						background: linear-gradient(128deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.07) 40%, transparent 41%, transparent 100%),
						linear-gradient(116deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.07) 50%, transparent 51%, transparent 100%),
						linear-gradient(to top, #99749D, #B895AB, #CC9AA6, #D7969E, #E0787F);
					}

					&:after {

						width: 137px;
						height: 43px;
						transform: rotate(-49.5deg);
						left: -18px;
						bottom: 36px;
						background: linear-gradient(to right, #99749D, #B895AB, #CC9AA6, #D7969E, #E0787F);
					}
				}

				&.zero {
					vertical-align: text-top;
					width: 156px;
					height: 156px;
					border-radius: 999px;
					background: linear-gradient(-45deg, transparent 0%, rgba(0, 0, 0, 0.06) 50%, transparent 51%, transparent 100%),
					linear-gradient(to top right, #99749D, #99749D, #B895AB, #CC9AA6, #D7969E, #ED8687, #ED8687);
					overflow: hidden;
					animation: bgshadow 5s infinite;

					&:before {
						content: '';
						display: block;
						position: absolute;
						transform: rotate(45deg);
						width: 90px;
						height: 90px;
						background-color: transparent;
						left: 0px;
						bottom: 0px;
						background: linear-gradient(95deg, transparent 0%, transparent 8%, rgba(0, 0, 0, 0.07) 9%, transparent 50%, transparent 100%),
						linear-gradient(85deg, transparent 0%, transparent 19%, rgba(0, 0, 0, 0.05) 20%, rgba(0, 0, 0, 0.07) 91%, transparent 92%, transparent 100%);
					}

					&:after {
						content: '';
						display: block;
						position: absolute;
						border-radius: 999px;
						width: 70px;
						height: 70px;
						left: 43px;
						bottom: 43px;
						background: #FDFAF5;
						box-shadow: -2px 2px 2px 0px rgba(0, 0, 0, 0.1);

					}

				}

				.screen-reader-text {
					position: absolute;
					top: -9999em;
					left: -9999em;
				}
			}
		}

		.link-container {
			text-align: center;

			.go-home {
				display: inline-block;
				padding: 10px 24px;
				margin: 30px 5px 0 5px;
				color: $white-color;
				font-size: 16px;
				line-height: 1.5;
				letter-spacing: 1px;
				text-decoration: none;
				text-transform: uppercase;
				border-radius: 6px;
				background-color: $grayish-navy-color;
			}
		}

	}


  @media (max-width: 550px) {
    .error-page {
      padding: 70px 0;
      h1 {
        max-width: calc(100% - 32px);
        margin: 0 auto 20px;
        font-size: 24px;
      }
      .zoom-area {
        max-width: calc(100% - 32px);
        margin: 0 auto 30px;
        line-height: 1.43;
      }

      .error-container {
        font-size: 40px;
        margin-bottom: 50px;
        > span {
          &.four {
            width: 88px;
            height: 30px;
            top: 30px;
            border-radius: 999px;
            &:before {
              width: 30px;
              height: 100px;
              left: 40px;
              bottom: -24px;
            }
            &:after {
              width: 88px;
              height: 30px;
              left: -12px;
              bottom: 25px;
            }
          }

          &.zero {
            width: 90px;
            height: 90px;
            &:before {
              width: 30px;
              height: 30px;
            }
            &:after {
              border-radius: 999px;
              width: 30px;
              height: 30px;
              left: 30px;
              bottom: 30px;
            }
          }
        }
      }

      .link-container {
        .go-home {
          font-size: 14px;
        }
      }

    }
  }
</style>
