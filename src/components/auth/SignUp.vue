<template>
  <div class="container">
    <!-- form -->
    <form class="form-signup" autocomplete="off" v-on:submit.prevent="validateBeforeSubmit">
      <div class="text-center mb-4">
        <h1 class="h3 mb-3 font-weight-normal">Sign Up</h1>
      </div>

      <!-- email -->
      <div class="form-group">
        <label>Email</label>
        <input
          type="text"
          id="email"
          name="email"
          class="form-control"
          placeholder="Email"
          autofocus
          v-model="email"
          v-validate="'required|email'"
          data-vv-as="Email"
        />

        <!-- <div class="valid-feedback">Looks good!</div> -->
        <div class="invalid-feedback" v-show="errors.has('email')">{{ errors.first("email") }}</div>
      </div>

      <!-- password -->
      <div class="form-group">
        <label>Password</label>
        <input
          type="password"
          id="password"
          name="password"
          ref="password"
          class="form-control"
          placeholder="Password"
          v-model="password"
          v-validate="'required|min:6'"
          data-vv-as="Password"
        />

        <div class="invalid-feedback" v-show="errors.has('password')">{{ errors.first("password") }}</div>
      </div>

      <!-- confirm password -->
      <div class="form-group">
        <label>Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          class="form-control"
          placeholder="Confirm Password"
          v-model="confirmPassword"
          v-validate="'required|min:6|confirmed:password'"
          data-vv-as="Password"
        />

        <div
          class="invalid-feedback"
          v-show="errors.has('confirmPassword')"
        >{{ errors.first("confirmPassword") }}</div>
      </div>

      <!-- submit -->
      <button class="btn btn-primary btn-block" type="submit" :disabled="loading">
        <span class="spinner-border spinner-border-sm" v-show="loading"></span>
        <span v-text="loading ? ' loading...':'Sign In'"></span>
      </button>

      <!-- alert box -->
      <div v-if="error">
        <div class="alert alert-danger alert-dismissible fade show mt-3" role="alert">
          <a v-text="error.message"></a>
          <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: null,
      password: null,
      confirmPassword: null
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
    },

    error() {
      return this.$store.getters.error;
    },

    status() {
      return this.$store.getters.status;
    },

    loading() {
      return this.$store.getters.loading;
    }
  },

  watch: {
    user(value) {
      if (value !== null && value !== undefined) {
        this.$router.push("/profile");
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
        this.$store.dispatch("signUp", user);
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