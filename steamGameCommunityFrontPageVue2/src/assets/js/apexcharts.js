import ApexCharts from "apexcharts";

export default {
	install(Vue) {
		Vue.prototype.$apexcharts = ApexCharts;
	},
};
