<template>
	<div class="content-container clearfloat">
		<div class="tab-container">
			<div class="tab" @click="changeTab('game-news')">
				<span :class="{ 'active-tab': activeTab === 'game-news' }"
					>游戏最新资讯</span
				>
			</div>
			<div class="tab" @click="changeTab('game-quick-news')">
				<span :class="{ 'active-tab': activeTab === 'game-quick-news' }"
					>游戏快报</span
				>
			</div>
			<div class="tab" @click="changeTab('game-downloads')">
				<span :class="{ 'active-tab': activeTab === 'game-downloads' }"
					>游戏下载</span
				>
			</div>
			<div class="tab" @click="changeTab('mini-games')">
				<span :class="{ 'active-tab': activeTab === 'mini-games' }"
					>小游戏</span
				>
			</div>
			<div class="tab" @click="changeTab('esports')">
				<span :class="{ 'active-tab': activeTab === 'esports' }">电子竞技</span>
			</div>
		</div>
		<div class="content">
			<ul class="news-list">
				<li class="news-item" v-for="(news, index) in newsItems" :key="index">
					<div :href="news.link" target="_blank" class="news-item-link">
						<div class="news-image-container">
							<img class="news-image" :src="news.imageSrc" alt="news.title" />
						</div>
						<div class="news-content">
							<h2 class="news-title">
								<a
									:title="news.title"
									target="_blank"
									:href="news.link"
									class="title-link"
									>{{ news.title }}</a
								>
							</h2>
							<div class="news-details">
								<div class="news-description">{{ news.description }}</div>
								<div class="news-tags-timestamp">
									<div class="news-tags">
										<strong>Tags：</strong>
										<a
											v-for="(tag, tagIndex) in news.tags"
											:key="tagIndex"
											:href="tag.link"
											target="_blank"
											>{{ tag.name }}</a
										>
									</div>
									<div class="news-timestamp">
										<span class="today">{{ news.timestamp }}</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</li>
			</ul>
			<a class="load-more">加载更多...</a>
		</div>
	</div>
</template>

<script>
export default {
	name: "GameNewsPage",
	data() {
		return {
			activeTab: "game-news",
			newsItems: [
				{
					title:
						"《质量效应》新作采用虚幻引擎 5 打造，利用 MetaHuman 工具创建逼真角色",
					link: "https://www.ithome.com/0/726/886.htm",
					imageSrc:
						"https://img.ithome.com/newsuploadfiles/thumbnail/2023/10/726886_240.jpg?x-bce-process=image/format,f_avif",
					description:
						"BioWare 正在开发旗下《质量效应》新作，工作室项目总监兼执行制作人 Michael Gamble 日前在 X 平台发布贴文，透露了部分游戏技术细节。从贴文中可以发现，该工作室正在使用虚幻引擎 5 中的 Meta Human 功能来创建游戏新作的角色模型。",
					tags: [
						{
							name: "虚幻引擎5",
							link: "http://www.ithome.com/tag/xuhuanyinqing5/",
						},
						{
							name: "质量效应",
							link: "http://www.ithome.com/tag/zhiliangxiaoying/",
						},
						{
							name: "游戏",
							link: "http://www.ithome.com/tag/youxi/",
						},
					],
					timestamp: "今日 14:55",
				},
				{
					title:
						"索尼 Visual Arts 工作室宣布裁员，曾协助《最后生还者 1》等游戏开发",
					link: "https://www.ithome.com/0/726/883.htm",
					imageSrc:
						"https://img.ithome.com/newsuploadfiles/thumbnail/2023/10/726883_240.jpg?x-bce-process=image/format,f_avif",
					description:
						"曾协助《最后生还者 1》等游戏开发的索尼 Visual Arts 工作室，在近日进行了新一轮的裁员，多位工作室员工在他们的领英页面上更新了自己的工作变动。IT之家经过查询得知，Visual Arts 是索尼 SIE 旗下的一个小规模工作室，该工作室主要职责是帮助索尼其他工作室游戏作品的动画或艺术开发，除了《最后生还者 1》外，这家工作室曾参与协助顽皮狗进行《神秘海域》、《战神》等多款第一方游戏的制作。",
					tags: [
						{
							name: "索尼 SIE",
							link: "http://www.ithome.com/tag/suoni-sie/",
						},
						{
							name: "裁员",
							link: "http://www.ithome.com/tag/caiyuan/",
						},
					],
					timestamp: "今日 14:44",
				},
				{
					title: "《最终幻想 14》将推大冲关玩法，联动《糖豆人：终极淘汰赛》",
					link: "https://www.ithome.com/0/726/882.htm",
					imageSrc:
						"https://img.ithome.com/newsuploadfiles/thumbnail/2023/10/726882_240.jpg?x-bce-process=image/format,f_avif",
					description:
						"从官方宣传视频可以看到，这不是《糖豆人：终极淘汰赛》添加了《最终幻想 14》的皮肤，而是《最终幻想 14》加入了一个全新玩法。",
					tags: [
						{
							name: "最终幻想 14",
							link: "http://www.ithome.com/tag/zuizhonghuanxiang-14/",
						},
						{
							name: "糖豆人",
							link: "http://www.ithome.com/tag/tangdouren/",
						},
					],
					timestamp: "今日 14:43",
				},
			],
		};
	},
	methods: {
		changeTab(tab) {
			this.activeTab = tab;
			// 在这里可以根据选中的标签进行数据筛选或加载不同的新闻内容
		},
	},
};
</script>

