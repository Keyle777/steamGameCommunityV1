<template>
	<div>
		<!-- 游戏特惠 -->
		<div class="container">
			<div class="container-search">
				<form action="#">
					<input type="text" name="search" id="search" placeholder="我知道一点儿，输入去搜索" class="custom-input"/>
					<button/>
				</form>
			</div>
			<!-- 游戏类型 -->
			<div class="gameType">
				<dl class="clearFloat">
					<dt>类型:</dt>
					<dd
						v-for="(type, index) in GameTypes"
						:key="type.id"
						class="leftFloat"
						@click="toggleGameType(type.id)"
						:class="{ selected: isSelected(type.id) }"
					>
						<span>{{ type.name }}</span>
					</dd>
				</dl>
			</div>
			<!-- 游戏 -->
			<div class="game">
				<ul class="clearFloat">
					<li
						v-for="(game, index) in ListDiscountedGames"
						:key="game.id"
						class="leftFloat"
					>
						<div class="image-container">
							<img :src="game.imgUrl" alt="游戏封面" />
						</div>
						<div class="price-approvalRating">
							<span class="game-price">{{ game.price }} 元</span>
							<span class="game-approvalRating"
								>折扣 {{ game.approvalRating }}</span
							>
						</div>
						<span class="game-title">{{ game.title }}</span>
					</li>
				</ul>
			</div>
			
		</div>
	</div>
</template>

<script>
export default {
	name: "GameListPage",
	data() {
		return {
			ListDiscountedGames: [
				{
					id: "1",
					title: "《Lies of P》",
					imgUrl: "/img/《Lies of P》.jpg",
					price: 128,
					approvalRating: "99%",
				},
				{
					id: "2",
					title: "动物园之星",
					imgUrl: "/img/动物园之星.jpg",
					price: 33,
					approvalRating: "99%",
				},
				{
					id: "3",
					title: "Grand Theft Auto V",
					imgUrl: "/img/Grand Theft Auto V.jpg",
					price: 47,
					approvalRating: "99%",
				},
				{
					id: "4",
					title: "Grand Theft Auto V",
					imgUrl: "/img/Grand Theft Auto V.jpg",
					price: 47,
					approvalRating: "99%",
				},
				{
					id: "5",
					title: "Grand Theft Auto V",
					imgUrl: "/img/Grand Theft Auto V.jpg",
					price: 47,
					approvalRating: "99%",
				},
				{
					id: "6",
					title: "Grand Theft Auto V",
					imgUrl: "/img/Grand Theft Auto V.jpg",
					price: 47,
					approvalRating: "99%",
				},
				{
					id: "7",
					title: "Grand Theft Auto V",
					imgUrl: "/img/Grand Theft Auto V.jpg",
					price: 47,
					approvalRating: "99%",
				},
			],
			GameTypes: [
				{ id: "0", name: "FPS" },
				{ id: "1", name: "RPG" },
				{ id: "2", name: "策略" },
				{ id: "3", name: "冒险" },
				{ id: "4", name: "体育" },
				{ id: "5", name: "竞速" },
				{ id: "6", name: "模拟" },
				{ id: "7", name: "休闲" },
				{ id: "8", name: "战略" },
			],
			// 选中的游戏类型Id
			selectedGameTypes: [], // 添加选中游戏类型的数组
		};
	},
	methods: {
		toggleGameType(gameTypeId) {
			// 点击游戏类型时切换选中状态
			if (this.isSelected(gameTypeId)) {
				// 如果已经选中，则取消选择
				this.selectedGameTypes = this.selectedGameTypes.filter(
					(id) => id !== gameTypeId
				);
			} else {
				// 如果未选中，则添加到选中数组中
				this.selectedGameTypes.push(gameTypeId);
			}
		},
		isSelected(gameTypeId) {
			// 检查游戏类型是否选中
			return this.selectedGameTypes.includes(gameTypeId);
		},
	},
};
</script>

