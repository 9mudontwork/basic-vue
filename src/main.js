import Vue from "vue";
import App from "./App.vue";
import router from "./router/path";
import store from "./store";
import VeeValidate from "./plugins/vee-validate";
import vuetify from "./plugins/vuetify";
import firebase from "./configs/firebase/firebaseInit";

const navbarLayout = [
  {
    name: "navbar-frontend",
    component: "components/frontend/NavBar"
  },
  {
    name: "navbar-dashboard",
    component: "components/dashboard/NavBar"
  }
];

navbarLayout.map(navbar => {
  return Vue.component(navbar.name, () => import(`@/${navbar.component}.vue`));
});

Vue.config.productionTip = false;

const unSignIn = firebase.auth().onAuthStateChanged(user => {
  new Vue({
    router,
    store,
    VeeValidate,
    vuetify,
    render: h => h(App),
    created() {
      this.$store.dispatch("autoSignIn", user);
    }
  }).$mount("#app");
  unSignIn();
});
