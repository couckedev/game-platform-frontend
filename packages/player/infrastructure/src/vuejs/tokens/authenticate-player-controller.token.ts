import type { AuthenticatePlayerController } from '@player/interface-adapters';
import type { ServiceIdentifier } from 'inversify';

export const AUTHENTICATE_PLAYER_CONTROLLER = Symbol(
  'AUTHENITCATE_PLAYER_CONTROLLER',
) as ServiceIdentifier<AuthenticatePlayerController>;
