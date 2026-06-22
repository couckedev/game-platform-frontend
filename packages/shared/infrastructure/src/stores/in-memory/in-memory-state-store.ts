import type { ObservableValue } from '../../observability/common';
import type { ObservableStateStore } from '../common';

export class InMemoryStateStore<State> implements ObservableStateStore<State> {
  constructor(private _state: State) {}

  get(): State {
    return this._state;
  }

  put(mutator: (currentState: State) => State): void {
    this._state = mutator(this._state);
  }

  select<ViewModel>(
    selector: (state: State) => ViewModel,
  ): ObservableValue<ViewModel> {
    return {
      get: () => selector(this._state),
      subscribe: (_listener: () => void) => () => {},
    };
  }
}
