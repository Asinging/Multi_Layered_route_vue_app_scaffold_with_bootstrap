/*eslint-disable*/

import Vue from "vue";
import "./plugins/axios";
import App from "./App.vue";
import router from "./Routes";

import store from "./store/index";
import vuetify from "./plugins/vuetify";
import VueSweetalert2 from "vue-sweetalert2";

import DataTable from "@andresouzaabreu/vue-data-table";

import "@andresouzaabreu/vue-data-table/dist/DataTable.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/src/jquery.js";
import "dtoaster/dist/dtoaster.css";
import VueHtmlToPaper from "vue-html-to-paper";
import { VTooltip, VPopover, VClosePopover } from "v-tooltip";
import VueCustomTooltip from "@adamdehaven/vue-custom-tooltip";
import "animate.css";

Vue.use(VueCustomTooltip, {
  name: "VueCustomTooltip",
  color: "#fff",
  background: "red",

  fontWeight: 600,
});
Vue.directive("tooltip", VTooltip);
Vue.directive("close-popover", VClosePopover);
Vue.component("v-popover", VPopover);

const printOptions = {
  name: "_blank",
  specs: ["fullscreen=yes", "titlebar=yes", "scrollbars=yes"],
  styles: [
    "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css",
    "https://unpkg.com/kidlat-css/css/kidlat.css",
  ],
  timeout: 1000, // default timeout before the print window appears
  autoClose: true, // if false, the window will not close after printing
  windowTitle: window.document.title, // override the window title
};
Vue.use(VueHtmlToPaper, printOptions);
import DToaster from "dtoaster";
import ToasterPresets from "./vToast.json"; //Your predefined toasts presets (optionally)
import VueLocalForage from "vue-localforage";
Vue.use(VueLocalForage);

// import Invoice from "vue-invoice";
// Vue.use(Invoice, { store });
import * as VueAos from "vue-aos";
Vue.use(VueAos);

Vue.use(DToaster, {
  presets: ToasterPresets,
  position: "top-right", //toasts container position on the screen
  containerOffset: "1000px", //toasts container offset from top/bottom of the screen
});

import moment from "moment";
Vue.use(require("vue-moment"));
moment().format();
import VueSocialSharing from "vue-social-sharing";

Vue.use(VueSocialSharing);

Vue.component("data-table", DataTable);
// Vue.component("advance-table", AdvanceTable);
import $ from "jquery";

window.$ = $;

$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

import loading from "vuejs-loading-screen";

Vue.use(loading);

const options = {
  confirmButtonColor: "#217DBB",
  cancelButtonColor: "red",
};

import VueApexCharts from "vue-apexcharts";
Vue.use(VueApexCharts);

Vue.component("apexchart", VueApexCharts);

// If you don't need the styles, do not connect
import "sweetalert2/dist/sweetalert2.min.css";

Vue.use(VueSweetalert2, options);

import VueNumber from "vue-number-animation";
Vue.use(VueNumber);

import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

Vue.use(Toast);

Vue.config.productionTip = false;

new Vue({
  vuetify,
  router,
  render: (h) => h(App),
  store,
}).$mount("#app");
