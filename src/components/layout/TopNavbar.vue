<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <span class="navbar-brand disabled" @click="toDashboard">Dashboard</span>
      <button
        type="button"
        class="navbar-toggler navbar-toggler-left"
        :class="{ toggled: $sidebar.showSidebar }"
        aria-controls="navigation-index"
        aria-expanded="false"
        aria-label="Toggle navigation"
        @click="toggleSidebar"
      >
        <span class="navbar-toggler-bar burger-lines"></span>
        <span class="navbar-toggler-bar burger-lines"></span>
        <span class="navbar-toggler-bar burger-lines"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end">
        <ul class="nav navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link" href="#" data-toggle="dropdown">
              <!-- <i class="nc-icon nc-palette"></i> -->
            </a>
          </li>
          <base-dropdown tag="li">
            <template slot="title">
              <i class="nc-icon nc-planet"></i>
              <b class="caret"></b>
              <span class="notification">5</span>
            </template>
            <a class="dropdown-item disabled">Notification 1</a>
            <a class="dropdown-item disabled">Notification 2</a>
            <a class="dropdown-item disabled">Notification 3</a>
            <a class="dropdown-item disabled">Notification 4</a>
            <a class="dropdown-item disabled">Another notification</a>
          </base-dropdown>
          <li class="nav-item">
            <a class="nav-link disabled">
              <i class="nc-icon nc-zoom-split"></i>
              <span class="d-lg-block">&nbsp;Search</span>
            </a>
          </li>
        </ul>
        <ul class="navbar-nav ml-auto">
          <base-dropdown title="Dropdown">
            <a class="dropdown-item disabled">Action</a>
            <a class="dropdown-item disabled">Another action</a>
            <a class="dropdown-item disabled">Something</a>
            <a class="dropdown-item disabled">Another action</a>
            <a class="dropdown-item">Something</a>
            <div class="divider"></div>
            <a class="dropdown-item">Separated link</a>
          </base-dropdown>
          <li class="nav-item">
            <a class="nav-link disabled" @click="logout"> Log out </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  computed: {
    routeName() {
      const { name } = this.$route;
      return this.capitalizeFirstLetter(name);
    },
  },
  data() {
    return {
      activeNotifications: false,
    };
  },
  methods: {
    toDashboard() {
      this.$router.push({
        name: "Dashboard",
      });
    },
    logout() {
      this.$store.dispatch("AdminAuth/LOGOUT").then((resp) => {
        btToast.fire({
          icon: "!Done",
          title: "Successfully Logout ",
        });
        this.$router.push({
          name: "AdminLogin",
        });
      });
    },
    capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
    toggleNotificationDropDown() {
      this.activeNotifications = !this.activeNotifications;
    },
    closeDropDown() {
      this.activeNotifications = false;
    },
    toggleSidebar() {
      this.$sidebar.displaySidebar(!this.$sidebar.showSidebar);
    },
    hideSidebar() {
      this.$sidebar.displaySidebar(false);
    },
  },
};
</script>
<style scoped>
.disabled {
  pointer-events: auto;
  cursor: pointer !important;
  color: #80cfee;
}
</style>
