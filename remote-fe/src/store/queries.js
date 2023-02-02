const state = {
  query1: "",
  query2: "",
  query3: "",
};

const mutations = {
  SET_QUERY1(state, query1) {
    state.query1 = query1;
  },
  SET_QUERY2(state, query2) {
    state.query2 = query2;
  },
  SET_QUERY3(state, query3) {
    state.query3 = query3;
  },
};

export default {
  state,
  mutations,
};
