import { createInMemoryAuthentication } from '../../authentication/in-memory';
import { InMemoryStateStore } from '../../stores/in-memory';

export function createSharedRuntime() {
  const authentication = createInMemoryAuthentication();
  const storeFactory = <State>(state: State) => new InMemoryStateStore(state);
  return {
    authentication,
    storeFactory,
  };
}
