import firebaseFirestore from "@/configs/firebase/firebaseFirestore";

const userCollection = "users";
export default {
  state: {
    firestoreUserDocument: null,
    loading: false,
    error: null
  },

  mutations: {
    setState(state, payload) {
      for (let value in payload) {
        state[value] = payload[value];
      }
    },
    setFirestoreUserDocument(state, firestoreUserDocument) {
      state.firestoreUserDocument = firestoreUserDocument;
    }
  },

  actions: {
    getFirestoreUserDocument({ commit }, uid) {
      commit("setState", {
        loading: true,
        error: null
      });
      firebaseFirestore
        .collection(userCollection)
        .doc(uid)
        .get()
        .then(doc => {
          commit("setFirestoreUserDocument", doc.data());
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
    firestoreUserDocument(state) {
      return state.firestoreUserDocument;
    }
  }
};
