export const adminRoute = [
  {
    path: "overview",
    name: "Dashboard",
    meta: {
      isAuthenticated: true,
    },
    component: () => import("@/Pages/AdminEnd/Dashboard/Dashboard.vue"),
  },
  {
    path: "aboutAdmin",
    name: "AboutAdmin",
    meta: {
      isAuthenticated: true,
    },
    component: () => import("@/Pages/AdminEnd/AboutAdmin/aboutAdmin.vue"),
  },
];
export default adminRoute;
