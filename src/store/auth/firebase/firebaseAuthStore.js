import firebase from "firebase";
import router from "@/router/path";
import store from "../../index";
import firebaseFirestore from "@/configs/firebase/firebaseFirestore";

export default {
  namespaced: true,

  state: {
    user: null,
    loading: false,
    error: null
  },
  getters: {
    user: state => state.user,
    loading: state => state.loading,
    error: state => state.error
  },
  mutations: {
    setState(state, payload) {
      for (let value in payload) {
        state[value] = payload[value];
      }
    },
    setUser(state, responseFirebaseUserInfo) {
      state.user = responseFirebaseUserInfo;
    }
  },
  actions: {
    clearError({ commit }) {
      commit("setState", { error: null });
    },

    autoSignIn({ commit }, responseFirebaseUserInfo) {
      if (!responseFirebaseUserInfo) return;

      store.dispatch(
        "firestoreUserStore/getFirestoreUserDocument",
        responseFirebaseUserInfo.uid
      );

      commit("setUser", responseFirebaseUserInfo);
    },

    signIn({ commit }, signInData) {
      commit("setState", {
        loading: true,
        error: null
      });
      firebase
        .auth()
        .signInWithEmailAndPassword(signInData.email, signInData.password)
        .then(response => {
          commit("setState", {
            loading: false
          });
          commit("setUser", response.user);
        })
        .catch(error => {
          commit("setState", {
            loading: false,
            error: error
          });
        });
    },

    signOut({ commit }) {
      commit("setState", {
        loading: true,
        error: null
      });
      firebase
        .auth()
        .signOut()
        .then(() => {
          commit("setUser", null);
          commit("setState", {
            loading: false
          });
          router.push("/signin");
        })
        .catch(error => {
          commit("setState", {
            loading: false,
            error: error
          });
        });
    },

    signUp({ commit }, signUpData) {
      commit("setState", {
        loading: true,
        error: null
      });
      firebase
        .auth()
        .createUserWithEmailAndPassword(signUpData.email, signUpData.password)
        .then(response => {
          firebaseFirestore
            .collection("users")
            .doc(response.user.uid)
            .set({
              uid: response.user.uid,
              email: signUpData.email,
              role: "user",
              created_date: firebase.firestore.FieldValue.serverTimestamp()
            });
          commit("setState", {
            loading: false
          });
          commit("setUser", response.user);
        })
        .catch(error => {
          commit("setState", {
            loading: false,
            error: error
          });
        });
    }
  }
};
