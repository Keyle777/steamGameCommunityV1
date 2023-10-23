<template>
	<div>
		<!-- 新闻区 -->
		<div class="container clear-float">
			<div class="core-zone">
				<ul>
					<li v-for="(item, index) in news" :key="index">
						<router-link to="#">
							<div class="image-container aperture">
								<img :src="item.imgUrl" alt="新闻封面" />
							</div>
							<span class="headlines">
								{{ item.title }}
							</span>
						</router-link>
						<span class="core-zone-time">发布时间: {{ item.releaseTime }}</span>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "NewsArea",
	data() {
		return {
			news: [
				{
					title: "《鸣潮》开发中场景及共鸣者秋水PV 登陆PC及移动端",
					imgUrl: "/img/news/鸣潮.jpg",
					releaseTime: "2023年9月20日 22点53分22秒",
				},
				{
					title: "《惊奇队长2》成漫威宇宙投资最小电影",
					imgUrl: "/img/news/惊奇队长.jpg",
					releaseTime: "2023年9月20日 22点53分22秒",
				},
				{
					title:
						"《星球大战绝地：幸存者》若首发登陆Game Pass 微软需支付3亿美元",
					imgUrl: "/img/news/星球大战绝地.jpg",
					releaseTime: "2023年9月20日 22点53分22秒",
				},
				{
					title: "《真人快打1》XSX与NS版对比视频 NS版缩水人物呆板",
					imgUrl: "/img/news/真人快打1.jpg",
					releaseTime: "2023年9月20日 22点53分22秒",
				},
			],
		};
	}
};
</script>

<style scoped>
li {
	position: relative;
}
.core-zone-time {
	position: absolute;
	top: 83px !important;
	font-size: 12px !important;
	cursor: default;
	left: 114px !important;
}
/* 其他样式保持不变 */
/* 清除浮动带来的影响 */
.clear-float::after {
	content: "";
	display: block;
	clear: both;
}

.container {
	width: 600px;
	height: 440px;
	border: 5px solid rgb(67, 45, 202);
	border-radius: 20px;
	/* 添加圆角 */
	margin-left: 40px;
}

.core-zone ul {
	height: 320px;
	padding-left: 0;
}

/* 图片容器 */
.image-container {
	width: 100px; /* 定义容器的宽度 */
	height: 100px; /* 定义容器的高度 */
}

/* 图片样式，使用 object-fit 来调整图片尺寸和比例 */
.image-container img {
	width: 100%; /* 图片宽度占满容器 */
	height: 100%; /* 图片高度占满容器 */
	object-fit: cover; /* 保持图片比例并填充整个容器，可能会裁剪部分图片 */
	vertical-align: middle;
	border-radius: 10px;
}

.core-zone ul li:last-child {
	margin-bottom: 10px;
}

.core-zone ul li {
	list-style-type: none;
	margin-top: 8px;
	margin-left: 10px;
	height: 100px;
	/* 设置高度自动，以便多行文本 */
	width: 565px;
	position: relative;
}

.core-zone ul li span {
	display: -webkit-box;
	/* 将文本包装在块级元素中，以支持多行文本 */
	/*设置子元素排列方式*/
	-webkit-box-orient: vertical;
	/*设置显示的行数，多出的部分会显示为...*/
	-webkit-line-clamp: 2;
	height: 36px;
	position: absolute;
	left: 110px;
	top: 30px;
	right: 0;
	bottom: 0;
	font-size: 17px;
	overflow: hidden;
}

/* 定义抖动动画 */
@keyframes shake {
	0% {
		transform: translateX(0);
	}

	25% {
		transform: translateX(-5px);
	}

	50% {
		transform: translateX(5px);
	}

	75% {
		transform: translateX(-5px);
	}

	100% {
		transform: translateX(0);
	}
}

/* 使用伪类选择器添加抖动效果 */
li a .headlines:hover {
	animation: shake 1s;
	animation-timing-function: ease-in-out;
}

/* 图片样式，设置初始边框和阴影 */
.aperture img {
	border: 2px solid transparent; /* 初始状态下透明边框 */
	box-shadow: 0 0 0 transparent; /* 初始状态下无阴影 */
	transition: border-color 0.3s, box-shadow 0.3s; /* 添加渐变效果 */
}

/* 鼠标悬浮时添加边框和阴影 */
.aperture:hover img {
	border-color: rgba(135, 206, 235, 0.5); /* 设置边框颜色 */
	box-shadow: 0 0 10px rgba(135, 206, 235, 0.5); /* 添加阴影效果 */
}
</style>
