import Vue from 'vue';
import { createPinia, PiniaVuePlugin } from 'pinia';

import App from './App.vue';
import router from './router';
import ElementUI from "element-ui";
import "./assets/css/element-variables.scss";
import Scroll from "./components/Scroll.vue";
import ApexChartsPlugin from "./assets/js/apexcharts";

Vue.use(ApexChartsPlugin);
Vue.component("Scroll", Scroll);
Vue.use(PiniaVuePlugin);
Vue.use(ElementUI);
new Vue({
	router,
	pinia: createPinia(),
	render: (h) => h(App),
}).$mount('#app');
