<template>
  <router-view> </router-view>
</template>

<script>
/* eslint-disable */
import Vue from "vue";
import ButtonLoader from "@/components/utils/buttons/submitBtn";
import LoginNotify from "@/components/AlertModule/loginNotify";
import AOS from "aos";
import "aos/dist/aos.css";
// import DataTable from "@/ExternalComponents/andreSousaAbreu.VueDatatable/src/components/DataTable";
// Vue.component("data-table", DataTable);
// import TableFooter from "@/components/TableTotal/tableFooter";

// Vue.component("table-footer", TableFooter);
Vue.component("button-loader", ButtonLoader);
Vue.component("set-snackbar", LoginNotify);

/*eslint-disable*/
export default {
  components: {},
  name: "App",
  data() {
    return {
      userObject: "",
    };
  },
  methods: {},
  beforeMount() {},
  mounted() {
    AOS.init();
  },
};
</script>

<style src="./styles/app.scss" lang="scss"></style>
