import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // Define your routes here as you build each BC feature
    // Example:
    // {
    //   path: "/player",
    //   component: () => import("player-ui/PlayerPage.vue"),
    // },
  ],
});

export default router;
