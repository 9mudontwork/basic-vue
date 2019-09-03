<template>
  <div>
    <nav-bar />
    <!-- ไปดูที่ Navbar.vue -->
    <router-view />
    <!-- ไปดูที่ file router.js -->
  </div>
  <!-- html ของ vue ต้องเริ่มด้วย template ตลอดแล้วครอบด้วย div -->
</template>

<script>
import NavBar from "./views/NavBar";

// nav-bar == NavBar
export default {
  name: "App",
  components: {
    NavBar
  }
};
</script>
