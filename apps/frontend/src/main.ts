import './styles.css';
import { usePlayer } from '@player/ui/vuejs/public';
import { registerSharedModule } from '@shared/ui/composition/vuejs';
import { createApp } from 'vue';
import { AppConfig } from './app/config/app.config.js';
import { App, BootstrapError } from './app/index.js';
import { createAppRouter } from './app/router/index.js';

try {
  const app = createApp(App);
  const { register: registerPlayerModule } = usePlayer();
  const sharedModule = await registerSharedModule(app, AppConfig);
  const playerModule = registerPlayerModule(app, AppConfig);
  app.use(createAppRouter(playerModule));
  app.mount('#root');
} catch (error) {
  createApp(BootstrapError).mount('#root');
  throw error;
}
