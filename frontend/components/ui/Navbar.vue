<style lang="postcss" scoped>
.layout {
	background: #f5f7f9;
	position: relative;
	overflow: hidden;
	.layout-logo {
		width: 100px;
		height: 30px;
		background: #2ecf91;
		border-radius: 3px;
		float: left;
		position: relative;
		top: 15px;
		left: 20px;
	}
	.layout-nav {
		width: 420px;
		margin: 0 auto;
		margin-right: 20px;
	}
	.layout-footer-center {
		text-align: center;
	}
	.theme-switcher {
		font-size: 1.5em;
		float: right;
		margin-right: 2em;
		&:hover {
			color: #5797d6;
		}
	}
	clear: both;
}
</style>
<template>
	<div class="layout">
		<Layout>
			<Menu mode="horizontal" :theme="theme" active-name="1">
				<div class="layout-logo"></div>
				<div class="layout-nav">
					<MenuItem name="1">
						<Icon type="ios-navigate"></Icon>
						Item 1
					</MenuItem>
					<MenuItem name="2">
						<Icon type="ios-keypad"></Icon>
						Item 2
					</MenuItem>
					<MenuItem name="3">
						<Icon type="ios-analytics"></Icon>
						Item 3
					</MenuItem>
				</div>
				<div class="theme-switcher">
					<template v-if="theme == 'light'">
						<div @click="mode">
							<Icon type="md-moon" />
						</div>
					</template>
					<template v-if="theme == 'dark'">
						<div style="color: white" @click="mode">
							<Icon type="md-sunny" />
						</div>
					</template>
				</div>
			</Menu>
		</Layout>
	</div>
</template>
<script>
export default {
	data() {
		return {
			theme: 'light',
		}
	},
	methods: {
		mode() {
			if (this.theme === 'light') this.theme = 'dark'
			else this.theme = 'light'
		},
	},
}
</script>
