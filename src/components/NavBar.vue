<template>
  <div class="container-fluid p-0">
    <nav
      class="navbar navbar-expand-xl bg-dark border-bottom border-body"
      data-bs-theme="dark"
      style="background-color: transparent !important"
    >
      <div class="container-fluid">
        <a
          class="navbar-brand"
          href="#"
          style="color: #82828a"
          @click="toggleSidebar"
          ><i class="bi bi-three-dots-vertical"></i
        ></a>
        <button class="navbar-toggler border-0" @click="openMenu = true">
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
      <!-- Overlay Sidebar Menu -->
      <div v-if="openMenu" class="menubar-overlay">
        <div class="menubar-sidebar animate__animated animate__slideInRight">
          <div
            class="d-flex justify-content-between align-items-center p-3 border-bottom"
          >
            <span></span>
            <button
              class="btn btn-link text-white fs-3 p-0"
              @click="openMenu = false"
            >
              <i class="bi bi-x"></i>
            </button>
          </div>
          <nav class="p-4">
            <router-link
              to="/"
              class="menubar-link"
              active-class="active"
              @click="openMenu = false"
              >HOME</router-link
            >
            <router-link
              to="/portfolio"
              class="menubar-link"
              @click="openMenu = false"
              >PORTFOLIO</router-link
            >
            <router-link
              to="/history"
              class="menubar-link"
              @click="openMenu = false"
              >HISTORY</router-link
            >
            <router-link
              to="/blog"
              class="menubar-link"
              @click="openMenu = false"
              >BLOG</router-link
            >
            <router-link
              to="/contact"
              class="menubar-link"
              @click="openMenu = false"
              >CONTACT</router-link
            >
            <hr class="bg-secondary my-4" />
            <a href="#" class="menubar-link">ONE PAGE VERSION</a>
            <a href="#" class="menubar-link">LIGHT VERSION</a>
          </nav>
        </div>
        <div class="menubar-backdrop" @click="openMenu = false"></div>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { ref } from "vue";
const openMenu = ref(false);

const emit = defineEmits(["toggleSidebar"]);

const toggleSidebar = () => {
  emit("toggleSidebar");
};
</script>

<style scoped>
.navbar-toggler:focus {
  box-shadow: none;
}
.menubar-overlay {
  position: fixed;
  inset: 0;
  z-index: 1050;
  display: flex;
}
.menubar-sidebar {
  width: 340px;
  max-width: 90vw;
  background: #23252b;
  color: #fff;
  height: 100vh;
  box-shadow: 2px 0 16px rgba(0, 0, 0, 0.2);
  position: absolute;
  right: 0;
  left: auto;
  top: 0;
  z-index: 2;
  display: flex;
  flex-direction: column;
  transform: translateX(100%);
  opacity: 0;
  transition: transform 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55), opacity 0.3s;
}
.menubar-overlay .menubar-sidebar {
  transform: translateX(0);
  opacity: 1;
}
.menubar-backdrop {
  flex: 1;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1;
}
.menubar-link {
  display: block;
  color: #fff;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  margin-bottom: 1.2rem;
  transition: color 0.2s;
}
.menubar-link.active,
.menubar-link:hover {
  color: #ffc107;
}
</style>
