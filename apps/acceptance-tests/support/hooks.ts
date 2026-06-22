import { Before } from '@cucumber/cucumber';
import { setupApp } from './setup.js';
import type { GamePlatformFrontendWorld } from './world.js';

Before(async function (this: GamePlatformFrontendWorld) {
  await setupApp.call(this);
});
