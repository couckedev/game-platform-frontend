import {
  Nickname,
  Player,
  PlayerId,
  type PlayerRepository,
} from '@player/interface-adapters';
import type { AuthenticatedHttpClient } from '@shared/infrastructure/http/common';
import {
  PlayerApiRoutes,
  type PlayerAuthenticatedResponse,
} from '../../../player-api';

export class HttpPlayerRepository implements PlayerRepository {
  constructor(
    private readonly authenticatedHttpClient: AuthenticatedHttpClient,
  ) {}

  async getCurrentPlayer(): Promise<Player> {
    const authentication =
      await this.authenticatedHttpClient.get<PlayerAuthenticatedResponse>(
        PlayerApiRoutes.AUTHENTICATE,
      );
    const { playerId, nickname } = authentication;
    return new Player(
      PlayerId.fromPersistence(playerId),
      Nickname.fromPersistence(nickname),
    );
  }
}
