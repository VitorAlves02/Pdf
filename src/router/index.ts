import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import pdf from "../views/Pdf.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: pdf,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
