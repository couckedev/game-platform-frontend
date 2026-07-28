import type { Authentication } from '@shared/infrastructure/authentication/common';
import type { HttpClientFactory } from '@shared/infrastructure/http/common';
import type { ObservableStateStoreFactory } from '@shared/infrastructure/stores/common';

export interface PlayerRuntimeDependencies {
  authentication: Authentication;
  httpClientFactory: HttpClientFactory;
  storeFactory: ObservableStateStoreFactory;
}
