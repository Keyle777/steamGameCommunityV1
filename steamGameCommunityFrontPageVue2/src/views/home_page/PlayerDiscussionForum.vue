<template>
	<div class="container">
		<div
			class="game-discussion"
			v-for="(content, index) in discussionContent"
			:key="index"
		>
			<div class="image-container">
				<img src="/img/赛博朋克 2077.jpg" alt="" />
			</div>
			<div class="gameDetail">
				<span class="gameTitle">{{ content.games.title }}</span>
				<span class="gamePrice">{{ content.games.price }}</span>
				<span class="gameType">{{ content.games.type }}</span>
			</div>

			<!-- 用户评论区 -->
			<div class="user-comment">
				<div
					v-for="(item, index) in content.comments"
					:key="index"
					class="content"
				>
					<router-link to="#">
						<div class="user-image-container">
							<img src="../../assets/img/头像.svg" alt="用户头像" />
						</div>
						<div class="user">
							<!-- 用户名 -->
							<span class="userName">{{ item.userName }}: </span>
						</div>
					</router-link>
					<span class="review">{{ item.review }}</span>
					<span class="review-time">{{ item.time }}</span>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: "PlayerDiscussionForum",
	data() {
		return {
			discussionContent: [
				{
					games: {
						title: "三国杀",
						price: "史低🔽美区/12 US/70%/122 CNY",
						type: "冒险/闯关/剧情",
					},
					comments: [
						{
							userName: "我是一只小老虎-三国杀",
							review:
								"你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你",
							time: "2023年9月21日 1:36:21",
						},
						{
							userName: "可乐不了了-三国杀",
							review: "你好啊",
							time: "2023年9月21日 1:36:21",
						},
					],
				},
				{
					games: {
						title: "地平线5",
						price: "史低🔽美区/12 US/70%/122 CNY",
						type: "冒险/闯关/剧情",
					},
					comments: [
						{
							userName: "我是一只小老虎-地平线5",
							review: "你好啊",
							time: "2023年9月21日 1:36:21",
						},
						{
							userName: "可乐不了了-地平线5",
							review: "你好啊",
							time: "2023年9月21日 1:36:21",
						},
					],
				},
				{
					games: {
						title: "刺客信条",
						price: "史低🔽美区/12 US/70%/122 CNY",
						type: "冒险/闯关/剧情",
					},
					comments: [
						{
							userName: "我是一只小老虎刺客信条",
							review: "你好啊",
							time: "2023年9月21日 1:36:21",
						},
						{
							userName: "可乐不了了-刺客信条",
							review: "你好啊",
							time: "2023年9月21日 1:36:21",
						},
					],
				},
			],
		};
	},
	methods: {},
};
</script>
<style scoped>
.container {
	width: 1920px;
	min-height: 600px;
	border: 5px solid rgb(67, 45, 202);
	border-radius: 20px;
	margin: 20px auto;
}

.game-discussion {
	min-height: 300px;
	border: 5px solid red;
	border-radius: 20px;
	margin: 20px 20px;
	position: relative;
}

.image-container {
	width: 460px; /* 定义容器的宽度 */
	max-height: 215px; /* 定义容器的高度 */
	overflow: hidden; /* 隐藏溢出的内容 */
}

/* 图片样式，使用 object-fit 来调整图片尺寸和比例 */
.image-container img {
	float: left;
	width: 50%; /* 图片宽度占满容器 */
	height: 50%; /* 图片高度占满容器 */
	object-fit: cover; /* 保持图片比例并填充整个容器，可能会裁剪部分图片 */
	border-radius: 5px;
	margin: 10px 10px 10px 10px;
}

.user-image-container {
	width: 50px; /* 定义容器的宽度 */
	height: 50px; /* 定义容器的高度 */
}

.user-image-container > img {
	float: left;
	width: 100%; /* 图片宽度占满容器 */
	height: 100%; /* 图片高度占满容器 */
	object-fit: cover; /* 保持图片比例并填充整个容器，可能会裁剪部分图片 */
	border-radius: 10px;
	margin: 20px 10px 10px 10px;
	vertical-align: center;
}
.user-comment {
	height: 475px;
	position: relative;
}
.user-comment a {
    display: block;
    height: 0 !important;
}
span {
	font-size: 16px;
}

.gameDetail {
	width: 330px; /* 定义容器的宽度 */
	max-height: 108px; /* 定义容器的高度 */
	position: absolute;
	left: 250px;
	top: 5px;
}
.gameTitle {
	display: block;
	margin-top: 10px;
	font-size: 30px;
}
.gamePrice {
	display: block;
	font-size: 18px;
	position: relative;
}
.gameType {
	display: block;
	margin-top: 20px;
}
.content {
	height: 100px;
	position: relative;
}

.review {
	/* 将这个开启，就无法复制 */
	/* pointer-events: none; */
	position: absolute;
	cursor: text;
	left: 70px;
	top: 55px;
	overflow: hidden;
	/*将对象作为弹性伸缩盒子模型显示*/
	display: -webkit-box;
	/*设置子元素排列方式*/
	-webkit-box-orient: vertical;
	/*设置显示的行数，多出的部分会显示为...*/
	-webkit-line-clamp: 2;
}
.userName {
	font-size: 18px;
	position: absolute;
	left: 70px;
	top: 33px;
}

.review-time{
    position: absolute;
    cursor: text;
    font-size: 12px;
	/* left: 1720px; */
	left: 73px;
	top: 20px;
}
</style>
