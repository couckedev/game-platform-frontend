import { describe, expect, it } from 'vitest';
import { PlayerId } from './player-id.value-object.js';

describe(PlayerId.name, () => {
  describe(PlayerId.fromPersistence, () => {
    it('should create new player id with persisted value', () => {
      const playerIdPersistedValue = 'some-player-id';

      const playerIdVO = PlayerId.fromPersistence(playerIdPersistedValue);

      expect(playerIdVO.value).toStrictEqual(playerIdPersistedValue);
    });
  });
});
