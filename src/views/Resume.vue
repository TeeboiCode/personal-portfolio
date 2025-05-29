<template>
  <div class="resume-container py-5 px-2 px-md-4">
    <div class="resume-grid d-none d-lg-grid">
      <div class="resume-grid-header">Education</div>
      <div class="resume-grid-header">Work History</div>
      <template v-for="i in maxCards" :key="i">
        <!-- Education Card or empty -->
        <div class="resume-grid-cell position-relative">
          <div v-if="education[i - 1]" class="resume-card h-100">
            <div class="resume-card-content">
              <div class="resume-card-title">{{ education[i - 1].title }}</div>
              <div class="resume-card-role">{{ education[i - 1].role }}</div>
              <div class="resume-card-date">{{ education[i - 1].date }}</div>
              <div class="resume-card-desc">{{ education[i - 1].desc }}</div>
              <a
                v-if="education[i - 1].action"
                href="#"
                class="resume-card-action"
                >{{ education[i - 1].action }} <span>&gt;</span></a
              >
            </div>
          </div>
          <!-- Timeline for Education -->
          <div class="resume-grid-timeline right">
            <div class="timeline-line"></div>
            <div class="timeline-dot" :style="{ top: '24px' }"></div>
          </div>
        </div>
        <!-- Work Card or empty -->
        <div class="resume-grid-cell position-relative">
          <div v-if="workHistory[i - 1]" class="resume-card h-100">
            <div class="resume-card-content">
              <div class="resume-card-title">
                {{ workHistory[i - 1].title }}
              </div>
              <div class="resume-card-role">{{ workHistory[i - 1].role }}</div>
              <div class="resume-card-date">{{ workHistory[i - 1].date }}</div>
              <div class="resume-card-desc">{{ workHistory[i - 1].desc }}</div>
              <a
                v-if="workHistory[i - 1].action"
                href="#"
                class="resume-card-action"
                >{{ workHistory[i - 1].action }} <span>&gt;</span></a
              >
            </div>
          </div>
          <!-- Timeline for Work History -->
          <div class="resume-grid-timeline right">
            <div class="timeline-line"></div>
            <div class="timeline-dot" :style="{ top: '24px' }"></div>
          </div>
        </div>
      </template>
    </div>
    <!-- Mobile/Tablet: Stack columns -->
    <div class="d-lg-none">
      <div>
        <h4 class="resume-heading">Education</h4>
        <div v-for="(edu, i) in education" :key="i" class="resume-card mb-4">
          <div class="resume-card-content">
            <div class="resume-card-title">{{ edu.title }}</div>
            <div class="resume-card-role">{{ edu.role }}</div>
            <div class="resume-card-date">{{ edu.date }}</div>
            <div class="resume-card-desc">{{ edu.desc }}</div>
            <a v-if="edu.action" href="#" class="resume-card-action"
              >{{ edu.action }} <span>&gt;</span></a
            >
          </div>
        </div>
      </div>
      <div>
        <h4 class="resume-heading">Work History</h4>
        <div v-for="(work, i) in workHistory" :key="i" class="resume-card mb-4">
          <div class="resume-card-content">
            <div class="resume-card-title">{{ work.title }}</div>
            <div class="resume-card-role">{{ work.role }}</div>
            <div class="resume-card-date">{{ work.date }}</div>
            <div class="resume-card-desc">{{ work.desc }}</div>
            <a v-if="work.action" href="#" class="resume-card-action"
              >{{ work.action }} <span>&gt;</span></a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick, onBeforeUnmount } from "vue";
const education = [
  {
    title: "University of Toronto",
    role: "Student",
    date: "jan 2018 – may 2020",
    desc: `Bachelor's Degree in Computer Science ABC Technical Institute, Jefferson, Missouri`,
    action: "DIPLOME",
  },
  {
    title: "Programming Course",
    role: "Student",
    date: "jan 2016 – apr 2017",
    desc: "Coursework - Git, WordPress, Javascript, iOS, Android",
    action: "",
  },
  {
    title: "Web developer courses",
    role: "Student",
    date: "aug 2014 – oct 2015",
    desc: "Converted Photoshop layouts to web pages using HTML, CSS, and JavaScript",
    action: "LICENCE",
  },
];
const workHistory = [
  {
    title: "Envato",
    role: "Template Author",
    date: "jan 2018 – may 2020",
    desc: "Created Professional WordPress Themes & Templates for Personal and Creative Websites.",
    action: "",
  },
  {
    title: "ABC Studio",
    role: "Front-End Developer",
    date: "apr 2018 – aug 2019",
    desc: "Collaborate with creative and development teams on the execution of ideas.",
    action: "RECOMMENDATION",
  },
  {
    title: "Digital Web Studio",
    role: "Senior Developer",
    date: "jan 2017 – may 2018",
    desc: "Optimize your website and apps performance using latest technology.",
    action: "RECOMMENDATION",
  },
];
const maxCards = Math.max(education.length, workHistory.length);
</script>

<style scoped>
.resume-container {
  background: #191922;
  border-radius: 16px;
  min-height: 100vh;
}
.resume-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 1fr;
  gap: 0 0;
  align-items: stretch;
  width: 100%;
}
.resume-grid-header {
  color: #fff;
  font-weight: 700;
  font-size: 1.25rem;
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  background: transparent;
  border: none;
  text-align: left;
}
.resume-grid-cell {
  padding: 0 0.5rem 2rem 0.5rem;
  display: flex;
  align-items: stretch;
  position: relative;
}
.resume-card {
  background: #23232b;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  padding: 1.5rem 1.5rem 1.2rem 1.5rem;
  position: relative;
  min-height: 140px;
  margin-bottom: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
}
.resume-card-content {
  position: relative;
  flex: 1 1 auto;
}
.resume-card-title {
  font-weight: 700;
  font-size: 1.1rem;
  color: #fff;
}
.resume-card-role {
  font-style: italic;
  color: #b0b0b8;
  font-size: 0.98rem;
  margin-bottom: 0.5rem;
}
.resume-card-date {
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: #23232b;
  color: #b0b0b8;
  font-size: 0.95rem;
  border-radius: 16px;
  padding: 0.25rem 1.1rem;
  border: 1.5px solid #23232b;
  font-weight: 500;
}
.resume-card-desc {
  color: #b0b0b8;
  font-size: 0.98rem;
  line-height: 1.7;
  margin-bottom: 1.2rem;
  margin-top: 0.5rem;
}
.resume-card-action {
  color: #ffc107;
  font-weight: 700;
  font-size: 1rem;
  text-decoration: none;
  letter-spacing: 0.5px;
  transition: color 0.2s;
}
.resume-card-action:hover {
  color: #fff;
  text-decoration: underline;
}
.resume-grid-cell .resume-grid-timeline.right {
  position: absolute;
  right: -32px;
  top: 0;
  width: 40px;
  height: 100%;
  z-index: 1;
  pointer-events: none;
}
.resume-grid-timeline.right .timeline-line {
  position: fixed;
  left: auto;
  right: 0;
  top: 0;
  width: 4px;
  height: 100vh;
  background: #23232b;
  transform: none;
  z-index: 0;
  border-radius: 2px;
}
.resume-grid-timeline.right .timeline-dot {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #ffc107;
  border: 3px solid #23232b;
  box-shadow: 0 0 0 4px #191922;
  z-index: 2;
  top: 24px;
}
@media (max-width: 991px) {
  .resume-grid {
    display: none;
  }
  .resume-container {
    padding: 1.5rem 0.5rem;
  }
}
</style>
