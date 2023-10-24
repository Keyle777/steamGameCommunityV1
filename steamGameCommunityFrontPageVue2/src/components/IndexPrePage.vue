<template>
	<div>
		<NewsArea />
		<DiscountArea />
		<PlayerDiscussionForum />
	</div>
</template>
<script>
import DiscountArea from "../views/home_page/discountarea.vue";
import NewsArea from "../views/home_page/NewsArea.vue";
import PlayerDiscussionForum from "../views/home_page/PlayerDiscussionForum.vue";
export default {
	name: "IndexPrePage",
	components: {
		DiscountArea,
		NewsArea,
		PlayerDiscussionForum,
	},
};
</script>
