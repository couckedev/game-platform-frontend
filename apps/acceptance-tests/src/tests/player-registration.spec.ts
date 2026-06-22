import type { PlayerTestingModule } from '@player/infrastructure/testing';
import { beforeEach, describe, expect, it } from 'vitest';
import { bootstrapAcceptanceTestsApplication } from '../bootstrap-acceptance-tests-application';

describe('Player registration', () => {
  let playerTestingModule: PlayerTestingModule;

  beforeEach(() => {
    const bootstrap = bootstrapAcceptanceTestsApplication();
    playerTestingModule = bootstrap.playerTestingModule;
  });

  it('registers new player', async () => {
    const nickname = 'nickname';

    await playerTestingModule.registerPlayer(nickname);

    expect(playerTestingModule.getPlayerRegistration()).toStrictEqual({
      status: 'REGISTERED',
    });
  });
});
