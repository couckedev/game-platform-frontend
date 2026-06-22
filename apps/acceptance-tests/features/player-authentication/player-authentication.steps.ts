import assert from 'node:assert';
import { Given, Then, When } from '@cucumber/cucumber';
import { Player } from '@player/domain';
import type { GamePlatformFrontendWorld } from '../../support/world.js';

Given<GamePlatformFrontendWorld>(
  'user is authenticated with an external account',
  function () {
    this.playerContext.providedExternalAccountId =
      'current-external-account-id';
  },
);

Given<GamePlatformFrontendWorld>(
  'player exists on game platform for this user',
  function () {
    this.playerContext.setCurrentPlayer(new Player('player-id', 'nickname'));
  },
);

When<GamePlatformFrontendWorld>(
  'player authentication is requested',
  function () {
    this.playerContext.requestAuthentication();
  },
);

Then<GamePlatformFrontendWorld>('player will be authenticated', function () {
  assert.deepStrictEqual(this.playerContext.playerStore.playerAuthentication, {
    status: 'AUTHENTICATED',
    currentPlayer: {
      nickname: this.playerContext.currentPlayer.nickname,
      playerId: this.playerContext.currentPlayer.playerId,
    },
  });
});
