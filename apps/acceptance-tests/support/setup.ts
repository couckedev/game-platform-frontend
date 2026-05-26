import type { GamePlatformFrontendWorld } from "./world";

export async function setupApp(this: GamePlatformFrontendWorld): Promise<void> {
    await this.reset();
}