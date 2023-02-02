import { createStore } from "vuex";

export default createStore({
  state: {
    basket: [],
    service: "",
    sort: "",
    order: "",
  },
  getters: {},
  mutations: {
    addItem(state, item) {
      state.basket.push(item);
    },
    removeItem(state, item) {
      const index = state.basket.indexOf(item);
      state.basket.splice(index, 1);
    },
    clearBasket(state) {
      state.basket = [];
    },
    SET_QUERY1(state, service) {
      state.service = service;
    },
    SET_QUERY2(state, sort) {
      state.sort = sort;
    },
    SET_QUERY3(state, order) {
      state.order = order;
    },
  },
  actions: {
    addItem({ commit }, item) {
      commit("addItem", item);
    },
    removeItem({ commit }, item) {
      commit("removeItem", item);
    },
    clearBasket({ commit }) {
      commit("clearBasket");
    },
  },
  modules: {},
});

// const store = createStore({
//   state: {
//     basket: [],
//   },
//   getters: {},
//   mutations: {
//     addItem(state, item) {
//       state.basket.push(item);
//     },
//     removeItem(state, item) {
//       const index = state.basket.indexOf(item);
//       state.basket.splice(index, 1);
//     },
//     clearBasket(state) {
//       state.basket = [];
//     },
//   },
//   actions: {
//     addItem({ commit }, item) {
//       commit("addItem", item);
//     },
//     removeItem({ commit }, item) {
//       commit("removeItem", item);
//     },
//     clearBasket({ commit }) {
//       commit("clearBasket");
//     },
//   },
//   modules: {},
// });

// const newModule = {}
