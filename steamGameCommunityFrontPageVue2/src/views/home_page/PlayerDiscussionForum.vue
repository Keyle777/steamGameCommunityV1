<template>
	<!-- 玩家评论区 -->
	<div class="container">
		<div v-if="discussionContent.length === 0">
			<el-skeleton :rows="19" animated />
		</div>
		<div
			v-else
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
					<ul>
						<!-- 未来clicked后面应该是从后端获取的该用户对于每一条评论是否勾选的布尔值，不应该是isClicked，data中不应该存在isClicked -->
						<li
							id="like"
							:class="{ clicked: isClicked, resetting: isResetting }"
							@click="startAnimation(item.commentId)"
						></li>
						<li id="message"></li>
						<li id="link"></li>
					</ul>
					<span class="review-time">{{ item.time }}</span>
				</div>
				<el-pagination
					background
					:page-sizes="[100, 200, 300, 400]"
					:page-size="100"
					layout="total, sizes, prev, pager, next, jumper"
					:total="1000"
					@size-change="handleSizeChange"
					@current-change="handleCurrentChange"
					:current-page="currentPage4"
					class="pagination"
				>
				</el-pagination>
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
							commentId: 1,
							userName: "我是一只小老虎-三国杀",
							review:
								"你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你",
							time: "2023年9月21日 1:36:21",
						},
						{
							commentId: 2,
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
							commentId: 3,
							userName: "我是一只小老虎-地平线5",
							review: "你好啊",
							time: "2023年9月21日 1:36:21",
							like: true,
						},
						{
							commentId: 4,
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
							commentId: 5,
							userName: "我是一只小老虎刺客信条",
							review: "你好啊",
							time: "2023年9月21日 1:36:21",
						},
						{
							commentId: 6,
							userName: "可乐不了了-刺客信条",
							review: "你好啊",
							time: "2023年9月21日 1:36:21",
						},
					],
				},
			],
			isClicked: false,
			isResetting: false,
			userInfo: {
				userId: 1,
				userName: "张三",
				userAge: 22,
				userIpAddress: "192.168.0.1",
				userAddress: "北京",
			},
			currentPage1: 5,
			currentPage2: 5,
			currentPage3: 5,
			currentPage4: 4,
		};
	},
	methods: {
		// commentId:评论id
		startAnimation(commentId) {
			this.isClicked = !this.isClicked;
			// 修改评论与用户关联的那个数据库表
		},
		stopAnimation() {
			this.isClicked = false;
		},
		animationComplete() {
			this.isAnimationComplete = true;
		},
		init() {
			// 请求数据库，根据用户Id和commentId去查评论表，查看记录的like是否为true
		},
		handleSizeChange(val) {
			console.log(`每页 ${val} 条`);
		},
		handleCurrentChange(val) {
			console.log(`当前页: ${val}`);
		},
	},
	mounted() {
		this.init();
	},
};
</script>
<style scoped>
.container {
	width: 1920px;
	min-height: 600px;
	margin: 20px auto;
	background-color: #fff;
	padding: 15px;
	border: 1px solid #ccc;
	border-radius: 10px;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	overflow: hidden;
	position: relative;
}

.review-time {
	cursor: text;
	font-size: 16px;
	left: 1680px;
	top: 35px;
	position: relative; /* 将位置设为相对，以便后续调整右侧位置 */
	right: 0; /* 将时间置于右侧 */
	top: 97px;
	font-style: italic;
}

.game-discussion {
	min-height: 300px;
	background-color: #fff;
	border: 1px solid #ccc;
	border-radius: 10px;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	overflow: hidden;
	position: relative;
	transition: box-shadow 0.3s; /* 添加过渡效果 */
	margin-bottom: 20px;
	/* 添加鼠标悬浮时的样式 */
	&:hover {
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
	}
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
	margin-bottom: 22px;
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
	opacity: 0.8;
}
.userName:hover {
	opacity: 1;
}

li {
	color: #eee;
}
/* 评论按钮 */
#message {
	color: #eee;
	position: absolute;
	top: 95px;
	left: 120px;
	width: 30px;
	height: 30px;
	background: url(../../assets/img/评论.svg) no-repeat;
	opacity: 0.5;
	cursor: pointer;
}
#message:hover {
	opacity: 1;
}
@keyframes messageAnimation {
	0% {
		background-image: url(../../assets/img/评论.svg); /* 初始状态为原始图像 */
	}
	100% {
		background-image: url(../../assets/img/评论红色.svg); /* 最终状态为另一张图片 */
	}
}

#message:active {
	animation: messageAnimation 0.1s forwards;
	opacity: 1;
}

/* 链接按钮 */
#link {
	position: absolute;
	top: 95px;
	left: 170px;
	width: 30px;
	height: 30px;
	background: url(../../assets/img/链接.svg) no-repeat;
	opacity: 0.5;
	cursor: pointer;
}
#link:hover {
	opacity: 1;
}
@keyframes linkAnimation {
	0% {
		background-image: url(../../assets/img/链接.svg); /* 初始状态为原始图像 */
	}
	100% {
		background-image: url(../../assets/img/链接红色.svg); /* 最终状态为另一张图片 */
	}
}

#link:active {
	animation: linkAnimation 0.1s forwards;
	opacity: 1;
}

/* 点赞按钮 */
#like {
	position: absolute;
	top: 95px;
	left: 70px;
	width: 30px;
	height: 30px;
	opacity: 0.5;
	background: url(../../assets/img/点赞.svg) no-repeat;
	cursor: pointer;
}
#like:hover {
	opacity: 1;
}

@keyframes likeAnimation {
	0% {
		background-image: url(../../assets/img/点赞.svg); /* 初始状态为原始图像 */
	}
	100% {
		background-image: url(../../assets/img/点赞红色.svg); /* 最终状态为另一张图片 */
	}
}

@keyframes likeResettingAnimation {
	0% {
		background-image: url(../../assets/img/点赞红色.svg); /* 初始状态为原始图像 */
	}
	100% {
		background-image: url(../../assets/img/点赞.svg); /* 最终状态为另一张图片 */
	}
}

#like.clicked {
	animation: likeAnimation 0.5s forwards;
	opacity: 1;
}
#like.resetting {
	animation: likeResettingAnimation 0.5s forwards;
	opacity: 0.8;
}

.pagination {
	display: flex;
	align-items: center;
	justify-content: center;
	position: absolute;
	bottom: 20px;
	left: 570px;
}
</style>
