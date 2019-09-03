export default {
  //   namespaced: true,

  state: {
    loading: false,
    status: null,
    error: null
  },

  mutations: {
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
    }
  },

  getters: {
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
