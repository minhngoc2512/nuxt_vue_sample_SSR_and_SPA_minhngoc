const arrayRouter = [
  {
    path: "/",
    name: "Home",
    component: "~/pages/Home/Home.vue"
  },
  {
    path: "/error/500",
    name: "error 500",
    component: "~/pages/Error/Error500.vue"
  },
  {
    name: "custom",
    path: "*",
    component: "~/pages/Error/Error.vue"
  }
];

module.exports = {
  arrayRouter() {
    return arrayRouter;
  }
};
