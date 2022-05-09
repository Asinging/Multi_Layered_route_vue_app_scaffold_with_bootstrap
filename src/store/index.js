import Vue from "vue";
import Vuex from "vuex";
import userAccount from "./modules/userAccount";
import Auth from "./modules/authStore";

/*eslint-disable*/
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Auth,
  },
  namespace: false, // toggle this on if you wish to concisely namespace you app state
});
