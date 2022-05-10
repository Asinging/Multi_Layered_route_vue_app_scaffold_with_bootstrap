<template>
  <!-- <div class="card"> -->
  <section class="ftco-section">
    <div class="container">
      <div class="row justify-content-center align-center" height="100%">
        <div class="col-md-7 col-lg-5">
          <div class="wrap text-h1 text-center">
            <h1 class="heading-section">
              This the official about user page !!
            </h1>
            <h1 class="heading-section">
              This the official about user page !!
            </h1>
            <h1 class="heading-section">
              This the official about user page !!
            </h1>
          </div>
          <div class="form-group">
            <button
              type="submit"
              class="btn btn-primary rounded submit px-3 text-center"
              @click="home"
            >
              Back to Home
            </button>
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
    return {};
  },
  created() {},
  computed: {},
  beforeMount() {},
  beforeDestroy() {
    // localStorage.removeItem("`loginDetails`");
  },
  methods: {
    home() {
      this.$router.push({
        name: "Home",
      });
    },
  },
};
</script>

<style lang="scss" />
