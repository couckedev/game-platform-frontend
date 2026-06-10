import type { AuthenticatePlayerResponseModel } from "player-application/use-cases";
import type { ViewModelPublisherPort } from "shared-interface-adapters";
import type { OutputPort } from "shared-application";
import type { PlayerAuthenticationViewModel } from "../view-models/player-authentication/player-authentication.view-model";

export class PlayerAuthenticationPresenter implements OutputPort {
  constructor(protected readonly viewModelPublisher: ViewModelPublisherPort<PlayerAuthenticationViewModel>) {}

  present(responseModel: AuthenticatePlayerResponseModel): void {
    const authenticatedPlayer =
      responseModel.status === "AUTHENTICATED"
        ? responseModel.authenticatedPlayer
        : null;
        
    this.viewModelPublisher.publish({
      status: responseModel.status,
      authenticatedPlayer,
    });
  }
}