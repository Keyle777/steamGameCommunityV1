<template>
	<div>
		<div id="chart">
			<div ref="apexcharts"></div>
		</div>
	</div>
</template>
<script>
export default {
	name: "StocksChart",
	data() {
		return {
			chartOptions: {
				chart: {
					type: "area",
					height: 350,
					zoom: {
						enabled: false,
					},
				},
				dataLabels: {
					enabled: false,
				},
				stroke: {
					curve: "straight",
				},

				title: {
					text: "股票基本面分析",
					align: "left",
				},
				subtitle: {
					text: "价格变动",
					align: "left",
				},
				labels: [
					"2023-01-01",
					"2023-01-02",
					"2023-01-03",
					"2023-01-04",
					"2023-01-05",
				],
				xaxis: {
					type: "datetime",
				},
				yaxis: {
					opposite: true,
				},
				legend: {
					horizontalAlign: "left",
				},
				series: [
					{
						name: "股票代码 1",
						data: [100, 120, 90, 110, 130],
					},

					{
						name: "股票代码 2",
						data: [10, 12, 9, 110, 13],
					},
				],
			},
		};
	},
	methods: {
		renderChart() {
			// 第一个参数为容器，第二个参数为图的配置
			var chart = new this.$apexcharts(
				this.$refs.apexcharts,
				this.chartOptions
			);
			this.chart = chart;
			chart.render();
		},
	},
	mounted() {
		this.renderChart();
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
