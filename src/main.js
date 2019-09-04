import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import firebase from "firebase";
import { firebaseConfig } from "./configs/firebase/firebaseConfig";

import VeeValidate from "vee-validate";

Vue.config.productionTip = false;

const veeValidationConfig = {
  classes: true,
  classNames: {
    valid: "is-valid",
    invalid: "is-invalid"
  }
};
Vue.use(VeeValidate, veeValidationConfig);

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
