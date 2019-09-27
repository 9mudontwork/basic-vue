import Vue from "vue";
import Vuex from "vuex";

import firebaseAuthStore from "./auth/firebase/firebaseAuthStore";
import firestoreUserStore from "./firestore/firestoreUserStore";
import globalStore from "./globalStore";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    firebaseAuthStore: firebaseAuthStore,
    firestoreUserStore: firestoreUserStore,
    globalStore: globalStore
  }
});
