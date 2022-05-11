export const userRoute = [
  {
    path: "aboutPage",
    name: "UserAbout",
    meta: {
      isAuthenticated: true,
    },
    component: () => import("@/Pages/UserEnd/AboutUser/aboutUser.vue"),
  },
  {
    path: "",
    name: "Home",
    meta: {
      isAuthenticated: true,
    },
    component: () => import("@/Pages/UserEnd/Home/Home.vue"),
  },
];
export default userRoute;