<style scoped>
.custom-input::placeholder {
  /* 在这里定义你想要的样式 */
  color: #999; /* 更改文本颜色 */
  font-style: italic; /* 更改字体样式，例如斜体 */
  font-family: "alimama" !important;
  /* 添加其他样式，如字体大小、字重等 */
}
/* 让.container-search的子代form水平垂直居中 */
.container-search {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px;
}
/* 让form内的子元素也水平居中 */
.container-search form {
  display: flex;
  align-items: center;
}
/* 设置搜索功能的长和宽 */
#search {
  width: 600px;
  height: 40px;
}
/* 给按钮添加图片 */
.container-search button {
  width: 40px; /* 设置按钮的宽度，这里可以根据需要调整 */
  height: 40px; /* 设置按钮的高度，与搜索框高度一致 */
  background: url("/src/assets/img/搜索.svg") no-repeat center center;   /* center center 控制了背景图像的水平和垂直定位 */
  background-size: contain;/* 使用包含模式，让图片完整显示 */
  cursor: pointer; /* 控制鼠标悬浮样式 */
  border: none; /* 无边框 */
  margin-left: -40px; /* 负边距使按钮与搜索框重合 */
  transition: border-color 0.3s, box-shadow 0.3s;
}

.container-search button:hover {
  border-color: rgba(67, 45, 202, 0.2);
  box-shadow: 0 0 10px rgba(67, 45, 202, 0.2);
}

.container-search input {
  border-radius: 5px;
  transition: border-color 0.3s, box-shadow 0.3s;
}

.container-search input:focus {
  border-color: rgba(67, 45, 202, 0.78);
  box-shadow: 0 0 10px rgba(67, 45, 202, 0.8);
}

.container {
	width: 1920px;
	margin: 0 auto;
	border: 2px solid;
	border-radius: 10px;
}
.clearFloat::after {
	content: "";
	display: block;
	clear: both;
}
.leftFloat {
	float: left;
}

.gameType {
	position: relative;
	border: 1px solid blue;
}
.gameType dl dd,
dt {
	font-size: 24px;
}
.gameType dl dt {
	font-size: 28px;
	font-weight: bold;
	margin-left: 10px;
	margin-top: 10px;
}
.gameType dl dd {
	position: relative;
	left: 50px;
	cursor: pointer;
	border: 1px solid pink;
	border-radius: 5px;
	padding: 5px 10px;
	margin-bottom: 10px;
	transition: border-color 0.3s, box-shadow 0.3s; /* 添加渐变效果 */
}

.gameType dl dd:hover {
	border-color: rgba(67, 45, 202, 0.5); /* 设置边框颜色 */
	box-shadow: 0 0 10px rgba(67, 45, 202, 0.5); /* 添加阴影效果 */
}

/* 选中的游戏类型样式 */
.gameType dl dd.selected {
	background-color: pink;
	color: white;
}

/* 取消点击后的样式 */
.gameType dl dd.selected:hover {
	background-color: pink; /* 保持颜色 */
	box-shadow: 0 0 10px rgba(67, 45, 202, 0.5); /* 添加阴影效果 */
}

/* 游戏展示 */
.game {
	position: relative;
	border: 1px solid orange;
	margin-top: 50px;
}
.game ul {
	padding-left: 0px;
	position: relative;
	left: 10px;
}
.game li {
	margin-bottom: 40px;
}
.image-container {
	width: 479px; /* 调整容器的宽度，考虑边框的宽度 */
	height: 225px; /* 调整容器的高度，考虑边框的宽度 */
}

/* 图片样式，使用 object-fit 来调整图片尺寸和比例 */
.image-container img {
	border: 2px solid transparent; /* 初始状态下透明边框 */
	box-shadow: 0 0 0 transparent; /* 初始状态下无阴影 */
	transition: border-color 0.3s, box-shadow 0.3s; /* 添加渐变效果 */
	border-radius: 10px;
}
.image-container:hover img {
	border-color: rgba(67, 45, 202, 0.5); /* 设置边框颜色 */
	box-shadow: 0 0 10px rgba(67, 45, 202, 0.5); /* 添加阴影效果 */
	cursor: pointer;
}

dd span {
	-webkit-user-select: none; /* Safari */
	-moz-user-select: none; /* Firefox */
	-ms-user-select: none; /* IE10+/Edge */
	user-select: none; /* Standard */
}
li span {
	font-size: 16px;
}
.price-approvalRating {
	display: flex;
	justify-content: center;
	width: 479px;
	height: 24px;
}
.price-approvalRating span {
	font-size: 20px;
}
.game-price {
	padding-right: 10px;
	border-right: 4px solid rgba(67, 45, 202, 0.5);
}
.game-approvalRating {
	padding-left: 10px;
}
.game-title {
	display: block;
	text-align: center;
	font-size: 24px;
	font-weight: bold;
}
</style>
