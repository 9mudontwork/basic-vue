<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <a class="navbar-brand" href="#">Basic Vue</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Features</a>
          </li>
        </ul>
        <!-- auth menu -->
        <div v-if="userSignedIn">
          <div class="btn-group">
            <button
              type="button"
              class="btn btn-outline-light dropdown-toggle"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >User</button>
            <div class="dropdown-menu dropdown-menu-right">
              <!-- user menu -->
              <router-link
                v-for="item in userItem"
                :key="item.title"
                :to="item.link"
                :class="'dropdown-item'"
              >{{item.title}}</router-link>
              <!-- end user menu -->
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#" v-on:click="onSignOut">Sign Out</a>
            </div>
          </div>
        </div>
        <div v-else>
          <router-link
            tag="button"
            v-for="item in authItem"
            :key="item.title"
            :to="item.link"
            type="button"
            :class="'btn btn-outline-light ' + (item.margin)"
          >
            <i :class="'fas fa-' + (item.icon) + ' fa-sm'"></i>
            {{item.title}}
          </router-link>
        </div>
        <!-- end auth menu -->

        <!-- tag คือ tag html
        v-for วนแสดง item ทีละอัน จาก object function items ใน computed (v-for ทำงานเฉพาะในแต่ละ tag)
        key ใส่ไว้ให้ค่ามันแตกต่าง เอาไว้อ้างอิง
        to คือ url
        condition rendering ดูได้ที่ https://vuejs.org/v2/guide/conditional.html
        -->
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  // methods
  methods: {
    onSignOut() {
      this.$store.dispatch("signOut");
      this.$router.push("/signin");
    }
  },

  // computed
  computed: {
    userSignedIn() {
      const user = this.$store.getters["user"];
      if (user == null || user == undefined) {
        return false;
      } else {
        return true;
      }
    },

    authItem() {
      // class เต็มของ icon คือ fas fa-user-plus fa-sm
      let menuItems = [
        {
          title: "Sign Up",
          icon: "user-plus",
          link: "/signup",
          margin: "mr-2"
        },
        {
          title: "Sign In",
          icon: "sign-in-alt",
          link: "/signin"
        }
      ];
      return this.userSignedIn ? [] : menuItems;
    },

    userItem() {
      let menuItems = [
        {
          title: "Profile",
          link: "/profile"
        }
      ];
      return this.userSignedIn ? menuItems : [];
    }
  }
};
</script>

<style>
</style>