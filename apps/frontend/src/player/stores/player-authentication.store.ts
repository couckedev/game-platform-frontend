import { defineStore } from "pinia";
import type { PlayerAuthenticationViewModel } from "player-interface-adapters/view-models";

export const usePlayerAuthenticationStore = defineStore(
  "player_authentication",
  {
    state: (): PlayerAuthenticationViewModel => ({
      status: "AWAITING_AUTHORIZATION",
      authenticatedPlayer: null,
    }),
  },
);
