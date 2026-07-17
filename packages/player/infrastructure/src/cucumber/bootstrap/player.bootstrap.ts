import { InMemoryPlayerRepository } from '../../adapters/index.js';
import { provideAuthenticatePlayer } from '../features/authenticate-player/authenticate-player.provider.js';
import {
  createAuthenticationStatusPresenter,
  createCurrentPlayerPresenter,
} from '../presenters/index.js';
import type { PlayerBootstrapOptions } from './player-bootstrap-options.interface.js';

export function bootstrapPlayer({
  userAuthenticationChecker,
}: PlayerBootstrapOptions) {
  const playerRepository = new InMemoryPlayerRepository();
  const currentPlayerPresenter = createCurrentPlayerPresenter();
  const authenticationStatusPresenter = createAuthenticationStatusPresenter();
  const authenticatePlayer = provideAuthenticatePlayer({
    playerRepository,
    userAuthenticationChecker,
    currentPlayerPresenter,
    authenticationStatusPresenter,
  });

  return {
    authenticatePlayer,
    currentPlayerPresenter,
    authenticationStatusPresenter,
    playerRepository,
  };
}
