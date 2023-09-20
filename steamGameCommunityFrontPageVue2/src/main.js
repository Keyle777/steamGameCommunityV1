import Vue from 'vue';
import { createPinia, PiniaVuePlugin } from 'pinia';

import App from './App.vue';
import router from './router';
import ElementUI from 'element-ui';
import './assets/css/element-variables.scss';
Vue.use(PiniaVuePlugin);
Vue.use(ElementUI);
new Vue({
	router,
	pinia: createPinia(),
	render: (h) => h(App),
}).$mount('#app');
