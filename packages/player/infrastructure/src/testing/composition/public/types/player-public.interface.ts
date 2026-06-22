import type { Player } from '@player/interface-adapters';
import type { AuthenticationStatusViewModel } from '@player/interface-adapters/view-models/authentication-status';
import type { CurrentPlayerViewModel } from '@player/interface-adapters/view-models/current-player';
import type { ObservableValue } from '@shared/infrastructure/observability/common';
import type { PlayerFeatures } from '../../features';

export interface PlayerPublic {
  viewModels: {
    authenticationStatus: ObservableValue<AuthenticationStatusViewModel>;
    currentPlayer: ObservableValue<CurrentPlayerViewModel>;
  };
  features: PlayerFeatures;
  setCurrentPlayer: (currentPlayer: Player | null) => void;
}
