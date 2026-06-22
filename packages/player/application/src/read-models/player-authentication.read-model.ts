export type PlayerAuthenticationReadModel =
  | {
      status: 'AUTHENTICATED';
      currentPlayer: {
        nickname: string;
        playerId: string;
      };
    }
  | {
      status: 'UNKNOWN';
      currentPlayer: null;
    };
