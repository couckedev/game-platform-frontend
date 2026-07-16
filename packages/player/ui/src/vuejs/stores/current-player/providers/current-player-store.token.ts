import type { CurrentPlayerStore } from '@player/interface-adapters/projections/current-player';
import type { InjectionKey } from 'vue';

export const CURRENT_PLAYER_STORE = Symbol(
  'CURRENT_PLAYER_STORE',
) as InjectionKey<CurrentPlayerStore>;
