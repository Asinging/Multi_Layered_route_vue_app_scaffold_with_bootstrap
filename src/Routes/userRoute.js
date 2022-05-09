export default userRoute = {
  path: "index",
  name: "User",
  component: () => import("@/pages/Auth/Login/login.vue"),
};
