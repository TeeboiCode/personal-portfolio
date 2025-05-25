<template>
  <div class="container py-4">
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
    image:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80",
    title: "Fitness Trainer UI Card",
    link: "#",
  },
  {
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    title: "Business Card Design",
    link: "#",
  },
  {
    image:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
    title: "Branding Flyer",
    link: "#",
  },
  {
    image:
      "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=600&q=80",
    title: "Modern Web Template",
    link: "#",
  },
  {
    image:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
    title: "UI Elements Pack",
    link: "#",
  },
  {
    image:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80",
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
</style>
