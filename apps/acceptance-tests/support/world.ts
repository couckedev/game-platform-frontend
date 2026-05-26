import {
  World,
  setWorldConstructor,
  type IWorldOptions,
} from "@cucumber/cucumber";
import { PlayerContext } from "./contexts/player.context";
import type { Resettable } from "./contexts/resettable.interface";

export class GamePlatformFrontendWorld extends World {
  _playerContext: PlayerContext | null = null;
  contexts: Resettable[] = [];

  constructor(options: IWorldOptions) {
    super(options);
    this.initPlayerContext();
    this.contexts = [this.playerContext];
  }

  initPlayerContext(): void {
    this._playerContext = new PlayerContext();
  }

  get playerContext(): PlayerContext {
    if (this._playerContext === null) {
      throw new Error("playerContext must be initialized before using it");
    }
    return this._playerContext;
  }

  async reset(): Promise<void> {
    for (const ctx of this.contexts) {
      await ctx.reset();
    }
  }
}

setWorldConstructor(GamePlatformFrontendWorld);
