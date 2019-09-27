import Vue from "vue";
import Vuex from "vuex";

import firebaseAuthStore from "./auth/firebase/firebaseAuthStore";
import firestoreUserStore from "./firestore/firestoreUserStore";
import sharedStore from "./sharedStore";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    firebaseAuthStore: firebaseAuthStore,
    firestoreUserStore: firestoreUserStore,
    sharedStore: sharedStore
  }
});
