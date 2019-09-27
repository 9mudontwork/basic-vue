<template>
  <div class="container">
    <!-- form -->
    <form class="form-signup" autocomplete="off" v-on:submit.prevent="validateBeforeSubmit">
      <div class="text-center mb-4">
        <h1 class="display-1 font-weight-bold mb-3">Create Account</h1>
      </div>

      <v-text-field
        v-model="email"
        v-validate="'required|email'"
        :error-messages="errors.collect('email')"
        label="Email"
        data-vv-as="Email"
        name="email"
        placeholder="example@example.com"
        required
        autofocus
      ></v-text-field>

      <v-text-field
        v-model="password"
        v-validate="'required|min:6'"
        ref="password"
        :error-messages="errors.collect('password')"
        label="Password"
        data-vv-as="Password"
        type="password"
        name="password"
        required
      ></v-text-field>

      <v-text-field
        v-model="confirmPassword"
        v-validate="'required|min:6|confirmed:password'"
        :error-messages="errors.collect('confirmPassword')"
        label="Confirm Password"
        data-vv-as="Password"
        type="password"
        name="confirmPassword"
        required
      ></v-text-field>

      <div class="d-flex jstify-end mt-2 mb-6">
        <v-btn block type="submit" :disabled="loading" :loading="loading">Sign Up</v-btn>
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
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      email: null,
      password: null,
      confirmPassword: null
    };
  },

  computed: mapState({
    comparePasswords() {
      if (this.password === this.confirmPassword) {
        return true;
      } else {
        return "Password and Confirm Password don't match";
      }
    },

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
  },

  methods: {
    doSignUp() {
      if (this.comparePasswords == true) {
        const user = {
          email: this.email,
          password: this.password
        };
        this.$store.dispatch("firebaseAuthStore/signUp", user);
      }
    },

    validateBeforeSubmit() {
      this.$validator
        .validateAll({
          email: this.email,
          password: this.password,
          confirmPassword: this.confirmPassword
        })
        .then(result => {
          if (result) {
            this.doSignUp();
          }
        });
    },

    clearError() {
      this.$store.dispatch("firebaseAuthStore/clearError");
    }
  }
};
</script>

<style>
.form-signup {
  width: 100%;
  max-width: 420px;
  padding: 15px;
  margin: auto;
}
</style>