import { Nickname, Player, PlayerId } from '@player/interface-adapters';
import { describe, expect, it } from 'vitest';
import type { InMemoryPlayerDatasource } from './in-memory-player-datasource.interface';
import { InMemoryPlayerRepository } from './in-memory-player-repository.adapter';

describe('In memory player repository adapter', () => {
  describe('authenticate', () => {
    it('should return internal authenticated player', async () => {
      const playerDatasource: InMemoryPlayerDatasource = {
        currentPlayer: new Player(
          PlayerId.fromPersistence('playerId'),
          Nickname.fromPersistence('nickname'),
        ),
      };
      const playerRepository = new InMemoryPlayerRepository(playerDatasource);

      expect(playerRepository.getCurrentPlayer()).resolves.toStrictEqual(
        playerDatasource.currentPlayer,
      );
    });
  });
});
