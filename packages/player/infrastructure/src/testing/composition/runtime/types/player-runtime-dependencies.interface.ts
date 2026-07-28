import type {
  Authentication,
  ObservableStateStoreFactory,
} from '@shared/infrastructure';
import type { InMemoryPlayerDatasource } from '../../../../adapters/player-repository/in-memory';

export interface PlayerRuntimeDependencies {
  authentication: Authentication;
  storeFactory: ObservableStateStoreFactory;
  playerDatasource: InMemoryPlayerDatasource;
}
