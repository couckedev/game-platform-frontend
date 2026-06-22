import type { InjectionKey } from 'vue';
import type { PlayerModule as PlayerModuleType } from '../../composition';

export const PlayerModule = Symbol(
  'PlayerModule',
) as InjectionKey<PlayerModuleType>;
