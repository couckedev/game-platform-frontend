import type { UserAuthenticationChecker } from '@player/interface-adapters/features/authenticate-player';

export interface PlayerTestingModuleConfig {
  userAuthenticationChecker: UserAuthenticationChecker;
}
