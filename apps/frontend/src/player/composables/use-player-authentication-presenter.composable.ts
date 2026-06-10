import { PlayerAuthenticationPresenter } from "player-interface-adapters/presenters";
import { usePlayerAuthenticationViewModelPublisher } from "./use-player-authentication-view-model-publisher.composable";

export const usePlayerAuthenticationPresenter =
  (): PlayerAuthenticationPresenter => {
    const viewModelPublisher = usePlayerAuthenticationViewModelPublisher();
    return new PlayerAuthenticationPresenter(viewModelPublisher);
  };
