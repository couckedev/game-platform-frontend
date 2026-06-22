import type { Nickname, PlayerId } from '../../value-objects/index.js';

export class Player {
  constructor(
    public readonly playerId: PlayerId,
    public readonly nickname: Nickname,
  ) {}
}
