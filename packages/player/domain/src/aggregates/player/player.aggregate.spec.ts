import { describe, expect, it } from 'vitest';
import { PlayerAuthenticatedEvent } from '../../events/index.js';
import { Player } from './player.aggregate.js';

describe('Player aggregate', () => {
  describe('markAsAuthenticated', () => {
    it('should produce player authenticated domain event', () => {
      const playerId = 'playerId';
      const nickname = 'nickname';
      const player = new Player(playerId, nickname);

      player.markAsAuthenticated();

      const playerAuthenticatedEvent = new PlayerAuthenticatedEvent(
        playerId,
        nickname,
      );
      expect(player.pendingEvents).toContainEqual(playerAuthenticatedEvent);
    });
  });
});
