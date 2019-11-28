import Cart from "./Cart";

export default [
  {
    name: "shop.cart",
    path: "/cart",
    component: Cart,
    meta: { requiresAuth: false }
  }
];
