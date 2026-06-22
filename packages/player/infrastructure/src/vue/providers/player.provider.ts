import type { App } from 'vue';
import {
  createPlayerFeatures,
  createPlayerPublic,
  createPlayerRuntime,
  type PlayerRuntimeConfig,
  type PlayerRuntimeDependencies,
} from '../composition';
import { PlayerPublic } from './tokens';

export function providePlayer(
  app: App,
  dependencies: PlayerRuntimeDependencies,
  config: PlayerRuntimeConfig,
) {
  const playerRuntime = createPlayerRuntime(dependencies, config);
  const playerFeatures = createPlayerFeatures(playerRuntime);
  const playerPublic = createPlayerPublic(playerRuntime, playerFeatures);

  app.provide(PlayerPublic, playerPublic);
  return playerPublic;
}
