<template>
  <div class="container p-0 py-lg-5 px-lg-4 fade-in">
    <div class="overlay-background d-none d-lg-block"></div>
    <div class="overlay-background-2 d-none d-lg-block"></div>
    <h2 class="mb-4 headling">Portfolio</h2>
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
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import Card from "../components/Card.vue";

const cards = [
  {
    image: "../assets/img/portfolio-img/work-1.jpg",
    title: "Fitness Trainer UI Card",
    link: "#",
  },
  {
    image: "../assets/img/portfolio-img/work-2.jpg",
    title: "Business Card Design",
    link: "#",
  },
  {
    image: "../assets/img/portfolio-img/work-3.jpg",
    title: "Branding Flyer",
    link: "#",
  },
  {
    image: "../assets/img/portfolio-img/work-4.jpg",
    title: "Modern Web Template",
    link: "#",
  },
  {
    image: "../assets/img/portfolio-img/work-5.jpg",
    title: "UI Elements Pack",
    link: "#",
  },
  {
    image: "../assets/img/portfolio-img/work-6.jpg",
    title: "Logo Design",
    link: "#",
  },
  {
    image: "../assets/img/portfolio-img/work-7.jpg",
    title: "Logo Design",
    link: "#",
  },
  {
    image: "../assets/img/portfolio-img/work-8-scaled-1.jpg",
    title: "Logo Design",
    link: "#",
  },
];
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
