import type { Pinia } from 'pinia';
import { inject } from 'vue';
import { STORE_INSTANCE } from '../providers/index.js';

export function useStore(): Pinia {
  const storeInstance = inject(STORE_INSTANCE);
  if (storeInstance === undefined) {
    throw new Error('Store instance has not been provided');
  }
  return storeInstance;
}
