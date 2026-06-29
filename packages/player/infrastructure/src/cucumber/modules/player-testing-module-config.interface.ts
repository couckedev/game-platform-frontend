import type { UserAuthenticationChecker } from '@player/domain';

export interface PlayerTestingModuleConfig {
  userAuthenticationChecker: UserAuthenticationChecker;
}
