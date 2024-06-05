import { createWebHistory, createRouter } from "vue-router";
import HomePage from "./components/HomePage.vue";
import Repositories from "./components/Repositories.vue";

const routes = [
  { path: "/", component: HomePage },
  { path: "/repositories", component: Repositories },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
