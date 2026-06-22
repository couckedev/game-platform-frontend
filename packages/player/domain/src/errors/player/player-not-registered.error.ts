import { PlayerRejectionReason } from './player-rejection-reason.js';

export class PlayerNotRegisteredError extends Error {
  readonly name = PlayerNotRegisteredError.name;
  readonly reason = PlayerRejectionReason.NotRegistered;

  constructor() {
    super('Player is not registered');
  }
}
