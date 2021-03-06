// https://vuex.vuejs.org/en/state.html
export default {
  token: null,
  user: {},
  added: [],
  cartTotal: 0,
  permissions: [],
  messages: {
    success: "",
    error: [],
    warning: "",
    validation: {}
  },
  fetching: false,
  sidebar: {
    show: true,
    clipped: true,
    mini_variant: false
  },
  configs: {}
};
