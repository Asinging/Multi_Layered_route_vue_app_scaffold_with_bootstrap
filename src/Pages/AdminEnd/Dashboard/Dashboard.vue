<template>
  <!-- <div class="card"> -->
  <section class="ftco-section">
    <div class="container">
      <div class="row justify-content-center align-center" height="100%">
        <div class="col-md-7 col-lg-5">
          <div class="wrap text-h1 text-center">
            <h1 class="heading-section">
              Welcome Highly Distinguished Admin !!
            </h1>
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
  name: "Dashboard",
  data() {
    return {};
  },
  created() {},
  computed: {},
  beforeMount() {},
  beforeDestroy() {
    localStorage.removeItem("`adminLoginDetails`");
  },
  methods: {
    toUser() {
      this.$router.push({
        name: "Home",
      });
    },
    toAbout() {
      this.$router.push({
        name: "AboutAdmin",
      });
    },
  },
};
</script>

<style lang="scss" />
