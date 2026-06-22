import { describe, expect, it } from 'vitest';
import { Nickname } from './nickname.value-object.js';

describe(Nickname.name, () => {
  describe(Nickname.fromPersistence, () => {
    it('should create new nickname with persisted value', () => {
      const nicknamePersistedValue = 'nickname';

      const nicknameVO = Nickname.fromPersistence(nicknamePersistedValue);

      expect(nicknameVO.value).toStrictEqual(nicknamePersistedValue);
    });
  });
});
