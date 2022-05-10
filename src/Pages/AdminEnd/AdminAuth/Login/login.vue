<template>
  <!-- <div class="card"> -->
  <section class="ftco-section">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-6 text-center mb-5">
          <h2 class="heading-section">Admin !</h2>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-md-7 col-lg-5">
          <div class="wrap">
            <div class="login-wrap p-4 p-md-5">
              <div class="d-flex">
                <div class="w-100">
                  <h3 class="mb-4">Login</h3>
                </div>
                <div class="w-100">
                  <p class="social-media d-flex justify-content-end">
                    <a
                      href="#"
                      class="social-icon d-flex align-items-center justify-content-center"
                      ><span class="fa fa-facebook"></span
                    ></a>
                    <a
                      href="#"
                      class="social-icon d-flex align-items-center justify-content-center"
                      ><span class="fa fa-twitter"></span
                    ></a>
                  </p>
                </div>
              </div>
              <form action="#" class="signin-form">
                <div class="form-group mt-3">
                  <input
                    type="text"
                    class="form-control"
                    required
                    v-model="password"
                  />
                  <label class="form-control-placeholder" for="username"
                    >Username</label
                  >
                </div>
                <div class="form-group">
                  <input
                    v-model="username"
                    id="password-field"
                    type="password"
                    class="form-control"
                    required
                  />
                  <label class="form-control-placeholder" for="password"
                    >Password</label
                  >
                  <span
                    toggle="#password-field"
                    class="fa fa-fw fa-eye field-icon toggle-password"
                  ></span>
                </div>
                <div class="form-group">
                  <button
                    type="submit"
                    class="form-control btn btn-primary rounded submit px-3"
                    @click="submitDetails"
                  >
                    Sign In
                  </button>
                </div>
                <div class="form-group d-md-flex">
                  <div class="w-50 text-left">
                    <label class="checkbox-wrap checkbox-primary mb-0"
                      >Remember Me
                      <input type="checkbox" checked />
                      <span class="checkmark"></span>
                    </label>
                  </div>
                  <div class="w-50 text-md-right">
                    <a href="#">Forgot Password</a>
                  </div>
                </div>
              </form>
              <p class="text-center">
                Not a member? <a data-toggle="tab" href="#signup">Sign Up</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- </div> -->
</template>

<script>
/*eslint-disable*/
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  created() {
    localStorage.removeItem("adminLoginDetails");
  },
  computed: {},
  beforeMount() {},
  methods: {
    submitDetails() {
      localStorage.setItem(
        "adminLoginDetails",
        JSON.stringify({
          user: this.username,
          pass: this.password,
        })
      );
      this.$router.push({
        name: "Dashboard",
      });
    },
  },
};
</script>

<style src="./login.scss" lang="scss" />
