/*eslint-disable*/
import { login, logout } from "@/Apis/Admin/authApis";
const AuthStore = {
  namespaced: true, // toggle this on if you wish to concisely namespace your app state
  state: {
    isUserAuthenticated: false,
    loginDetails: null,
  },
  mutations: {
    mLogin(state, payload) {
      state.loginDetails = payload.user;
      state.isUserAuthenticated = payload.status;
    },
  },
  actions: {
    LOGIN({ commit }, queries) {
      return new Promise((resolve, reject) => {
        let details = queries.query;
        login(queries)
          .then((resp) => {
            if (resp) {
              let x = { user: details, status: true };
              debugger;

              // uncomment the lines below to use localStorage for persistent storage

              localStorage.setItem("adminLoginDetails", JSON.stringify(x.user));
              // localStorage.setItem("loginStatus", JSON.stringify(x.status));

              commit("mLogin", x);

              resolve(resp);
            } else {
              resolve(resp);
            }
          })
          .catch((err) => {
            console.log(err);

            reject(err);
          });
      });
    },
    LOGOUT({ commit }) {
      logout()
        .then((resp) => {
          localStorage.removeItem("adminLoginDetail"); //if you wish to user local storage for persistent login uncomment
          let x = { user: null, status: false };
          commit("mLogin", x);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  getters: {
    loginDetailsGetter(state) {
      return state.loginDetails;
    },
    loginStatusGetter(state) {
      return state.isUserAuthenticated;
    },
  },
};
export default AuthStore;
