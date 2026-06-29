import type { CurrentPlayerViewModel } from '@player/interface-adapters/authenticate-player';
import type { ReadonlyViewModelStore } from '@shared/interface-adapters';
import type { ServiceIdentifier } from 'inversify';

export const CURRENT_PLAYER_STORE = Symbol('CURRENT_PLAYER_STORE') as ServiceIdentifier<
  ReadonlyViewModelStore<CurrentPlayerViewModel>
>;
