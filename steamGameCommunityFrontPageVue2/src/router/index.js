import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
import GameListPage from "../views/game_discounts/GameListPage.vue";
import IndexPrePage from "../components/IndexPrePage.vue";
import PopularRankings from "../views/real_time_online/PopularRankings.vue";
import GameHome from "../views/game_information/GameHome.vue";
import TopSearch from "../views/game_information/TopSearch.vue";
const router = new VueRouter({
	mode: "history",
	base: import.meta.env.BASE_URL,
	routes: [
		{
			path: "/",
			component: IndexPrePage,
		},
		{
			path: "/GameListPage",
			component: GameListPage,
		},
		{
			path: "/Information",
			component: GameHome,
		},
		{
			path: "/Active",
			component: PopularRankings,
		},
	],
});

export default router;
