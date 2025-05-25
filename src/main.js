import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./style.css";
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

createApp(App).use(router).mount("#app");
