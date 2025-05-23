<template>
  <div class="container-fluid p-0 py-lg-5 px-lg-4">
    <div class="overlay-background d-none d-md-block"></div>
    <div class="overlay-background-2 d-none d-md-block"></div>
    <div class="row">
      <div class="col-lg-12 fade-in-left">
        <HeroCard />
        <StatsCard />
        <div class="mb-4">
          <div class="section-title text-start my-4" style="font-size: 16px">
            My Services
          </div>
          <div class="row g-4">
            <div
              class="col-md-4 col-sm-6 col-12 service-card-container"
              v-for="(service, i) in services"
              :key="i"
            >
              <ServiceCard
                :title="service.title"
                :description="service.description"
              />
            </div>
          </div>
        </div>

        <div>
          <div class="section-title">Recommendations</div>
          <RecommendationCarousel :recommendations="recommendations" />
          <LogoCarousel />
          <FooterBar />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import HeroCard from "../components/HeroCard.vue";
import StatsCard from "../components/StatsCard.vue";
import ServiceCard from "../components/ServiceCard.vue";
import RecommendationCarousel from "../components/RecommendationCarousel.vue";
import LogoCarousel from "../components/LogoCarousel.vue";
import FooterBar from "../components/FooterBar.vue";

const services = [
  {
    title: "Web Development",
    description:
      "Building responsive and modern websites using the latest technologies. Ensuring performance, accessibility, and scalability across all devices.",
  },
  {
    title: "UI/UX Design",
    description:
      "Designing user-friendly interfaces and experiences for web and mobile. Focused on intuitive design that enhances user satisfaction.",
  },
  {
    title: "Sound Design",
    description:
      "Creating immersive soundscapes and effects for multimedia projects. Tailored audio that elevates storytelling and engagement.",
  },
  {
    title: "Game Design",
    description:
      "Developing engaging and interactive game experiences. Combining gameplay mechanics with visual and audio elements.",
  },
  {
    title: "Advertising",
    description:
      "Crafting compelling advertising campaigns and visuals. Designed to attract attention and drive meaningful results.",
  },
  {
    title: "Photography",
    description:
      "Professional photography services for all occasions. Capturing moments with creativity, clarity, and style.",
  },
];

const recommendations = [
  {
    name: "Paul Timmons",
    role: "Web Developer",
    text: "Working with Artist Carter has been a pleasure. Stellar professionalism and creativity!",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Paul Timmons",
    role: "Web Developer",
    text: "Amazing attention to detail and always delivers on time.",
    avatar: "https://randomuser.me/api/portraits/men/46.jpg",
  },
  {
    name: "Samantha Lee",
    role: "Product Manager",
    text: "Carter brought incredible clarity and structure to our front-end codebase. Highly recommend!",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "David Okoro",
    role: "UI/UX Designer",
    text: "Exceptional collaboration and communication. Carter translated design ideas into beautiful code flawlessly.",
    avatar: "https://randomuser.me/api/portraits/men/54.jpg",
  },
  {
    name: "Amina Yusuf",
    role: "Marketing Lead",
    text: "Very reliable and professional. Carter helped us launch our landing page ahead of schedule.",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Leo Chen",
    role: "Startup Founder",
    text: "Carter was key in developing our MVP. Always proactive and solution-driven.",
    avatar: "https://randomuser.me/api/portraits/men/39.jpg",
  },
];
</script>

<style scoped>
.container-fluid {
  /* background: #20202a; */
  background: transparent;
  min-height: 100vh;
  overflow: hidden;
  position: relative;
}

.overlay-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 360px;
  background: url("../assets/img/bg.jpg") center center/cover no-repeat;
}

.overlay-background-2 {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 360px;
  background: linear-gradient(
    180deg,
    rgba(30, 30, 40, 0.93) 0%,
    rgba(30, 30, 40, 0.96) 70%,
    rgba(30, 30, 40, 0.99) 80%,
    #1e1e28 100%
  );
}
.service-card-container {
  height: 245px !important;
}
@media (min-width: 768px) {
  .service-card-container {
    height: 255px !important;
  }
}
</style>
