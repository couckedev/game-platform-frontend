import type { InMemoryPlayerDatasource } from '../../../../adapters/player-repository/in-memory';
import type { PlayerFeatures } from '../../features';
import type { PlayerRuntime } from '../../runtime';

export interface PlayerPublicDependencies {
  playerDatasource: InMemoryPlayerDatasource;
  features: PlayerFeatures;
  runtime: PlayerRuntime;
}
