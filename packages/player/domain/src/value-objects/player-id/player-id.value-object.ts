export class PlayerId {
  private constructor(public readonly value: string) {}
  static fromPersistence(value: string): PlayerId {
    return new PlayerId(value);
  }
}
