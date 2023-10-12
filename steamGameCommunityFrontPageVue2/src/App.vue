<template>
	<div id="app">
		<LayoutPage />
		<!-- <NewsArea />
    <DiscountArea />
    <PlayerDiscussionForum /> -->
		<Test />
	</div>
</template>
<script>
import LayoutPage from "./components/LayoutPage.vue";
import NewsArea from "./views/home_page/NewsArea.vue";
import DiscountArea from "./views/home_page/DiscountArea.vue";
import PlayerDiscussionForum from "./views/home_page/PlayerDiscussionForum.vue";
import GameListPage from "./views/game_discounts/GameListPage.vue";
import Test from "./views/game_discounts/Test.vue";
export default {
	name: "App",
	components: {
		LayoutPage,
		NewsArea,
		DiscountArea,
		PlayerDiscussionForum,
		GameListPage,
		Test,
	},
};
</script>
