import type { PlayerAuthenticationViewModel } from "player-interface-adapters/view-models";
import { PiniaViewModelPublisher } from "shared-infrastructure";
import { usePlayerAuthenticationStore } from "../stores/player-authentication.store";

export const usePlayerAuthenticationViewModelPublisher =
  (): PiniaViewModelPublisher<PlayerAuthenticationViewModel> => {
    const playerAuthenticationStore = usePlayerAuthenticationStore();
    return new PiniaViewModelPublisher<PlayerAuthenticationViewModel>(
      playerAuthenticationStore,
    );
  };
