import type { AuthenticatePlayerController } from '@player/interface-adapters/features/authenticate-player';
import type { InjectionKey } from 'vue';

export const PLAYER_AUTHENTICATION = Symbol(
  'PLAYER_AUTHENTICATION',
) as InjectionKey<AuthenticatePlayerController>;
