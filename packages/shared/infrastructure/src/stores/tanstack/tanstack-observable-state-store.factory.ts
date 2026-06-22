import { Store } from '@tanstack/store';
import { TanstackObservableStateStore } from './tanstack-observable-state-store';

export function createTanstackObservableStateStore<State>(
  initialState: State,
): TanstackObservableStateStore<State> {
  const tanstackStore = new Store<State>(initialState);
  return new TanstackObservableStateStore(tanstackStore);
}
