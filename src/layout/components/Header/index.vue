<template>
	<header class="header clfix" :class="{ active: headerActive }">
		<div class="left">
			<ul class="clfix">
				<li>
					<router-link to="/career">Career</router-link>
				</li>
				<li>
					<router-link to="/portfolio">Portfolio</router-link>
				</li>
				<li>
					<router-link to="/contact">contact</router-link>
				</li>
			</ul>
		</div>
		<div class="right">
			<ul class="clfix">
				<li class="git">
					<a href="https://github.com/soheeyun831/bbosong-portfolio" target="_blank" aria-label="Github">
						<svg
							version="1.1"
							id="Capa_1"
							xmlns="http://www.w3.org/2000/svg"
							xmlns:xlink="http://www.w3.org/1999/xlink"
							x="0px"
							y="0px"
							width="24px"
							height="24px"
							viewBox="0 0 438.549 438.549"
							xml:space="preserve"
						>
              <g>
                <path
	                fill="#757474"
	                d="M409.132,114.573c-19.608-33.596-46.205-60.194-79.798-79.8C295.736,15.166,259.057,5.365,219.271,5.365
		c-39.781,0-76.472,9.804-110.063,29.408c-33.596,19.605-60.192,46.204-79.8,79.8C9.803,148.168,0,184.854,0,224.63
		c0,47.78,13.94,90.745,41.827,128.906c27.884,38.164,63.906,64.572,108.063,79.227c5.14,0.954,8.945,0.283,11.419-1.996
		c2.475-2.282,3.711-5.14,3.711-8.562c0-0.571-0.049-5.708-0.144-15.417c-0.098-9.709-0.144-18.179-0.144-25.406l-6.567,1.136
		c-4.187,0.767-9.469,1.092-15.846,1c-6.374-0.089-12.991-0.757-19.842-1.999c-6.854-1.231-13.229-4.086-19.13-8.559
		c-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559
		c-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-0.951-2.568-2.098-3.711-3.429c-1.142-1.331-1.997-2.663-2.568-3.997
		c-0.572-1.335-0.098-2.43,1.427-3.289c1.525-0.859,4.281-1.276,8.28-1.276l5.708,0.853c3.807,0.763,8.516,3.042,14.133,6.851
		c5.614,3.806,10.229,8.754,13.846,14.842c4.38,7.806,9.657,13.754,15.846,17.847c6.184,4.093,12.419,6.136,18.699,6.136
		c6.28,0,11.704-0.476,16.274-1.423c4.565-0.952,8.848-2.383,12.847-4.285c1.713-12.758,6.377-22.559,13.988-29.41
		c-10.848-1.14-20.601-2.857-29.264-5.14c-8.658-2.286-17.605-5.996-26.835-11.14c-9.235-5.137-16.896-11.516-22.985-19.126
		c-6.09-7.614-11.088-17.61-14.987-29.979c-3.901-12.374-5.852-26.648-5.852-42.826c0-23.035,7.52-42.637,22.557-58.817
		c-7.044-17.318-6.379-36.732,1.997-58.24c5.52-1.715,13.706-0.428,24.554,3.853c10.85,4.283,18.794,7.952,23.84,10.994
		c5.046,3.041,9.089,5.618,12.135,7.708c17.705-4.947,35.976-7.421,54.818-7.421s37.117,2.474,54.823,7.421l10.849-6.849
		c7.419-4.57,16.18-8.758,26.262-12.565c10.088-3.805,17.802-4.853,23.134-3.138c8.562,21.509,9.325,40.922,2.279,58.24
		c15.036,16.18,22.559,35.787,22.559,58.817c0,16.178-1.958,30.497-5.853,42.966c-3.9,12.471-8.941,22.457-15.125,29.979
		c-6.191,7.521-13.901,13.85-23.131,18.986c-9.232,5.14-18.182,8.85-26.84,11.136c-8.662,2.286-18.415,4.004-29.263,5.146
		c9.894,8.562,14.842,22.077,14.842,40.539v60.237c0,3.422,1.19,6.279,3.572,8.562c2.379,2.279,6.136,2.95,11.276,1.995
		c44.163-14.653,80.185-41.062,108.068-79.226c27.88-38.161,41.825-81.126,41.825-128.906
		C438.536,184.851,428.728,148.168,409.132,114.573z"
                />
              </g>
            </svg>
					</a>
				</li>
				<li class="insta">
					<a
						href="https://www.instagram.com/bbosong_hee/"
						target="_blank"
						aria-label="Instagram"
						@mouseover="instagram = true"
						@mouseleave="instagram = false"
					>
						<svg
							enable-background="new 0 0 30 30"
							height="30"
							viewBox="0 0 30 30"
							width="30"
							xmlns="http://www.w3.org/2000/svg"
							xmlns:xlink="http://www.w3.org/1999/xlink"
						>
							<linearGradient
								id="SVGID_1_"
								gradientTransform="matrix(0 -1.982 -1.844 0 -132.522 -51.077)"
								gradientUnits="userSpaceOnUse"
								x1="-37.106"
								x2="-26.555"
								y1="-72.705"
								y2="-84.047"
							>
								<stop offset="0" :stop-color="instagram ? '#fd5' : '#757474'"/>
								<stop
									offset=".5"
									:stop-color="instagram ? '#ff543e' : '#757474'"
								/>
								<stop
									offset="1"
									:stop-color="instagram ? '#c837ab' : '#757474'"
								/>
							</linearGradient>
							<path
								d="m1.5 1.633c-1.886 1.959-1.5 4.04-1.5 10.362 0 5.25-.916 10.513 3.878 11.752 1.497.385 14.761.385 16.256-.002 1.996-.515 3.62-2.134 3.842-4.957.031-.394.031-13.185-.001-13.587-.236-3.007-2.087-4.74-4.526-5.091-.559-.081-.671-.105-3.539-.11-10.173.005-12.403-.448-14.41 1.633z"
								fill="url(#SVGID_1_)"
							/>
							<path
								d="m11.998 3.139c-3.631 0-7.079-.323-8.396 3.057-.544 1.396-.465 3.209-.465 5.805 0 2.278-.073 4.419.465 5.804 1.314 3.382 4.79 3.058 8.394 3.058 3.477 0 7.062.362 8.395-3.058.545-1.41.465-3.196.465-5.804 0-3.462.191-5.697-1.488-7.375-1.7-1.7-3.999-1.487-7.374-1.487zm-.794 1.597c7.574-.012 8.538-.854 8.006 10.843-.189 4.137-3.339 3.683-7.211 3.683-7.06 0-7.263-.202-7.263-7.265 0-7.145.56-7.257 6.468-7.263zm5.524 1.471c-.587 0-1.063.476-1.063 1.063s.476 1.063 1.063 1.063 1.063-.476 1.063-1.063-.476-1.063-1.063-1.063zm-4.73 1.243c-2.513 0-4.55 2.038-4.55 4.551s2.037 4.55 4.55 4.55 4.549-2.037 4.549-4.55-2.036-4.551-4.549-4.551zm0 1.597c3.905 0 3.91 5.908 0 5.908-3.904 0-3.91-5.908 0-5.908z"
								fill="#fff"
							/>
						</svg>
					</a>
				</li>
				<li class="kakao">
					<a href="https://open.kakao.com/o/sxEbGCac" target="_blank" aria-label="KakaoTalk">
						<svg
							id="Bold"
							enable-background="new 0 0 30 30"
							height="30"
							viewBox="0 0 28 28"
							width="30"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="m9.462 9.306-.692 1.951h1.383z" fill="#757474"/>
							<path
								d="m12 1c-6.627 0-12 4.208-12 9.399 0 3.356 2.246 6.301 5.625 7.963-1.299 4.45-1.333 4.47-1.113 4.599.276.161.634-.005 5.357-3.311.692.097 1.404.148 2.131.148 6.627 0 12-4.208 12-9.399s-5.373-9.399-12-9.399zm-5.942 12.023c0 .362-.311.657-.692.657s-.692-.295-.692-.657v-4.086h-1.08c-.375 0-.679-.302-.679-.673s.303-.674.678-.674h3.545c.375 0 .679.302.679.673s-.305.674-.679.674h-1.08zm5.378.648c-.72 0-.587-.565-.919-1.195h-2.111c-.329.625-.2 1.195-.919 1.195-.693.001-.815-.421-.604-1.071l1.656-4.33c.117-.33.471-.669.922-.679.452.01.807.349.923.679 1.093 3.39 2.654 5.402 1.052 5.401zm3.939-.092h-2.221c-1.159 0-.454-1.565-.663-5.301 0-.379.317-.688.707-.688s.707.308.707.688v4.04h1.471c.366 0 .663.283.663.63-.001.348-.298.631-.664.631zm5.419-.518c-.025.181-.122.344-.269.454-.955.721-1.661-1.381-2.593-2.271l-.24.239v1.5c0 .38-.31.688-.693.688-.382 0-.692-.308-.692-.688v-4.705c0-.379.31-.688.692-.688s.692.308.692.688v1.478c1.277-.958 1.985-2.67 2.792-1.869.792.786-.848 1.474-1.527 2.422 1.604 2.212 1.909 2.267 1.838 2.752z"
								fill="#757474"
							/>
						</svg>
					</a>
				</li>
				<li class="hamburger">
					<div @click="sidePanelVisible = true">
						<svg
							version="1.1"
							id="Capa_1"
							xmlns="http://www.w3.org/2000/svg"
							xmlns:xlink="http://www.w3.org/1999/xlink"
							x="0px"
							y="0px"
							viewBox="0 0 28 28"
							style="enable-background:new 0 0 28 28;"
							xml:space="preserve"
						>
              <circle
	              class="circle"
	              style="fill:#757474;"
	              cx="14"
	              cy="14"
	              r="14"
              />
							<line
								style="fill:none;stroke:#FFFFFF;stroke-width:2;stroke-linecap:round;stroke-miterlimit:10;"
								x1="8"
								y1="8"
								x2="20"
								y2="8"
							/>
							<line
								style="fill:none;stroke:#FFFFFF;stroke-width:2;stroke-linecap:round;stroke-miterlimit:10;"
								x1="8"
								y1="14"
								x2="20"
								y2="14"
							/>
							<line
								style="fill:none;stroke:#FFFFFF;stroke-width:2;stroke-linecap:round;stroke-miterlimit:10;"
								x1="8"
								y1="20"
								x2="20"
								y2="20"
							/>
            </svg>
					</div>
				</li>
			</ul>
		</div>
		<sidePanel :visible.sync="sidePanelVisible"></sidePanel>
	</header>
