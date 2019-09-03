<template>
  <div class="container">
    <form class="form-signin">
      <div class="text-center mb-4">
        <h1 class="h3 mb-3 font-weight-normal">Sign Up</h1>
      </div>

      <div class="form-group">
        <label for="inputEmail">Email address</label>
        <input
          type="text"
          id="inputEmail"
          class="form-control"
          placeholder="Email address"
          required
          autofocus
        />
      </div>

      <div class="form-group">
        <label for="inputPassword">Password</label>
        <input
          type="text"
          id="inputPassword"
          class="form-control"
          placeholder="Password"
          required
        />
      </div>

      <div class="form-group">
        <label for="inputConfirmPassword">ConfirmPassword</label>
        <input
          type="password"
          id="inputConfirmPassword"
          class="form-control"
          placeholder="Password"
          required
        />
      </div>

      <div class="checkbox mb-3"></div>
      <button class="btn btn-lg btn-primary btn-block" type="submit">Sign Up</button>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style>
.form-signin {
  width: 100%;
  max-width: 420px;
  padding: 15px;
  margin: auto;
}
</style>