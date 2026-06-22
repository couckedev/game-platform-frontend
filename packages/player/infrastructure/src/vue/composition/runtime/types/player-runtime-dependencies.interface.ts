import type { HttpClientFactory } from '@shared/infrastructure/http/common';
import type { ObservableStateStoreFactory } from '@shared/infrastructure/stores/common';

export interface PlayerRuntimeDependencies {
  httpClientFactory: HttpClientFactory;
  storeFactory: ObservableStateStoreFactory;
}