</template>

<script>
	import sidePanel from "../Side/panel";

	export default {
		name: "index",
		components: {
			sidePanel
		},
		data() {
			return {
				instagram: false,
				headerActive: false,
				sidePanelVisible: false
			};
		},
		mounted() {
			this.scrollListener();
			document.addEventListener("scroll", this.scrollListener);
		},
		beforeDestroy() {
			document.removeEventListener("scroll", this.scrollListener);
		},
		methods: {
			scrollListener() {
				this.headerActive =
					document.body.scrollTop > 50 || document.documentElement.scrollTop > 50;
			}
		}
	};
</script>

<style lang="scss" scoped>
	.header {
		width: 100%;
		height: 106px;
		padding: 20px 0 0 0;
		position: fixed;
		left: 0;
		box-sizing: border-box;
		background-color: transparent;
		transition: background-color 500ms;

		&.active {
			background-color: #ffffff;
			z-index: 10;
		}

		.left {
			padding-top: 20px;
			float: left;

			ul {
				li {
					float: left;
					display: inline-block;
					margin-right: 20px;
					cursor: pointer;

					a {
						display: inline-block;
						position: relative;
						font-size: 16px;
						font-family: "Russo", cursive;

						&:hover {
							transition: all 600s ease;
							color: #df405a;
							background-color: #df405a;
							background: -o-linear-gradient(
									left,
									#df405a 20%,
									#87314e,
									#512645,
									#87314e
							);
							background: -webkit-linear-gradient(
									left,
									#df405a 20%,
									#87314e,
									#512645,
									#87314e
							);
							-webkit-background-clip: text;
							-moz-background-clip: text;
							-webkit-text-fill-color: transparent;
							background-clip: text;
							-webkit-animation: dancingColors 2s infinite forwards ease-in-out;
							animation: dancingColors 2s infinite forwards ease-in-out;
						}

						&:before,
						&:after {
							width: 0;
							bottom: 0;
							content: "";
							position: absolute;
							border-bottom: solid 1px #df405a;
						}

						&:before {
							left: 0;
						}

						&:after {
							right: 0;
						}

						&.router-link-active {
							color: #df405a;

							&:before,
							&:after {
								width: 50%;
								-webkit-transition: all 300ms ease;
								transition: all 300ms ease;
							}
						}
					}

					&:last-child {
						margin-right: 0;
					}
				}
			}
		}

		.right {
			float: right;
			padding-top: 14px;

			ul {
				li {
					width: 28px;
					height: 28px;
					margin-right: 10px;
					float: left;
					overflow: hidden;

					a {
						width: 24px;
						height: 24px;
						display: block;
						position: relative;
						cursor: pointer;

						svg {
							stop {
								transition: all 300ms;
							}
						}

						&::before,
						&::after {
							position: absolute;
							left: 50%;
							transform: translate(-50%, -5px);
							opacity: 0;
							transition: 100ms;
						}

						&::before {
							content: "";
							bottom: -18px;
							border: solid 5px transparent;
						}

						&::after {
							content: attr(aria-label);
							bottom: -50px;
							padding: 0.5rem 0.75rem;
							color: white;
							font-size: 0.875rem;
							border-radius: 3px;
						}

						&:hover::before,
						&:hover::after {
							opacity: 1;
						}
					}

					&.git {
						a::before {
							border-bottom-color: #e94e32;
						}

						&:hover {
							svg {
								path {
									fill: #e94e32;
									transition: all 300ms;
								}
							}
						}

						a:hover::after {
							background: #e94e32;
						}
					}

					&.insta {
						a::before {
							border-bottom-color: #df405a;
						}

						a:hover::after {
							background: #df405a;
						}
					}

					&.kakao {
						margin-right: 0;

						a::before {
							border-bottom-color: #ffc723;
						}

						&:hover {
							svg {
								path {
									fill: #ffc723;
									transition: all 300ms;
								}
							}
						}

						a:hover::after {
							background: #ffc723;
						}
					}

					&.hamburger {
						display: none;
						margin-right: 0;

						> div {
							width: 24px;
							height: 24px;
							display: block;
							position: relative;
							cursor: pointer;
						}

						&:hover {
							svg {
								.circle {
									fill: #df405a !important;
									transition: all 300ms;
								}
							}
						}
					}

					&:hover {
						overflow: visible;
					}
				}
			}
		}
	}

	@media screen and (min-width: 0 \0
	) {
		/* IE9 and IE10 hack */
		header .left ul li:hover {
			background: transparent;
		}
	}

	@-moz-document url-prefix() {
		/* Firefox hack */
		header .left ul li:hover {
			background-color: transparent;
		}
	}

	@-webkit-keyframes dancingColors {
		50% {
			//  background: -webkit-linear-gradient(left, #FF1361, #44107A, #7794ff);
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
			background-clip: text;
			background-position: -60px;
		}
	}

	@keyframes dancingColors {
		50% {
			//  background: -webkit-linear-gradient(left, #FF1361, #44107A, #7794ff);
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
			background-clip: text;
			background-position: -60px;
		}
	}

	@media (max-width: 1920px) {
		.header {
			left: 0;
			padding: {
				left: 125px;
				right: 125px;
			}
		}
	}

	@media (max-width: 890px) {
		.header {
			height: 90px;
			padding: {
				top: 0;
				left: 8vw;
				right: 8vw;
			}

			.left {
				display: none;
			}

			.right {
				padding-top: 30px;
			}
		}
	}

	@media (max-width: 760px) {
		.header {
			.right {
				ul {
					li {
						&.kakao {
							margin-right: 10px;
						}

						&.hamburger {
							display: block;
						}
					}
				}
			}
		}
	}

	@media (max-width: 550px) {
		.header {
			padding: {
				right: 6vw;
			}
		}
	}

	@media (max-width: 375px) {
		.header {
			padding: {
				right: 6.2vw;
			}
		}
	}
</style>
