import type { AuthenticatedPlayer } from "./authenticated-player.interface";

export interface PlayerAuthenticationViewModel {
  status: "AWAITING_AUTHORIZATION" | "LOADING_PLAYER" | "AUTHENTICATED" | "UNREGISTERED";
  authenticatedPlayer: AuthenticatedPlayer | null;
}
