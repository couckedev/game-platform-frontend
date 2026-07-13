import { Player } from '@player/domain/entities';
import type { PlayerRepository } from '@player/domain/ports';
import {
  type AuthenticatedHttpClient,
  HttpError,
} from '@shared/infrastructure/http';
import {
  PlayerApiRoutes,
  type PlayerAuthenticatedResponse,
} from '../../../player-api/index.js';

export class HttpPlayerRepository implements PlayerRepository {
  constructor(
    private readonly authenticatedHttpClient: AuthenticatedHttpClient,
  ) {}

  async getCurrentPlayer(): Promise<Player | null> {
    try {
      const authentication =
        await this.authenticatedHttpClient.get<PlayerAuthenticatedResponse>(
          PlayerApiRoutes.AUTHENTICATE,
        );
      const { playerId, nickname } = authentication;
      return new Player(playerId, nickname);
    } catch (error) {
      if (error instanceof HttpError) {
        if (error.status === 404) {
          return null;
        }
      }
      throw error;
    }
  }
}
