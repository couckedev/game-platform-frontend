import type { AuthenticationStatusViewModel } from '@player/interface-adapters/projections/authentication-status';
import type { App } from 'vue';
import type { PlayerModuleConfig } from '@/vuejs/composition/player-module-config.interface.js';

export interface UsePlayerResult {
  register: (app: App, config: PlayerModuleConfig) => void;
  authenticationStatus: AuthenticationStatusViewModel;
}
