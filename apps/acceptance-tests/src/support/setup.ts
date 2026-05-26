import type { GamePlatformBackendWorld } from './world.js';

export async function setupApp(this: GamePlatformBackendWorld): Promise<void> {
  await this.reset();
}
