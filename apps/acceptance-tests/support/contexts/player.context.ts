import {
  AuthenticatePlayerCommand,
  AuthenticatePlayerHandler,
  PlayerAuthenticatedProjector,
} from '@player/application';
import type { Player } from '@player/domain';
import { PlayerAuthenticatedEvent } from '@player/domain';
import {
  InMemoryPlayerRepository,
  usePlayerStore,
} from '@player/infrastructure';
import { AuthenticatePlayerController } from '@player/interface-adapters';
import { createPinia } from 'pinia';
import { InitializationError } from '../errors/initialization.error.js';
import type { Resettable } from './resettable.interface.js';
import type { SharedContext } from './shared.context.js';

export class PlayerContext implements Resettable {
  public _providedExternalAccountId: string | null = null;
  private readonly pinia = createPinia();
  public readonly playerStore = usePlayerStore(this.pinia);
  private readonly playerRepository: InMemoryPlayerRepository;
  private readonly authenticatePlayerController: AuthenticatePlayerController;

  constructor(private readonly sharedContext: SharedContext) {
    this.playerRepository = new InMemoryPlayerRepository();
    this.authenticatePlayerController = new AuthenticatePlayerController(
      this.sharedContext.commandBus,
    );
    this.subscribeCommands();
    this.subscribeEvents();
  }

  private subscribeCommands() {
    this.sharedContext.commandBus.subscribe(
      AuthenticatePlayerCommand.name,
      new AuthenticatePlayerHandler(
        this.playerRepository,
        this.sharedContext.eventBus,
      ),
    );
  }

  private subscribeEvents() {
    this.sharedContext.eventBus.subscribe(
      PlayerAuthenticatedEvent.name,
      new PlayerAuthenticatedProjector(this.playerStore),
    );
  }

  get providedExternalAccountId(): string {
    if (this._providedExternalAccountId === null) {
      throw new InitializationError('providedExternalAccountId');
    }
    return this._providedExternalAccountId;
  }

  async requestAuthentication(): Promise<void> {
    await this.authenticatePlayerController.handle();
  }

  setCurrentPlayer(player: Player) {
    this.playerRepository.currentPlayer = player;
  }

  set providedExternalAccountId(externalAccountId: string | null) {
    this._providedExternalAccountId = externalAccountId;
  }

  get currentPlayer(): Player {
    const currentPlayer = this.playerRepository.currentPlayer;
    if (currentPlayer === null) {
      throw new InitializationError('currentPlayer');
    }
    return currentPlayer;
  }

  reset(): void | Promise<void> {
    this.providedExternalAccountId = null;
  }
}
