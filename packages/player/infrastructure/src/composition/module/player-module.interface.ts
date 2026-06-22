import type { PlayerRegistration } from '@player/interface-adapters/view-models';
import type { RegisterPlayerFeature } from '../types';

export interface PlayerModule {
  registerPlayer: RegisterPlayerFeature;
  getPlayerRegistration: () => PlayerRegistration;
}
