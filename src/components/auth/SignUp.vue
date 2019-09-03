<template>
  <div class="container">
    <form class="form-signin" v-on:submit.prevent="onSignUp">
      <div class="text-center mb-4">
        <h1 class="h3 mb-3 font-weight-normal">Sign Up</h1>
      </div>

      <div class="form-group">
        <label for="email">Email address</label>
        <input
          type="text"
          id="email"
          class="form-control"
          placeholder="Email address"
          required
          autofocus
          v-model="email"
        />
      </div>

      <div class="form-group">
        <label for="password">Password</label>
        <input
          type="text"
          id="password"
          class="form-control"
          placeholder="Password"
          required
          v-model="password"
        />
      </div>

      <div class="form-group">
        <label for="confirmPassword">ConfirmPassword</label>
        <input
          type="password"
          id="confirmPassword"
          class="form-control"
          placeholder="Password"
          required
          v-model="confirmPassword"
          :rules="[comparePasswords]"
        />
      </div>

      <div class="checkbox mb-3"></div>
      <button class="btn btn-lg btn-primary btn-block" type="submit">Sign Up</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      confirmPassword: ""
    };
  },

  computed: {
    comparePasswords() {
      if (this.password === this.confirmPassword) {
        return true;
      } else {
        return "Password and Confirm Password don't match";
      }
    },

    user() {
      return this.$store.getters.user;
    }
  },

  watch: {
    user(value) {
      if (value !== null && value !== undefined) {
        console.log(value);
      }
    }
  },

  methods: {
    onSignUp() {
      if (this.comparePasswords == true) {
        this.$store.dispatch("firebaseAuth/signUp", {
          email: this.email,
          password: this.password
        });
      } else {
        console.log(this.comparePasswords);
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