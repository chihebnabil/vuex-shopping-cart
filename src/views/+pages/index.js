import Home from "./Home";
import About from "./About";

export default [
  {
    name: "pages.home",
    path: "/",
    component: Home,
    meta: { requiresAuth: false }
  },
  {
    name: "pages.about",
    path: "/about",
    component: About,
    meta: { requiresAuth: false }
  }
];
