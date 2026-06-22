import type { InjectionKey } from 'vue';
import type { PlayerPublic as PlayerPublicType } from '../../composition';

export const PlayerPublic = Symbol(
  'PlayerPublic',
) as InjectionKey<PlayerPublicType>;
