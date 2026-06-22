import {
  type IWorldOptions,
  setWorldConstructor,
  World,
} from '@cucumber/cucumber';
import { PlayerContext } from './contexts/player.context.js';
import type { Resettable } from './contexts/resettable.interface.js';
import { SharedContext } from './contexts/shared.context.js';

export class GamePlatformFrontendWorld extends World {
  contexts: Resettable[] = [];
  public readonly sharedContext: SharedContext;
  public readonly playerContext: PlayerContext;

  constructor(options: IWorldOptions) {
    super(options);
    this.sharedContext = new SharedContext();
    this.playerContext = new PlayerContext(this.sharedContext);
    this.contexts.push(this.playerContext);
  }

  async reset(): Promise<void> {
    for (const ctx of this.contexts) {
      await ctx.reset();
    }
  }
}

setWorldConstructor(GamePlatformFrontendWorld);
