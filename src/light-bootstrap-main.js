// import VTooltip from 'v-tooltip'
// // Notifications plugin
// import Notifications from 'src/components/NotificationPlugin'
// // A plugin file where you could register global components used across the app

// // A plugin file where you could reimport clickOutside from './directives/click-ouside.js';gister globaimport clickOutside from './directives/click-ouside.js';l directives
// import GlobalDirectives from "./globalDirectives";
import clickOutside from "./directives/click-ouside.js";
// // Sidebar on the right. Used as a local plugin in DashboardLayout.vue
import SideBar from "./components/SidebarPlugin";

// asset imports
import "bootstrap/dist/css/bootstrap.css";
import "./assets/sass/light-bootstrap-dashboard.scss";
import "./assets/css/demo.css";
import BaseDropdown from "./components/BaseDropdown.vue";

/**
 * You can register global components here and use them as a plugin in your main Vue instance
 */

const GlobalComponents = {
  install(Vue) {
    Vue.component(BaseDropdown.name, BaseDropdown);
  },
};

/**
 * You can register global directives here and use them as a plugin in your main Vue instance
 */

const GlobalDirectives = {
  install(Vue) {
    Vue.directive("click-outside", clickOutside);
  },
};

/**
 * This is the main Light Bootstrap Dashboard Vue plugin where dashboard related plugins are registerd.
 */
export default {
  install(Vue) {
    Vue.use(GlobalComponents);
    Vue.use(GlobalDirectives);
    Vue.use(SideBar);
    // Vue.use(Notifications)
    // Vue.use(VTooltip)
  },
};
