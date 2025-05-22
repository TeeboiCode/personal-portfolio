<template>
  <aside class="sidebar d-flex flex-column align-items-center m-0 rounded-0">
    <div class="profile py-5">
      <div class="position-relative">
        <div
          class="d-flex justify-content-center flex-column overflow-hidden mb-2"
          style="width: 95px; height: 95px; border-radius: 50px"
        >
          <img
            src="../assets/img/IMG-20250401-WA0019(1).jpg"
            class="mb-3 w-100 object-fit-contain"
            style="object-position: 0 20px"
            alt="Avatar"
          />
        </div>
        <span class="art-available-lamp"></span>
      </div>
      <h5
        class="mb-1"
        style="font-size: 15px; font-weight: 600; color: #fafafc"
      >
        Oluwaleye Taiwo
      </h5>
      <div class="" style="color: #8c8c8e; font-size: 12px">
        Full Stack Developer <br />
        Graphic Designer
      </div>
    </div>

    <div class="profile-info w-100 px-4">
      <ul class="list-unstyled mb-3 px-2">
        <li class="profile-info-list">
          <spans class="profile-info-title">Residence:</spans>
          <span class="profile-info-value">Lagos</span>
        </li>
        <li class="profile-info-list">
          <span class="profile-info-title">City:</span>
          <span class="profile-info-value">Ikorodu</span>
        </li>
        <li class="profile-info-list">
          <span class="profile-info-title">Telephone:</span
          ><span class="profile-info-value">+234 813 5441 945</span>
        </li>
        <li class="profile-info-list">
          <span class="profile-info-title">Email:</span
          ><span class="profile-info-value">Oluwaleyetaiwo8225@gmail.com</span>
        </li>
      </ul>

      <div class="art-divider mb-3"></div>

      <div class="w-100 px-3">
        <div class="mb-3 py-2">
          <div class="d-flex justify-content-between small mb-1">
            <span>HTML</span><span>95%</span>
          </div>
          <div class="progress mb-2" style="height: 6px">
            <div
              class="progress-bar bg-accent"
              :data-progress="'95%'"
              style="width: 95%"
            ></div>
          </div>
        </div>
        <div class="mb-3 py-2">
          <div class="d-flex justify-content-between small mb-1">
            <span>CSS</span><span>80%</span>
          </div>
          <div class="progress mb-2" style="height: 6px">
            <div
              class="progress-bar bg-accent"
              :data-progress="'80%'"
              style="width: 80%"
            ></div>
          </div>
        </div>
        <div class="mb-3 py-2">
          <div class="d-flex justify-content-between small mb-1">
            <span>JS</span><span>75%</span>
          </div>
          <div class="progress mb-2" style="height: 6px">
            <div
              class="progress-bar bg-accent"
              :data-progress="'75%'"
              style="width: 75%"
            ></div>
          </div>
        </div>

        <div class="mb-3 py-2">
          <div class="d-flex justify-content-between small mb-1">
            <span>VUE</span><span>80%</span>
          </div>
          <div class="progress mb-2" style="height: 6px">
            <div
              class="progress-bar bg-accent"
              :data-progress="'80%'"
              style="width: 80%"
            ></div>
          </div>
        </div>

        <div class="mb-3 py-2">
          <div class="d-flex justify-content-between small mb-1">
            <span>REACT</span><span>75%</span>
          </div>
          <div class="progress mb-2" style="height: 6px">
            <div
              class="progress-bar bg-accent"
              :data-progress="'75%'"
              style="width: 75%"
            ></div>
          </div>
        </div>

        <div class="mb-3 py-2">
          <div class="d-flex justify-content-between small mb-1">
            <span>NODE</span><span>75%</span>
          </div>
          <div class="progress mb-2" style="height: 6px">
            <div
              class="progress-bar bg-accent"
              :data-progress="'85%'"
              style="width: 85%"
            ></div>
          </div>
        </div>

        <div class="mb-3 py-2">
          <div class="d-flex justify-content-between small mb-1">
            <span>PHP</span><span>65%</span>
          </div>
          <div class="progress mb-2" style="height: 6px">
            <div
              class="progress-bar bg-accent"
              :data-progress="'65%'"
              style="width: 65%"
            ></div>
          </div>
        </div>

        <div class="mb-3 py-2">
          <div class="d-flex justify-content-between small mb-1">
            <span>PHOTOSHOP</span><span>80%</span>
          </div>
          <div class="progress mb-2" style="height: 6px">
            <div
              class="progress-bar bg-accent"
              :data-progress="'80%'"
              style="width: 80%"
            ></div>
          </div>
        </div>

        <div class="mb-3 py-2">
          <div class="d-flex justify-content-between small mb-1">
            <span>ILLUSTRATOR</span><span>65%</span>
          </div>
          <div class="progress mb-2" style="height: 6px">
            <div
              class="progress-bar bg-accent"
              :data-progress="'65%'"
              style="width: 65%"
            ></div>
          </div>
        </div>

        <div class="mb-3 py-2">
          <div class="d-flex justify-content-between small mb-1">
            <span>CORELDRAW</span><span>90%</span>
          </div>
          <div class="progress mb-2" style="height: 6px">
            <div
              class="progress-bar bg-accent"
              :data-progress="'90%'"
              style="width: 90%"
            ></div>
          </div>
        </div>
      </div>

      <!-- <div class="mb-3 small text-center">
        <div class="mb-1">
          <i class="bi bi-telephone me-2"></i>+1 234 567 890
        </div>
        <div class="mb-1">
          <i class="bi bi-envelope me-2"></i>artist@email.com
        </div>
        <div><i class="bi bi-globe me-2"></i>www.artistcarter.com</div>
      </div> -->

      <div class="art-divider mb-3"></div>

      <a
        href="#"
        class="w-100 mb-5 pb-5 d-flex text-start text-decoration-none text-uppercase fw-bold"
        style="color: #8c8c8e; font-size: 13px"
      >
        <i class="bi bi-download me-2"></i>Download CV
      </a>

      <div class="d-flex align-items-center social-links py-3">
        <a
          href="#"
          class="social-link me-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="bi bi-facebook"></i>
        </a>
        <a
          href="#"
          class="social-link me-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="bi bi-twitter"></i>
        </a>
        <a
          href="#"
          class="social-link me-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="bi bi-linkedin"></i>
        </a>
        <a
          href="#"
          class="social-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="bi bi-github"></i>
        </a>
      </div>
    </div>
  </aside>
