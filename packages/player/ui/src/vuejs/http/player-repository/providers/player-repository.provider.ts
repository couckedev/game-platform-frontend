import { HttpPlayerRepository } from '@player/infrastructure/adapters';
import type { App } from 'vue';
import { usePlayerApiHttpClient } from '../../player-api/index.js';
import { PLAYER_REPOSITORY } from './player-repository.token.js';

export function providePlayerRepository(app: App) {
  const playerApiHttpClient = usePlayerApiHttpClient();
  app.provide(PLAYER_REPOSITORY, new HttpPlayerRepository(playerApiHttpClient));
}
