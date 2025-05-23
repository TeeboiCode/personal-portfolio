<template>
  <div class="card-custom h-100 p-4 position-relative fade-in">
    <h5 class="section-title mb-2">{{ title }}</h5>
    <p class="mb-3 fw-lighter dec-text">
      {{ description }}
    </p>
    <div
      class="d-flex justify-content-start align-items-center position-absolute bottom-0 start-0 p-4"
    >
      <a
        href="#"
        class="order-now-link text-start fw-bold text-decoration-none"
        @mouseenter="handleMouseEnter"
        @mouseleave="handleMouseLeave"
      >
        View Projects
        <span :class="['ms-2', 'arrow-icon', { 'bounce-animate': animating }]">
          <i class="fa-solid fa-arrow-right"></i>
        </span>
      </a>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  title: String,
  description: String,
});

const animating = ref(false);

function handleMouseEnter() {
  animating.value = false;
  // Force reflow to restart animation
  void document.querySelector(".order-now-link .arrow-icon").offsetWidth;
  animating.value = true;
}
function handleMouseLeave() {
  animating.value = false;
}
</script>

<style scoped>
.order-now-link {
  font-size: 12px;
  color: #ffc107;
  letter-spacing: 1px;
  transition: color 0.2s;
}
.order-now-link:hover {
  color: #fff;
}
.order-now-link .arrow-icon {
  transition: transform 0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55);
}
.order-now-link:hover .arrow-icon,
.bounce-animate {
  transform: translateX(14px) scale(1.2);
}
@keyframes arrow-bounce-forward {
  0% {
    transform: translateX(0) scale(1);
  }
  40% {
    transform: translateX(22px) scale(1.35);
  }
  60% {
    transform: translateX(10px) scale(1.1);
  }
  80% {
    transform: translateX(18px) scale(1.25);
  }
  100% {
    transform: translateX(14px) scale(1.2);
  }
}
.bounce-animate {
  animation: arrow-bounce-forward 0.5s;
}

.dec-text {
  font-size: 14px;
  min-height: 40px;
  font-weight: 400 !important;
  color: #8c8c8e;
  text-align: left;
  line-height: 2;
}

/* @media (min-width: 768px) {
  .dec-text {
    min-height: 80px;
  }
} */
</style>