</template>

<script setup>
import { onMounted } from "vue";

onMounted(() => {
  const bars = document.querySelectorAll(".progress-bar[data-progress]");
  bars.forEach((bar) => {
    const percent = bar.getAttribute("data-progress");
    bar.style.width = "0";
    setTimeout(() => {
      bar.style.transition = "width 2s cubic-bezier(.68,-0.55,.27,1.55)";
      bar.style.width = percent;
    }, 200);
  });
});
</script>

<style scoped>
/* .sidebar img {
  border: 3px solid #ffc107;
} */

.sidebar {
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: relative;
}

.profile {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  z-index: 2;
  background: linear-gradient(
    159deg,
    rgba(37, 37, 50, 0.98) 0%,
    rgba(35, 35, 45, 0.98) 100%
  );
}

.profile-info {
  flex: 1 1 auto;
  overflow-y: auto;
  background: #20202a;
  border-radius: 18px;
  box-shadow: 0 2px 16px 0 rgba(0, 0, 0, 0.1);
  padding: 1.2rem 1.1rem 1.1rem 1.1rem;
  margin-top: 10px;
  width: 100%;
  border: 1px solid #23232e;
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.profile-info ul {
  border-bottom: 1px solid #23232e;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
}
.profile-info .w-100.mb-3 {
  border-bottom: 1px solid #23232e;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
}
.profile-info .mb-3.small.text-center {
  border-bottom: 1px solid #23232e;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
}
.profile-info button {
  margin-top: 1rem;
}

.profile-info::-webkit-scrollbar {
  display: none;
}

.art-available-lamp {
  position: absolute;
  right: 16px;
  bottom: 19px;
  width: 16px;
  height: 16px;
  background: #ffc107;
  border-radius: 50%;
  box-shadow: 0 0 8px #ffc10799;
  z-index: 2;
  animation: pulse-lamp 1.2s infinite;
}

@keyframes pulse-lamp {
  0% {
    box-shadow: 0 0 8px #ffc10799, 0 0 0 0 #ffc10755;
  }
  70% {
    box-shadow: 0 0 16px #ffc107cc, 0 0 0 5px #ffc10722;
  }
  100% {
    box-shadow: 0 0 8px #ffc10799, 0 0 0 0 #ffc10700;
  }
}

.profile-info-list {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.profile-info-title {
  font-size: 13px;
}

.profile-info-value {
  color: #8c8c8e;
  font-size: 13px;
}

.art-divider {
  background: #8c8c8e;
  width: 100%;
  height: 1px;
  opacity: 0.3;
}

.progress-bar {
  transition: width 2s cubic-bezier(0.68, -0.55, 0.27, 1.55);
}

.social-links {
  position: absolute;
  bottom: 45px;
  left: 0;
  z-index: 5;
  width: 100%;
  background: linear-gradient(
    159deg,
    rgba(37, 37, 50, 0.98) 0%,
    rgba(35, 35, 45, 0.98) 100%
  );

  display: flex;
  justify-content: center;
  gap: 1rem;
  align-items: center;
}

.social-links a {
  color: #8c8c8e;
  transition: color 0.2s, transform 0.2s;
}
.social-links a:hover {
  color: #ffc107;
  transform: scale(1.2);
}
</style>
