export class Nickname {
  private constructor(public readonly value: string) {}
  static fromPersistence(value: string): Nickname {
    return new Nickname(value);
  }
}
