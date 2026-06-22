import type { Authentication } from '../../../authentication/common';
import type { ObservableStateStoreFactory } from '../../../stores/common';

export interface SharedRuntime {
  authentication: Authentication;
  storeFactory: ObservableStateStoreFactory;
}
