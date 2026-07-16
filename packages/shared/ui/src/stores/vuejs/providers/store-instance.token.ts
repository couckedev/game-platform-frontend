import type { Pinia } from 'pinia';
import type { InjectionKey } from 'vue';

export const STORE_INSTANCE = Symbol('STORE_INSTANCE') as InjectionKey<Pinia>;
