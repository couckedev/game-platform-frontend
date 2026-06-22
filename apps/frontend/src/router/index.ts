import { createRouter, createWebHistory } from 'vue-router';
import { DefaultLayout } from '../app/layout/index.js';
import { HomePage, PlayerRegistrationPage } from '../app/pages/index.js';

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
          path: '/register',
          name: 'register',
          component: PlayerRegistrationPage,
          beforeEnter: [],
        },
      ],
    },
  ],
});

export default router;
