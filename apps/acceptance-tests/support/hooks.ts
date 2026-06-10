import { Before } from "@cucumber/cucumber";
import { setupApp } from "./setup";
import type { GamePlatformFrontendWorld } from "./world";

Before(async function (this: GamePlatformFrontendWorld) {
  await setupApp.call(this);
});