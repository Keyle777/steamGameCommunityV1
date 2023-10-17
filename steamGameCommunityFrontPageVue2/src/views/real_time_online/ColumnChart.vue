<template>
	<div>
		<!-- 热门排行榜 -->
		<div id="chart">
			<div ref="apexcharts"></div>
		</div>
	</div>
</template>

<script>
export default {
	name: "PopularRankings",
	data() {
		return {
			options: {
				chart: {
					width: "100%",
					height: 380,
					type: "bar",
				},
				plotOptions: {
					bar: {
						horizontal: true,
					},
				},
				dataLabels: {
					enabled: false,
				},
				stroke: {
					width: 1,
					colors: ["#fff"],
				},
				series: [
					{
						name: "数据系列 - 1",
						data: [44, 55, 41, 64, 22, 43, 21],
					},
					{
						name: "数据系列 - 2",
						data: [53, 32, 33, 52, 13, 44, 32],
					},
				],
				xaxis: {
					categories: [
						"韩国",
						"加拿大",
						"波兰",
						"意大利",
						"法国",
						"日本",
						"中国",
					],
				},
				legend: {
					position: "right",
					verticalAlign: "top",
					containerMargin: {
						left: 35,
						right: 60,
					},
				},
				responsive: [
					{
						breakpoint: 1000,
						options: {
							plotOptions: {
								bar: {
									horizontal: false,
								},
							},
							legend: {
								position: "bottom",
							},
						},
					},
				],
			},
		};
	},
	mounted() {
		this.renderChart();
	},
	methods: {
		renderChart() {
			// 第一个参数为容器，第二个参数为图的配置
			var chart = new this.$apexcharts(
				this.$refs.apexcharts,
				this.options
			);

			chart.render();
		},
	},
};
</script>

<style scoped>
#chart {
	max-width: 760px;
	margin: 35px auto;
	opacity: 0.9;
}
</style>
