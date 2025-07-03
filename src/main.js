import { createPinia } from "pinia";
import { createApp } from "vue";
import App from "./App.vue";
import "./style.css";

// ✅ Step 1: create Vue app
const app = createApp(App);

// ✅ Step 2: create pinia instance
const pinia = createPinia();

// ✅ Step 3: register Pinia into Vue app
app.use(pinia);

// ✅ Step 4: manually provide it for `inject("pinia")` to work in external libraries
app.provide("pinia", pinia); // ⭐️ THIS IS IMPORTANT

// ✅ Step 5: mount your app
app.mount("#app");
