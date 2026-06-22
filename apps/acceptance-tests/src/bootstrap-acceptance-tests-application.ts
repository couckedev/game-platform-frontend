import { createPlayerTesting } from '@player/infrastructure/testing';
import { createSharedTesting } from '@shared/infrastructure/testing';

export function bootstrapAcceptanceTestsApplication() {
  const sharedTesting = createSharedTesting();
  const { playerPublic } = createPlayerTesting({ ...sharedTesting.runtime });

  return { sharedTesting, playerPublic };
}
