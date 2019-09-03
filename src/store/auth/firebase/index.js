import firebase from "firebase";
import router from "@/router";

export default {
  namespaced: true,
  // state
  state: {
    user: null,
    status: null,
    error: null
  },

  // mutations
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },

    setStatus(state, payload) {
      state.status = payload;
    },

    setError(state, payload) {
      state.error = payload;
    }
  },

  // action
  actions: {
    // login ด้วย firebase แบบ email pass ดูที่ Doc https://firebase.google.com/docs/reference/js/firebase.auth.Auth.html#signinwithemailandpassword
    // หลังจากเกิด action ใดๆแล้ว ต้องเรียกใช้ mutations เพื่อเซ็ตค่า state ให้ใช้คำสั่ง commit ฟังก์ชั่นในนั้น แล้วโยน paylaod เข้าไป
    // ดูได้จาก Doc https://vuex.vuejs.org/api/#vuex-store-instance-methods
    signIn({ commit }, payload) {
      firebase
        .auth()
        .signInWithEmailAndPassword(payload.email, payload.password)
        .then(response => {
          commit("setUser", response.user.uid);
          commit("setStatus", "success");
          commit("setError", null);

          // router คือการกำหนด url ที่ต้องการ redirect ดูได้จาก Doc https://router.vuejs.org/guide/essentials/navigation.html
          router.push("/");
        })
        .catch(error => {
          commit("setStatus", "fail");
          commit("setError", error.message);
        });
    },

    // logout firebase ดูที่ Doc https://firebase.google.com/docs/reference/js/firebase.auth.Auth#sign-out
    signOut({ commit }) {
      firebase
        .auth()
        .signOut()
        .then(response => {
          commit("setUser", null);
          commit("setStatus", "success");
          commit("setError", null);

          router.push("/signin");
        })
        .catch(error => {
          commit("setStatus", "fail");
          commit("setError", error.message);
        });
    },

    autoSignIn({ commit }, payload) {
      commit("setUser", payload);
    }
  },

  // getters
  getters: {
    status(state) {
      return state.status;
    },

    user(state) {
      return state.user;
    },

    error(state) {
      return state.error;
    }
  }
};
