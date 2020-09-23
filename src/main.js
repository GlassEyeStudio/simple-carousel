import Vue from "vue";
import App from "./App.vue";
import axios from "axios";
import VueAxios from "vue-axios";
import VueAgile from "vue-agile";

Vue.config.productionTip = false;

Vue.use(VueAxios, axios);
Vue.use(VueAgile);

new Vue({
  render: h => h(App)
}).$mount("#app");
