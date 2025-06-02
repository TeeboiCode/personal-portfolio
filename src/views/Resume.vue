<template>
  <div class="resume-container py-5 px-2 px-md-4">
    <!-- Desktop: 3 columns -->
    <div class="row d-none d-lg-flex justify-content-center position-relative">
      <!-- Education Column -->
      <div class="col-lg-5">
        <h4 class="resume-heading">Education</h4>
        <div
          v-for="(edu, i) in education"
          :key="i"
          class="resume-card mb-4 position-relative"
          :ref="(el) => (eduRefs[i] = el)"
        >
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
      <!-- Timeline Column -->
      <div class="col-lg-1 timeline-center-col position-relative">
        <!-- Education Timeline -->
        <div class="timeline-col left">
          <div
            class="timeline-line"
            :style="{ top: eduLineTop + 'px', height: eduLineHeight + 'px' }"
          ></div>
          <div
            v-for="(pos, i) in eduDotPositions"
            :key="'edu-dot-' + i"
            class="timeline-dot"
            :style="{ top: pos + 'px' }"
          ></div>
        </div>
      </div>

      <!-- Work History Column -->
      <div class="col-lg-5">
        <h4 class="resume-heading">Work History</h4>
        <div
          v-for="(work, i) in workHistory"
          :key="i"
          class="resume-card mb-4 position-relative"
          :ref="(el) => (workRefs[i] = el)"
        >
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
      <!-- Timeline Column -->
      <div class="col-lg-1 timeline-center-col position-relative">
        <!-- Education Timeline -->
        <div class="timeline-col left">
          <div
            class="timeline-line"
            :style="{ top: eduLineTop + 'px', height: eduLineHeight + 'px' }"
          ></div>
          <div
            v-for="(pos, i) in eduDotPositions"
            :key="'edu-dot-' + i"
            class="timeline-dot"
            :style="{ top: pos + 'px' }"
          ></div>
        </div>
      </div>
    </div>
    <!-- Mobile/Tablet: Stack columns, timeline on the left -->
    <div class="row d-lg-none">
      <div class="col-10">
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
      <div class="col-2 timeline-center-col position-relative">
        <!-- Education Timeline (mobile) -->
        <div class="timeline-col left">
          <div
            class="timeline-line"
            :style="{ top: eduLineTop + 'px', height: eduLineHeight + 'px' }"
          ></div>
          <div
            v-for="(pos, i) in eduDotPositions"
            :key="'edu-dot-m-' + i"
            class="timeline-dot"
            :style="{ top: pos + 'px' }"
          ></div>
        </div>
        <!-- Work Timeline (mobile) -->
        <div class="timeline-col right">
          <div
            class="timeline-line"
            :style="{ top: workLineTop + 'px', height: workLineHeight + 'px' }"
          ></div>
          <div
            v-for="(pos, i) in workDotPositions"
            :key="'work-dot-m-' + i"
            class="timeline-dot"
            :style="{ top: pos + 'px' }"
          ></div>
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
const eduRefs = ref([]);
const workRefs = ref([]);
const eduDotPositions = ref([]);
const workDotPositions = ref([]);
const eduLineTop = ref(0);
const eduLineHeight = ref(0);
const workLineTop = ref(0);
const workLineHeight = ref(0);

function updateTimelinePositions() {
  // Education
  eduDotPositions.value = [];
  let firstEdu = null,
    lastEdu = null;
  for (let i = 0; i < education.length; i++) {
    const el = eduRefs.value[i];
    if (el) {
      const parent = el.closest(".resume-container");
      const timeline = document.querySelector(
        ".timeline-center-col .timeline-col.left"
      );
      const parentRect = timeline.getBoundingClientRect();
      const elRect = el.getBoundingClientRect();
      const top = elRect.top - parentRect.top;
      eduDotPositions.value[i] = top;
      if (firstEdu === null) firstEdu = top;
      lastEdu = top + elRect.height;
    }
  }
  eduLineTop.value = firstEdu !== null ? firstEdu : 0;
  eduLineHeight.value =
    lastEdu !== null && firstEdu !== null ? lastEdu - firstEdu : 0;
  // Work
  workDotPositions.value = [];
  let firstWork = null,
    lastWork = null;
  for (let i = 0; i < workHistory.length; i++) {
    const el = workRefs.value[i];
    if (el) {
      const parent = el.closest(".resume-container");
      const timeline = document.querySelector(
        ".timeline-center-col .timeline-col.right"
      );
      const parentRect = timeline.getBoundingClientRect();
      const elRect = el.getBoundingClientRect();
      const top = elRect.top - parentRect.top;
      workDotPositions.value[i] = top;
      if (firstWork === null) firstWork = top;
      lastWork = top + elRect.height;
    }
  }
  workLineTop.value = firstWork !== null ? firstWork : 0;
  workLineHeight.value =
    lastWork !== null && firstWork !== null ? lastWork - firstWork : 0;
}
onMounted(() => {
  nextTick(updateTimelinePositions);
  window.addEventListener("resize", updateTimelinePositions);
});
onBeforeUnmount(() => {
  window.removeEventListener("resize", updateTimelinePositions);
});
</script>

<style scoped>
.resume-container {
  background: #191922;
  border-radius: 16px;
  min-height: 100vh;
}
.timeline-center-col {
  min-width: 48px;
  position: relative;
  height: 100%;
}
.timeline-col {
  position: absolute;
  top: 0;
  width: 50%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
}
.timeline-col.left {
  left: 0;
}
.timeline-col.right {
  right: 0;
}
.timeline-line {
  position: absolute;
  left: 50%;
  width: 4px;
  background: #23232b;
  transform: translateX(-50%);
  z-index: 0;
  border-radius: 2px;
}
.timeline-dot {
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
}
.resume-card {
  background: #23232b;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  padding: 1.5rem 1.5rem 1.2rem 1.5rem;
  position: relative;
  min-height: 140px;
  margin-bottom: 1.5rem;
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
@media (max-width: 991px) {
  .timeline-center-col {
    min-width: 32px;
  }
  .timeline-col {
    width: 100%;
  }
}
</style>
