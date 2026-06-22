import { createRouter, createWebHistory } from 'vue-router';
import { DefaultLayout } from '../app/layout/index.js';
import { HomePage, PlayerLoginPage } from '../app/pages/index.js';
import { guestGuard } from './guards/guest.guard.js';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      component: DefaultLayout,
      path: '/',
      children: [
        {
          path: '',
          name: 'home',
          component: HomePage,
          beforeEnter: [],
        },
        {
          path: '/login',
          name: 'login',
          component: PlayerLoginPage,
          beforeEnter: [guestGuard()],
        },
      ],
    },
  ],
});

export default router;
