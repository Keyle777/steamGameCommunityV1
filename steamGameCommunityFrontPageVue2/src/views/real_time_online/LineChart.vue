<template>
	<div>
		<div id="chart">
			<div ref="apexcharts"></div>
		</div>
	</div>
</template>
<script>
export default {
	name: "LineChart",
	data() {
		return {
			chartOptions: {
				chart: {
					height: 350,
					type: "area",
				},
				dataLabels: {
					enabled: false,
				},
				stroke: {
					curve: "smooth",
				},
				xaxis: {
					type: "datetime",
					categories: [
						"2018-09-19T00:00:00.000Z",
						"2018-09-19T01:30:00.000Z",
						"2018-09-19T02:30:00.000Z",
						"2018-09-19T03:30:00.000Z",
						"2018-09-19T04:30:00.000Z",
						"2018-09-19T05:30:00.000Z",
						"2018-09-19T06:30:00.000Z",
					],
				},
				tooltip: {
					x: {
						format: "dd/MM/yy HH:mm",
					},
				},

                series:[
				{
					name: "series1",
					data: [31, 40, 28, 51, 42, 109, 100],
				},
				{
					name: "series2",
					data: [11, 32, 45, 32, 34, 52, 41],
				},
			]
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
