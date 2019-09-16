import Vue from "vue";
import Router from "vue-router";

import authFirebaseRoute from "./firebase/authFirebaseRoute";

Vue.use(Router);

const routerOptions = [
  {
    path: "/",
    name: "home",
    component: "components/HelloWorld"
  },
  {
    path: "/signin",
    name: "signin",
    component: "components/auth/SignIn",
    meta: { dontSignInAgain: true, navbarLayout: "frontend" },
    beforeEnter: authFirebaseRoute
  },
  {
    path: "/signup",
    name: "signup",
    component: "components/auth/SignUp",
    meta: { dontSignInAgain: true },
    beforeEnter: authFirebaseRoute
  },
  {
    path: "/profile",
    name: "profile",
    component: "components/user/Profile",
    meta: { navbarLayout: "dashboard" },
    beforeEnter: authFirebaseRoute
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
  // linkActiveClass: "active",
  base: process.env.BASE_URL,
  routes: [
    ...routes,
    {
      path: "*",
      redirect: "/"
    }
  ]
});
