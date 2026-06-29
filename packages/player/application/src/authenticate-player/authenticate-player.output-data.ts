export type AuthenticatePlayerOutputData =
  | {
      status: 'AUTHENTICATED';
      currentPlayer: {
        nickname: string;
        playerId: string;
      };
    }
  | {
      status: 'UNAUTHENTICATED';
      currentPlayer: null;
    };
