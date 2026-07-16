import type { App } from 'vue';
import { provideHttpClientFactory } from '@/http/vuejs/index.js';
import { provideStoreInstance } from '@/stores/vuejs/index.js';
import { provideAuthentication } from '../../authentication/vuejs/index.js';
import type { SharedModuleConfig } from './shared-module-config.interface.js';

export async function registerSharedModule(
  app: App,
  config: SharedModuleConfig,
) {
  await provideAuthentication(app, config);
  provideHttpClientFactory(app);
  provideStoreInstance(app);
}
