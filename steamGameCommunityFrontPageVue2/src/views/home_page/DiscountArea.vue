<template>
	<div class="container left-float">
		<div class="discount clear-float">
			<img src="../../assets/img/折扣券.svg" alt="" />
			<span class="discount-title">特惠游戏</span>
			<ul>
				<li v-for="(item, index) in items" :key="index" class="left-float aperture">
					<router-link to="#">
						<img :src="item.imgUrl" alt="游戏封面" />
						<span>
							{{ item.title }}
						</span>
					</router-link>
					<span class="price">
						<img
							v-if="item.price === 0"
							src="../../assets/img/优惠.svg"
							alt="优惠"
						/>
						当前价格: <span class="price">{{ item.price }}</span
						>元
					</span>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
export default {
	name: "DiscountArea",
	data() {
		return {
			items: [
				{
					title: "《Lies of P》",
					price: 16,
					imgUrl: "/img/《Lies of P》.jpg",
				},
				{
					title: "Apex Legends™",
					price: 116,
					imgUrl: "/img/Apex Legends™.jpg",
				},
				{
					title: "Baldur's Gate 3",
					price: 216,
					imgUrl: "/img/Baldur's Gate 3.jpg",
				},
				{
					title: "Red Dead Redemption 2",
					price: 316,
					imgUrl: "/img/Red Dead Redemption 2.jpg",
				},
				{
					title: "Starfield",
					price: 16,
					imgUrl: "/img/Starfield.jpg",
				},
				{
					title: "动物园之星",
					price: 0,
					imgUrl: "/img/动物园之星.jpg",
				},
				{
					title: "赛博朋克 2077",
					price: 16,
					imgUrl: "/img/赛博朋克 2077.jpg",
				},
				{ title: "收获日3", price: 16, imgUrl: "/img/收获日3.jpg" },
				{
					title: "Grand Theft Auto V",
					price: 16,
					imgUrl: "/img/Grand Theft Auto V.jpg",
				},
				{ title: "The Sims™ 4", price: 16, imgUrl: "/img/The Sims™ 4.jpg" },
			],
		};
	},
	methods: {},
};
</script>
<style scoped>

/* 鼠标悬停时添加边框效果 */
.aperture {
    position: relative;
    display: inline-block; /* 让容器只占据实际内容宽度 */
}

/* 图片样式，设置初始边框和阴影 */
.aperture a img {
    border: 2px solid transparent; /* 初始状态下透明边框 */
    box-shadow: 0 0 0 transparent; /* 初始状态下无阴影 */
    transition: border-color 0.3s, box-shadow 0.3s; /* 添加渐变效果 */
}

/* 鼠标悬浮时添加边框和阴影 */
.aperture:hover a img {
    border-color: rgba(67, 45, 202, 0.5); /* 设置边框颜色 */
    box-shadow: 0 0 10px rgba(67, 45, 202, 0.5); /* 添加阴影效果 */
}


.discount-title {
    cursor: default;
}


.left-float {
	float: left;
}

.container {
	width: 1288.8px;
	height: 440px;
	border: 5px solid rgb(67, 45, 202);
	display: flex;
	align-items: center;
	float: right;
	position: relative;
	margin-top: -450px;
	margin-right: 40px;
	border-radius: 20px;
	font-size: 24px;
}

.discount {
	position: absolute;
	top: 45px;
	left: 10px;
}
.discount > span {
	position: absolute;
	top: -30px;
	left: 575px;
	font-size: 28px;
}

.clear-float::after {
	content: "";
	display: block;
	clear: both;
}

li {
	list-style-type: none;
	height: 170px;
    width: auto;
	padding-right: 10px;
    position: relative;
}

span {
	font-size: 20px;
	display: flex;
	justify-content: center;
	/* 水平居中 */
	align-items: center;
	/* 垂直居中 */
	margin-top: 5px;
}

img {
	vertical-align: middle;
	width: 226.8px;
	height: 105.7px;
	border-radius: 10px;
}

.price > img {
	width: 20px;
	height: 20px;
}
.price > span {
	color: rgb(45, 202, 137);
	position: relative;
	top: -4px;
	padding: 0 5px;
	vertical-align: bottom;
}
.discount > img{
    width: 36px;
    height: 36px;
    position: absolute;
    left: 694px;
    top: -27px;
    transform: rotate(30deg);
}

li a span::before {
    content: "";
    position: absolute;
    top: 140px;
    bottom: 0;
    left: 0;
    width: 0;
    /* 初始时宽度为0 */
    height: 3px;
    /* 横线高度 */
    background-color: rgb(67, 45, 202);
    /* 横线颜色 */
    transition: width 0.3s ease-in-out;
    /* 宽度动画效果 */
}

/* 鼠标悬浮时增加宽度 */
li a span:hover::before {
    width: 100%;
}
</style>
