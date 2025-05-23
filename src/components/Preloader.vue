<template>
  <div class="preloader-bg">
    <div class="preloader-content">
      <div class="preloader-title">Artur Carter</div>
      <div class="preloader-underline">
        <div
          class="preloader-progress-bar"
          :style="{ width: percent + '%' }"
        ></div>
      </div>
      <div class="preloader-percent">{{ percent }} %</div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
const percent = ref(0);

onMounted(() => {
  let i = 0;
  const interval = setInterval(() => {
    percent.value = i;
    i++;
    if (i > 100) clearInterval(interval);
  }, 20);
});
</script>

<style scoped>
.preloader-bg {
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  background: #23232b;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99999;
}
.preloader-content {
  text-align: center;
}
.preloader-title {
  color: #fff;
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.7rem;
}
.preloader-underline {
  width: 250px;
  height: 4px;
  background: #23232b;
  margin: 0 auto 1.2rem auto;
  border-radius: 2px;
  overflow: hidden;
  position: relative;
}
.preloader-progress-bar {
  height: 100%;
  background: #ffc107;
  border-radius: 2px;
  transition: width 0.2s linear;
}
.preloader-percent {
  color: #b0b0b8;
  font-size: 1.1rem;
  font-weight: 400;
}
</style>
