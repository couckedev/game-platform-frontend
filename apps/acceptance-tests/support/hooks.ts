import { Before } from "@cucumber/cucumber";
import { setupApp } from "./setup";
import type { GamePlatformBackendWorld } from "./world";

Before(async function (this: GamePlatformBackendWorld) {
  await setupApp.call(this);
});