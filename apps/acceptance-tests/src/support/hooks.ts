import { Before } from '@cucumber/cucumber';
import { setupApp } from './setup.js';
import type { GamePlatformBackendWorld } from './world.js';

Before(async function (this: GamePlatformBackendWorld) {
  await setupApp.call(this);
});
