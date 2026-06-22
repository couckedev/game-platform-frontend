import type { PlayerRepository } from '@player/interface-adapters';
import type { ObservableStateStore } from '@shared/infrastructure/stores/common';
import type { PlayerState } from '../../../../stores/common';

export interface PlayerRuntime {
  readonly playerRepository: PlayerRepository;
  readonly playerStore: ObservableStateStore<PlayerState>;
}
