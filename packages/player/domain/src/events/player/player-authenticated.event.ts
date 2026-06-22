export class PlayerAuthenticatedEvent {
  readonly name = PlayerAuthenticatedEvent.name;

  constructor(
    public readonly playerId: string,
    public readonly nickname: string,
  ) {}
}
