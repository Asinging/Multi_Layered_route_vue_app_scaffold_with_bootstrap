export const userRoute = [
  {
    path: "aboutPage",
    name: "UserAbout",
    meta: {
      isAuthenticated: true,
    },
    component: () => import("@/Pages/UserEnd/AboutUser/aboutUser.vue"),
  },
];
export default userRoute;
