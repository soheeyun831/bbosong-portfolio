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
          options: intersectionOptions
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
          options: intersectionOptions
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
          options: intersectionOptions
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
          options: intersectionOptions
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
								v-for="item in main.portfolio.slice(0,6)"
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
          options: intersectionOptions
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
          options: intersectionOptions
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

	export default {
		name: "index",
		components: {
			Article,
			CardList,
			CardItem,
			VueTypedJs,
			StatusBar,
			ToggleMessage,
			Contact
		},
		computed: {
			...mapGetters(["main"])
		},
		data() {
			return {
				strings: [
					"A third-year skilled front-end developer 💻<br/>Area of expertise<br/>: vue.js / javascript (es5,6) / css(3) / html (5)"
				],
				intersectionOptions: {
					root: null,
					thresholds: [0, 1]
				}, // https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
				visible: {
					mainImage: false,
					introduction: false,
					career: false,
					skill: false,
					portfolio: false,
					faq: false,
					contact: false
				}
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
			}
		}
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
</style>
