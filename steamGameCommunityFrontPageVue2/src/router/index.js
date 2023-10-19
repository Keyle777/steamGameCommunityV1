import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);
import GameListPage from "../views/game_discounts/GameListPage.vue";
import NewsArea from "../views/home_page/NewsArea.vue";
import PlayerDiscussionForum from "../views/home_page/PlayerDiscussionForum.vue";
const router = new VueRouter({
	mode: "abstract",
	base: import.meta.env.BASE_URL,
	routes: [
		{
			path: "/",
			component: NewsArea,
		},
		{
			path: "/GameListPage",
			component: GameListPage,
		},
	],
});

export default router;
