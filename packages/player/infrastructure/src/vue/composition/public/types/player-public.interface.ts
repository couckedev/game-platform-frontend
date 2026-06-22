import type { AuthenticationStatusViewModel } from '@player/interface-adapters/view-models/authentication-status';
import type { ObservableValue } from '@shared/infrastructure/observability/common';
import type { PlayerFeatures } from '../../features';

export interface PlayerPublic {
  viewModels: {
    authenticationStatus: ObservableValue<AuthenticationStatusViewModel>;
  };
  features: PlayerFeatures;
}
