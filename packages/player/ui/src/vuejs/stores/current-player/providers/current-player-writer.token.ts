import type { CurrentPlayerWriter } from '@player/interface-adapters/projections/current-player';
import type { InjectionKey } from 'vue';

export const CURRENT_PLAYER_WRITER = Symbol(
  'CURRENT_PLAYER_WRITER',
) as InjectionKey<CurrentPlayerWriter>;
