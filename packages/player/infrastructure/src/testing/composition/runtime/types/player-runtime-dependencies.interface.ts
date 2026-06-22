import type { ObservableStateStoreFactory } from '@shared/infrastructure';
import type { InMemoryPlayerDatasource } from '../../../../adapters/player-repository/in-memory';

export interface PlayerRuntimeDependencies {
  storeFactory: ObservableStateStoreFactory;
  playerDatasource: InMemoryPlayerDatasource;
}
