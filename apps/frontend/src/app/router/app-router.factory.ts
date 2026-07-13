import {
  AUTHENTICATE_PLAYER_CONTROLLER,
  CURRENT_PLAYER_STORE,
  type PlayerModule,
} from '@player/infrastructure';
import { createRouter, createWebHistory } from 'vue-router';
import { AppLayout } from '../layout/index.js';
import { HomePage, LoginPage, PlayerRegistrationPage } from '../pages/index.js';
import { guestGuard, notRegisteredPlayerGuard } from './guards/index.js';

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
            beforeEnter: [notRegisteredPlayerGuard(playerModule)],
          },
          {
            path: '/login',
            name: 'login',
            component: LoginPage,
            beforeEnter: [guestGuard(playerModule)],
          },
          {
            path: '/register',
            name: 'register',
            component: PlayerRegistrationPage,
          },
        ],
      },
    ],
  });
  router.beforeEach(async () => {
    const store = playerModule.get(CURRENT_PLAYER_STORE);
    if (store.viewModel.status === 'LOADING') {
      await playerModule.get(AUTHENTICATE_PLAYER_CONTROLLER).handle();
    }
  });
  return router;
}
