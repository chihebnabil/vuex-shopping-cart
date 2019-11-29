import Cart from "./Cart";
import Checkout from "./Checkout";

export default [
  {
    name: "shop.cart",
    path: "/cart",
    component: Cart,
    meta: { requiresAuth: false }
  },
  {
    name: "shop.checkout",
    path: "/checkout",
    component: Checkout,
    meta: { requiresAuth: false }
  }
];
