<template>
	<div class="article-list">
		<dl class="clfix">
			<dt class="article-title">
				{{ title }}
			</dt>
			<dd class="article-content">
				<slot>기본값</slot>
			</dd>
		</dl>
	</div>
</template>

<script>
	export default {
		name: "descriptionList",
		props: {
			title: {
				type: String,
				default: ""
			}
		}
	};
</script>

<style lang="scss" scoped>
	.article-list {
		width: 100%;
		dl {
			width: 100%;
			.article-title {
				width: 100px;
				display: block;
				float: left;
				padding-top: 6px;
				color: #191919;
				font-size: 14px;
				font-family: "Russo", cursive;
			}
			.article-content {
				width: calc(100% - 100px);
				display: block;
				float: left;
				color: #191919;
				font-size: 16px;
				line-height: 1.63;
				word-break: break-all;
			}
		}
	}

	@media (max-width: 890px) {
		.article-list {
			dl {
				.article-title {
					width: 100%;
					float: none;
					padding-bottom: 12px;
					font-size: 13px;
				}
				.article-content {
					width: 100%;
					float: none;
					font-size: 14px;
				}
			}
		}
	}
</style>
