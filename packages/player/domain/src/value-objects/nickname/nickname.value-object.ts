export class Nickname {
  private constructor(public readonly value: string) {}

  static create(nickname: string): Nickname {
    return new Nickname(nickname);
  }

  static rehydrate(nickname: string): Nickname {
    return new Nickname(nickname);
  }
}
