<template>
	<div class="container">
		<div class="content">
			<h1 class="title">{{ pageTitle }}</h1>

			<div class="info">
				<div class="left-info">
					<span id="pubtime_baidu">{{ pubtime }}</span>
					<span id="source_baidu">
						来源：<a :href="sourceLink" target="_blank">{{ sourceName }}</a>
					</span>
					<span id="author_baidu"
						>作者：<strong>{{ author }}</strong></span
					>
					<span id="editor_baidu"
						>责编：<strong>{{ editor }}</strong></span
					>
				</div>
				<div class="right-info">
					<span id="hitcount">{{ hitcount }}</span>
					<a href="#post_comm" class="comment-info">
						评论：<span id="commentcount">{{ commentcount }}</span>
					</a>
				</div>
			</div>

			<div class="post-content">
				<template v-for="(item, index) in paragraphs">
					<!-- Text Content -->
					<p v-if="item.type === 'text'" :key="index" v-html="item.content"></p>

					<!-- Image Content -->
					<div class="news-image-container" v-if="item.type === 'image'">
						<el-image class="news-image" :src="item.src" :alt="item.alt">
							<div slot="error" class="image-slot-content">
								<i class="el-icon-picture-outline"></i>
							</div>
						</el-image>
                       <p class="news-image-alt"> {{ item.alt }} </p> 
					</div>
				</template>
			</div>

			<!-- Render Ad Disclaimer -->
			<div v-html="adDisclaimer" class="advertise"></div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			adDisclaimer:
				'<p class="ad-tips">广告声明：文内含有的对外跳转链接（包括不限于超链接、二维码、口令等形式），用于传递更多信息，节省甄选时间，结果仅供参考，IT之家所有文章均包含本声明。</p>',
			pageTitle: "《英雄联盟》13.21 版更新：极限闪击模式回归",
			pubtime: "2023/10/25 23:22:46",
			sourceName: "IT之家",
			sourceLink: "https://www.ithome.com/0/727/654.htm",
			author: "孤城",
			editor: "孤城",
			hitcount: "", // Fill with actual hit count
			commentcount: 35, // Fill with actual comment count
			paragraphs: [
				{
					type: "text",
					content:
						'<a class="s_tag" href="https://www.ithome.com/" target="_blank">IT之家</a> 10 月 25 日消息，《英雄联盟》10 月 26 日凌晨 1 点开始全区停机维护，更新 13.21 版。极限闪击模式将在新版本回归，并获得了一些品质级改进.',
				},
				{
					type: "image",
					src: "/img/news/极限闪击.avif",
					alt: "《英雄联盟》13.21 版更新：极限闪击模式回归",
				},
				{
					type: "text",
					content:
						"官方表示，上次开极限闪击还是 11.11 版本。新版本中，该模式所有英雄的英雄平衡性增益百分比调整都已重置。自上次极限闪击以来发生了很多事情，从大量的装备 / 英雄更新到耐久度更新。《英雄联盟》团队趁此机会重置了平衡性增益并建立了一条新基准线.",
				},
				{
					type: "text",
					content:
						"这个版本的很大一部分都是在跟进 13.20 版本的改动。总体而言，《英雄联盟》团队实现了这些改动的主要目标 —— 游戏的滚雪球次数少了很多，玩家之间的战斗次数变多了，而且游戏的平均时长也只稍微变久了一点。尽管如此，后期英雄赢得比前期英雄多了，这意味着需要进行一些重新平衡。野区改动虽然在前期将打野们放回了与其它位置平齐的地方，但也真的伤害到了普攻型打野。因此《英雄联盟》团队正在增强他们。最后，奎桑提的更新达成了给他添加反制玩法的目标，但并没有给他提供预期的强度，因此这个版本给了他一些增强。除了跟进改动之外，《英雄联盟》团队的目标还有让莫甘娜、萨勒芬妮、布兰德和婕拉都能打多个位置.",
				},
				{
					type: "text",
					content: "IT之家附《英雄联盟》新皮肤：",
				},
				{
					type: "image",
					src: "/img/news/甜心兰博.avif",
					alt: "咖啡甜心 兰博",
				},
				{
					type: "image",
					src: "https://img.ithome.com/newsuploadfiles/2023/10/eaffab89-0c10-42f9-942a-5c9f8f282d5b.jpg?x-bce-process=image/format,f_avif",
					alt: "咖啡甜心 金克丝",
				},
				{
					type: "image",
					src: "https://img.ithome.com/newsuploadfiles/2023/10/f79f1a50-565f-47fd-95e9-509f42e6e324.jpg?x-bce-process=image/format,f_avif",
					alt: "咖啡甜心 波比",
				},
				{
					type: "image",
					src: "https://img.ithome.com/newsuploadfiles/2023/10/a2717bb6-0d20-44ab-adff-a10cb9bdf45b.jpg?x-bce-process=image/format,f_avif",
					alt: "咖啡甜心 璐璐",
				},
				{
					type: "image",
					src: "https://img.ithome.com/newsuploadfiles/2023/10/fb6c0b18-c0f9-4dca-bdae-4f5387a650d6.jpg?x-bce-process=image/format,f_avif",
					alt: "魔女 辛德拉",
				},
			],
		};
	},
};
</script>

<style scoped>
.news-image-container {
	margin-right: 10px;
	display: flex;
    flex-direction: column;
	align-items: center; /* Vertical centering */
}
.news-image-alt {
  display: block; /* 每个标题占据一行 */
  text-align: center; /* 居中标题文本 */
  font-size: 16px;
  padding-left: 0 !important;
}
.news-image {
	max-width: 90%;
	max-height: 90%;
	object-fit: contain; /* Adjust this to your preference */
	border-radius: 2%;
}

.image-slot-content i {
	font-size: 240px;
	color: #ccc;
}

.container {
	display: flex;
	justify-content: center;
	align-items: center;
	max-height: 30vh;
	flex-wrap: wrap;
}

.content {
	position: relative;
	max-width: 90%;
	padding: 20px;
	background-color: #f7f7f7;
	border-radius: 8px;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.title {
	font-size: 28px;
	margin-bottom: 20px;
}

.info {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 20px;
}

.left-info {
	font-size: 12px;
	display: flex;
	align-items: center;
	color: #7c8388;
}

#pubtime_baidu {
	margin-left: 15px;
}

.left-info span {
	margin-right: 20px;
}

.right-info .comment-info {
    margin-right: 60px;
    font-size: 16px;
	text-decoration: none;
	color: #007bff;
}

.right-info .comment-info:hover {
	text-decoration: underline;
}

.post-content p {
	color: #424242;
	font-size: 1.2pc;
	margin-bottom: 15px;
	line-height: 1.6;
	padding-left: 15px;
}

.advertise {
	font-size: 12px;
	padding-left: 15px;
	color: #999;
}
</style>
