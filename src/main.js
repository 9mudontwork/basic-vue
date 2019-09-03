import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import firebase from "firebase";
import { firebaseConfig } from "./configs/firebase/firebaseConfig";

Vue.config.productionTip = false;

firebase.initializeApp(firebaseConfig);

const unSignIn = firebase.auth().onAuthStateChanged(user => {
  new Vue({
    router,
    store,
    render: h => h(App),
    created() {
      this.$store.dispatch("autoSignIn", user);
    }
  }).$mount("#app");
  unSignIn();
});

// new Vue({
//   router,
//   store,
//   render: h => h(App),
//   created() {
//     firebase.auth().onAuthStateChanged(user => {
//       if (user) {
//         this.$store.dispatch("firebaseAuth/autoSignIn", user);
//       }
//     });
//   }
// }).$mount("#app");

// created เป็น Instance Lifecycle Hook ของ Vue จะทำงานก่อน render
// ดูจาก Doc https://vuejs.org/v2/guide/instance.html#Instance-Lifecycle-Hooks
// ในหน้านี้ทำเพื่อเช็คว่ามีการ login ของ firebase ไว้อยู่รึป่าว ถ้าใช่ให้ dispatch
