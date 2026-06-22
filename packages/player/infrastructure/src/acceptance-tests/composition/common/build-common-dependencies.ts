import { InMemoryPlayerRepository } from '../../../adapters';
import { InMemoryPlayerStore } from '../../../stores/in-memory';
import type { ComonDependencies } from './common-dependencies.interface';

export function buildCommonDependencies(): ComonDependencies {
  const playerRepository = new InMemoryPlayerRepository();
  const playerStore = new InMemoryPlayerStore({
    currentPlayer: null,
    authenticationStatus: { isLoading: true, isAuthenticated: false },
  });
  return {
    playerRepository,
    playerStore,
  };
}
