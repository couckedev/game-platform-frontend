import type { CurrentPlayerViewModel } from './current-player.view-model.js';

export interface CurrentPlayerStore {
  readonly viewModel: CurrentPlayerViewModel;
  write(viewModel: CurrentPlayerViewModel): void;
}
