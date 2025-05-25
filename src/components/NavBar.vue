<template>
  <div class="container-fluid p-0">
    <nav
      class="navbar navbar-expand-xl bg-dark border-body"
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

            <!-- Portfolio Dropdown -->
            <!-- <div class="portfolio-dropdown">
              <div
                class="menubar-link dropdown-header"
                @click="togglePortfolio"
              >
                PORTFOLIO
                <i
                  class="bi"
                  :class="isPortfolioOpen ? 'bi-chevron-up' : 'bi-chevron-down'"
                ></i>
              </div>
              <div
                class="dropdown-content text-start"
                :class="{ show: isPortfolioOpen }"
              >
                <router-link
                  to="/portfolio/graphic-design"
                  class="dropdown-item"
                  >Graphic Design</router-link
                >
                <router-link
                  to="/portfolio/web-development"
                  class="dropdown-item"
                  >Web Development</router-link
                >
                <router-link to="/portfolio/ui-ux-design" class="dropdown-item"
                  >UI/UX Design</router-link
                >
              </div>
            </div> -->

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
import { ref, watch } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const currentPageTitle = ref("Home");
const openMenu = ref(false);
const isPortfolioOpen = ref(false);

const togglePortfolio = () => {
  isPortfolioOpen.value = !isPortfolioOpen.value;
};

watch(
  () => route.path,
  (newPath) => {
    const path = newPath.slice(1) || "home";
    currentPageTitle.value = path.charAt(0).toUpperCase() + path.slice(1);
  },
  { immediate: true }
);

const emit = defineEmits(["toggleSidebar"]);

const toggleSidebar = () => {
  emit("toggleSidebar");
};
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

.portfolio-dropdown {
  position: relative;
}

.dropdown-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}

.dropdown-content {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease-out;
  background: rgba(0, 0, 0, 0.2);
  margin: 0 -1.5rem;
  padding: 0 1.5rem;
}

.dropdown-content.show {
  max-height: 200px;
  transition: max-height 0.5s ease-in;
}

.dropdown-item {
  display: block;
  color: #8c8c8e;
  text-decoration: none;
  font-size: 0.9rem;
  padding: 0.5rem 1rem;
  transition: color 0.2s;
}

.dropdown-item:hover {
  color: #ffc107;
}
</style>
