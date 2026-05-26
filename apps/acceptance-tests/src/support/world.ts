import {
  type IWorldOptions,
  setWorldConstructor,
  World,
} from '@cucumber/cucumber';
import type { Resettable } from './contexts/resettable.interface.js';

export class GamePlatformBackendWorld extends World {
  contexts: Resettable[] = [];

  constructor(options: IWorldOptions) {
    super(options);
    this.contexts = [];
  }

  async reset(): Promise<void> {
    for (const ctx of this.contexts) {
      await ctx.reset();
    }
  }
}

setWorldConstructor(GamePlatformBackendWorld);
