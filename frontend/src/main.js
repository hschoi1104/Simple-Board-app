import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import axios from "axios";
Vue.config.productionTip = false;
axios.defaults.baseURL = "/apis/";

axios.defaults.headers.common["Cache-Control"] = "no-cache";

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount("#app");
