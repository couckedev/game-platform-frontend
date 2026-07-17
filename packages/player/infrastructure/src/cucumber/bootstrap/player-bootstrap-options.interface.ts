import type { UserAuthenticationChecker } from '@player/interface-adapters';

export interface PlayerBootstrapOptions {
  userAuthenticationChecker: UserAuthenticationChecker;
}
