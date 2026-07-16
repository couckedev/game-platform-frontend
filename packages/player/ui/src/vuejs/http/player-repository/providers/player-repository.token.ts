import type { PlayerRepository } from '@player/interface-adapters/features/authenticate-player';
import type { InjectionKey } from 'vue';

export const PLAYER_REPOSITORY = Symbol(
  'PLAYER_REPOSITORY',
) as InjectionKey<PlayerRepository>;
