import type { AuthenticatePlayerController } from "player-interface-adapters/controllers";
import type { usePlayerAuthenticationStore } from "../stores/player-authentication.store";

export interface PlayerModule {
  authenticationStore: ReturnType<typeof usePlayerAuthenticationStore>;
  authenticatePlayerController: AuthenticatePlayerController;
}
