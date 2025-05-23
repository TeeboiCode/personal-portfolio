<template>
  <Preloader v-if="loading" />
  <div v-else class="app-container">
    <div class="scrollable-content-container">
      <div class="row scrollable-content m-0 p-3 h-100">
        <div class="col-12 d-md-none p-0">
          <NavBarVue />
        </div>
        <div
          class="col-3 d-none d-md-block p-0"
          style="
            shadow: 0 3px 8px 0 rgba(15, 15, 20, 0.2);
            height: calc(100vh - 30px);
            overflow: hidden;
            padding-right: 1px !important;
          "
        >
          <Sidebar />
        </div>
        <div class="col-md-8 col-12 p-0 main-content-container">
          <div class="">
            <router-view />
          </div>
        </div>
        <div
          class="d-none d-md-block col-1 p-0"
          style="
            shadow: 0 3px 8px 0 rgba(15, 15, 20, 0.2);
            background-color: #20202a;
            height: calc(100vh - 30px);
            overflow: hidden;
            padding-left: 1px !important;
          "
        >
          <MenuBar />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import MenuBar from "./components/MenuBar.vue";
import Sidebar from "./components/Sidebar.vue";
import NavBarVue from "./components/NavBar.vue";
import Preloader from "./components/Preloader.vue";

const loading = ref(true);
onMounted(() => {
  setTimeout(() => {
    loading.value = false;
  }, 2800);
});
</script>

<style scoped>
.app-container {
  min-height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9999;
  /* padding: 1rem; */
}
.scrollable-content-container {
  position: relative;
  width: 100%;
  height: calc(100vh - 30px);
  overflow: hidden;
}

.scrollable-content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2;
  overflow-y: scroll;
  /* overflow-x: hidden; */
}

.main-content-container {
  height: calc(100vh - 30px);
  overflow-y: auto;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE 10+ */
}
.main-content-container::-webkit-scrollbar {
  display: none; /* Chrome/Safari/Webkit */
}
</style>
