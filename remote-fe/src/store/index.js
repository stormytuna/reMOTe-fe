import { createStore } from "vuex";

export default createStore({
  state: {
    basket: [],
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
