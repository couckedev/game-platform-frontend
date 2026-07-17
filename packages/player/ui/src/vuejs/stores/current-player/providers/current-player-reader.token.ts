import type { CurrentPlayerViewModel } from '@player/interface-adapters/projections/current-player';
import type { InjectionKey, Ref } from 'vue';

export const CURRENT_PLAYER_READER = Symbol(
  'CURRENT_PLAYER_READER',
) as InjectionKey<Ref<CurrentPlayerViewModel>>;
