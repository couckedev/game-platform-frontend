import { BusinessError } from "@couckedev/ddd-core";
import { PlayerRejectionReason } from "./player-rejection-reason";

export class PlayerNotFoundError extends BusinessError {
  readonly code = PlayerRejectionReason.NotFound;

  constructor() {
    super('User is not registered on platform yet')
  }
}
