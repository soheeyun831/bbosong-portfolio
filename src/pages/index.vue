<template>
	<div class="main-page-wrap">
		<div class="container">
			<article class="main-article main-greeting">
				<vue-typed-js :strings="strings" :type-speed="30">
					<h1><span class="typing"></span></h1>
				</vue-typed-js>
				<div class="typed-element not-show">
					<h1 style="opacity: 0;" v-html="strings"></h1>
				</div>
				<article class="main-image">
					<div class="image"></div>
				</article>
			</article>
			<article
				class="main-article border-bottom"
				v-waypoint="{
          active: true,
          callback: introductionWaypoint,
          options: intersectionOptions,
        }"
			>
				<transition
					name="fade"
					enter-active-class="fadeInUp"
					leave-active-class="fadeOutDown"
				>
					<Article title="i am" v-show="visible.introduction">
						<p class="pb-20" v-html="main.introduction"></p>
						<s-button>
							이력서 다운로드
						</s-button>
					</Article>
				</transition>
			</article>
			<article
				class="main-article border-bottom"
				v-waypoint="{
          active: true,
          callback: careerWaypoint,
          options: intersectionOptions,
        }"
			>
				<transition
					name="fade"
					enter-active-class="fadeInUp"
					leave-active-class="fadeOutDown"
				>
					<div v-show="visible.career">
						<h2 class="article-title">
							경력
						</h2>
						<CardList>
							<CardItem
								v-for="item in main.career"
								:key="item.no"
								:item="item"
								:link="'careerDetail'"
							></CardItem>
						</CardList>
					</div>
				</transition>
			</article>
			<article
				class="main-article"
				v-waypoint="{
          active: true,
          callback: skillWaypoint,
          options: intersectionOptions,
        }"
			>
				<transition
					name="fade"
					enter-active-class="fadeInUp"
					leave-active-class="fadeOutDown"
				>
					<Article title="Skills" v-show="visible.skill">
						<ul>
							<li v-for="(item, index) in main.skill" :key="item.no">
								<StatusBar
									:text="item.name"
									:percent="item.ability"
									:index="index"
								/>
							</li>
						</ul>
					</Article>
				</transition>
			</article>
		</div>
		<div class="main-portfolio container">
			<article
				class=""
				v-waypoint="{
          active: true,
          callback: portfolioWaypoint,
          options: intersectionOptions,
        }"
			>
				<transition
					name="fade"
					enter-active-class="fadeInUp"
					leave-active-class="fadeOutDown"
				>
					<div v-show="visible.portfolio">
						<h2 class="article-title">
							<router-link to="/portfolio">
								PORTFOLIO
								<span class="more"
								><img
									src="../assets/images/control/arrow-small-next.png"
									alt="더보기"
								/></span>
							</router-link>
						</h2>
						<CardList>
							<CardItem
								v-for="item in main.portfolio.slice(0, 6)"
								:key="item.no"
								:item="item"
								:link="'portfolioDetail'"
							></CardItem>
						</CardList>
					</div>
				</transition>
			</article>
		</div>
		<div class="container">
			<article
				class="main-article border-bottom"
				v-waypoint="{
          active: true,
          callback: faqWaypoint,
          options: intersectionOptions,
        }"
			>
				<transition
					name="fade"
					enter-active-class="fadeInUp"
					leave-active-class="fadeOutDown"
				>
					<Article title="FAQ" v-show="visible.faq">
						<ToggleMessage :list="main.faq"/>
					</Article>
				</transition>
			</article>
		</div>
		<div class="main-contact container">
			<article
				class="main-article main-contact"
				v-waypoint="{
          active: true,
          callback: contactWaypoint,
          options: intersectionOptions,
        }"
			>
				<transition
					name="fade"
					enter-active-class="fadeInUp"
					leave-active-class="fadeOutDown"
				>
					<div v-show="visible.contact">
						<h2 class="article-title">
							CONTACT ME
						</h2>
						<p class="main-sub-title">
							안녕하세요. 저에게 관심이 생기신 분들은 아래 입력란에 작성 후
							보내주시면 너무 너무 감사하겠습니다. :)
						</p>
						<div class="contact-box">
							<div class="contact-left">
								<img
									src="../assets/images/main-contacy-me.png"
									alt="연락주세요"
								/>
							</div>
							<div class="contact-right">
								<Contact></Contact>
							</div>
						</div>
					</div>
				</transition>
			</article>
		</div>
		<Dialog
			width="300px"
			height="300px"
			class="construction-dialog"
			:border-radius="'6px'"
			:visible.sync="constructionDialog"
			:before-close="handleClose"
		>
			<section class="dialog-box">
				<header class="">
					<div class="dialog-close" @click="handleClose">
						<img
							src="../assets/images/control/close-medium.png"
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
	require("vue2-animate/dist/vue2-animate.min.css");
	import {mapGetters} from "vuex";
	import {VueTypedJs} from "vue-typed-js";
	import Article from "../components/Article";
	import CardList from "../components/Card/List";
	import CardItem from "../components/Card/Item";
	import StatusBar from "../components/StatusBar";
	import ToggleMessage from "../components/ToggleMessage/List";
	import Contact from "../components/Contact";
	import Dialog from "../components/Dialog";

	export default {
		name: "index",
		components: {
			Article,
			CardList,
			CardItem,
			VueTypedJs,
			StatusBar,
			ToggleMessage,
			Contact,
			Dialog,
		},
		computed: {
			...mapGetters(["main"]),
		},
		data() {
			return {
				strings: [
					"A third-year skilled front-end developer 💻<br/>Area of expertise<br/>: vue.js / javascript (es5,6) / css(3) / html (5)",
				],
				intersectionOptions: {
					root: null,
					thresholds: [0, 1],
				}, // https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
				visible: {
					mainImage: false,
					introduction: false,
					career: false,
					skill: false,
					portfolio: false,
					faq: false,
					contact: false,
				},
				constructionDialog: true,
			};
		},
		methods: {
			introductionWaypoint({going}) {
				this.onWaypoint(going, "introduction");
			},
			careerWaypoint({going}) {
				this.onWaypoint(going, "career");
			},
			skillWaypoint({going}) {
				this.onWaypoint(going, "skill");
			},
			portfolioWaypoint({going}) {
				this.onWaypoint(going, "portfolio");
			},
			faqWaypoint({going}) {
				this.onWaypoint(going, "faq");
			},
			contactWaypoint({going}) {
				this.onWaypoint(going, "contact");
			},
			onWaypoint(going, type) {
				if (going === "in") {
					this.visible[type] = true;
				}
			},
			handleClose() {
				// TODO :임시 BACK-END 개발 전 Dialog
				this.constructionDialog = false;
			},
		},
	};
