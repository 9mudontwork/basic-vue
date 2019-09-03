import Vue from "vue";
import Vuex from "vuex";

import firebaseAuth from "./auth/firebase";
import shared from "./shared";

Vue.use(Vuex);

export default new Vuex.Store({
  // state: {},
  // mutations: {},
  // actions: {},
  // getters: {}
  modules: {
    firebaseAuth: firebaseAuth,
    shared: shared
  }
});

// vuex เป็นตัวกลางใช้สำหรับการจัดการ สถานะทุกๆอย่างที่เกิดขึ้นในแอพเรา
// ดูได้จาก Doc https://vuex.vuejs.org/guide/

// state เหมาะกับการเก็บพวกตัวแปร
// mutations เอาไว้เขียนแก้ไขค่าใน state
// action อย่าใช้เปลี่ยนแปลง state เหมาะกับส่งข้อมูลไปให้ mutations ให้มันแก้ไขแทน
// getters ใช้สำหรับดึงข้อมูล state

// ส่วน modules นั้น จะใช้เวลาเราอยากจัดระเบียบ store ให้ดูง่าย เวลามีหลายๆอย่าง
