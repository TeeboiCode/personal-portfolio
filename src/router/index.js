import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import AboutMe from "../views/AboutMe.vue";
import Skills from "../views/Skills.vue";
import Services from "../views/Services.vue";
import Projects from "../views/Projects.vue";
import Testimonials from "../views/Testimonials.vue";
import PricingPlans from "../views/PricingPlans.vue";
import Contact from "../views/Contact.vue";
import Resume from "../views/Resume.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: AboutMe },
  { path: "/skills", component: Skills },
  { path: "/services", component: Services },
  { path: "/projects", component: Projects },
  { path: "/testimonials", component: Testimonials },
  { path: "/pricing", component: PricingPlans },
  { path: "/contact", component: Contact },
  {
    path: "/portfolio",
    name: "Portfolio",
    component: () => import("../views/portfolio.vue"),
  },
  { path: "/resume", name: "Resume", component: Resume },
  // You can add more routes here as needed
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
