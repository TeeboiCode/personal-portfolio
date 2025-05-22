<template>
  <div class="recommendation-carousel">
    <div class="recommendation-scroll-row mb-3" ref="scrollRow">
      <div
        class="testimonial-card position-relative col-12 col-md-5"
        v-for="(rec, i) in props.recommendations"
        :key="i"
      >
        <!-- style="min-width: 48%; max-width: 48%; flex: 0 0 48%" -->
        <RecommendationCard
          :name="rec.name"
          :role="rec.role"
          :text="rec.text"
          :avatar="rec.avatar"
        />
      </div>
    </div>
    <div class="d-flex align-items-center justify-content-between mt-2">
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
const perSlide = 2;
const totalSlides = computed(() =>
  Math.ceil(props.recommendations.length / perSlide)
);
const scrollRow = ref(null);

function scrollToSlide(slideIdx) {
  if (!scrollRow.value) return;
  const cardWidth = scrollRow.value.firstElementChild?.offsetWidth || 0;
  const gap = 32; // 2rem gap
  const scrollLeft = slideIdx * (cardWidth * perSlide + gap);
  scrollRow.value.scrollTo({ left: scrollLeft, behavior: "smooth" });
}

function prevSlide() {
  currentSlide.value =
    (currentSlide.value - 1 + totalSlides.value) % totalSlides.value;
  scrollToSlide(currentSlide.value);
}
function nextSlide() {
  currentSlide.value = (currentSlide.value + 1) % totalSlides.value;
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
}
.recommendation-scroll-row {
  display: flex;
  flex-direction: row;
  gap: 2rem;
  overflow-x: auto;
  scroll-behavior: smooth;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE 10+ */
}
.recommendation-scroll-row::-webkit-scrollbar {
  display: none; /* Chrome/Safari/Webkit */
}
.testimonial-card {
  background: linear-gradient(159deg, #2d2d3a 0%, #2b2b35 100%);
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  padding: 2rem 1.5rem 1.5rem 1.5rem;
  position: relative;
  min-height: 220px;
  overflow: visible;
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
