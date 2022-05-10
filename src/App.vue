<template>
  <div :class="{ 'nav-open': $sidebar.showSidebar }">
    <router-view> </router-view>
  </div>
</template>

<script>
/* eslint-disable */

export default {
  components: {},
  name: "App",
  data() {
    return {};
  },
  methods: {},
  beforeMount() {},
};
</script>

<style src="./styles/app.scss" lang="scss"></style>
