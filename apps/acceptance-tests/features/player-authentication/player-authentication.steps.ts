import assert from 'node:assert';
import { Given, Then, When } from '@cucumber/cucumber';
import type { GamePlatformFrontendWorld } from '../../support/world.js';

Given<GamePlatformFrontendWorld>(
  'user is authenticated with an external account',
  function () {
    this.sharedContext.authenticateUser();
  },
);

Given<GamePlatformFrontendWorld>(
  'player exists on game platform for this user',
  function () {
    this.playerContext.setCurrentPlayer('nickname', 'player-id');
  },
);

When<GamePlatformFrontendWorld>(
  'player authentication is requested',
  async function () {
    await this.playerContext.requestAuthentication();
  },
);

Then<GamePlatformFrontendWorld>('current player will be updated', function () {
  assert.deepStrictEqual(this.playerContext.currentPlayerStore.viewModel, {
    status: 'AUTHENTICATED',
    currentPlayer: {
      nickname: this.playerContext.currentPlayer.nickname,
      playerId: this.playerContext.currentPlayer.playerId,
    },
  });
});
