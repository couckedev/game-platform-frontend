import type { StateTree, Store } from "pinia";
import type { ViewModelPublisherPort } from "shared-interface-adapters";

export class PiniaViewModelPublisher<
  ViewModel extends StateTree,
> implements ViewModelPublisherPort<ViewModel> {
  constructor(private readonly store: Store<string, ViewModel, {}, {}>) {}

  publish(viewModel: ViewModel): void {
    this.store.$patch(viewModel);
  }
}
