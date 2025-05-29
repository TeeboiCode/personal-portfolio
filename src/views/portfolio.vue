<template>
  <div class="container p-0 py-lg-5 px-lg-4 fade-in">
    <div class="overlay-background d-none d-lg-block"></div>
    <div class="overlay-background-2 d-none d-lg-block"></div>
    <h2 class="mb-4 headling text-start">Portfolio</h2>
    <div class="row g-4">
      <div
        v-for="(item, idx) in cards"
        :key="idx"
        class="col-12 col-md-6 col-lg-4 d-flex"
      >
        <Card
          :image="item.image"
          :title="item.title"
          :link="item.link"
          class="w-100"
          @click="openOverlay(idx)"
        />
      </div>
    </div>
    <ImageOverlay
      :visible="overlayVisible"
      :image="cards[selectedIndex]?.image"
      :title="cards[selectedIndex]?.title"
      :currentIndex="selectedIndex"
      :total="cards.length"
      @close="closeOverlay"
      @next="selectedIndex < cards.length - 1 ? selectedIndex++ : null"
      @prev="selectedIndex > 0 ? selectedIndex-- : null"
    />
  </div>
</template>

<script setup>
import Card from "../components/Card.vue";
import ImageOverlay from "../components/ImageOverlay.vue";
import { ref } from "vue";

const cards = [
  {
    image: new URL("../assets/img/portfolio-img/work-1.jpg", import.meta.url)
      .href,
    title: "Fitness Trainer UI Card",
    link: "#",
  },
  {
    image: new URL("../assets/img/portfolio-img/work-2.jpg", import.meta.url)
      .href,
    title: "Business Card Design",
    link: "#",
  },
  {
    image: new URL("../assets/img/portfolio-img/work-3.jpg", import.meta.url)
      .href,
    title: "Branding Flyer",
    link: "#",
  },
  {
    image: new URL("../assets/img/portfolio-img/work-4.jpg", import.meta.url)
      .href,
    title: "Modern Web Template",
    link: "#",
  },
  {
    image: new URL("../assets/img/portfolio-img/work-5.jpg", import.meta.url)
      .href,
    title: "UI Elements Pack",
    link: "#",
  },
  {
    image: new URL("../assets/img/portfolio-img/work-6.jpg", import.meta.url)
      .href,
    title: "Logo Design",
    link: "#",
  },
  {
    image: new URL("../assets/img/portfolio-img/work-7.jpg", import.meta.url)
      .href,
    title: "Logo Design",
    link: "#",
  },
  {
    image: new URL(
      "../assets/img/portfolio-img/work-8-scaled-1.jpg",
      import.meta.url
    ).href,
    title: "Logo Design",
    link: "#",
  },
];

const overlayVisible = ref(false);
const selectedIndex = ref(0);

function openOverlay(idx) {
  selectedIndex.value = idx;
  overlayVisible.value = true;
}
function closeOverlay() {
  overlayVisible.value = false;
}
</script>

<style scoped>
.container {
  /* background: #23232b; */
  background: transparent;
  border-radius: 12px;
}

.headling {
  color: #fff;
  font-weight: 700;
  font-size: 1rem;
}

.overlay-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -3;
  height: 360px;
  background: url("../assets/img/bg.jpg") center center/cover no-repeat;
}

.overlay-background-2 {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 360px;
  z-index: -3;
  background: linear-gradient(
    180deg,
    rgba(30, 30, 40, 0.93) 0%,
    rgba(30, 30, 40, 0.96) 70%,
    rgba(30, 30, 40, 0.99) 80%,
    #1e1e28 100%
  );
}
</style>
