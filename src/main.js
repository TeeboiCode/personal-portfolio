import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import "./style.css";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./custom.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
// Import Poppins font from Google Fonts
const poppins = document.createElement("link");
poppins.rel = "stylesheet";
poppins.href =
  "https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap";
document.head.appendChild(poppins);

import AboutMe from "./views/AboutMe.vue";
import Skills from "./views/Skills.vue";
import Services from "./views/Services.vue";
import Projects from "./views/Projects.vue";
import Testimonials from "./views/Testimonials.vue";
import PricingPlans from "./views/PricingPlans.vue";
import Contact from "./views/Contact.vue";
import Home from "./views/Home.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: AboutMe },
  { path: "/skills", component: Skills },
  { path: "/services", component: Services },
  { path: "/projects", component: Projects },
  { path: "/testimonials", component: Testimonials },
  { path: "/pricing", component: PricingPlans },
  { path: "/contact", component: Contact },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
