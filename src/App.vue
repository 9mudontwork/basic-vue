<template>
  <v-app :style="{background: $vuetify.theme.themes[theme].aaa}">
    <component :is="navbarLayout">
      <router-view></router-view>
    </component>
  </v-app>
</template>

<script>
const navbarLayout = "frontend";

export default {
  name: "App",

  computed: {
    theme() {
      return this.$vuetify.theme.dark ? "dark" : "light";
    },

    userSignedIn() {
      const user = this.$store.getters.user;
      return user == null || user == undefined ? false : true;
    },

    navbarLayout() {
      return "navbar-" + (this.$route.meta.navbarLayout || navbarLayout);
    }
  }
};
</script>
