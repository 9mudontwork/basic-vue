import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import firebase from "./configs/firebase/firebaseInit";

Vue.config.productionTip = false;

// vee validate
import VeeValidate from "vee-validate";
const veeValidationConfig = {
  classes: true,
  classNames: {
    valid: "is-valid",
    invalid: "is-invalid"
  }
};
Vue.use(VeeValidate, veeValidationConfig);

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
