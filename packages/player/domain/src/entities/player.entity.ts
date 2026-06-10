import type { Nickname } from "../value-objects";

export class Player {
  constructor(
    public readonly playerId: string,
    private _nickname: Nickname,
  ) {}

  get nickname(): Nickname {
    return this._nickname;
  }
}
