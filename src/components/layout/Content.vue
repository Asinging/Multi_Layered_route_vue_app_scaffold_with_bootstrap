<template>
  <transition name="fade" mode="out-in">
    <!-- <div class="card base" height="1000"> -->
    <router-view></router-view>
    <!-- </div> -->
  </transition>
</template>
<script>
export default {};
</script>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}

.fade-enter,
  .fade-leave-to
    /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
.base {
  height: 75vh;
  background: transparent !important;
  box-shadow: none;
}
</style>
