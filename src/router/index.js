import Vue from "vue";
import VueRouter from "vue-router";
import Routes from "../views/index.js";

let routes = [];
Routes.map(route => {
  routes.push(route);
});

Vue.use(VueRouter);

const router = new VueRouter({
  routes
});

export default router;
