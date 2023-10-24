<template>
	<div class="tab-list">
		<ul class="bar">
			<li @click="selectTab(4)" :class="{ sel: selectedTab === 4 }">
				游戏热榜
			</li>
			<li @click="selectTab(1)" :class="{ sel: selectedTab === 1 }">日榜</li>
			<li @click="selectTab(2)" :class="{ sel: selectedTab === 2 }">周榜</li>
			<li @click="selectTab(3)" :class="{ sel: selectedTab === 3 }">月榜</li>
		</ul>

		<ul class="bd order" :id="'d-' + selectedTab">
			<li v-for="(item, index) in tabContents[selectedTab]" :key="index">
				<a :href="item.link" target="_blank">
					<span class="index" :style="indexStyle(index)">{{ index + 1 }}</span>
					{{ item.title }}
				</a>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: "TopSearch",
	data() {
		return {
			selectedTab: 4, // 默认选中的标签为周榜
			tabContents: {
				4: [
					{
						title:
							"《英雄联盟》S13 世界赛瑞士轮 10 月 19 日正式开赛，首轮 BLG 对阵 KT",
						link: "https://www.ithome.com/0/725/061.htm",
					},
					{
						title:
							"《英雄联盟》S13 世界赛瑞士轮 10 月 19 日正式开赛，首轮 BLG 对阵 KT",
						link: "https://www.ithome.com/0/725/061.htm",
					},
					{
						title:
							"《英雄联盟》S13 世界赛瑞士轮 10 月 19 日正式开赛，首轮 BLG 对阵 KT",
						link: "https://www.ithome.com/0/725/061.htm",
					},
					{
						title:
							"《英雄联盟》S13 世界赛瑞士轮 10 月 19 日正式开赛，首轮 BLG 对阵 KT",
						link: "https://www.ithome.com/0/725/061.htm",
					},
					{
						title:
							"《英雄联盟》S13 世界赛瑞士轮 10 月 19 日正式开赛，首轮 BLG 对阵 KT",
						link: "https://www.ithome.com/0/725/061.htm",
					},
					{
						title:
							"《英雄联盟》S13 世界赛瑞士轮 10 月 19 日正式开赛，首轮 BLG 对阵 KT",
						link: "https://www.ithome.com/0/725/061.htm",
					},
					{
						title:
							"《英雄联盟》S13 世界赛瑞士轮 10 月 19 日正式开赛，首轮 BLG 对阵 KT",
						link: "https://www.ithome.com/0/725/061.htm",
					},
					{
						title:
							"《英雄联盟》S13 世界赛瑞士轮 10 月 19 日正式开赛，首轮 BLG 对阵 KT",
						link: "https://www.ithome.com/0/725/061.htm",
					},
					{
						title:
							"《英雄联盟》S13 世界赛瑞士轮 10 月 19 日正式开赛，首轮 BLG 对阵 KT",
						link: "https://www.ithome.com/0/725/061.htm",
					},
					{
						title:
							"《英雄联盟》S13 世界赛瑞士轮 10 月 19 日正式开赛，首轮 BLG 对阵 KT",
						link: "https://www.ithome.com/0/725/061.htm",
					},
					{
						title:
							"《英雄联盟》S13 世界赛瑞士轮 10 月 19 日正式开赛，首轮 BLG 对阵 KT",
						link: "https://www.ithome.com/0/725/061.htm",
					},
					{
						title:
							"《英雄联盟》S13 世界赛瑞士轮 10 月 19 日正式开赛，首轮 BLG 对阵 KT",
						link: "https://www.ithome.com/0/725/061.htm",
					},
					// 添加其他游戏热榜内容
				],
				1: [
					{
						title: "彻底告别！MIUI 官微改名为“小米澎湃 OS”",
						link: "https://www.ithome.com/0/726/742.htm",
					},
					// 添加其他日榜内容
				],
				2: [
					{
						title:
							"小米推出全新操作系统澎湃 OS：小米 14 系列将率先搭载，逐步接替 MIUI",
						link: "https://www.ithome.com/0/725/380.htm",
					},
					// 添加其他周榜内容
				],
				3: [
					{
						title: "让人羡慕：华为中秋节给员工发 Mate60 手机",
						link: "https://www.ithome.com/0/722/412.htm",
					},
					// 添加其他月榜内容
				],
			},
		};
	},
	methods: {
		selectTab(tabId) {
			this.selectedTab = tabId;
		},
		indexStyle(index) {
			const color = this.getColor(index);
			return {
				backgroundColor: color,
				color: "white",
			};
		},
		getColor(index) {
			const maxIndex = this.tabContents[this.selectedTab].length - 1;
			const red = 255 - Math.floor((255 / maxIndex) * index);
			const green = 0;
			const blue = 0;
			return `rgb(${red}, ${green}, ${blue})`;
		},
	},
};
</script>

<style scoped>
/* 样式可以根据需要进行调整 */
.tab-list {
	font-size: 16px;
	width: 310px;
	height: 440px;
}

.bar {
	justify-content: space-around;
	display: flex;
	list-style: none;
	padding: 0;
}

.bar li {
	padding: 10px;
	cursor: pointer;
}

.bar li a {
	text-decoration: none; /* 去掉下划线 */
	display: inline-block;
	margin-left: 10px;
	width: 310px;
	height: 18px;
	line-height: 19px;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}

.bar li.sel {
	background-color: #ccc;
}

.bd {
	list-style: none;
	padding: 0;
}

.bd.sel {
	display: block;
}

.tab-list .order li a {
	text-decoration: none; /* 去掉下划线 */
	display: inline-block;
	margin-left: 10px;
	width: 310px;
	height: 18px;
	line-height: 19px;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}

a {
	text-decoration: none; /* 去掉下划线 */
	color: #333;
}

a:hover {
	text-decoration: none; /* 去掉下划线 */
	text-decoration: underline;
	color: hsl(0, 0%, 50%);
}

.index {
	display: inline-block;
	width: 18px;
	height: 16px;
	line-height: 16px;
	text-align: center;
	margin-right: 5px;
}
</style>
