import { createPinia } from 'pinia';
import type { App } from 'vue';
import { STORE_INSTANCE } from './store-instance.token.js';

export function provideStoreInstance(app: App) {
  const storeInstance = createPinia();
  app.provide(STORE_INSTANCE, storeInstance);
}
