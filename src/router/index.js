import Vue from "vue";
import Router from "vue-router";

import authUserFirebase from "./auth-user-firebase";

Vue.use(Router);

// สร้าง object component ทั้งหมด
const routerOptions = [
  {
    path: "/",
    name: "Home",
    component: "views/Home"
  },
  {
    path: "/signin",
    name: "SignIn",
    component: "components/auth/SignIn"
  },
  {
    path: "/signup",
    name: "SignUp",
    component: "components/auth/SignUp"
  },
  {
    // beforeEnter คือการตั้ง Guard เฉพาะในแต่ละ route ดู Doc ได้ที่ https://router.vuejs.org/guide/advanced/navigation-guards.html#per-route-guard
    path: "/profile",
    name: "Profile",
    component: "components/auth/Profile",
    beforeEnter: authUserFirebase
  }
];

// map components แต่ละอัน ไปสร้าง router
// Props แต่ละอย่างดูได้ที่ Doc https://router.vuejs.org/api/#router-view-props
// meta fields ดูได้จาก Doc https://router.vuejs.org/guide/advanced/meta.html
const routes = routerOptions.map(route => {
  return {
    path: route.path,
    name: route.name,
    component: () => import(`@/${route.component}.vue`),
    beforeEnter: route.beforeEnter
    // meta: route.meta
  };
});

// linkActiveClass ตั้งค่าสำ css เป็นค่า active สำหรับ link ที่เปิดอยู่
// จาก Doc https://router.vuejs.org/api/#active-class

// path * คือ ทุกๆ url ที่ไม่ได้เซ็ต path เอาไว้ จะถูก redirect ไป / หรือ หน้าแรก
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

// ส่วนนี้คือส่วนปกป้องเพจที่เราต้องการ เรียกว่า Global Guards ดูจาก Doc https://router.vuejs.org/guide/advanced/navigation-guards.html#global-before-guards
// ในทีนี้เรากำหนดว่าจะต้อง login จาก firebase ในโปรเจคเราก่อน ถึงจะไปเพจต่อไปที่กำหนดไว้ได้
// to คือ route object เพจต่อไปที่เราต้องการจะเปิด
// from เพจก่อนหน้าที่เปิด หรือ ปัจจุบัน
// next เป็นฟังก์ชั่นที่จะต้องเรียกใช้หลังเสร็จทุกอย่าง เพื่อเปิดเพจที่ต้องการ หรือจะ custom เองก็ได้

// to.matched.some คือ ใช้ some ลูป route object ที่เราจะกำลังจะเปิดทั้งหมด เพื่อดึงค่า meta ที่เราต้องการมาเช็ค (route object จะถูกบันทึกใน record)
// ตัวอย่างดูได้จาก https://router.vuejs.org/guide/advanced/meta.html#route-meta-fields

// firebase current user จาก Doc https://firebase.google.com/docs/auth/web/manage-users#get_the_currently_signed-in_user
// router.beforeEach((to, from, next) => {
//   const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
//   const user = firebase.auth().currentUser;
//   if (requiresAuth && !user) {
//     next("/signin");
//   }
//   next();
// });
