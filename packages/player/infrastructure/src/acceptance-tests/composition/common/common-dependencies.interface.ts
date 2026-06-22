import type { InMemoryPlayerRepository } from '../../../adapters';
import type { InMemoryPlayerStore } from '../../../stores';

export interface ComonDependencies {
  playerRepository: InMemoryPlayerRepository;
  playerStore: InMemoryPlayerStore;
}
