import type { Resettable } from "./resettable.interface";

export class PlayerContext implements Resettable {
  externalAccountId: string | null = null;


  constructor() {
    this.reset();
  }

  reset(): void {}
}
