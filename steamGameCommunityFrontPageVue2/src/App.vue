<template>
	<div id="app">
		<LayoutPage />
		<!-- <NewsArea />
    <DiscountArea />
    <PlayerDiscussionForum /> -->
		<PopularRankings />
	</div>
</template>
<script>
import LayoutPage from "./components/LayoutPage.vue";
import NewsArea from "./views/home_page/NewsArea.vue";
import DiscountArea from "./views/home_page/DiscountArea.vue";
import PlayerDiscussionForum from "./views/home_page/PlayerDiscussionForum.vue";
import GameListPage from "./views/game_discounts/GameListPage.vue";
import PopularRankings from "./views/real_time_online/PopularRankings.vue";
export default {
	name: "App",
	components: {
		LayoutPage,
		NewsArea,
		DiscountArea,
		PlayerDiscussionForum,
		GameListPage,
		PopularRankings,
	},
};
</script>