</script>

<style lang="scss">
	@import "../assets/scss/color";

	.main-page-wrap {
		width: 100%;
		padding-top: 110px;

		.main-article {
			width: 100%;
			position: relative;
			padding-top: 70px;

			&.border-bottom {
				border-bottom: 1px solid #dddddd;
				padding-bottom: 70px;
			}

			&.main-contact {
				padding-bottom: 30px;
			}
		}

		h2.article-title {
			position: relative;
			padding-bottom: 30px;
			font-size: 28px;
			text-align: center;
			line-height: 28px;
			letter-spacing: -0.4px;

			.more {
				position: absolute;
				right: 0;
				font-size: 16px;
				font-weight: 400;
				line-height: 28px;

				img {
					width: 16px;
					height: 16px;
					display: inline-block;
					padding-left: 4px;
					line-height: 28px;
					vertical-align: middle;
				}

				&:before {
					content: "더보기";
				}
			}
		}

		p.main-sub-title {
			padding-bottom: 60px;
			color: $gray-color;
			font-size: 15px;
			text-align: center;
		}

		.main-greeting {
			padding-top: 0;
			padding-bottom: 100px;

			.typed-element {
				width: 100%;
				position: absolute;
				top: 0;
				font-weight: 100;
				font-family: "Russo", cursive;
				line-height: 1.43;
				word-break: break-all;
				transition: all 300ms;

				h1 {
					width: max-content;
					max-width: 100%;
					color: #191919;
					font-size: 46px;

					&:hover {
						color: #df405a;
						filter: drop-shadow(10px 10px 0px rgba(0, 0, 0, 0.1));
						transition: all 300ms;
					}
				}

				&.not-show {
					opacity: 0;
					position: relative;
					padding-bottom: 100px;
				}
			}

			.main-image {
				width: 100%;
				padding-bottom: 43%;
				position: relative;
				overflow: hidden;

				.image {
					width: 100%;
					height: 100%;
					position: absolute;
					top: 0;
					background-image: url(../assets/images/main-image.gif);
					background-size: auto 50%;
				}
			}
		}

		.main-portfolio {
			margin-top: 70px;
			padding-top: 70px;
			padding-bottom: 70px;
			background-color: $white-background-color;
		}
	}

	@media (max-width: 1680px) {
		.main-page-wrap {
			.main-greeting .typed-element h1 {
				font-size: 42px;
			}
		}
	}

	@media (max-width: 1440px) {
		.main-page-wrap {
			.main-greeting .typed-element h1 {
				font-size: 40px;
			}
		}
	}

	@media (max-width: 1366px) {
		.main-page-wrap {
			padding-top: 100px;

			.main-greeting .typed-element h1 {
				font-size: 38px;
			}
		}
	}

	@media (max-width: 1280px) {
		.main-page-wrap {
			padding-top: 90px;

			.main-greeting .typed-element h1 {
				font-size: 35px;
			}
		}
	}

	@media (max-width: 1024px) {
		.main-page-wrap {
			padding-top: 80px;

			.main-greeting .typed-element h1 {
				font-size: 28px;
			}
		}
	}

	@media (max-width: 890px) {
		.main-page-wrap {
			h2.article-title {
				.more {
					right: auto;
					margin-top: -2px;

					&:before {
						content: "";
					}
				}
			}
		}
	}

	@media (max-width: 550px) {
		.main-page-wrap {
			padding-top: 60px;

			.main-greeting .typed-element h1 {
				font-size: 24px;
			}
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
