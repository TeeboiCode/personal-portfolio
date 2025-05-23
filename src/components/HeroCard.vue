<template>
  <div
    class="card-custom hero-card rounded-0 d-flex align-items-center justify-content-between flex-wrap flex-md-nowrap mb-0 p-0"
  >
    <div
      class="p-lg-5 p-4 w-100 d-flex align-items-center justify-content-between overflow-hidden"
      style="
        background-image: linear-gradient(
          90deg,
          rgba(45, 45, 58, 0.9) 15%,
          rgba(45, 45, 58, 0.7) 50%,
          rgba(43, 43, 53, 0.7) 100%
        );
      "
    >
      <div
        class="d-flex flex-column align-items-center align-items-lg-start justify-content-center w-100"
      >
        <h1
          class="text-center text-lg-start mb-0 mt-3 mt-lg-0"
          style="font-size: 2.4rem; color: #fff; font-weight: 900 !important"
        >
          Discover my Amazing<br />Art Space!
        </h1>
        <div class="my-4 text-accent text-center text-lg-start hero-typing">
          <code class="d-none d-md-block"
            >&lt;<span style="color: #ffc107">code</span>&gt;
            {{ displayText }} &lt;<span style="color: #ffc107">/code</span
            >&gt;</code
          >

          <code class="d-block d-md-none"
            >&lt;<span style="color: #ffc107">code</span>&gt;
            {{ phrases[1] }} &lt;<span style="color: #ffc107">/code</span
            >&gt;</code
          >
        </div>
        <div
          class="d-flex justify-content-center justify-content-lg-start align-items-center w-100 mb-5 mb-lg-0"
        >
          <button
            class="btn btn-accent rounded-0 py-3 text-uppercase"
            style="
              font-weight: 600;
              font-size: 12px;
              letter-spacing: 1px;
              padding-left: 2rem;
              padding-right: 2rem;
            "
          >
            Explore Now
          </button>
        </div>
      </div>
      <div class="d-none d-lg-block" style="width: 250px; height: 250px">
        <img
          src="../assets/img/IMG-20230304-WA0001-removebg-preview.png"
          class="border-0 d-none d-md-block w-100 object-fit-contain"
          alt="Hero"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const phrases = [
  "I build design mockups.",
  "I build web interfaces.",
  "I build UI/UX experiences.",
  "I build soundscapes.",
  "I build game designs.",
  "I build advertising visuals.",
  "I build photography portfolios.",
  "I build with Vue and React.",
  "I build with Node.js.",
];

const displayText = ref("");
let phraseIndex = 0;
let charIndex = 0;
let typing = true;

function typeEffect() {
  if (typing) {
    if (charIndex < phrases[phraseIndex].length) {
      displayText.value += phrases[phraseIndex][charIndex];
      charIndex++;
      setTimeout(typeEffect, 60);
    } else {
      typing = false;
      setTimeout(typeEffect, 1200);
    }
  } else {
    if (charIndex > 0) {
      displayText.value = displayText.value.slice(0, -1);
      charIndex--;
      setTimeout(typeEffect, 30);
    } else {
      typing = true;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      setTimeout(typeEffect, 400);
    }
  }
}

onMounted(() => {
  displayText.value = "";
  typeEffect();
});
</script>

<style scoped>
.hero-card {
  min-height: 220px;
  background: url("../assets/img/bg.jpg") center center/cover no-repeat;
}
.hero-typing code {
  font-size: 16px;
  background: none;
  color: #fff;
  border: none;
  padding: 0;
  font-family: "Fira Mono", "Consolas", "Menlo", monospace;
  letter-spacing: 0.5px;
}
</style>
