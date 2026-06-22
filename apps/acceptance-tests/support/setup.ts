import type { GamePlatformFrontendWorld } from './world.js';

export async function setupApp(this: GamePlatformFrontendWorld): Promise<void> {
  await this.reset();
}
