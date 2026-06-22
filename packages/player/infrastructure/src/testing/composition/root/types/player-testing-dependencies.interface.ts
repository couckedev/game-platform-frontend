import type {
  Authentication,
  ObservableStateStoreFactory,
} from '@shared/infrastructure';

export interface PlayerTestingDependencies {
  authentication: Authentication;
  storeFactory: ObservableStateStoreFactory;
}
