import { Player } from '@player/domain/entities';
import { describe, expect, it } from 'vitest';
import { InMemoryPlayerRepository } from './in-memory-player-repository.adapter.js';

describe('In memory player repository adapter', () => {
  describe('authenticate', () => {
    it('should return internal authenticated player', async () => {
      const playerRepository = new InMemoryPlayerRepository();
      playerRepository.currentPlayer = new Player('playerId', 'nickname');

      expect(playerRepository.getCurrentPlayer()).resolves.toStrictEqual(
        playerRepository.currentPlayer,
      );
    });
  });
});
