<template></template>

<script>
/*eslint-disable*/
import { mapActions, mapState } from "vuex";
import config from "../../config";
import Search from "@/components/Search/Search";

export default {
  name: "Header",
  components: { Search },
  data() {
    return {
      snackbar: false,
      timeout: 5000,
      text: "",
      logo: require("@/assets/img/logos/realFynAccLogo.png"),
      model: false,
      chatPane: false,
      config,
      searchCollapse: true,

      account: [
        {
          text: "Profile",
          icon: "mdi-account",
          color: "green",
          link: "/Profile/accountProfile/0",
        },
        {
          text: "Setting",
          icon: "mdi-cogs",
          color: "blue",
          link: "/setting/setting",
        },
        {
          text: "Log Out",
          icon: "mdi-logout",
          color: "red",
          link: "/login",
        },
      ],
      notificationsBadge: true,
      messageBadge: true,
      apps: [
        {
          id: 5,
          name: "Quick Help",
          to: "https://www.ne",
          avatar: "https://avatars2.githubusercontent.com/u/34883558?s=400&v=4",
        },
      ],
    };
  },

  computed: {
    ...mapState(["drawer"]),
    DRAWER_STATE: {
      get() {
        return this.drawer;
      },
    },
    jiffyeApps() {
      return this.apps;
    },
    userAccount() {
      let user = this.$store.getters.userObjectGetter;
      if (user) {
        return user;
      } else {
        this.$router.push("/login");
        // return null;
      }
    },
  },
  methods: {
    ...mapActions(["TOGGLE_DRAWER"]),
    toHome() {
      this.$router.push("/");
    },
    getLink(e) {
      this.$store.dispatch("SIDEBAR_ITEM_CLICK", e.text);
      localStorage.setItem("SIDEBAR_ITEM_CLICK", e.text);
      if (e.text == "Log Out") {
        this.$swal({
          title: "Wants To Log Out ?",
          text: "You are about to log out please confirm this action below",
          icon: "warning",
          buttons: true,

          dangerMode: true,
          showCancelButton: true,
          confirmButtonText: "Yes, logout",
          cancelButtonText: "cancel!",
          reverseButtons: true,
        }).then((result) => {
          debugger;
          if (result.isConfirmed) {
            debugger;
            this.$router.push("/login");
          } else {
            return false;
          }
        });
      }
    },

    toggleChatCard() {
      this.chatPane = !this.chatPane;
      // console.log(this.chatPane);
      this.$store.dispatch("CHAT_CLICK", this.chatPane);
    },
  },
  mounted() {},
};
</script>

<style src="./Header.scss" lang="scss"></style>
