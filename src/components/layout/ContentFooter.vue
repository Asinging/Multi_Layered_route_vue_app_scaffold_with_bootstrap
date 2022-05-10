<template>
  <footer class="footer">
    <div class="container-fluid">
      <nav>
        <ul class="footer-menu">
          <li>
            <router-link :to="{ path: '/admin/overview' }"
              >Dashboard</router-link
            >
          </li>
        </ul>
      </nav>
      <div class="copyright text-center">&copy; DsongsCode</div>
    </div>
  </footer>
</template>
<script>
export default {};
</script>
<style>
.footer {
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
}
</style>
