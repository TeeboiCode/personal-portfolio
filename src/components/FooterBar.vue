<template>
  <footer class="footer-bar d-flex justify-content-between align-items-center">
    <div
      class="d-flex d-lg-block text-start flex-column justify-content-start align-items-start"
    >
      <span>© 2025 All Rights </span><span>Reserved.</span>
    </div>
    <div
      class="d-flex d-lg-block flex-column justify-content-end align-items-end"
    >
      <span>Email:</span>
      <span
        ><a href="mailto:oluwaleyetaiwo8225@gmail.com" style="color: #8c8c8e"
          >oluwaleyetaiwo8225@gmail.com</a
        ></span
      >
    </div>
  </footer>
</template>

<script setup>
// No script needed
</script>

<style scoped>
.footer-bar {
  width: 100%;
  background: linear-gradient(
    159deg,
    rgba(37, 37, 50, 0.98) 0%,
    rgba(35, 35, 45, 0.98) 100%
  );
  color: #8c8c8e;
  text-align: center;
  font-size: 12px;
  padding: 1.2rem 1.5rem;
  /* margin-top: 1rem; */
}
.footer-bar a {
  color: #ffc107;
  text-decoration: none;
  font-weight: 500;
}
.footer-bar a:hover {
  text-decoration: underline;
}
</style>
