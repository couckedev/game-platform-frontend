import {
  type IWorldOptions,
  setWorldConstructor,
  World,
} from '@cucumber/cucumber';
import { PlayerContext } from '@player/infrastructure/cucumber';
import {
  type Resettable,
  SharedContext,
} from '@shared/infrastructure/cucumber';

export class GamePlatformFrontendWorld extends World {
  contexts: Resettable[] = [];
  public readonly playerContext: PlayerContext;
  public readonly sharedContext: SharedContext;

  constructor(options: IWorldOptions) {
    super(options);
    this.sharedContext = new SharedContext();
    this.playerContext = new PlayerContext(this.sharedContext.identityProvider);
    this.contexts.push(this.playerContext);
  }

  async reset(): Promise<void> {
    for (const ctx of this.contexts) {
      await ctx.reset();
    }
  }
}

setWorldConstructor(GamePlatformFrontendWorld);
