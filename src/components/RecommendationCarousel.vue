<template>
  <div class="recommendation-carousel">
    <div class="recommendation-scroll-row mb-1" ref="scrollRow">
      <div
        class="testimonial-card"
        v-for="(rec, i) in props.recommendations"
        :key="i"
      >
        <RecommendationCard
          :name="rec.name"
          :role="rec.role"
          :text="rec.text"
          :avatar="rec.avatar"
        />
      </div>
    </div>
    <div class="d-flex align-items-center justify-content-between">
      <div class="carousel-dots">
        <span
          v-for="n in totalSlides"
          :key="n"
          :class="['dot', { active: n - 1 === currentSlide }]"
          @click="goToSlide(n - 1)"
        ></span>
      </div>
      <div>
        <button class="carousel-arrow me-2" @click="prevSlide">
          <i class="fa-solid fa-chevron-left"></i>
        </button>
        <button class="carousel-arrow" @click="nextSlide">
          <i class="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from "vue";
import RecommendationCard from "./RecommendationCard.vue";

const props = defineProps({
  recommendations: Array,
});

const currentSlide = ref(0);
const scrollRow = ref(null);
const isMobile = ref(window.innerWidth < 768);

// Update isMobile on window resize
const handleResize = () => {
  isMobile.value = window.innerWidth < 768;
};

onMounted(() => {
  window.addEventListener("resize", handleResize);
});

const totalSlides = computed(() => props.recommendations.length);

function scrollToSlide(slideIdx) {
  if (!scrollRow.value) return;
  const cardWidth = scrollRow.value.firstElementChild?.offsetWidth || 0;
  const gap = isMobile.value ? 16 : 32; // 1rem on mobile, 2rem on desktop
  const scrollLeft = slideIdx * (cardWidth + gap);
  scrollRow.value.scrollTo({ left: scrollLeft, behavior: "smooth" });
}

function prevSlide() {
  if (currentSlide.value > 0) {
    currentSlide.value--;
  } else {
    // If at first slide, go to last possible slide
    currentSlide.value = totalSlides.value - (isMobile.value ? 1 : 2);
  }
  scrollToSlide(currentSlide.value);
}

function nextSlide() {
  if (currentSlide.value < totalSlides.value - (isMobile.value ? 1 : 2)) {
    currentSlide.value++;
  } else {
    // If at last slide, go back to first slide
    currentSlide.value = 0;
  }
  scrollToSlide(currentSlide.value);
}

function goToSlide(idx) {
  currentSlide.value = idx;
  scrollToSlide(currentSlide.value);
}

watch(currentSlide, (val) => {
  scrollToSlide(val);
});
</script>

<style scoped>
.recommendation-carousel {
  width: 100%;
  padding: 0 1rem;
}
.recommendation-scroll-row {
  display: flex;
  flex-direction: row;
  gap: 1rem;
  overflow-x: auto;
  scroll-behavior: smooth;
  scrollbar-width: none;
  -ms-overflow-style: none;
  padding: 0.5rem 0;
  scroll-snap-type: x mandatory;
}
.recommendation-scroll-row::-webkit-scrollbar {
  display: none;
}
.testimonial-card {
  flex: 0 0 100%;
  max-width: 100%;
  min-width: 280px;
  scroll-snap-align: start;
}
@media (min-width: 768px) {
  .testimonial-card {
    flex: 0 0 calc(50% - 1rem);
    max-width: calc(50% - 1rem);
  }
  .recommendation-scroll-row {
    gap: 2rem;
  }
}
.testimonial-avatar {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  border: 4px solid #23232b;
  top: -32px;
  left: 24px;
  background: #fff;
  object-fit: cover;
  z-index: 2;
}
.testimonial-stars {
  display: flex;
  align-items: center;
  gap: 4px;
  margin-top: 1rem;
}
.star {
  color: #ffc107;
  font-size: 1.1rem;
}
.carousel-dots {
  display: flex;
  align-items: center;
  gap: 8px;
}
.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #44444c;
  display: inline-block;
  cursor: pointer;
  transition: background 0.2s;
}
.dot.active {
  background: #ffc107;
}
.carousel-arrow {
  background: none;
  border: none;
  color: #ffc107;
  font-size: 1.2rem;
  padding: 4px 8px;
  border-radius: 50%;
  transition: background 0.2s;
}
.carousel-arrow:hover {
  background: #23232b;
}
</style>
