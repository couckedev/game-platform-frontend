import {
  PlayerAuthenticatedEvent,
  type PlayerEvent,
} from '../../events/index.js';

export class Player {
  private _pendingEvents: PlayerEvent[] = [];

  constructor(
    public readonly playerId: string,
    public readonly nickname: string,
  ) {}

  markAsAuthenticated(): void {
    this._pendingEvents.push(
      new PlayerAuthenticatedEvent(this.playerId, this.nickname),
    );
  }

  get pendingEvents(): PlayerEvent[] {
    return [...this._pendingEvents];
  }

  commitEvents(): void {
    this._pendingEvents.length = 0;
  }
}
