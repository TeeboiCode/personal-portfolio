<template>
  <div class="recommendation-card h-100">
    <div class="avatar-wrapper">
      <img
        :src="avatar"
        class="testimonial-avatar"
        width="64"
        height="64"
        alt="Avatar"
      />
    </div>
    <div class="card-content">
      <div class="rec-name">{{ name }}</div>
      <div class="rec-role">{{ role }}</div>
      <div class="rec-text">{{ text }}</div>
      <div class="testimonial-stars mt-3">
        <span v-for="n in 5" :key="n" class="star"
          ><i class="fa-solid fa-star"></i
        ></span>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  name: String,
  role: String,
  text: String,
  avatar: String,
});
</script>

<style scoped>
.recommendation-card {
  background: #23232b;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  position: relative;
  min-height: 240px;
  overflow: visible;
  text-align: left;
  transition: box-shadow 0.3s;
}
.recommendation-card:hover {
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.18);
}
.avatar-wrapper {
  position: absolute;
  right: 0;
  top: 20px;
  transform: translateX(-50%);
  z-index: 2;
}
.testimonial-avatar {
  width: 81px;
  height: 81px;
  border-radius: 50%;
  border: 4px solid #23232b;
  background: #fff;
  object-fit: cover;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
.card-content {
  margin-top: 2.5rem;
}
.rec-name {
  font-weight: 700;
  font-size: 14px;
  color: #fff;
}
.rec-role {
  font-style: italic;
  color: #b0b0b8;
  font-size: 12px;
  margin-bottom: 1rem;
}
.rec-text {
  color: #b0b0b8;
  font-size: 13px;
  line-height: 1.7;
  margin-bottom: 1.5rem;
}
.testimonial-stars {
  display: flex;
  align-items: center;
  gap: 4px;
}
.star {
  color: #ffc107;
  font-size: 1.1rem;
}
</style>
