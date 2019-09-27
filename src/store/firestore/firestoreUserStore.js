import firebaseFirestore from "@/configs/firebase/firebaseFirestore";

const userCollection = "users";
export default {
  namespaced: true,

  state: {
    userDocument: null,
    loading: false,
    error: null
  },

  mutations: {
    setState(state, payload) {
      for (let value in payload) {
        state[value] = payload[value];
      }
    },
    setUserDocument(state, userDocument) {
      state.userDocument = userDocument;
    },
    unsetUserDocument(state) {
      state.userDocument = null;
    }
  },

  actions: {
    getUserDocument({ commit }, uid) {
      commit("setState", {
        loading: true,
        error: null
      });
      firebaseFirestore
        .collection(userCollection)
        .doc(uid)
        .get()
        .then(doc => {
          commit("setUserDocument", doc.data());
          commit("setState", {
            loading: false
          });
        })
        .catch(error => {
          commit("setState", {
            loading: false,
            error: error
          });
        });
    }
  },

  getters: {
    userDocument(state) {
      return state.userDocument;
    }
  }
};
