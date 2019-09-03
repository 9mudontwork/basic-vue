<template>
  <div class="container">
    <!-- 
      v-on คือ จับการกระทำของ user เมื่อ... click submit บลา ๆ
      จะมี event modifiers ด้วย ดู Doc จาก https://vuejs.org/v2/guide/events.html#Event-Modifiers
      v-model เป็นการผูก text fields กับตัวแปร
    -->
    <form class="form-signin needs-validation" novalidate v-on:submit.prevent="validate">
      <div class="text-center mb-4">
        <h1 class="h3 mb-3 font-weight-normal">Sign In</h1>
      </div>

      <div class="form-group">
        <label for="inputEmail">Email address</label>
        <input
          type="text"
          id="inputEmail"
          class="form-control"
          placeholder="Email address"
          required
          autofocus
          v-model="email"
        />
      </div>

      <div class="form-group">
        <label for="inputPassword">Password</label>
        <input
          type="password"
          id="inputPassword"
          class="form-control"
          placeholder="Password"
          required
          v-model="password"
        />
      </div>

      <div class="checkbox mb-3"></div>

      <button class="btn btn-lg btn-primary btn-block" type="submit">Sign In</button>
    </form>
  </div>
</template>

<script>
// export default ส่วนนี้คือ Computed Properties and Watchers
// ดู Doc ได้จาก https://vuejs.org/v2/guide/computed.html
// มี data เหมาะกับตัวแปร
// methods เหมาะกับ วิธีการ ฟังก์ชั่น
// computed เหมาะกับ พวกคำนวณ ส่งค่ากับ component
// watch เหมาะกับ การติดตามการทำงาน

export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },

  methods: {
    validate() {
      this.onSignIn();
    },

    // $store เรียก store แบบ global
    // dispatch คือการเรียก action ใน component จาก store เพื่อเรียก method ที่ต้องการ แล้วโยน payload เข้าไป
    // ดูได้จาก doc https://vuex.vuejs.org/guide/actions.html#dispatching-actions-in-components
    // dispatch("firebaseAuth/signIn") แบบนี้ คือ เป็นการเจาะจง action ใน module นั้น เผื่อชื่อ method ซ้ำกัน จาก Doc https://vuex.vuejs.org/guide/modules.html#namespacing
    // signIn อยู่ที่ store/auth/firebase/index.js
    onSignIn() {
      const user = {
        email: this.email,
        password: this.password
      };
      this.$store.dispatch("firebaseAuth/signIn", user);
    }
  },

  computed: {}
};
</script>

<style>
.form-signin {
  width: 100%;
  max-width: 420px;
  padding: 15px;
  margin: auto;
}
</style>