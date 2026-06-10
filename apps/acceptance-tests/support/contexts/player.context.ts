import type { Resettable } from "./resettable.interface";
import { AuthenticatePlayerUseCase } from "player-application/use-cases";
import { InMemoryPlayerRepository } from "player-infrastructure/adapters";
import { InMemoryViewModelPublisher } from "shared-infrastructure";
import { PlayerAuthenticationPresenter } from "player-interface-adapters/presenters";
import type { PlayerAuthenticationViewModel } from "player-interface-adapters/view-models";

export class PlayerContext implements Resettable {
  externalAccountId: string | null = null;
  private _playerRepository: InMemoryPlayerRepository | null = null;
  private _authenticatePlayerUseCase: AuthenticatePlayerUseCase | null = null;
  private _playerAuthenticationViewModelPublisher: InMemoryViewModelPublisher<PlayerAuthenticationViewModel> | null =
    null;

  constructor() {
    this.reset();
  }

  initPlayerRepository(): void {
    this._playerRepository = new InMemoryPlayerRepository();
  }

  get playerRepository(): InMemoryPlayerRepository {
    if (this._playerRepository === null) {
      throw new Error("playerRepository must be initialized before using it");
    }
    return this._playerRepository;
  }

  initAuthenticatePlayerUseCase(): void {
    this._authenticatePlayerUseCase = new AuthenticatePlayerUseCase(
      this.playerRepository,
      new PlayerAuthenticationPresenter(
        this.playerAuthenticationViewModelPublisher,
      ),
    );
  }

  get authenticatePlayerUseCase(): AuthenticatePlayerUseCase {
    if (this._authenticatePlayerUseCase === null) {
      throw new Error(
        "authenticatePlayerUseCase must be initialized before using it",
      );
    }
    return this._authenticatePlayerUseCase;
  }

  initPlayerAuthenticationViewModelPublisher(): void {
    this._playerAuthenticationViewModelPublisher =
      new InMemoryViewModelPublisher<PlayerAuthenticationViewModel>();
  }

  get playerAuthenticationViewModelPublisher(): InMemoryViewModelPublisher<PlayerAuthenticationViewModel> {
    if (this._playerAuthenticationViewModelPublisher === null) {
      throw new Error("viewModelPublisher must be initialized before using it");
    }
    return this._playerAuthenticationViewModelPublisher;
  }

  async authenticatePlayer(): Promise<void> {
    return await this.authenticatePlayerUseCase.execute();
  }

  reset(): void {
    this.externalAccountId = null;
    this.initPlayerAuthenticationViewModelPublisher();
    this.initPlayerRepository();
    this.initAuthenticatePlayerUseCase();
  }
}
