<template>
  <div>
    <v-navigation-drawer app v-model="drawer">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">AAAAA</v-list-item-title>
          <v-list-item-subtitle>Admin</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item v-for="item in dashboardMenu" :key="item.title" :to="item.link">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <!-- end drawer menu -->

    <v-app-bar app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <router-link
        tag="div"
        class="v-toolbar__title"
        to="/"
        exact
        :style="{ cursor: 'pointer'}"
        v-text="titleBar"
      ></router-link>

      <div class="flex-grow-1"></div>

      <v-toolbar-items v-if="userSignedIn">
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-btn text v-on="on">
              aaaa
              <v-icon right>mdi-menu-down</v-icon>
            </v-btn>
          </template>
          <v-list dense>
            <v-list-item v-for="item in userMenu" :key="item.title" :to="item.link">
              <v-list-item-icon>
                <v-icon v-text="item.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>

            <v-list-item @click="doSignOut">
              <v-list-item-icon>
                <v-icon>mdi-logout-variant</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>Logout</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-toolbar-items>

      <div v-else>
        <v-btn text v-for="item in authMenu" :key="item.title" :to="item.link" :class="item.class">
          <v-icon left>{{item.icon}}</v-icon>
          {{item.title}}
        </v-btn>
      </div>
    </v-app-bar>

    <v-content>
      <slot></slot>
    </v-content>

    <v-footer app>
      <span class="white--text">&copy; 2019</span>
    </v-footer>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      drawer: null
    };
  },
  methods: {
    doSignOut() {
      this.$store.dispatch("firebaseAuthStore/signOut");
    }
  },
  computed: mapState({
    user: state => state.firebaseAuthStore.user,

    titleBar() {
      return this.$store.getters.titleBar;
    },

    userSignedIn() {
      const user = this.user;
      if (user == null || user == undefined) {
        return false;
      } else {
        return true;
      }
    },

    authMenu() {
      let menuItems = [
        {
          title: "Sign Up",
          icon: "mdi-account-plus",
          link: "/signup",
          class: ["mr-1"]
        },
        {
          title: "Sign In",
          icon: "mdi-login-variant",
          link: "/signin"
        }
      ];
      return this.userSignedIn ? [] : menuItems;
    },

    userMenu() {
      let menuItems = [
        {
          title: "Profile",
          icon: "mdi-account",
          link: "/profile"
        }
      ];
      return this.userSignedIn ? menuItems : [];
    },

    dashboardMenu() {
      let menuItems = [
        { title: "Profile", icon: "mdi-account", link: "/profile" }
      ];
      return this.userSignedIn ? menuItems : [];
    }
  })
};
</script>