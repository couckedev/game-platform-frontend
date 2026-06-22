import { Nickname, Player, PlayerId } from '@player/interface-adapters';
import type { AuthenticationStatusViewModel } from '@player/interface-adapters/view-models/authentication-status';
import type { CurrentPlayerViewModel } from '@player/interface-adapters/view-models/current-player';
import type {
  Resettable,
  SharedContext,
} from '@shared/infrastructure/acceptance-tests';
import {
  buildAuthenticatePlayerFeature,
  buildCommonDependencies,
} from '../composition';

export class PlayerContext implements Resettable {
  private readonly _playerRepository;
  private readonly _playerStore;

  constructor(public readonly _sharedContext: SharedContext) {
    const { playerRepository, playerStore } = buildCommonDependencies();
    this._playerRepository = playerRepository;
    this._playerStore = playerStore;
  }

  authenticatePlayer(): void {
    const { controller } = buildAuthenticatePlayerFeature({
      userAuthenticationChecker: this._sharedContext.identityProvider,
      authenticationStatusWriter: (viewModel: AuthenticationStatusViewModel) =>
        this._playerStore.writeAuthenticationStatus(viewModel),
      currentPlayerWriter: (viewModel: CurrentPlayerViewModel) =>
        this._playerStore.writeCurrentPlayer(viewModel),
      playerRpeository: this._playerRepository,
    });
    controller.handle();
  }

  get currentPlayer(): CurrentPlayerViewModel {
    return this._playerStore.selectCurrentPlayer();
  }

  get authenticationStatus(): AuthenticationStatusViewModel {
    return this._playerStore.selectAuthenticationStatus();
  }

  setAuthenticatedPlayer(nickname: string, playerId: string): void {
    this._playerRepository.currentPlayer = new Player(
      PlayerId.fromPersistence(playerId),
      Nickname.fromPersistence(nickname),
    );
  }

  getAuthenticatedPlayer(): Player | null {
    return this._playerRepository.currentPlayer;
  }

  reset(): void | Promise<void> {
    this._playerRepository.currentPlayer = null;
  }
}