<style scoped>
.news-item-link{
	height: 20px;
}

.news-tags a {
  display: inline-block; /* 设置为行内块元素 */
}

.news-tags-timestamp {
  clear: both; /* 清除浮动 */
  display: block; /* 让父元素包含子元素 */
  position: absolute;
  bottom: -20px;
}

.news-tags {
  float: left; /* 标签向左浮动 */
}

.news-timestamp {
	position: relative;
	top: -23px;
	left: 1350px;
}

.content-container {
	font-size: 18px;
	margin: 20px;
}

.tab-container {
	display: flex;
	justify-content: flex-start;
	align-items: center;
	background-color: #f0f0f0;
	padding: 10px;
	border-radius: 5px;
}

.tab {
	padding: 10px 20px;
	cursor: pointer;
	margin-right: 10px;
	border: 1px solid #ccc;
	border-radius: 5px;
}

.active-tab {
	color: rgb(243, 147, 163);
	text-decoration: underline;
}

.news-list {
	list-style: none;
	padding: 0;
}

.news-item {
	margin-bottom: 20px;
	background-color: #fff;
	padding: 15px;
	border: 1px solid #ccc;
	border-radius: 5px;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	overflow: hidden; /* 用于包含浮动元素 */
	position: relative;
}

.news-image-container {
	float: left;
	margin-right: 10px;
	width: 120px; /* 设置图片容器的宽度 */
	height: 120px; /* 设置图片容器的高度 */
}

.news-image {
	width: 100%; /* 使用100%宽度以填充图片容器 */
	height: 100%; /* 使用100%高度以填充图片容器 */
	object-fit: cover; /* 保持图片比例不产生形变 */
	border-radius: 10%; /* 设置圆角 */
}

.news-content {
	overflow: hidden; /* 用于包含浮动元素 */
	height: 120px;
	position: relative;
}

.news-title {
	font-size: 20px;
	margin: 0;
}

.news-description {
	color: #777;
}

.news-tags a {
	margin-right: 10px;
	text-decoration: none;
	color: #3498db;
	font-weight: bold;
}

.news-timestamp {
	font-style: italic;
}

.news-details {
	overflow: hidden; /* 用于包含浮动元素 */
}

.load-more {
	display: block;
	text-align: center;
	margin-top: 20px;
	font-weight: bold;
	color: #3498db;
}
</style>
