<template>
	<div>
		<div class="container">
			<div class="nav clearfloat">
				<ul class="leftfloat">
					<li>
						<router-link to="/">
							<img src="../assets/img/首页.svg" alt="首页" />
							<span>首页</span>
						</router-link>
					</li>
					<li>
						<router-link to="/GameListPage">
							<img src="../assets/img/优惠.svg" alt="优惠时刻" />
							<span>游戏特惠</span>
						</router-link>
					</li>
					<li>
						<router-link to="/Information">
							<img src="../assets/img/资讯.svg" alt="资讯时刻" />
							<span>游戏资讯</span>
						</router-link>
					</li>
					<li>
						<router-link to="/Active">
							<img src="../assets/img/活跃.svg" alt="活跃玩家" />
							<span>实时在线</span>
						</router-link>
					</li>
				</ul>
			</div>
			<div class="time-display">
				{{ currentTime }}
			</div>
		</div>

		<router-view></router-view>
	</div>
</template>
<script>
export default {
	name: "NavigationBar",
	data() {
		return {
			currentTime: "",
		};
	},
	created() {
		this.updateTime(); // 初始化时间
		// 使用 setInterval 每隔一秒刷新一次时间
		setInterval(this.updateTime, 1000);
	},
	methods: {
		updateTime() {
			const now = new Date();
			const hours = now.getHours().toString().padStart(2, "0");
			const minutes = now.getMinutes().toString().padStart(2, "0");
			const seconds = now.getSeconds().toString().padStart(2, "0");
			this.currentTime = `${hours}:${minutes}:${seconds}`;
		},
	},
};
</script>
<style scoped>
.container {
	margin-top: 40px;
	margin-bottom: 40px;
	display: flex;
	justify-content: center;
	align-items: flex-start;
}

.clearfloat {
	display: block;
	content: "";
	clear: both;
}

li {
	list-style-type: none;
	font-size: 0;
	width: 200px;
	height: 40px;
	margin-right: 40px;
}

li span {
	font-size: 24px;
}

li img {
	width: 25px;
	height: 25px;
	margin-right: 5px;
	position: relative;
	top: 5px;
}

ul.leftfloat li {
	float: left;
	text-align: center;
	line-height: 40px;
}

li a {
	position: relative;
}

/* ::before意思就是说在a元素之前插入一个元素，这里表示的就是横线效果 */
li a::before {
	content: "";
	position: absolute;
	top: 15px;
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
li a:hover::before {
	width: 100%;
}

.time-display {
	position: absolute;
	top: 0;
	right: 40px;
	font-size: 24px;
	color: #333;
	background-color: #fff;
	padding: 10px;
	border-radius: 5px;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	display: inline-block;
	white-space: nowrap;
}
</style>
