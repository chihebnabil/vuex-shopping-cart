// https://vuex.vuejs.org/en/mutations.html
import * as TYPES from "./types";
/* eslint-disable no-param-reassign */
export default {
  [TYPES.MAIN_SET_FETCHING](state, obj) {
    state.fetching = obj.fetching;
  },
  [TYPES.MAIN_SET_MESSAGE](state, obj) {
    state.messages[obj.type] = obj.message;
  },
  [TYPES.TOGGLE_SIDEBAR](state) {
    state.sidebar.show = !state.sidebar.show;
  },
  [TYPES.TOGGLE_SIDEBAR_CLIPPED](state) {
    state.sidebar.show = true;
    state.sidebar.clipped = !state.sidebar.clipped;
  },
  [TYPES.TOGGLE_SIDEBAR_MINI_VARIANT](state) {
    state.sidebar.show = true;
    state.sidebar.mini_variant = !state.sidebar.mini_variant;
  },
  [TYPES.SET_BREADCRUMBS](state, items) {
    // console.info('==>', this._vm.$t('auth.login'))
    // document.title = state.app_name + ': ' + items.map(item => this._vm.$t(item)).join(' : ');
    state.breadcrumbs = items;
  },
  [TYPES.SET_TOKEN](state, token) {
    state.token = token;
  },

  [TYPES.SET_PERMISSIONS](state, payload) {
    state.permissions = payload;
  },

  [TYPES.SET_USER](state, payload) {
    state.user = { ...state.user, ...payload };
  },
  [TYPES.SET_CONFIGS](state, payload) {
    state.configs = { ...state.configs, ...payload };
  },
  [TYPES.ADD_TO_CART](state, { id, name, price, image }) {
    const record = state.added.find(p => p.id === id);
    if (!record) {
      state.added.push({
        id,
        name,
        price,
        image,
        total: price,
        quantity: 1
      });
    } else {
      record.quantity++;
      record.total = record.price * record.quantity;
    }
    state.cartTotal = state.added.map(item => item.total).reduce((prev, curr) => prev + curr, 0)
  },
  [TYPES.REMOVE_FROM_CART](state, id) {
    let index = state.added.findIndex(x => x === id);
    state.added.splice(index, 1);
    state.cartTotal = state.added.map(item => item.total).reduce((prev, curr) => prev + curr, 0)

  }
};
