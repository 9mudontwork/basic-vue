import Vue from "vue";
import Router from "vue-router";

import authUserFirebase from "./auth-user-firebase";

Vue.use(Router);

const routerOptions = [
  {
    path: "/",
    name: "Home",
    component: "views/Home"
  },
  {
    path: "/signin",
    name: "signin",
    component: "components/auth/SignIn",
    meta: { dontSignInAgain: true },
    beforeEnter: authUserFirebase
  },
  {
    path: "/signup",
    name: "signup",
    component: "components/auth/SignUp",
    meta: { dontSignInAgain: true },
    beforeEnter: authUserFirebase
  },
  {
    path: "/profile",
    name: "profile",
    component: "components/auth/Profile",
    beforeEnter: authUserFirebase
  }
];

const routes = routerOptions.map(route => {
  return {
    path: route.path,
    name: route.name,
    component: () => import(`@/${route.component}.vue`),
    meta: route.meta,
    beforeEnter: route.beforeEnter
  };
});

export default new Router({
  mode: "history",
  linkActiveClass: "active",
  base: process.env.BASE_URL,
  routes: [
    ...routes,
    {
      path: "*",
      redirect: "/"
    }
  ]
});
