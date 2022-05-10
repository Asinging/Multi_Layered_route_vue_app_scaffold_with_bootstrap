/*eslint-disable*/

import Vue from "vue";
import "./plugins/axios";
import App from "./App.vue";
import router from "./Routes/index";
import store from "./store/index";
// import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
// Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
// Vue.use(IconsPlugin);
import "bootstrap";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/src/jquery.js";
// LightBootstrap plugin
import LightBootstrap from "./light-bootstrap-main";
Vue.use(LightBootstrap);

Vue.config.productionTip = false;
new Vue({
  router,
  render: (h) => h(App),
  store,
}).$mount("#app");
