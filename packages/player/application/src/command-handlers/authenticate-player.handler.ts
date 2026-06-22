import type { EventBus } from '@couckedev/cqrs-core/ports';
import type { ICommandHandler } from '@couckedev/cqrs-core/types';
import { PlayerNotRegisteredError } from '@player/domain/errors';
import type { PlayerRepository } from '@player/domain/ports';
import type { AuthenticatePlayerCommand } from '../commands/authenticate-player.command.js';

export class AuthenticatePlayerHandler
  implements ICommandHandler<AuthenticatePlayerCommand>
{
  constructor(
    private readonly playerRepository: PlayerRepository,
    private readonly eventBus: EventBus,
  ) {}

  async execute(): Promise<void> {
    const currentPlayer = await this.playerRepository.getCurrentPlayer();
    if (currentPlayer === null) {
      throw new PlayerNotRegisteredError();
    }
    currentPlayer.markAsAuthenticated();
    for (const event of currentPlayer.pendingEvents) {
      this.eventBus.publish(event);
    }
  }
}
