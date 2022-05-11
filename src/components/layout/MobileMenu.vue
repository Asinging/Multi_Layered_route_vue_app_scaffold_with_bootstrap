<template>
  <ul class="nav nav-mobile-menu">
    <base-dropdown>
      <template slot="title">
        <i class="fa fa-globe"></i>
        <b class="caret"></b>
        <span class="notification">5 Notifications</span>
      </template>
      <a class="dropdown-item disabled">Notification 1</a>
      <a class="dropdown-item disabled">Notification 2</a>
      <a class="dropdown-item disabled">Notification 3</a>
      <a class="dropdown-item disabled">Notification 4</a>
      <a class="dropdown-item disabled">Another notification</a>
    </base-dropdown>
    <li class="nav-item">
      <a class="nav-link disabled">
        <i class="nc-icon nc-zoom-split hidden-lg-up"></i>
        <span class="d-lg-none">Search</span>
      </a>
    </li>
    <base-dropdown title="Dropdown">
      <a class="dropdown-item disabled">Action</a>
      <a class="dropdown-item disabled">Another action</a>
      <a class="dropdown-item disabled">Something</a>
      <a class="dropdown-item disabled">Something else here</a>
      <div class="divider"></div>
      <a class="dropdown-item" href="#">Separated link</a>
    </base-dropdown>

    <li class="nav-item">
      <a class="nav-link disabled" @click="logout">
        <span class="no-icon">Log out</span>
      </a>
    </li>
  </ul>
</template>
<script>
export default {
  name: "mobile-menu",
  methods: {
    logout() {
      this.$router.push({
        name: "AdminLogin",
      });
    },
  },
};
</script>
<style>
.disabled {
  pointer-events: auto;
  cursor: pointer !important;
  color: #80cfee;
}
</style>
