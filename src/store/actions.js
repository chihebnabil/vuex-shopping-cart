// https://vuex.vuejs.org/en/actions.html
import * as TYPES from "./types";

export default {
  setFetching({ commit }, obj = { fetching: true }) {
    commit(TYPES.MAIN_SET_FETCHING, obj);
  },

  setMessage({ commit }, obj) {
    commit(TYPES.MAIN_SET_MESSAGE, obj);
  },

  resetMessages({ commit }) {
    commit(TYPES.MAIN_SET_MESSAGE, { type: "success", message: "" });
    commit(TYPES.MAIN_SET_MESSAGE, { type: "error", message: [] });
    commit(TYPES.MAIN_SET_MESSAGE, { type: "warning", message: "" });
    commit(TYPES.MAIN_SET_MESSAGE, { type: "validation", message: {} });
  },

  toggleSidebar({ commit }) {
    commit(TYPES.TOGGLE_SIDEBAR);
  },
  toggleSidebarClipped({ commit }) {
    commit(TYPES.TOGGLE_SIDEBAR_CLIPPED);
  },
  toggleSidebarMiniVariant({ commit }) {
    commit(TYPES.TOGGLE_SIDEBAR_MINI_VARIANT);
  },

  setUser: ({ commit }, data) => {
    commit(TYPES.SET_USER, data);
  },

  addToCart: ({ commit }, product) => {
    commit(types.ADD_TO_CART, {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image
    });
  },
  removeFromCart: ({ commit }, product) => {
    commit(types.REMOVE_FROM_CART, {
      product: product
    });
  }
};
