import { Nickname, Player, PlayerId } from '@player/interface-adapters';
import {
  AuthenticatedHttpClient,
  HttpError,
} from '@shared/infrastructure/http/common';
import { FakeHttpClient } from '@shared/infrastructure/http/fake';
import { describe, expect, it } from 'vitest';
import { PlayerApiRoutes } from '../../../player-api';

import { HttpPlayerRepository } from './http-player-repository.adapter';

describe('Axios adapter for player repository', () => {
  const httpClient = new FakeHttpClient();
  const authenticatedHttpClient = new AuthenticatedHttpClient(httpClient, {
    getAccessToken: async () => {
      return 'access-token';
    },
  });
  const playerRepository = new HttpPlayerRepository(authenticatedHttpClient);

  describe('authenticate', () => {
    it('should return authenticated player', async () => {
      const response = {
        playerId: 'playerId',
        nickname: 'nickname',
      } as const;
      httpClient.registerGet(PlayerApiRoutes.AUTHENTICATE, response);

      const player = playerRepository.getCurrentPlayer();

      const expectedPlayer = new Player(
        PlayerId.fromPersistence(response.playerId),
        Nickname.fromPersistence(response.nickname),
      );
      expect(player).resolves.toStrictEqual(expectedPlayer);
    });

    it('should return null on 404 not found error', () => {
      httpClient.registerGetError(
        PlayerApiRoutes.AUTHENTICATE,
        new HttpError(404, PlayerApiRoutes.AUTHENTICATE),
      );

      const player = playerRepository.getCurrentPlayer();

      expect(player).resolves.toBeNull();
    });
  });
});
