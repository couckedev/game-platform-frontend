import assert from 'node:assert';
import { Given, Then, When } from '@cucumber/cucumber';
import type { GamePlatformFrontendWorld } from '../../support/world.js';

Given<GamePlatformFrontendWorld>(
  'user is authenticated with an external account',
  function () {
    this.sharedContext.loginUser();
  },
);

Given<GamePlatformFrontendWorld>(
  'player exists on game platform for this user',
  function () {
    this.playerContext.setCurrentPlayer('nickname', 'player-id');
  },
);

Given<GamePlatformFrontendWorld>(
  'no player exists on game platform for this user',
  () => {
    return;
  },
);

When<GamePlatformFrontendWorld>(
  'player authentication is requested',
  async function () {
    await this.playerContext.authenticate();
  },
);

Then<GamePlatformFrontendWorld>('current player will be updated', function () {
  assert(
    this.playerContext.currentPlayer !== null,
    'Current player has not been set in player repository',
  );
  assert.deepStrictEqual(this.playerContext.currentPlayerViewModel, {
    currentPlayer: {
      nickname: this.playerContext.currentPlayer.nickname,
      playerId: this.playerContext.currentPlayer.playerId,
    },
  });
});

Then<GamePlatformFrontendWorld>(
  'authentication status will be updated',
  function () {
    assert(
      this.playerContext.currentPlayer !== null,
      'Current player has not been set in player repository',
    );
    assert.deepStrictEqual(this.playerContext.authenticationStatusViewModel, {
      isAuthenticated: true,
      isRegistered: true,
    });
  },
);
