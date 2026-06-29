import type { ReadonlyViewModelStore } from './readonly-view-model-store.port.js';

export interface WritableViewModelStore<ViewModel>
  extends ReadonlyViewModelStore<ViewModel> {
  write(viewModel: ViewModel): void;
}
