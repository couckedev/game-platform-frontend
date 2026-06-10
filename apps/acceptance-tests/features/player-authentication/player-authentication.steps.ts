import { Given, Then, When } from "@cucumber/cucumber";
import type { GamePlatformFrontendWorld } from "../../support/world";
import assert from "node:assert";
import { Player } from "player-domain/entities";
import { Nickname } from "player-domain/value-objects";

Given<GamePlatformFrontendWorld>(
  "a user is authenticated with external account",
  function () {
    this.playerContext.externalAccountId = "external-account-id";
  },
);

Given<GamePlatformFrontendWorld>("user is not registered yet", function () {
  this.playerContext.playerRepository.authenticatedPlayer = null;
});

Given<GamePlatformFrontendWorld>(
  "a player is associated with the authenticated external account",
  function () {
    const playerId = "playerId";
    const nickname = Nickname.rehydrate("nickname");
    this.playerContext.playerRepository.authenticatedPlayer = new Player(
      playerId,
      nickname,
    );
  },
);

When<GamePlatformFrontendWorld>(
  "player authentication is requested",
  async function () {
    await this.playerContext.authenticatePlayer();
  },
);

Then<GamePlatformFrontendWorld>(
  "the authentication status will be {string}",
  function (expectedStatus: string) {
    assert(
      this.playerContext.playerAuthenticationViewModelPublisher.viewModel
        ?.status === expectedStatus,
      "Current authentication status is wrong",
    );
  },
);

Then<GamePlatformFrontendWorld>(
  "the player will be authenticated",
  function () {
    assert(
      this.playerContext.playerAuthenticationViewModelPublisher.viewModel
        ?.status === "AUTHENTICATED",
      "Current authentication status is wrong",
    );
    const viewModel =
      this.playerContext.playerAuthenticationViewModelPublisher.viewModel;
    assert(
      viewModel.authenticatedPlayer !== null,
      "Player is not authenticated",
    );
  },
);
