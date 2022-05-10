<template>
  <!-- <div class="card"> -->
  <section class="ftco-section">
    <div class="container">
      <div class="row justify-content-center align-center" height="100%">
        <div class="col-md-7 col-lg-5">
          <div class="wrap text-h1 text-center">
            <h1 class="heading-section">
              Welcome Highly Distinguished User !!
            </h1>
          </div>
        </div>

        <div class="form-group">
          <button
            type="submit"
            class="btn btn-primary rounded submit px-3 text-center"
            @click="toAdmin"
          >
            Admin? login
          </button>
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
    return {};
  },
  created() {},
  computed: {},
  beforeMount() {},
  beforeDestroy() {
    localStorage.removeItem("loginDetails");
  },
  methods: {
    toAdmin() {
      // this.$router.push({
      //   name: "AdminLogin",
      // });
      this.$router.push({
        name: "AdminIndex",
      });
    },
  },
};
</script>

<style lang="scss" />
