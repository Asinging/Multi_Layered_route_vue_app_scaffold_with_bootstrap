<template>
  <!-- <div class="card"> -->
  <section class="ftco-section">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-6 text-center mb-5">
          <h2 class="heading-section">User!</h2>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-md-7 col-lg-5">
          <div class="wrap">
            <div
              class="img"
              style="
                background-image: url(../../../../../assets/images/bg-1.jpg);
              "
            >
              <img :src="background" />
            </div>
            <div class="login-wrap p-4 p-md-5">
              <div class="d-flex">
                <div class="w-100">
                  <h3 class="mb-4">Sign In</h3>
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
      background: require("@/assets/images/bg-1.jpg"),
    };
  },
  created() {
    localStorage.removeItem("loginDetails");
  },
  computed: {},
  beforeMount() {},
  methods: {
    submitDetails() {
      // localStorage.setItem(
      //   "adminLoginDetails",
      //   JSON.stringify({
      //     user: this.username,
      //     pass: this.password,
      //   })
      // );
      let dis = this;
      let apiService = new FormData();
      apiService.append("user", dis.username);
      apiService.append("pass", dis.password);
      this.$store
        .dispatch("UserAuth/LOGIN", { query: apiService })
        .then((resp) => {
          if (resp) {
            btToast.fire({
              icon: "success",
              title: "Login Successful",
            });
            this.$router.push({
              name: "Home",
            });
          }
        })
        .catch((err) => {
          this.$swal("Opss", "An Error Encounted", "error");
        });
    },
  },
};
</script>

<style src="./login.scss" lang="scss" />
