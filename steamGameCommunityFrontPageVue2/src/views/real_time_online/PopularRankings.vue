<template>
	<div>
		<!-- 热门排行榜 -->
        <ColumnChart/>
		<LineChart />
        <DatetimeXaxis/>
        <StocksChart/>
	</div>
</template>

<script>
import ColumnChart from "./ColumnChart.vue";
import LineChart from "./LineChart.vue";
import DatetimeXaxis from "./DatetimeXaxis.vue";
import StocksChart from "./StocksChart.vue";
export default {
	name: "PopularRankings",
	components: {
		LineChart,
        ColumnChart,
        DatetimeXaxis,
        StocksChart,
	},
};
</script>

<style scoped>

</style>
