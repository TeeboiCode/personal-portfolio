<template>
  <div>
    <!-- Hamburger Icon -->
    <button
      class="btn btn-dark z-3 rounded-0 m-0 w-100"
      @click="openMenu = true"
    >
      <i class="bi bi-list" style="font-size: 2.5rem"></i>
    </button>

    <div class="position-relative">
      <div class="link-title">{{ currentPageTitle }}</div>
    </div>

    <!-- Overlay Sidebar Menu -->
    <div v-if="openMenu" class="menubar-overlay">
      <div class="menubar-sidebar animate__animated animate__slideInRight">
        <div
          class="d-flex justify-content-start align-items-center py-3 px-4"
          style="background: rgb(12 13 16)"
        >
          <span></span>
          <button
            class="btn btn-link text-white fs-5 p-0"
            @click="openMenu = false"
            style="color: #8c8c8e"
          >
            <i class="bi bi-x"></i>
          </button>
        </div>
        <nav class="p-4 mt-4">
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
          <router-link to="/blog" class="menubar-link" @click="openMenu = false"
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
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const currentPageTitle = ref("Home");

watch(
  () => route.path,
  (newPath) => {
    // Remove leading slash and capitalize first letter
    const path = newPath.slice(1) || "home";
    currentPageTitle.value = path.charAt(0).toUpperCase() + path.slice(1);
  },
  { immediate: true }
);

const openMenu = ref(false);
</script>

<style scoped>
.menubar-overlay {
  position: fixed;
  inset: 0;
  z-index: 1050;
  display: flex;
}
.menubar-sidebar {
  width: 230px;
  max-width: 90vw;
  background: #121316;
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
  color: #8c8c8e;
  text-decoration: none;
  font-weight: 400;
  font-size: 0.85rem;
  margin-bottom: 1.2rem;
  transition: color 0.2s;
  text-transform: uppercase;
  text-align: left;
  letter-spacing: 1px;
}
.menubar-link.active,
.menubar-link:hover {
  color: #ffc107;
}

.link-title {
  color: #8c8c8e;
  text-decoration: none;
  font-weight: 400;
  font-size: 1rem;
  transition: all 0.3s ease-in-out;
  text-transform: uppercase;
  text-align: left;
  letter-spacing: 1px;
  transform: rotate(90deg);
  text-align: center;
  display: flex;
  margin: 3rem 2rem;
  justify-content: center;
  align-items: center;
}
</style>
