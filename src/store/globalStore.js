export default {
  namespaced: true,

  state: {
    defaultTitleBar: "Basic Vue",
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
    setTitleBar(state, titleBar) {
      state.titleBar = titleBar;
    },
    setDefaultTitleBar(state) {
      state.titleBar = this.defaultTitleBar;
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
    setTitleBar({ commit }, titleBar) {
      if (titleBar === null || titleBar === undefined) {
        commit("setDefaultTitleBar");
        return;
      }
      commit("setTitleBar", titleBar);
    }
  }
};
