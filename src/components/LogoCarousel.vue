<template>
  <div
    class="logo-carousel-container"
    @mouseenter="isPaused = true"
    @mouseleave="isPaused = false"
  >
    <div :class="['logo-carousel-track gap-5', { paused: isPaused }]">
      <div
        v-for="(logo, i) in allLogos"
        :key="i + logo.name"
        class="logo-item"
        :class="{ 'logo-hovered': isPaused }"
      >
        <img :src="logo.src" :alt="logo.name" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const logos = [
  {
    name: "HTML",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "Vue",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
  },
  {
    name: "React",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Node.js",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Photoshop",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg",
  },
  {
    name: "Illustrator",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg",
  },
  {
    name: "CorelDRAW",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/coreldraw/coreldraw-plain.svg",
  },
];

// Duplicate the logos for seamless infinite scroll
const allLogos = computed(() => [...logos, ...logos]);
const isPaused = ref(false);
</script>

<style scoped>
.logo-carousel-container {
  width: 100%;
  overflow: hidden;
  background: #23232b;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  padding: 3rem 0.5rem;
}
.logo-carousel-track {
  display: flex;
  align-items: center;
  width: max-content;
  animation: scroll-logos 40s linear infinite;
}
.logo-carousel-track.paused {
  animation-play-state: paused;
}
.logo-item {
  flex: 0 0 120px;
  width: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  filter: grayscale(1) brightness(0.7);
  transition: filter 0.7s;
  height: 64px;
}
.logo-item img {
  max-width: 80px;
  max-height: 60px;
  width: auto;
  height: auto;
  object-fit: contain;
}
.logo-item:hover {
  filter: grayscale(0) brightness(1.2) invert(1);
}
@keyframes scroll-logos {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-1080px);
  }
}
</style>
