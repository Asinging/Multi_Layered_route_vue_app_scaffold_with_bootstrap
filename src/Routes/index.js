/*eslint-disable*/
import Vue from "vue";
import Router from "vue-router";

import Layout from "@/components/Layout/Layout";
import Dashboard from "@/pages/Dashboard/Dashboard";

// import Tables from '@/pages/Tables/Basic'
import Store from "./store/index";

import Error from "@/pages/Error/Error";

Vue.use(Router);

const router = new Router({
  // mode: "history", // this is a history
  routes: [
    {
      path: "/admin",
      name: "Admin",
      component: () => import("@/pages/Auth/Login/login.vue"),
      children: [...adminChildrenRoute],
    },
    {
      path: "/user",
      name: "Admin",
      component: () => import("@/pages/Auth/Login/login.vue"),
      children: [...UserChildrenRoute],
    },
    {
      path: "*",
      name: "Error",
      component: Error,
    },
  ],
});
router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    let token = JSON.parse(localStorage.getItem("token"));
    let time = new Date().getTime();

    // debugger
    if (
      Store.getters.isAuthenticatedGetter &&
      time < (token ? token.expiryTime : 0)
    ) {
      if (to.path == "/") {
        Store.dispatch("SIDEBAR_ITEM_CLICK", "Home");
        next();
        return;
      }
      next();
      return;
    } else {
      // Store.dispatch("LOGOUT")
      next("/login");
    }
  } else {
    next();
  }
});

export default router;
