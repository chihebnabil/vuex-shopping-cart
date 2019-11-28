import Login from "./Login";

export default [
  {
    name: "auth.login",
    path: "/login",
    component: Login,
    meta: { requiresAuth: false }
  }
];
