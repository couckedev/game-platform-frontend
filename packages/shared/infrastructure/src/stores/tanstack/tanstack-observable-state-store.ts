import type { Store } from '@tanstack/store';
import type { ObservableValue } from '../../observability/common';
import type { ObservableStateStore } from '../common';

export class TanstackObservableStateStore<State>
  implements ObservableStateStore<State>
{
  constructor(private readonly store: Store<State>) {}

  get(): State {
    return this.store.state;
  }

  select<ViewModel>(
    selector: (state: State) => ViewModel,
  ): ObservableValue<ViewModel> {
    return {
      get: () => selector(this.store.state),
      subscribe: (listener) => {
        const subscription = this.store.subscribe(listener);
        return () => subscription.unsubscribe();
      },
    };
  }

  put(mutator: (currentState: State) => State): void {
    this.store.setState(mutator);
  }
}
