import type { ViewModelPublisherPort } from '@shared/interface-adapters';
import type { StateTree, Store } from 'pinia';

export class PiniaViewModelPublisher<ViewModel extends StateTree>
  implements ViewModelPublisherPort<ViewModel>
{
  constructor(private readonly store: Store<string, ViewModel>) {}

  publish(viewModel: ViewModel): void {
    this.store.$patch(viewModel);
  }
}
