<template>
  <div class="container">
    <!-- form -->
    <form
      class="form-signin needs-validation"
      autocomplete="off"
      v-on:submit.prevent="validateBeforeSubmit"
    >
      <div class="text-center mb-4">
        <h1 class="h3 mb-3 font-weight-normal">Sign In</h1>
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
        />

        <div class="valid-feedback">Looks good!</div>
        <div class="invalid-feedback" v-show="errors.has('email')">{{ errors.first("email") }}</div>
      </div>

      <!-- password -->
      <div class="form-group">
        <label>Password</label>
        <input
          type="password"
          id="password"
          name="password"
          class="form-control"
          placeholder="Password"
          v-model="password"
          v-validate="'required|min:6'"
        />

        <div class="valid-feedback">Looks good!</div>
        <div class="invalid-feedback" v-show="errors.has('password')">{{ errors.first("password") }}</div>
      </div>

      <!-- submit -->
      <button class="btn btn-lg btn-primary btn-block" type="submit">Sign In</button>

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
      password: null
    };
  },

  methods: {
    doSignIn() {
      const user = {
        email: this.email,
        password: this.password
      };
      this.$store.dispatch("signIn", user);
    },

    validateBeforeSubmit() {
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
    }
  },

  computed: {
    user() {
      return this.$store.getters.user;
    },

    error() {
      return this.$store.getters.error;
    },

    status() {
      return this.$store.getters.loading;
    }
  },

  watch: {
    user(value) {
      if (value !== null && value !== undefined) {
        this.$router.push("/profile");
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