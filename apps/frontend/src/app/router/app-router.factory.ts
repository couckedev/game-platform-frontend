import type { PlayerModule } from '@player/infrastructure';
import { createRouter, createWebHistory } from 'vue-router';
import { AppLayout } from '../layout/index.js';
import { HomePage, LoginPage } from '../pages/index.js';
import { guestGuard } from './guards/index.js';

export function createAppRouter(playerModule: PlayerModule) {
  const router = createRouter({
    history: createWebHistory(),
    routes: [
      {
        component: AppLayout,
        path: '/',
        children: [
          {
            path: '',
            name: 'home',
            component: HomePage,
          },
          {
            path: '/login',
            name: 'login',
            component: LoginPage,
            beforeEnter: [guestGuard(playerModule)],
          },
        ],
      },
    ],
  });

  return router;
}
