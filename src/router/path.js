import Vue from "vue";
import Router from "vue-router";
import firebase from "firebase";

Vue.use(Router);

const routesOption = [
  {
    path: "/",
    name: "postsummary",
    component: "components/frontend/post/PostSummary",
    meta: {}
  },
  {
    path: "/signin",
    name: "signin",
    component: "components/auth/SignIn",
    meta: {
      checkLoggedIn: true,
      navbarLayout: "frontend"
    }
  },
  {
    path: "/signup",
    name: "signup",
    component: "components/auth/SignUp",
    meta: {
      checkLoggedIn: true,
      navbarLayout: "frontend"
    }
  },
  {
    path: "/profile",
    name: "profile",
    component: "components/backend/Profile",
    meta: {
      authRequired: true,
      navbarLayout: "backend"
    }
  }
];

const routes = routesOption.map(route => {
  return {
    path: route.path,
    name: route.name,
    component: () => import(`@/${route.component}.vue`),
    meta: route.meta,
    beforeEnter: route.beforeEnter
  };
});

const router = new Router({
  mode: "history",
  routes: [
    ...routes,
    {
      path: "*",
      redirect: "/"
    }
  ]
});

router.beforeEach((to, from, next) => {
  const authRequired = to.matched.some(record => record.meta.authRequired);
  const loggedIn = to.matched.some(record => record.meta.checkLoggedIn);
  const user = firebase.auth().currentUser;

  if (authRequired) {
    if (user) {
      next();
    } else {
      next("/signin");
    }
  } else {
    if (loggedIn) {
      if (user) {
        next("/");
      } else {
        next();
      }
    } else {
      next();
    }
  }
});

export default router;
