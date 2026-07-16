import type { InjectionKey } from 'vue';
import type { Authentication } from './authentication.interface.js';

export const AUTHENTICATION = Symbol(
  'AUTHENTICATION',
) as InjectionKey<Authentication>;
