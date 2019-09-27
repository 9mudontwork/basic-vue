export default {
  namespaced: true,

  state: {
    titleBar: "Basic Vue",
    loading: false,
    status: null,
    error: null
  },

  getters: {
    titleBar: state => state.titleBar,
    loading: state => state.loading,
    status: state => state.status,
    error: state => state.error
  },

  mutations: {
    setTitleBar(state, payload) {
      state.titleBar = payload;
    },
    setState(state, payload) {
      for (let value in payload) {
        state.value = payload[value];
      }
    }
  },

  actions: {
    clearError({ commit }) {
      commit("setState", { error: null, status: null });
    },
    setTitleBar({ commit }, payload) {
      commit("setTitleBar", payload);
    }
  }
};
