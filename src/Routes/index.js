/*eslint-disable*/
import Vue from "vue";
import Router from "vue-router";
import { adminRoute } from "./adminRoute";
import { userRoute } from "./userRoute";

import Index from "@/Pages/UserEnd/index";

import Error from "@/Pages/Error/Error";

Vue.use(Router);

const router = new Router({
  linkActiveClass: "nav-item active",
  scrollBehavior: (to) => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  },
  // mode: "hash", // this is a history
  routes: [
    // user sections
    {
      path: "/login",
      name: "Login",
      component: () => import("@/Pages/UserEnd/UserAuth/Login/login.vue"),
    },
    {
      path: "/logout",
      name: "Logout",
      component: () => import("@/Pages/UserEnd/UserAuth/Login/login.vue"),
    },
    //  amdmin Sections
    {
      path: "/adminLogin",
      name: "AdminLogin",
      component: () => import("@/Pages/AdminEnd/AdminAuth/Login/login.vue"),
    },
    {
      path: "/admin",
      name: "AdminIndex",
      redirects: { name: "Dashboard" },
      component: () => import("@/components/layout/DashboardLayout.vue"),
      children: [...adminRoute],
    },

    {
      path: "/",
      name: "Index",
      component: Index,
      meta: {
        isAuthenticated: true,
      },
      children: [...userRoute],
    },
    {
      path: "*",
      name: "Error",
      component: Error,
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.isAuthenticated)) {
    if (JSON.parse(localStorage.getItem("adminLoginDetails"))) {
      if (to.path.includes("/admin")) {
        next();
        return;
      } else {
        if (JSON.parse(localStorage.getItem("loginDetails"))) {
          next();
          return;
        }
        next("/login");
        return;
      }
    } else if (JSON.parse(localStorage.getItem("loginDetails"))) {
      if (to.path.includes("/admin")) {
        next("/admin");
      } else {
        next();
        return;
      }
    } else {
      if (to.path.includes("/admin")) {
        next("/admin");
      } else {
        next("/login");
      }
    }
  } else {
    next();
  }
});

export default router;
