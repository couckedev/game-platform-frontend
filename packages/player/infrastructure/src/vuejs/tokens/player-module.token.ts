import type { InjectionKey } from 'vue';
import type { PlayerModule } from '../modules/player-module.interface.js';

export const PLAYER_MODULE = Symbol(
  'PLAYER_MODULE',
) as InjectionKey<PlayerModule>;
