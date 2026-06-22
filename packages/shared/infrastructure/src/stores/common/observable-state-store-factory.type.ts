import type { ObservableStateStore } from './observable-state-store.interface';

export type ObservableStateStoreFactory = <State>(
  initialState: State,
) => ObservableStateStore<State>;
