<template>
  <div
    v-if="visible"
    class="image-overlay"
    @keydown.left="prevImage"
    @keydown.right="nextImage"
    tabindex="0"
  >
    <!-- Top Left: Image Index -->
    <div class="overlay-index">{{ currentIndex + 1 }} / {{ total }}</div>

    <!-- Top Right: Controls -->
    <div class="overlay-controls">
      <button
        class="icon-btn"
        @click="toggleFullscreen"
        :title="isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'"
      >
        <i
          class="bi"
          :class="isFullscreen ? 'bi-fullscreen-exit' : 'bi-fullscreen'"
        ></i>
      </button>
      <button class="icon-btn" @click="zoomImage" title="Zoom">
        <i class="bi bi-zoom-in"></i>
      </button>
      <div
        class="icon-btn share-btn"
        @click="toggleShareDropdown"
        title="Share"
      >
        <i class="bi bi-share"></i>
        <div v-if="showShare" class="share-dropdown">
          <a href="#" @click.prevent="share('facebook')"
            ><i class="bi bi-facebook"></i> Share on Facebook</a
          >
          <a href="#" @click.prevent="share('twitter')"
            ><i class="bi bi-twitter"></i> Share on Twitter</a
          >
          <a href="#" @click.prevent="share('pinterest')"
            ><i class="bi bi-pinterest"></i> Pin it</a
          >
          <a :href="image" download
            ><i class="bi bi-download"></i> Download image</a
          >
        </div>
      </div>
      <button class="icon-btn" @click="$emit('close')" title="Close">
        <i class="bi bi-x"></i>
      </button>
    </div>

    <!-- Left Arrow -->
    <button
      v-if="total > 1"
      class="nav-arrow left"
      @click="prevImage"
      :disabled="currentIndex === 0"
      title="Previous"
    >
      <i class="bi bi-chevron-left"></i>
    </button>
    <!-- Right Arrow -->
    <button
      v-if="total > 1"
      class="nav-arrow right"
      @click="nextImage"
      :disabled="currentIndex === total - 1"
      title="Next"
    >
      <i class="bi bi-chevron-right"></i>
    </button>

    <!-- Centered Image -->
    <div class="overlay-image-wrapper">
      <img
        :src="image"
        :alt="title"
        class="overlay-image"
        :class="{ zoomed: isZoomed }"
        @click="zoomImage"
      />
    </div>

    <!-- Bottom Center: Image Title -->
    <div class="overlay-title">{{ title }}</div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted, nextTick } from "vue";
const props = defineProps({
  visible: Boolean,
  image: String,
  title: String,
  currentIndex: Number,
  total: Number,
});
const emit = defineEmits(["close", "next", "prev"]);
const isFullscreen = ref(false);
const isZoomed = ref(false);
const showShare = ref(false);

function toggleFullscreen() {
  if (!isFullscreen.value) {
    document.documentElement.requestFullscreen();
    isFullscreen.value = true;
  } else {
    document.exitFullscreen();
    isFullscreen.value = false;
  }
}
function zoomImage() {
  isZoomed.value = !isZoomed.value;
}
function toggleShareDropdown() {
  showShare.value = !showShare.value;
}
function share(platform) {
  // Placeholder: implement sharing logic
  showShare.value = false;
}
function nextImage() {
  if (props.currentIndex < props.total - 1) emit("next");
}
function prevImage() {
  if (props.currentIndex > 0) emit("prev");
}
// Keyboard navigation
function handleKey(e) {
  if (!props.visible) return;
  if (e.key === "ArrowLeft") prevImage();
  if (e.key === "ArrowRight") nextImage();
  if (e.key === "Escape") emit("close");
}
onMounted(() => {
  window.addEventListener("keydown", handleKey);
});
watch(
  () => props.visible,
  (val) => {
    if (!val) {
      isZoomed.value = false;
      isFullscreen.value = false;
      showShare.value = false;
    }
  }
);
</script>

<style scoped>
.image-overlay {
  position: fixed;
  inset: 0;
  z-index: 2000;
  background: rgba(0, 0, 0, 0.88);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: fadeIn 0.2s;
}
.overlay-index {
  position: absolute;
  top: 18px;
  left: 24px;
  color: #fff;
  font-size: 1.3rem;
  font-weight: 500;
  z-index: 10;
}
.overlay-controls {
  position: absolute;
  top: 14px;
  right: 24px;
  display: flex;
  gap: 16px;
  z-index: 10;
}
.icon-btn {
  background: none;
  border: none;
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 6px;
  border-radius: 4px;
  transition: background 0.2s;
}
.icon-btn:hover,
.share-btn:hover {
  background: rgba(255, 255, 255, 0.08);
}
.share-btn {
  position: relative;
}
.share-dropdown {
  position: absolute;
  top: 36px;
  right: 0;
  background: #fff;
  color: #222;
  border-radius: 8px;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.18);
  min-width: 180px;
  padding: 0.5rem 0;
  z-index: 20;
  display: flex;
  flex-direction: column;
  animation: fadeIn 0.15s;
}
.share-dropdown a {
  color: #222;
  text-decoration: none;
  padding: 0.7rem 1.2rem;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: background 0.15s;
}
.share-dropdown a:hover {
  background: #f5f5f5;
}
.overlay-image-wrapper {
  max-width: 90vw;
  max-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 60px;
  margin-bottom: 32px;
}
.overlay-image {
  max-width: 100%;
  max-height: 100%;
  border-radius: 12px;
  box-shadow: 0 4px 32px rgba(0, 0, 0, 0.25);
  transition: transform 0.3s;
  cursor: zoom-in;
}
.overlay-image.zoomed {
  transform: scale(1.5);
  cursor: zoom-out;
  z-index: 100;
}
.overlay-title {
  color: #fff;
  font-size: 1.15rem;
  font-weight: 400;
  margin-bottom: 24px;
  text-align: center;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.nav-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.45);
  border: none;
  color: #fff;
  font-size: 2.2rem;
  padding: 0.2em 0.5em;
  border-radius: 50%;
  cursor: pointer;
  z-index: 20;
  transition: background 0.2s;
}
.nav-arrow.left {
  left: 24px;
}
.nav-arrow.right {
  right: 24px;
}
.nav-arrow:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}
</style>
