import Vue from 'vue';
import { createPinia, PiniaVuePlugin } from 'pinia';

import App from './App.vue';
import router from './router';
import ElementUI from "element-ui";
import "./assets/css/element-variables.scss";
import Scroll from "./components/Scroll.vue";
import ApexChartsPlugin from "./assets/js/apexcharts";
import ScrollDown from "./components/ScrollDown.vue";

Vue.use(ApexChartsPlugin);
Vue.use(ScrollDown);
Vue.component("Scroll", Scroll);
Vue.component("ScrollDown", ScrollDown);
Vue.use(PiniaVuePlugin);
Vue.use(ElementUI);
new Vue({
	router,
	pinia: createPinia(),
	render: (h) => h(App),
}).$mount('#app');
