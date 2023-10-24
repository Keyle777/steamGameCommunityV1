<template>
	<div class="main">
		<NavigationBar />
		<FootPage />
	</div>
</template>
<script>
import NavigationBar from "./NavigationBar.vue";
import FootPage from "./FootPage.vue";
export default {
	name: "LayoutPage",
	components: {
		NavigationBar,
		FootPage,
	},
};
</script>
<style>
html,
body {
	position: relative; /* 设置相对定位，使页脚相对于 .main 定位 */
	font-family: "alimama" !important;
	font-size: 0;
	/* background-image: linear-gradient(to right, #ffecd2 0%, #fcb69f 100%); */
	background-image: linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%);
}
/* 将页脚固定在底部 */
footer {
	position: absolute; /* 设置绝对定位，相对于 .main 定位 */
	bottom: -40px; /* 将页脚固定在页面底部 */
	width: 100%;
}
</style>
