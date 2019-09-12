<template>
  <div>
    <v-app-bar>
      <v-toolbar-title>Basic Vue</v-toolbar-title>

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
  </div>
</template>

<script>
export default {
  // methods
  methods: {
    doSignOut() {
      this.$store.dispatch("signOut");
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
    }
  }
};
</script>