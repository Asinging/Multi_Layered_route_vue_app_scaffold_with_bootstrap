/*eslint-disable*/
"use strict";
import Vue from "vue";
import axios from "axios";
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";

axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
axios.defaults.withCredentials = true;

let config = {
  // baseURL: process.env.VUE_APP_ROOT_API,
  baseURL: "http://localhost:8000/api/v1/",

  withCredentials: false, // Check cross-site Access-Control
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
