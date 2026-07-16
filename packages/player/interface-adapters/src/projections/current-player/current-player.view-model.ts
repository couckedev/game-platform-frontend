export type CurrentPlayerViewModel =
  | { currentPlayer: null }
  | { currentPlayer: { nickname: string; playerId: string } };
