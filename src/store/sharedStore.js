export default {
  //   namespaced: true,

  state: {
    titleBar: "Basic Vue",
    loading: false,
    status: null,
    error: null
  },

  mutations: {
    setTitleBar(state, payload) {
      state.titleBar = payload;
    },
    setLoading(state, payload) {
      state.loading = payload;
    },
    setStatus(state, payload) {
      state.status = payload;
    },
    setError(state, payload) {
      state.error = payload;
    },
    clearError(state) {
      state.error = null;
    }
  },

  actions: {
    clearError({ commit }) {
      commit("clearError");
    },
    setError({ commit }, payload) {
      commit("setError", payload);
    },
    setTitleBar({ commit }, payload) {
      commit("setTitleBar", payload);
    }
  },

  getters: {
    titleBar(state) {
      return state.titleBar;
    },
    loading(state) {
      return state.loading;
    },
    status(state) {
      return state.status;
    },
    error(state) {
      return state.error;
    }
  }
};
