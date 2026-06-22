import type { InMemoryPlayerDatasource } from '../../../adapters/player-repository/in-memory';
import { createPlayerFeatures } from '../features';
import { createPlayerPublic } from '../public';
import { createPlayerRuntime } from '../runtime';
import type { PlayerTestingDependencies } from './types/player-testing-dependencies.interface';

export function createPlayerTesting(dependencies: PlayerTestingDependencies) {
  const playerDatasource: InMemoryPlayerDatasource = { currentPlayer: null };
  const playerRuntime = createPlayerRuntime({
    ...dependencies,
    playerDatasource,
  });
  const playerFeatures = createPlayerFeatures(playerRuntime);
  const playerPublic = createPlayerPublic({
    runtime: playerRuntime,
    features: playerFeatures,
    playerDatasource,
  });

  return { playerPublic };
}
