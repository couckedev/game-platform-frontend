import { Nickname, Player, PlayerId } from '@player/infrastructure';
import type { PlayerPublic } from '@player/infrastructure/testing';
import type { SharedTesting } from '@shared/infrastructure/testing';
import { beforeAll, describe, expect, it } from 'vitest';
import { bootstrapAcceptanceTestsApplication } from '../bootstrap-acceptance-tests-application';

describe('Player authentication', () => {
  let playerPublic: PlayerPublic;
  let sharedTesting: SharedTesting;

  beforeAll(() => {
    const bootstrap = bootstrapAcceptanceTestsApplication();
    playerPublic = bootstrap.playerPublic;
    sharedTesting = bootstrap.sharedTesting;
  });

  it('authenticates an existing player', async () => {
    sharedTesting.setUserAsAuthenticated();
    playerPublic.setCurrentPlayer(
      new Player(
        PlayerId.fromPersistence('player-id'),
        Nickname.fromPersistence('nickname'),
      ),
    );

    await playerPublic.features.authenticatePlayer();

    expect(playerPublic.viewModels.authenticationStatus.get()).toStrictEqual({
      isLoading: false,
      isAuthenticated: true,
    });
  });

  it('handles an unauthenticated user', async () => {
    sharedTesting.setUserAsUnauthenticated();

    await playerPublic.features.authenticatePlayer();

    expect(playerPublic.viewModels.authenticationStatus.get()).toStrictEqual({
      isLoading: false,
      isAuthenticated: false,
    });
  });
});
