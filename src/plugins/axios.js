/*eslint-disable*/
"use strict";
import Vue from "vue";
import axios from "axios";
import Router from "@/Routes.js";
// import Store from "@/store/index"//

let token;
let x = localStorage.getItem("token");
token = x ? JSON.parse(x) : null;

// axios.defaults.baseURL = process.env.baseURl || process.env.apiUrl || '';

axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";

axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

axios.defaults.headers.common["Authorization"] = `Bearer ${
  token ? token.tok : ""
}`;
// axios.defaults.headers.common['domain'] = window.location.origin

let config = {
  // headers: {
  //   'Authorization': `Bearer ${token}`,
  // // },
  baseURL: process.env.VUE_APP_ROOT_API,
  // baseURL: "https://api.jiffye.org/api/v1",  //this is for nellyval database
  // transformRequest: [],
  withCredentials: false, // Check cross-site Access-Control
  // domain: window.location.origin
};
const _axios = axios.create(config);

_axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent

    // alert(window.location.origin)
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);
// Add a response interceptor
_axios.interceptors.response.use(
  function (response) {
    // Do something with response data
    return response;
  },
  function (error) {
    // Do something with response error

    if (error.response.status == 401) {
      // debugger
      if (error.response.data.message == "Unauthenticated.") {
        //  alert("Access expired! Pls Login To Gain Regain Access")
        // localStorage.removeItem("token");
        // localStorage.removeItem("userLogin");
        // Store.dispatch("LOGOUT");
        Router.push("/login");
      } // Router.push("/login")

      return Promise.reject(error);
    }
    return;
  }
);
Plugin.install = function (Vue, options) {
  Vue.axios = _axios;
  window.axios = _axios;
  Object.defineProperties(Vue.prototype, {
    axios: {
      get() {
        return _axios;
      },
    },
    $axios: {
      get() {
        return _axios;
      },
    },
    axios: {
      post() {
        return _axios;
      },
    },
    axios: {
      put() {
        return _axios;
      },
    },
    axios: {
      delete() {
        return _axios;
      },
    },
  });
};
Vue.use(Plugin);
export default Plugin;
