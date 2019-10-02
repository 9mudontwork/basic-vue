<template>
  <div>
    <v-app-bar dark color="grey darken-4">
      <v-toolbar-title v-text="titleBar"></v-toolbar-title>

      <div class="flex-grow-1"></div>

      <!-- user menu -->
      <v-toolbar-items v-if="userLoggedIn">
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-btn text v-on="on">
              {{userDocument.display_name}}
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

            <v-list-item @click="doLogout">
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

      <div v-else-if="loading">
        <v-progress-circular indeterminate></v-progress-circular>
      </div>

      <!-- auth menu -->
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
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {};
  },
  methods: {
    doLogout() {
      this.$store.dispatch("firebaseAuthStore/logout");
    }
  },
  computed: mapState({
    user: state => state.firebaseAuthStore.user,
    userDocument: state => state.firestoreUserStore.userDocument,
    loading: state => state.firestoreUserStore.loading,
    titleBar: state => state.globalStore.titleBar,

    userLoggedIn() {
      const userDocument = this.userDocument;
      if (userDocument == null || userDocument == undefined) {
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
      return this.userLoggedIn ? [] : menuItems;
    },

    userMenu() {
      let menuItems = [
        {
          title: "Profile",
          icon: "mdi-account",
          link: "/profile"
        }
      ];
      return this.userLoggedIn ? menuItems : [];
    }
  })
};
</script>