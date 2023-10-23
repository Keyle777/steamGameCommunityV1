<template>
	<div class="container">
		<GameNewsPage />
		<TopSearch class="topsearch" />
	</div>
</template>
<script>
import GameNewsPage from "./GameNewsPage.vue";
import TopSearch from "./TopSearch.vue";
export default {
	components: {
		TopSearch,
		GameNewsPage,
	},
};
</script>
<style scoped>
.container {
	display: flex;
	justify-content: space-around;
}
.topsearch {
	margin-top: 10px;
	margin-right: 30px;
}
</style>
