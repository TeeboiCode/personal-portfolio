<template>
  <div class="portfolio-card">
    <div class="portfolio-image-wrapper">
      <img :src="image" :alt="title" class="portfolio-image" />
    </div>
    <div class="portfolio-overlay">
      <div class="portfolio-title">{{ title }}</div>
      <a v-if="link" :href="link" class="read-more"
        >Read More <span>&rarr;</span></a
      >
    </div>
  </div>
</template>

<script setup>
defineProps({
  image: { type: String, required: true },
  title: { type: String, required: true },
  link: { type: String, default: "" },
});
</script>

<style scoped>
.portfolio-card {
  position: relative;
  overflow: hidden;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  background: #22232b;
  cursor: pointer;
  transition: box-shadow 0.2s;
  height: 100%;
  min-height: 220px;
  display: flex;
  flex-direction: column;
}
.portfolio-card:hover {
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.18);
}
.portfolio-image-wrapper {
  width: 100%;
  height: 220px;
  background: #181920;
  position: relative;
  flex-shrink: 0;
  overflow: hidden;
}
@media (max-width: 576px) {
  .portfolio-image-wrapper {
    aspect-ratio: 1/1;
    height: auto;
  }
  .portfolio-card {
    min-height: auto;
  }
}
.portfolio-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
  transition: transform 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55);
}
.portfolio-card:hover .portfolio-image {
  transform: scale(1.04);
}
.portfolio-overlay {
  position: absolute;
  left: 0;
  right: 0;
  bottom: -100%;
  background: linear-gradient(0deg, #181920 90%, rgba(24, 25, 32, 0.7) 100%);
  color: #fff;
  padding: 1.2rem 1rem 1.5rem 1rem;
  text-align: left;
  transition: bottom 0.4s ease-out;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  min-height: 90px;
}
.portfolio-card:hover .portfolio-overlay {
  bottom: 0;
}
.portfolio-title {
  font-size: 1.05rem;
  font-weight: 600;
  margin-bottom: 0.7rem;
  color: #fff;
}
.read-more {
  color: #ffc107;
  font-weight: 600;
  font-size: 0.95rem;
  text-decoration: none;
  letter-spacing: 0.5px;
  transition: color 0.2s;
}
.read-more:hover {
  color: #fff;
  text-decoration: underline;
}
.read-more span {
  font-size: 1.1em;
  vertical-align: middle;
}
</style>
