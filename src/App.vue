<template>
  <v-app>
    <component :is="navbarLayout">
      <router-view></router-view>
    </component>
  </v-app>
</template>

<script>
const navbarLayout = "frontend";

export default {
  computed: {
    navbarLayout() {
      return "navbar-" + (this.$route.meta.navbarLayout || navbarLayout);
    }
  }
};
</script>
