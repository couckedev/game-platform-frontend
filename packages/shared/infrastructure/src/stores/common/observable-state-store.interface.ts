import type { ObservableValue } from '../../observability/common';

export interface ObservableStateStore<State> {
  get(): State;
  put(mutator: (currentState: State) => State): void;
  select<ViewModel>(
    selector: (state: State) => ViewModel,
  ): ObservableValue<ViewModel>;
}
