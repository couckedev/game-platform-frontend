import type { IEventHandler } from '@couckedev/cqrs-core/types';
import type { PlayerAuthenticatedEvent } from '@player/domain/events';
import type { PlayerStore } from '../ports/index.js';
import type { PlayerAuthenticationReadModel } from '../read-models/player-authentication.read-model.js';

export class PlayerAuthenticatedProjector
  implements IEventHandler<PlayerAuthenticatedEvent>
{
  constructor(private readonly playerStore: PlayerStore) {}

  async handle(event: PlayerAuthenticatedEvent): Promise<void> {
    const readModel = this.projectPlayerAuthenticated(event);
    this.playerStore.setPlayerAuthentication(readModel);
  }

  private projectPlayerAuthenticated(
    event: PlayerAuthenticatedEvent,
  ): PlayerAuthenticationReadModel {
    return {
      status: 'AUTHENTICATED',
      currentPlayer: {
        nickname: event.nickname,
        playerId: event.playerId,
      },
    };
  }
}
