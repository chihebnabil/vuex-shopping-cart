import Login from "./Login";
import Signup from "./Signup";

export default [
  {
    name: "auth.login",
    path: "/login",
    component: Login,
    meta: { requiresAuth: false }
  },
  {
    name: "auth.signup",
    path: "/signup",
    component: Signup,
    meta: { requiresAuth: false }
  }
];
