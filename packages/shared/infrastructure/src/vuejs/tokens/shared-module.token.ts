import type { InjectionKey } from 'vue';
import type { SharedModule } from '../modules/index.js';

export const SHARED_MODULE = Symbol(
  'SHARED_MODULE',
) as InjectionKey<SharedModule>;
