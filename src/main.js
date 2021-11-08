import { createApp } from "vue";
import App from "./App.vue";
import "./styles/app.css"; // Here
import { createRouter, createWebHistory } from "vue-router";

const routes = [{ path: "/", component: App }];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

const app = createApp(App);
app.use(router);
app.mount("#app");
