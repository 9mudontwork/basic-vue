<template>
  <v-container>
    <form class="form-signin" autocomplete="off" v-on:submit.prevent="validateBeforeSignIn">
      <div class="text-center mb-4">
        <h1 class="display-1 font-weight-bold mb-3">Sign In</h1>
      </div>

      <v-text-field
        v-model="email"
        v-validate="'required|email'"
        :error-messages="errors.collect('email')"
        label="Email"
        name="email"
        required
        autofocus
      ></v-text-field>

      <v-text-field
        v-model="password"
        v-validate="'required|min:6'"
        :error-messages="errors.collect('password')"
        label="Password"
        type="password"
        name="password"
        required
      ></v-text-field>

      <div class="d-flex justify-end mt-2 mb-6">
        <v-btn block type="submit" :disabled="loading" :loading="loading">Login</v-btn>
      </div>

      <v-alert
        v-if="error"
        close-text="Close Alert"
        type="error"
        outlined
        dark
        dismissible
        @input="clearError"
      >
        <span v-text="error.message"></span>
      </v-alert>
    </form>
  </v-container>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      email: null,
      password: null
    };
  },

  methods: {
    doSignIn() {
      const signInData = {
        email: this.email,
        password: this.password
      };
      this.$store.dispatch("firebaseAuthStore/signIn", signInData);
    },

    validateBeforeSignIn() {
      this.$validator
        .validateAll({
          email: this.email,
          password: this.password
        })
        .then(result => {
          if (result) {
            this.doSignIn();
          }
        });
    },

    clearError() {
      this.$store.dispatch("firebaseAuthStore/clearError");
    }
  },

  computed: mapState({
    user: state => state.firebaseAuthStore.user,
    error: state => state.firebaseAuthStore.error,
    loading: state => state.firebaseAuthStore.loading
  }),

  watch: {
    user(value) {
      if (value !== null && value !== undefined) {
        this.$router.push("/");
      }
    }
  }
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