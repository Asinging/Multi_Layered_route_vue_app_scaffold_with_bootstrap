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
import VueSweetalert2 from "vue-sweetalert2";

import "sweetalert2/dist/sweetalert2.min.css";
Vue.use(VueSweetalert2);
window.btToast = Vue.swal.mixin({
  toast: true,
  position: "top-right",
  iconColor: "green",
  customClass: {
    popup: "colored-toast",
  },
  showConfirmButton: false,
  timer: 2000,
  timerProgressBar: true,
});
// LightBootstrap plugin
import LightBootstrap from "./light-bootstrap-main";
Vue.use(LightBootstrap);

Vue.config.productionTip = false;
new Vue({
  router,
  render: (h) => h(App),
  store,
}).$mount("#app");
